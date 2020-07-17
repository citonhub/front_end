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
use App\traits\ManagesImages;

class ProfileController extends Controller
{

    use ManagesImages;

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

    public function connectUser($username){

      $user =  User::where('username',$username)->first();

      $userConnections = UserConnection::where('user_id',Auth::id())->where('connected_user_id',$user->id)->get();

      if($userConnections->isEmpty()){
        $newConnect = UserConnection::create([
          "user_id"=> Auth::id(),
          "connected_user_id"=> $user->id
        ]);
  
        $newConnect->save();
      }
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
             "name"=> $request->get('full_name'),
             "username"=> $request->get('username')
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



 public function fetchProfile($username){
   
     $user = User::where('username',$username)->first();
      
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


    return [$user,$newProfile[0]];
 }

}
