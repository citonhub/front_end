<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Profile;
use Illuminate\Support\Facades\Auth;
use ColorThief\ColorThief;
use App\UserConnection;
use App\User;
use App\Project;
use App\Space;
use DB;
use App\ProjectStar;
use App\Notification;
use App\PageTracker;
use App\traits\ManagesImages;
use App\CustomClass\Curler;
use App\PushNotification;
use App\CustomClass\MetaParser;
use App\traits\PushNotificationTrait;

class ProfileController extends Controller
{

    use ManagesImages,PushNotificationTrait;

    public function __construct()
    {
        $this->setImageDefaultsFromConfig('profileImage');
      
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


    public function userConnected(){

      $userConnections = DB::table('user_connections')
      ->join('users','users.id','user_connections.connected_user_id')
      ->join('profiles','profiles.user_id','user_connections.connected_user_id')
      ->select(
        'users.username as username',
        'users.name as name',
        'profiles.image_name as image_name',
        'profiles.image_extension as image_extension',
        'profiles.background_color as background_color',
        'profiles.about as about'
      )
      ->where('user_connections.user_id',Auth::id())
      ->paginate(20);

     return $userConnections;    

    }


    public function userConnections(){
        
      $userConnections = DB::table('user_connections')
                ->join('users','users.id','user_connections.user_id')
                ->join('profiles','profiles.user_id','user_connections.user_id')
                ->select(
                  'users.username as username',
                  'users.name as name',
                  'profiles.image_name as image_name',
                  'profiles.image_extension as image_extension',
                  'profiles.background_color as background_color',
                  'profiles.about as about',
                  'users.id as tempId'
                )
                ->where('user_connections.connected_user_id',Auth::id())
                ->paginate(20);

          $newConnections =[];

        foreach ($userConnections as $connection) {
           $eachConnection =  (array) $connection;
           
           $Checkconnection = UserConnection::where('user_id',Auth::id())->where('connected_user_id',$eachConnection["tempId"])->get();

           if($Checkconnection->isEmpty()){
               $eachConnection["user_connected"] = false;
           }else{
            $eachConnection["user_connected"] = true;
           }

           array_push($newConnections,$eachConnection);
        } 

        return $newConnections;    
    }

    public function fetchTrendConnections(){
   
    
      $latestUsers = DB::table('users')
                     ->join('profiles','profiles.user_id','users.id')
                     ->select(
                      'users.username as username',
                      'users.name as name',
                      'profiles.image_name as image_name',
                      'profiles.image_extension as image_extension',
                      'profiles.background_color as background_color',
                      'profiles.about as about',
                      'users.id as tempId'
                     )
                     ->where('users.email_verified_at','!=',null)
                     ->paginate('50');
      
      $filteredUsers = [];

      foreach ($latestUsers as $user) {
        $arrayUser = (array) $user;

        $userConnection = UserConnection::where('user_id',Auth::id())->where('connected_user_id',$arrayUser["tempId"])->get();
        if($userConnection->isEmpty() && $arrayUser["tempId"] != Auth::id()){
          array_push($filteredUsers,$arrayUser);
        }
      }

      return $filteredUsers;
       
    }

    public function connectUser($username){

      $user =  User::where('username',$username)->first();

      $userConnections = UserConnection::where('user_id',Auth::id())->where('connected_user_id',$user->id)->get();

      if($userConnections->isEmpty()){
        $newConnect = UserConnection::create([
          "user_id"=> Auth::id(),
          "connected_user_id"=> $user->id
        ]);
  
        $newConnect->save();

        $this->connectionNotification($user->id,'new_connection');
      }


      }


      public function connectionNotification($baseUserId,$type){
       
        $userDataBase  = User::where('id', $baseUserId)->first();
              
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


                
       
                 if($userData->background_color == null){
                    $imagePath = '/imgs/usernew.png';
                 }else{
                   $imagePath = '/imgs/profile/' . $userData->image_name . '.' . $userData->image_extension;
                 }

                 $baseUrl = '/profile#/profile/connections/' . $userDataBase->username;
       
                 $notificationPayload = [
                    "owner_id" => $userDataBase->id,
                    "name"=> $userData->username,
                    "body"=> 'New Connections',
                    "tag"=> $baseUserId,
                    "type"=> $type,
                    "image"=> $imagePath,
                    "url"=> $baseUrl
       
                  ];
              
                 $this->triggerNotification($notificationPayload);
          
          $userDataArray = [];
       
  
          array_push($userDataArray,$userData);
           
          $userDataArray = serialize($userDataArray);
  
       $checkDuelNotification = Notification::where('user_id',$userDataBase->id)
       ->where('type',$type)->where('type_id',$baseUserId)
       ->where('status','unread')->get();
  
       if($checkDuelNotification->isEmpty()){
           
          if($userDataBase->id != Auth::id()){
  
             $newNotification = Notification::create([
               'user_id'=> $userDataBase->id,
               'type'=> $type,
               'data_array' => $userDataArray,
               'type_id'=> $baseUserId,
               'status'=> 'unread'
             ]);
           
             $newNotification->save();
  
  
           }
  
       }else{
          
          $userArray = unserialize($checkDuelNotification[0]->data_array);
  
           $userPresent = [];
  
          
           foreach ($userArray as $user) {
             if($user->id  == Auth::id()){
                array_push($userPresent,$user);
             }
           }
  
           if(count($userPresent) == 0){
              array_push($userArray,$userData);
  
              $checkDuelNotification[0]->update([
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

     

    public function fetchTeams($username){
     
      $user =  User::where('username',$username)->first();

      $userSpaceMembers = DB::table('space_members')
                        ->join('spaces','spaces.space_id','space_members.space_id')
                       ->select(
                         'space_members.space_id as space_id',
                         'spaces.name as spaceName',
                         'spaces.image_name as image_name',
                         'spaces.image_extension as image_extension',
                         'spaces.background_color as background_color',
                         'spaces.type as type'
                       )
                       ->where('space_members.user_id',$user->id)
                       ->where('spaces.type','Team')
                       ->get();
          
      $newTeamArray = [];

       foreach ($userSpaceMembers as $space) {

        $newSpace = (array) $space;

        
          
           $allSpaceProjects = Project::where('space_id',$newSpace["space_id"])->get();

           $projectCount = count($allSpaceProjects);

           $newSpace["projects"] = $projectCount;
          
           array_push($newTeamArray,$newSpace);
       }

       return $newTeamArray;
    }


    public function fetchProjects($username){
      $user =  User::where('username',$username)->first();

       $userSpace = Space::where('user_id',$user->id)->where('type','Personal')->first();

      

      $allProjects = Project::where('space_id',$userSpace->space_id)->orderBy('created_at','desc')->paginate(20);


      $newProject = [];

      foreach ($allProjects as $eachProject) {
           
          $eachProjectNew = (array) $eachProject;

          $totalStars = 0;

          $allStars = ProjectStar::where('project_id',$eachProject["id"])->get();

          foreach ($allStars as $star) {
            
               $totalStars += $star->stars;
          }

          $eachProject["total_stars"] = $totalStars;

          array_push($newProject,$eachProject);
      }

      return $newProject;
       
    

    }
    
    public function UpdateProfile(Request $request){
      
        $characters = 'abcdefjhijklmnopqrstuvwxyz';
        $randomString =  $this->generateRandomNumber(10,$characters);

       $userProfile = Profile::where('user_id',Auth::id())->get();

       if($userProfile->isEmpty()){
         
           $userProfile = Profile::create([
            "user_id"=> Auth::id(),
            "image_name"=> null,
            "image_extension"=> null,
            "coins"=> 50,
            "interests"=>  serialize($request->get('interest')),
            "about"=> $request->get('about')
           ]);
        
           $userProfile->save();
       }
 
       $userProfile = Profile::where('user_id',Auth::id())->first();
       $user = Auth::user();

         if($request->file('image') != null){

             $user->update([
             "name"=> $request->get('full_name')
             ]);

            $userProfile->update([
               "about"=> $request->get('about'),
               "interests"=>   serialize($request->get('interest')),
               "image_name"=> 'user_profile_' . $randomString,
               "image_extension"=> $request->get('image_ext'),
              ]);
      
              
            
              $imageFile = $request->file('image');
      
              list($width, $height) = getimagesize($imageFile);
              $this->imgWidth = $width;
              $this->imgHeight = $height;
            $this->saveImageFiles($imageFile,$userProfile); 
         
            $imagePath = '/var/www/citonhubnew/public/imgs/profile/'. $userProfile->image_name . '.' . $userProfile->image_extension;
                
            $dominantColor = ColorThief::getColor($imagePath);
              $colorToRGBA = 'rgba('. $dominantColor[0] . ',' . $dominantColor[1] . ',' . $dominantColor[2] . ',0.6)'; 
            $userProfile->update([
               "background_color"=> $colorToRGBA
            ]);
         }else{

            $user->update([
                "name"=> $request->get('full_name'),
                "username"=> $request->get('username')
                ]);
   
               $userProfile->update([
                  "about"=> $request->get('about'),
                  "interests"=> serialize($request->get('interest')),
                 ]);
         }


    }

    public function generateRandomNumber($length = 10,$characters) {
        
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }   
        return $randomString;
         }

 public function savePageTracking(Request $request){
   $pageTracker = PageTracker::where('id',$request->get('page_id'))->first();

    $pageTracker->update([
      'status'=> true
    ]);
 }

 public function fetchProfile($username){
   
     $user = User::where('username',$username)->first();
      
     $userPageTracker = PageTracker::where('user_id',Auth::id())->get();
     if($userPageTracker->isEmpty()){
       
      $pageArray = ["public",
                    "new_post",
                    "duel",
                    "my_duel",
                    "duel_board",
                    "duel_panel",
                    "duel_code_editor",
                    "duel_page_loader",
                    "chat_list",
                    "space_content",
                    "project_panel",
                    "project_code_editor",
                    "project_page_loader"];
          foreach ($pageArray as $page) {
             
            $newPageTracker = PageTracker::create([
             "user_id"=> Auth::id(),
             "page_name"=> $page,
             "status"=> false,
            ]);

            $newPageTracker->save();
          }

     }
      if(Auth::check()){
        $allPageTracker = PageTracker::where('user_id',Auth::id())->get();
      }else{
        $allPageTracker = [];
      }

    
      
     $profile = Profile::where('user_id',$user->id)->get();

      $newProfile = [];

      foreach ($profile as $eachProfile) {
         
        $thisprofile = (array) $eachProfile;

          $eachProfile["interestsArray"] = unserialize($eachProfile["interests"]);

        
        $allUserConnections = UserConnection::where('connected_user_id',$user->id)->get();
         $connectionCount = count($allUserConnections);

         $eachProfile["connections"] = $connectionCount;

         if(Auth::check()){
          $userConnections = UserConnection::where('user_id',Auth::id())->where('connected_user_id',$user->id)->get();
           if($userConnections->isEmpty()){
            $eachProfile["connected"] = false;
           }else{
            $eachProfile["connected"] = true;
           }
         
         }else{
          $eachProfile["connected"] = false;
         }
     
         array_push($newProfile,$eachProfile);
      }

      if(count($newProfile) == 0){
         $newProfile = ['empty'];
      }else{
        $newProfile = $newProfile;
      }

      if($user->id == Auth::id()){
        $UnreadNotifications = Notification::where('user_id',Auth::id())->where('status','unread')->where('type','!=','new_message')->get();
        $UnreadNotificationsSpace = Notification::where('user_id',Auth::id())->where('status','unread')->where('type','new_message')->get();
         $notificationCount = count($UnreadNotifications);
         $notificationCountSpace = count($UnreadNotificationsSpace);
      }else{
        $notificationCount  = 0;
        $notificationCountSpace = 0;
      }

      


    return [$user,$newProfile[0],$allPageTracker,$notificationCount,$notificationCountSpace];
 }

}
