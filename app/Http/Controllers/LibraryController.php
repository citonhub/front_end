<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Shelve;
use App\ShelvePost;
use App\Post;
use App\Events\UserChannel;
use DB;
use App\Events\PostChannel;
use App\Notification;
use Illuminate\Support\Facades\Auth;
use App\PushNotification;
use App\CustomClass\Curler;
use App\CustomClass\MetaParser;
use App\traits\PushNotificationTrait;
use App\User;

class LibraryController extends Controller
{
   use PushNotificationTrait;
    public function saveShelve(Request $request){
       $newshelve = Shelve::create([
          "user_id" => Auth::id(),
          "shelve_id"=> $this->generateRandomNumber(15),
          "name"=> $request->get('shelveName')
       ]);

       $newshelve->save();

       return ['status','ok'];
    }

    public function fetchShelves(){
       
        $allShelves = Shelve::where('user_id',Auth::id())->get();

        return $allShelves;
    }


    public function userAllConnected(){
      
        $userConnections = DB::table('user_connections')
        ->join('users','users.id','user_connections.connected_user_id')
        ->join('profiles','profiles.user_id','user_connections.connected_user_id')
        ->select(
          'users.username as username'
        )
        ->where('user_connections.user_id',Auth::id())
        ->get();
  
       return $userConnections;  
  
      }

    public function addPostToShelve(Request $request){

         $shelvePost = ShelvePost::where('user_id',Auth::id())->where('post_id', $request->get('post_id'))->get();

          if($shelvePost->isEmpty()){
            $shelvePost = ShelvePost::create([
                "shelve_id" => $request->get('shelve_id'),
                "post_id"=> $request->get('post_id'),
                "user_id"=> Auth::id()
              ]);
      
      
      
              $shelvePost->save();
      
              $post = Post::where('post_id',$request->get('post_id'))->first();
      
               $postPulls = $post->pulls + 1;
      
               $post->update([
                   "pulls"=> $postPulls
               ]);

               if($post->is_comment == 'true' && $post->is_reply == null){
           
                $this->postNotification($request->get('post_id'),'post_comment_pulled');
    
             }
    
             if($post->is_comment == 'true' && $post->is_reply == 'true'){
               
                $this->postNotification($request->get('post_id'),'post_reply_pulled');
    
             }
    
             if($post->is_comment != 'true'){
               
                $this->postNotification($request->get('post_id'),'post_pulled');
    
             }
          } 


         

        
        
          broadcast(new PostChannel('post-pulled',$shelvePost->post_id,$post->post_id))->toOthers();

          broadcast(new PostChannel('post-comment-pulled',$shelvePost->post_id,$post->commented_post_id))->toOthers();

        return ['status','ok'];
    }



    public function postNotification($basePostId,$type){
       
      $commentedPost  = Post::where('post_id', $basePostId)->first();
            
      $userData = DB::table('profiles')
               ->join('users','users.id','profiles.user_id')
               ->select(
                   'users.username as username',
                   'profiles.image_name as image_name',
                   'profiles.user_id as id',
                   'profiles.image_extension as image_extension' ,
                   'profiles.background_color as background_color'
               )
               ->where('user_id',Auth::id())
               ->first();

               $postContent = '';

               if($commentedPost->content == '<p></p>'){
                 $postContent = 'A post with '+ $commentedPost->attachment_type + ' attached';
               }else{
                 
                 $html = new \Html2Text\Html2Text($commentedPost->content);
                 $postContent =  $html->getText();
               }
     
               if($userData->background_color == null){
                  $imagePathPost = '/imgs/usernew.png';
               }else{
                 $imagePathPost = '/imgs/profile/' . $userData->image_name . '.' . $userData->image_extension;
               }

               $baseUrl = '';
        
          $postOwner = User::where('id',$commentedPost->user_id)->first();

          if($type == 'post_like' || $type == 'post_comment' || $type == 'post_pulled'){
            $baseUrl = '/home#/post/' . $postOwner->username . '/'.  $commentedPost->post_id . '/user';
          }else{
            $baseUrl = '/home#/post/comment/' . $postOwner->username . '/'.  $commentedPost->post_id . '/user';
          }
     
               $notificationPayload = [
                  "owner_id" => $commentedPost->user_id,
                  "name"=> $userData->username,
                  "body"=> $postContent,
                  "tag"=> $basePostId . $type,
                  "type"=> $type,
                  "image"=> $imagePathPost,
                  "url"=> $baseUrl
     
                ];
            
                if($commentedPost->user_id != Auth::id()){
           
                  $this->triggerNotification($notificationPayload);
                  
                 }
        
        $userDataArray = [];
     

        array_push($userDataArray,$userData);
         
        $userDataArray = serialize($userDataArray);

     $checkPostNotification = Notification::where('user_id',$commentedPost->user_id)
     ->where('type',$type)->where('type_id',$basePostId)
     ->where('status','unread')->get();

     if($checkPostNotification->isEmpty()){
         
        if($commentedPost->user_id != Auth::id()){

           $newNotification = Notification::create([
             'user_id'=> $commentedPost->user_id,
             'type'=> $type,
             'data_array' => $userDataArray,
             'type_id'=> $basePostId,
             'status'=> 'unread'
           ]);
         
           $newNotification->save();


         }

     }else{
        
        $userArray = unserialize($checkPostNotification[0]->data_array);

         $userPresent = [];

        
         foreach ($userArray as $user) {
           if($user->id  == Auth::id()){
              array_push($userPresent,$user);
           }
         }

         if(count($userPresent) == 0){
            array_push($userArray,$userData);

            $checkPostNotification[0]->update([
             'data_array'=> serialize($userArray)
            ]);
         }

       

     }
   }


   public function triggerNotification($notificationPayload){
      
      $allNotification = PushNotification::where('user_id',$notificationPayload["owner_id"])->get();

    
     
      $payload = [
          "title"=> '',
          "body"=> $notificationPayload["body"],
          "badge" => "/imgs/CitonHub.svg",
          "vibrate"=> [1000,500,1000],
          "tag" => $notificationPayload["tag"],
          "icon" => $notificationPayload["image"],
          "image"=> $notificationPayload["image"],
          "requireInteraction"=> true,
          "data"=> [
             "type"=>$notificationPayload["type"],
             "name"=>$notificationPayload["name"],
             "url"=> $notificationPayload["url"]
          ]
      ];
  
      $defaultOption = [
          'TTL' => 2000000, // defaults to 4 weeks
          'urgency' => 'high', // protocol defaults to "normal"
          'topic' => 'CitonHub Notification', // not defined by default,
          'batchSize' => 10000, // defaults to 1000
      ];
       
      $this->generateNotification($allNotification,json_encode($payload));
       
      $this->sendNotification($defaultOption);

      $this->notificationReport();

  }


   public function generateRandomNumber($length = 10) {
    $characters = 'abcdefghijklmnopqrisuvwxyz1234567890';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }   
    return $randomString;
     }


}
