<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\PostLike;
use App\PostComment;
use App\PostPull;
use Illuminate\Support\Facades\Auth;
use App\PostImage;
use App\PostCode;
use App\PostVideo;
use App\PostLink;
use ColorThief\ColorThief;
use App\traits\ManagesImages;
use App\ShelvePost;
use DB;
use App\Profile;
use App\Events\UserChannel;
use App\traits\PushNotificationTrait;
use App\Events\PostChannel;
use App\PushNotification;
use App\Notification;
use App\CustomClass\Curler;
use App\CustomClass\MetaParser;
use Monolog\Handler\StreamHandler;
use Monolog\Logger;
use Response;
use Streaming\Representation;
use Streaming\FFMpeg;
use App\Jobs\HandleNotification;
use App\User;

class PostController extends Controller
{
   use ManagesImages;

   public function __construct()
   {
       $this->setImageDefaultsFromConfig('postImage');
     
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

   public function likePost(Request $request){
      $presentPost = Post::where('post_id',$request->get('post_id'))->first();

       $userPostComment = PostLike::where('post_id',$request->get('post_id'))->where('user_id',Auth::id())->get();

         if($userPostComment->isEmpty()){

            $postLikeData = PostLike::create([
               "post_id" => $request->get('post_id'),
               "user_id" => Auth::id()
             ]);
       
              $postLikeData->save();
       
             $postLikes = $presentPost->likes + 1;
       
             $presentPost->update([
            'likes'=> $postLikes
             ]);

            

         }

         if($presentPost->is_comment == 'true' && $presentPost->is_reply == null){
           
            $this->postNotification($request->get('post_id'),'post_comment_like');

         }

         if($presentPost->is_comment == 'true' && $presentPost->is_reply == 'true'){
           
            $this->postNotification($request->get('post_id'),'post_reply_like');

         }

         if($presentPost->is_comment != 'true'){
           
            $this->postNotification($request->get('post_id'),'post_like');

         }
         
         
        

        broadcast(new PostChannel('post-like',$request->get('post_id'),$request->get('post_id')))->toOthers();

        broadcast(new PostChannel('post-comment-like',$presentPost->post_id,$presentPost->commented_post_id))->toOthers();

     
     
   }

   public function EachPost($postId){
      $posts = DB::table('posts')
         ->join('users','users.id','posts.user_id')
         ->select(
             'posts.post_id as PostId',
             'posts.id as id',
             'posts.comments as comments',
             'posts.pulls as pulls',
             'posts.likes as likes',
             'posts.attachment_type as attachment_type',
             'posts.content as content',
             'posts.is_comment as is_comment',
             'posts.is_reply as is_reply',
             'posts.commented_post_id as commented_post_id',
             'users.username as username',
             'posts.reply_post_id as reply_post_id',
             'posts.created_at as created_at'
           )
           ->where('posts.post_id',$postId)
         ->orderBy('created_at', 'desc')->paginate(10);
         $postArray = $this->postEngine($posts);

         return $postArray;
   }

   public function shelvePosts($shelveId){
      
      $posts = DB::table('shelve_posts')
      ->join('posts','posts.post_id','shelve_posts.post_id')
      ->join('users','users.id','posts.user_id')
      ->select(
          'posts.post_id as PostId',
          'posts.id as id',
          'posts.comments as comments',
          'posts.pulls as pulls',
          'posts.likes as likes',
          'posts.attachment_type as attachment_type',
          'posts.content as content',
          'posts.is_comment as is_comment',
          'posts.is_reply as is_reply',
          'posts.commented_post_id as commented_post_id',
          'users.username as username',
          'posts.reply_post_id as reply_post_id',
          'posts.created_at as created_at'
        )
       ->where('shelve_posts.shelve_id',$shelveId)
      ->orderBy('created_at', 'desc')->paginate(10);
      $postArray = $this->postEngine($posts);

      return $postArray;

   }


   public function postComments($postId){
       
      $posts = DB::table('posts')
      ->join('users','users.id','posts.user_id')
      ->select(
          'posts.post_id as PostId',
          'posts.id as id',
          'posts.comments as comments',
          'posts.pulls as pulls',
          'posts.likes as likes',
          'posts.attachment_type as attachment_type',
          'posts.content as content',
          'posts.is_comment as is_comment',
          'posts.is_reply as is_reply',
          'posts.commented_post_id as commented_post_id',
          'users.username as username',
          'posts.reply_post_id as reply_post_id',
          'posts.created_at as created_at'
        )
        ->where('posts.commented_post_id',$postId)
      ->orderBy('created_at', 'desc')->paginate(10);
      $postArray = $this->postEngine($posts);

      return $postArray;

   }

   public function fetchActivities($username){
     
      $user = User::where('username',$username)->first();
      $posts = DB::table('posts')
         ->join('users','users.id','posts.user_id')
         ->select(
             'posts.post_id as PostId',
             'posts.id as id',
             'posts.comments as comments',
             'posts.pulls as pulls',
             'posts.likes as likes',
             'posts.attachment_type as attachment_type',
             'posts.content as content',
             'posts.is_comment as is_comment',
             'posts.is_reply as is_reply',
             'posts.commented_post_id as commented_post_id',
             'users.username as username',
             'posts.reply_post_id as reply_post_id',
             'posts.created_at as created_at'
           )
         ->where('posts.is_reply',null)
         ->where('posts.user_id',$user->id)
         ->orderBy('created_at', 'desc')->paginate(10);
        
        
        $postArray = $this->postEngine($posts);

         return $postArray;
   }


   public function fetchPosts(){
        
             
         $posts = DB::table('posts')
         ->join('users','users.id','posts.user_id')
         ->select(
             'posts.post_id as PostId',
             'posts.id as id',
             'posts.comments as comments',
             'posts.pulls as pulls',
             'posts.likes as likes',
             'posts.attachment_type as attachment_type',
             'posts.content as content',
             'posts.is_comment as is_comment',
             'posts.is_reply as is_reply',
             'posts.commented_post_id as commented_post_id',
             'users.username as username',
             'posts.reply_post_id as reply_post_id',
             'posts.created_at as created_at'
           )
         ->where('posts.is_reply',null)
         ->orderBy('created_at', 'desc')->paginate(40);
        

        $postArray = $this->postEngine($posts);

         return $postArray;
     
   } 



   public function postEngine($postArray){

      $newPostArray = [];

      foreach ($postArray as $post) {
         
         $post = (array) $post;
         if($post["attachment_type"] == 'image'){
            
            $postImages = PostImage::where('post_id',$post["id"])->get();

            $post["image"] = $postImages;

         }

         if($post["attachment_type"] == 'video'){
            
            $postVideo = PostVideo::where('post_id',$post["id"])->first();

            $post["video"] = $postVideo;

         }

         if($post["attachment_type"] == 'code'){
            
            $postCode = PostCode::where('post_id',$post["id"])->first();

            $post["code"] = $postCode;

         }

         if($post["attachment_type"] == 'link'){
            
            $postLink = PostLink::where('post_id',$post["id"])->first();
               if($postLink != null){
                  $post["link"] =  unserialize($postLink->meta_data) ;
               }
         }

         if($post["is_comment"] == 'true'){
            
            $basePost = Post::where('post_id',$post["commented_post_id"])->first();
             $postReturned = $this->postSubEngine($basePost);
            $post["commented_post"] = $postReturned[0];

         }

       $userPostComment = PostLike::where('post_id',$post["PostId"])->where('user_id',Auth::id())->get();

         if($userPostComment->isEmpty()){
            
            $post["post_liked"] = false;

          }else{
            $post["post_liked"] = true;
          }

       $shelvePost = ShelvePost::where('user_id',Auth::id())->where('post_id', $post["PostId"])->get();
          
       if($shelvePost->isEmpty()){
            
         $post["post_pulled"] = false;

       }else{
         $post["post_pulled"] = true;
       }

       $user = User::where('username',$post["username"])->first();

       $userProfile = Profile::where('user_id',$user->id)->first();

       $post["userProfile"] = $userProfile;



         if($post["is_reply"] == 'true'){
            
            $baseComment = Post::where('post_id',$post["reply_post_id"])->first();

            $postReturnedReply = $this->postSubEngine($baseComment);
            $post["replied_post"] = $postReturnedReply[0];
         }

         array_push($newPostArray,$post);

      }
       
      
      return $newPostArray;
   }


   public function postSubEngine($post){
     
      $posts = DB::table('posts')
      ->join('users','users.id','posts.user_id')
      ->select(
          'posts.post_id as PostId',
          'posts.id as id',
          'posts.comments as comments',
          'posts.pulls as pulls',
          'posts.likes as likes',
          'posts.attachment_type as attachment_type',
          'posts.content as content',
          'posts.is_comment as is_comment',
          'posts.is_reply as is_reply',
          'posts.commented_post_id as commented_post_id',
          'users.username as username',
          'posts.reply_post_id as reply_post_id',
          'posts.created_at as created_at'
        )
      ->where('posts.post_id',$post->post_id)
      ->orderBy('created_at', 'desc')->paginate(10);
         
      $newPostArray = [];


      foreach ($posts as $post) {
          
         $post = (array) $post;

         if($post["attachment_type"] == 'image'){
               
            $postImages = PostImage::where('post_id',$post["id"])->get();
   
            $post["image"] = $postImages;
   
         }
   
         if($post["attachment_type"] == 'video'){
            
            $postVideo = PostVideo::where('post_id',$post["id"])->first();
   
            $post["video"] = $postVideo;
   
         }
   
         if($post["attachment_type"] == 'code'){
            
            $postCode = PostCode::where('post_id',$post["id"])->first();
   
            $post["code"] = $postCode;
   
         }

         if($post["attachment_type"] == 'link'){
            
            $postLink = PostLink::where('post_id',$post["id"])->first();
               if($postLink != null){
                  $post["link"] =  unserialize($postLink->meta_data) ;
               }
         }

         $userPostComment = PostLike::where('post_id',$post["PostId"])->where('user_id',Auth::id())->get();

         if($userPostComment->isEmpty()){
            
            $post["post_liked"] = false;

          }else{
            $post["post_liked"] = true;
          }

          $user = User::where('username',$post["username"])->first();

          $userProfile = Profile::where('user_id',$user->id)->first();
   
          $post["userProfile"] = $userProfile;
          

          $shelvePost = ShelvePost::where('user_id',Auth::id())->where('post_id', $post["PostId"])->get();
          
          if($shelvePost->isEmpty()){
               
            $post["post_pulled"] = false;
   
          }else{
            $post["post_pulled"] = true;
          }
   


         array_push($newPostArray,$post);
      }

    
       return $newPostArray;;

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

  public function savePostImgs($imageArray,$randomString,$newPostId){
       
    
     
   
        $number = 0;

   foreach ($imageArray as $image) {
             
      $number += 1;
      if($image != null){
            
         $ImageFile = $image[0];
         $type = $image[1];

         list($width, $height) = getimagesize($ImageFile);
      
         $imageName = 'post_image_'. $number . '_' . $randomString;

           if($type == null){
            $imageExtension = $ImageFile->getClientOriginalExtension();
           }else{
            $imageExtension = $type;
           }
        
      
         $newPostImage = PostImage::create([
           "post_id"=> $newPostId,
           "image_name"=> $imageName,
           "image_extension"=> $imageExtension,
           "background_color"=> "#c5c5c5"
         ]);
         $newPostImage->save();
      
         $file = $this->getUploadedFile($ImageFile);
         // pass in the file and the model
           $this->imgWidth = $width;
           $this->imgHeight = $height;
         $this->saveImageFiles($file,$newPostImage); 
      
         $imagePath = '/var/www/citonhubnew/public/imgs/posts/'. $imageName . '.' . $imageExtension;
             
         $dominantColor = ColorThief::getColor($imagePath);
           $colorToRGBA = 'rgba('. $dominantColor[0] . ',' . $dominantColor[1] . ',' . $dominantColor[2] . ',0.6)'; 
         $newPostImage->update([
            "background_color"=> $colorToRGBA
         ]);

        }
     }


        
  

  }


  public function createVideoDash($videoFile,$videoName){

   $config = [
      'ffmpeg.binaries'  => '/usr/bin/ffmpeg',
      'ffprobe.binaries' => '/usr/bin/ffprobe',
      'timeout'          => 3600, // The timeout for the underlying process
      'ffmpeg.threads'   => 12,   // The number of threads that FFmpeg should use
  ];
  
  $log = new Logger('FFmpeg_Streaming');
  $log->pushHandler(new StreamHandler('/var/www/citonhubnew/ffmpeg-streaming.log')); // path to log file

  $ffmpeg = FFMpeg::create($config, $log);

   $video = $ffmpeg->open($videoFile);

   $r_240p  = (new Representation)->setKiloBitrate(150)->setResize(426, 240);
   $r_360p  = (new Representation)->setKiloBitrate(276)->setResize(640, 360);
  
  
 

    $video->dash()
   ->setSegDuration(5) // Default value is 10 
   ->setAdaption('id=0,streams=v id=1,streams=a')
   ->x264()
   ->addRepresentations([$r_240p, $r_360p])
   ->save('/var/www/citonhubnew/public/videos/'.  $videoName .'.mpd');



 }

   public function savePost(Request $request){
        $attachment_type = $request->get('attachment_type');

        $randomString = $this->generateRandomNumber(15);
        
        $newPost = Post::create([
         "comments"=>0,
         "pulls"=>0,
         "likes"=>0,
         "attachment_type"=> $request->get('attachment_type'),
         "content"=> $request->get('content'),
         "user_id"=> Auth::id(),
         "post_id"=> $randomString,
         "is_comment"=> $request->get('is_comment'),
         "commented_post_id"=> $request->get('commented_post_id'),
      ]);

     
 
      $newPost->save();

       if($request->get('is_comment')  == 'true'){

         
         $postCommentData = PostComment::create([
            "post_id" => $request->get('commented_post_id'),
            "user_id" => Auth::id()
          ]);
    
           $postCommentData->save();

          
         $basePost = Post::where('post_id',$request->get('commented_post_id'))->first();

           $basePostComments = $basePost->comments + 1;
          
           $basePost->update([
            "comments"=> $basePostComments
           ]);
            
       }

      if($request->get('is_reply') != null){
         $newPost->update([
            "is_reply"=> $request->get('is_reply'),
         "reply_post_id"=> $request->get('reply_post_id'),
         ]);
      }
   

      if($attachment_type == 'link'){

         $newMetaData =  $request->get('urlMetaData');
         $array = json_decode($newMetaData, true);
        $newPostLink = PostLink::create([
           'post_id'=>$newPost->id,
           'meta_data'=> serialize($array)
        ]); 
        
        $newPostLink->save();
       
         
       }
       

       if($attachment_type == 'image'){
             
         $imageArray =[];

              if($request->file('image1') != null){
               
               $imageArray["image1"] = [$request->file('image1'),$request->get('imageType1')];
              }

              if($request->file('image2') != null){
               
               $imageArray["image2"] = [$request->file('image2'),$request->get('imageType2')];
              }

              if($request->file('image3') != null){
               
               $imageArray["image3"] = [$request->file('image3'),$request->get('imageType3')];
              }

              if($request->file('image4') != null){
               
               $imageArray["image4"] = [$request->file('image4'),$request->get('imageType4')];
              }
   
           $this->savePostImgs($imageArray,$randomString,$newPost->id);            
       }

       if($attachment_type == 'video'){
        
         $file = $request->file('video');
         $ffmpeg = FFMpeg::create();
        $video = $ffmpeg->open($file);
       
        $videoName = 'post_video_'. $randomString ;


        $video
        ->frame(\FFMpeg\Coordinate\TimeCode::fromSeconds(10))
        ->save('/var/www/citonhubnew/public/videos/previewImage/'. $videoName . '.jpg');

      

        $videoExtension =  $request->file('video')->getClientOriginalExtension();
      
        $location = '/var/www/citonhubnew/public/videos/';
              
        $file = $request->file('video');
        $this->createVideoDash($file,$videoName);

       


        $newPostVideo = PostVideo::create([
          "video_extension"=> 'mpd',
          "video_name"=> $videoName,
          "preview_image_url"=> $videoName . '.jpg',
          "post_id"=> $newPost->id,
          "background_color"=> '#c5c5c5' 
        ]);

        $newPostVideo->save();

       $imagePath = '/var/www/citonhubnew/public/videos/previewImage/'. $videoName . '.' . 'jpg';

       $dominantColor = ColorThief::getColor($imagePath);
         $colorToRGBA = 'rgba('. $dominantColor[0] . ',' . $dominantColor[1] . ',' . $dominantColor[2] . ',0.6)'; 
       $newPostVideo->update([
          "background_color"=> $colorToRGBA
       ]);


        }


        if($attachment_type == 'code'){
        
         $newPostCode = PostCode::create([
           "name"=> $request->get('file_name'),
           "language_type"=> $request->get('language_type'),
           "content"=> $request->get('code'),
           "post_id"=> $newPost->id
         ]);

         $newPostCode->save();

        }


        $newPostData = $this->EachPost($newPost->post_id);

        if($request->get('is_comment')  == 'true'){

         


         broadcast(new PostChannel('new-comment-post',$newPostData[0],$request->get('commented_post_id')))->toOthers();

         broadcast(new PostChannel('post-comment',$request->get('commented_post_id'),$request->get('commented_post_id')))->toOthers();
         

         if($request->get('is_reply') == null){

            
         $this->postNotification($request->get('commented_post_id'),'post_comment');
           
            $allConnections = $this->userAllConnected();

           foreach($allConnections as $user){

            broadcast(new UserChannel('new-post',$newPostData[0],$user->username));

           }

         }else{

            $this->postNotification($request->get('reply_post_id'),'post_replied');
         }
         
        
           
        }else{

         $allConnections = $this->userAllConnected();

         foreach($allConnections as $user){

            broadcast(new UserChannel('new-post',$newPostData[0],$user->username));
         }

         
        }


      return $newPostData;
   }


   public function postNotification($basePostId,$type){
       
      $commentedPost  = Post::where('post_id', $basePostId)->first();


      
            
      $userData = DB::table('profiles')
               ->join('users','users.id','profiles.user_id')
               ->select(
                   'users.username as username',
                   'profiles.image_name as image_name',
                   'profiles.user_id as id',
                   'profiles.image_extension as image_extension',
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
            $baseUrl = '/hub#/post/' . $postOwner->username . '/'.  $commentedPost->post_id . '/user';
          }else{
            $baseUrl = '/hub#/post/comment/' . $postOwner->username . '/'.  $commentedPost->post_id . '/user';
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
           

            dispatch(new HandleNotification($notificationPayload,'post'));

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


 
}
