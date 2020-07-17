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
use Carbon\Carbon;
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
    public function userDetails(){
        $rows = DB::table('users')->where('id',Auth::id())
       ->paginate(1);
       return $rows;
    }

    public function userInterests(){
        $rows = DB::table('user_interests')->where('user_id',Auth::id())
       ->paginate(4);
       return $rows;
    }
    public function saveTutorDetails(Request $request){
        $tutordetails = Tutor::where('user_id',Auth::id())->first();
        if($tutordetails == null){
            $tutor = Tutor::create([
                'profession'=> $request->get('profession'),
                'about'=> $request->get('about'),
                'user_id'=> Auth::id(),
                'twitter_handle'=> $request->get('twitter'),
                'git_repo'=> $request->get('gitrepo'),
                'linkedin_link'=>$request->get('linkedlink'),
                'ratings'=>10
              ]);
              $tutor->save();
        }else{
            $tutordetails->update([
                'profession'=> $request->get('profession'),
                'about'=> $request->get('about'),
                'user_id'=> Auth::id(),
                'twitter_handle'=> $request->get('twitter'),
                'git_repo'=> $request->get('gitrepo'),
                'linkedin_link'=>$request->get('linkedlink'),
                'ratings'=>10
              ]);
        }
      
      return ['status','OK'];
    }
    public function tutorDetails(){
        $rows = DB::table('tutors')->where('user_id',Auth::id())
        ->paginate(1);

        return $rows;
    }

    public function triggerNotification(){
      
        $allNotification = PushNotification::where('user_id',Auth::id())->get();
       
        $payload = [
            "title"=> "New Message!",
            "body"=> "Thanks for using CitonHub",
            "icon" => "/imgs/citon.jpg",
            "vibrate"=> "[100,50,100]",
            "data"=> "{ primaryKey: 1 }" 
        ];
    
        $defaultOption = [
            'TTL' => 2000, // defaults to 4 weeks
            'urgency' => 'high', // protocol defaults to "normal"
            'topic' => 'Thanks for using CitonHub', // not defined by default,
            'batchSize' => 200, // defaults to 1000
        ];
         
        $this->generateNotification($allNotification,json_encode($payload));
         
        $this->sendNotification($defaultOption);
 
        $this->notificationReport();

    }

    public function SaveNotification(Request $request){
       $newnotification = PushNotification::create([
         'user_id'=> Auth::id(),
         'endpoint'=> $request->get('endpoint'),
         'public_key'=> $request->get('public_key'),
         'auth_token'=> $request->get('auth_token')
       ]);

       $newnotification->save();

       $this->triggerNotification();

       return ['status','OK'];
    }
}
