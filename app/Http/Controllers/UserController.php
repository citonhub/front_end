<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\traits\ManagesImages;
use App\Tutor;
use App\PushNotification;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Str;
use App\traits\PushNotificationTrait;
use App\Notification;
use App\Duel;
use App\Post;
use Carbon\Carbon;
use App\Project;
use App\Space;
use DB;

class UserController extends Controller
{
    use ManagesImages,PushNotificationTrait;

    public function __construct()
   {
       $this->setImageDefaultsFromConfig('profileImage');
     
   }

   public function generateRandomString($length = 10) {
    $characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';
    $charactersLength = strlen($characters);
    $randomString = '';
    for ($i = 0; $i < $length; $i++) {
        $randomString .= $characters[rand(0, $charactersLength - 1)];
    }
    return $randomString;
}

    public function checkIfMailExist(Request $request){   
        $useremail = User::where('email',$request->get('email'))->get();
        
        if($useremail->isEmpty()){
           
            return 'notExist';
        }else{
          
            return 'exist';
        }
    }

    public function verifyEmail(Request $request){
        $user = User::where('email',$request->get('email'))->first();

         if($user->verification_code == $request->get('code')){
            $user->update([
                'email_verified_at'=> Carbon::now()
            ]);
           return 'verified';
         }else{
             return 'notVerified';
         }
    }

    public function checkIfUsernameExist(Request $request){
        $users = User::where('username',$request->get('username'))->get();
        
        if($users->isEmpty()){

            $currentUser = User::where('email',$request->get('email'))->first();
            $currentUser->update([
                'username'=> $request->get('username')
            ]);

            return 'notExist';
        }else{
        
            return 'exist';
        }
    }

    public function saveSettings(Request $request){
         
        $user= Auth::user();
       
        if($request->file('image') != null){
            $randomstring= $this->generateRandomString(5);
            $user->update([
                'name'=> $request->get('name'),
                'autobio'=> $request->get('auto_bio'),
                'image_name'=> 'user_image_'. $randomstring . Auth::id(),
                'image_extension'=> $request->file('image')->getClientOriginalExtension(),
              ]);
              $file = $this->getUploadedFile($request);
              // pass in the file and the model
              $this->saveImageFiles($file, $user); 
        } else{
            $user->update([
                'name'=> $request->get('name'),
                'autobio'=> $request->get('auto_bio'),

              ]);
        }
        
         
       return ['status','OK'];
    }
   
    public function MarkAsRead(){
        $allNotifications = Notification::where('user_id',Auth::id())->get();

        foreach ($allNotifications as $notification) {
            
            $notification->update([
           'status'=> 'read'
            ]);
        }
    }

    public function fetchUserNotifications(){

        $allNotifications = DB::table('notifications')->where('user_id',Auth::id())->where('type','!=','new_message')->orderBy('updated_at','desc')->paginate(2000);
                   

       

        $notificationArray = [];


        

        foreach ($allNotifications as $notification) {
            
            $newNotify = (array) $notification;

           

             $newNotify["dataArray"] = unserialize($newNotify["data_array"]);

            if($newNotify["type"] == 'post_comment_like'){
              
                $post = Post::where('post_id',$newNotify["type_id"])->first();
                 
             $newNotify["basePost"] = $post;
            }

            if($newNotify["type"] == 'post_comment_pulled'){
              
                $post = Post::where('post_id',$newNotify["type_id"])->first();
                 
             $newNotify["basePost"] = $post;
            }

            if($newNotify["type"] == 'post_reply_pulled'){
              
                $post = Post::where('post_id',$newNotify["type_id"])->first();
                 
             $newNotify["basePost"] = $post;
            }

            if($newNotify["type"] == 'post_pulled'){
              
                $post = Post::where('post_id',$newNotify["type_id"])->first();
                 
             $newNotify["basePost"] = $post;
            }


            if($newNotify["type"] == 'post_reply_like'){
              
                $post = Post::where('post_id',$newNotify["type_id"])->first();
                 
             $newNotify["basePost"] = $post;
            }


            if($newNotify["type"] == 'post_replied'){
              
                $post = Post::where('post_id',$newNotify["type_id"])->first();
                 
             $newNotify["basePost"] = $post;
            }

            if($newNotify["type"] == 'post_pulled'){
              
                $post = Post::where('post_id',$newNotify["type_id"])->first();
                 
             $newNotify["basePost"] = $post;
            }

            if($newNotify["type"] == 'post_comment_pulled'){
              
                $post = Post::where('post_id',$newNotify["type_id"])->first();
                 
             $newNotify["basePost"] = $post;
            }

            if($newNotify["type"] == 'post_like'){
              
                $post = Post::where('post_id',$newNotify["type_id"])->first();
                 
             $newNotify["basePost"] = $post;
            }

            if($newNotify["type"] == 'post_comment'){
              
                $post = Post::where('post_id',$newNotify["type_id"])->first();
                 
             $newNotify["basePost"] = $post;
            }

            if($newNotify["type"] == 'new_duel'){
              
              

                $userData = DB::table('profiles')
                ->join('users','users.id','profiles.user_id')
                ->select(
                    'users.username as username',
                    'profiles.image_name as image_name',
                    'profiles.user_id as id',
                    'profiles.image_extension as image_extension' ,
                    'profiles.background_color as background_color'
                )
                ->where('user_id',$newNotify["type_id"])
                ->first();

                $newNotify["duel_owner"] = $userData;
            }

            if($newNotify["type"] == 'duel_like'){
              
                $duel = Duel::where('duel_id',$newNotify["type_id"])->first();
                $newNotify["duel_data"] = $duel;
            }

            if($newNotify["type"] == 'duel_comment'){
              
                $duel = Duel::where('duel_id',$newNotify["type_id"])->first();
                $newNotify["duel_data"] = $duel;
            }

            if($newNotify["type"] == 'duel_join'){
              
                $duel = Duel::where('duel_id',$newNotify["type_id"])->first();
                $newNotify["duel_data"] = $duel;
            }

            if($newNotify["type"] == 'new_project_comment'){
              
                $project = Project::where('project_slug',$newNotify["type_id"])->first();

                $newNotify["project_data"] = $project;
            }

            if($newNotify["type"] == 'new_message'){
              
                $space = Space::where('space_id',$newNotify["type_id"])->first();

                $newNotify["space"] = $space;
            }

            
            
            array_push($notificationArray,$newNotify);
        }

    return $notificationArray;

    }

   
   
    

    public function SaveNotification(Request $request){
          
    $notificationUser = PushNotification::where('user_id',Auth::id())->first();

       if($notificationUser != null){

        $notificationUser = PushNotification::where('user_id',Auth::id())->where('public_key',$request->get('public_key'))->first();

         if($notificationUser == null){


            $newnotification = PushNotification::create([
                'user_id'=> Auth::id(),
                'endpoint'=> $request->get('endpoint'),
                'public_key'=> $request->get('public_key'),
                'auth_token'=> $request->get('auth_token')
              ]);
       
              $newnotification->save();
           }

         
       }else{
           
        $newnotification = PushNotification::create([
            'user_id'=> Auth::id(),
            'endpoint'=> $request->get('endpoint'),
            'public_key'=> $request->get('public_key'),
            'auth_token'=> $request->get('auth_token')
          ]);
   
          $newnotification->save();
       }

       return ['status','OK'];
    }
}
