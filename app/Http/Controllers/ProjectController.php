<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Panel;
use App\Space;
use App\ProjectStar;
use App\ProjectComment;
use App\Project;
use App\Notification;
use DB;
use App\ProjectCommentLike;
use Illuminate\Support\Facades\Auth;
use App\SpaceMember;
use App\Events\PanelChannel;
use App\traits\PushNotificationTrait;
use App\PushNotification;
use App\User;
use App\CustomClass\Curler;
use App\CustomClass\MetaParser;



class ProjectController extends Controller
{
     use PushNotificationTrait;

    public static function createSlug($str, $delimiter = '-'){

        $slug = strtolower(trim(preg_replace('/[\s-]+/', $delimiter, preg_replace('/[^A-Za-z0-9-]+/', $delimiter, preg_replace('/[&]/', 'and', preg_replace('/[\']/', '', iconv('UTF-8', 'ASCII//TRANSLIT', $str))))), $delimiter));
        return $slug;
    
    } 


    public function saveComment(Request $request){
   
        $Comment = ProjectComment::create([
            "user_id"=>Auth::id(),
            "project_slug"=> $request->get('project_slug'),
            "content"=> $request->get('content'),
            "is_reply"=> $request->get('is_reply'),
            "replied_comment_id"=> $request->get('replied_comment_id'),
            "likes"=> 0
          ]);
   
          $Comment->save();
           
          $currentProject = Project::where('project_slug', $request->get('project_slug'))->first();
   
          $newcomment = $currentProject->comments + 1;
   
           $currentProject->update([
            'comments'=> $newcomment
           ]);


           $projectComments = DB::table('project_comments')
           ->join('projects','projects.project_slug','project_comments.project_slug')
           ->join('users','users.id','project_comments.user_id')
           ->select(
             "project_comments.likes as likes",
             "project_comments.id as id",
             "project_comments.content as content",
             "project_comments.project_slug as project_slug",
             "users.username as username",
             "project_comments.is_reply as is_reply",
             "project_comments.replied_comment_id as replied_comment_id"
           )
           ->where('project_comments.id',$Comment->id)
           ->orderBy('project_comments.created_at', 'desc')->paginate(2);
           
   
    $newCommentArray = [];
   
   foreach ($projectComments as $comment) {
     
   
    $comment = (array) $comment;
   
    if($comment['is_reply'] ==  true){
   
       $thiscomment = DB::table('project_comments')
       ->join('projects','projects.project_slug','project_comments.project_slug')
       ->join('users','users.id','project_comments.user_id')
       ->select(
         "project_comments.likes as likes",
         "project_comments.id as id",
         "project_comments.content as content",
         "users.username as username",
         "project_comments.is_reply as is_reply",
         "project_comments.replied_comment_id as replied_comment_id"
       )
       ->where('project_comments.id',$comment['replied_comment_id'])
       ->first();
       
       $comment['replied_comment'] = $thiscomment;
   
    }
    
       $userProjectCommentLike = ProjectCommentLike::where('project_comment_id',$comment["id"])->where('user_id',Auth::id())->get();
   
       if($userProjectCommentLike->isEmpty()){
        $comment['liked_by_user'] = false;
       }else{
        $comment['liked_by_user'] = true;
       }
     
    
   
    array_push($newCommentArray,$comment);
    
   }


   $spaceMembers = DB::table('space_members')
   ->join('users','users.id','space_members.user_id')
   ->select(
      'users.username as username',
      'users.name as name',
      'users.id as id'
   )->where('space_members.space_id',$currentProject->space_id)
   ->get();

   $this->spaceNotification($request->get('project_slug'),'new_project_comment',$spaceMembers);
      
   broadcast(new PanelChannel('new-comment',$newCommentArray[0],$request->get('project_slug')))->toOthers();
      
   return $newCommentArray[0];
   
          
    }
   
     public function saveCommentPanel(Request $request){
      $Comment = ProjectComment::create([
        "user_id"=>Auth::id(),
        "project_slug"=> $request->get('project_slug'),
        "content"=> $request->get('content'),
        "is_reply"=> $request->get('is_reply'),
        "replied_comment_id"=> $request->get('replied_comment_id'),
        "likes"=> 0
      ]);

      $Comment->save();


      $projectComments = DB::table('project_comments')
      ->join('users','users.id','project_comments.user_id')
      ->select(
        "project_comments.likes as likes",
        "project_comments.id as id",
        "project_comments.content as content",
        "project_comments.project_slug as project_slug",
        "users.username as username",
        "project_comments.is_reply as is_reply",
        "project_comments.replied_comment_id as replied_comment_id"
      )
      ->where('project_comments.id',$Comment->id)
      ->orderBy('project_comments.created_at', 'desc')->paginate(2);

      $newCommentArray = [];

foreach ($projectComments as $comment) {


$commentNew = (array) $comment;

if($commentNew['is_reply'] ==  true){

  $thiscomment = DB::table('project_comments')
  ->join('users','users.id','project_comments.user_id')
  ->select(
    "project_comments.likes as likes",
    "project_comments.id as id",
    "project_comments.content as content",
    "users.username as username",
    "project_comments.is_reply as is_reply",
    "project_comments.replied_comment_id as replied_comment_id"
  )
  ->where('project_comments.id',$commentNew['replied_comment_id'])
  ->first();
  
  $commentNew['replied_comment'] = $thiscomment;

}
  $userProjectCommentLike = ProjectCommentLike::where('project_comment_id',$commentNew["id"])->where('user_id',Auth::id())->get();

  if($userProjectCommentLike->isEmpty()){
   $commentNew['liked_by_user'] = false;
  }else{
   $commentNew['liked_by_user'] = true;
  }



array_push($newCommentArray,$commentNew);

}

broadcast(new PanelChannel('new-comment',$newCommentArray[0],$request->get('project_slug')))->toOthers();
 
return $newCommentArray[0];


       
      
     }

    public function fetchProjectComments($projectSlug){
       
        $projectComments = DB::table('project_comments')
        ->join('projects','projects.project_slug','project_comments.project_slug')
        ->join('users','users.id','project_comments.user_id')
        ->select(
          "project_comments.likes as likes",
          "project_comments.id as id",
          "project_comments.content as content",
          "project_comments.project_slug as project_slug",
          "users.username as username",
          "project_comments.is_reply as is_reply",
          "project_comments.replied_comment_id as replied_comment_id"
        )
        ->where('project_comments.project_slug',$projectSlug)
        ->orderBy('project_comments.created_at', 'desc')->paginate(1000);
        

 $newCommentArray = [];

foreach ($projectComments as $comment) {
  

 $comment = (array) $comment;

 if($comment['is_reply'] ==  true){

    $thiscomment = DB::table('project_comments')
    ->join('projects','projects.project_slug','project_comments.project_slug')
    ->join('users','users.id','project_comments.user_id')
    ->select(
      "project_comments.likes as likes",
      "project_comments.id as id",
      "project_comments.content as content",
      "users.username as username",
      "project_comments.is_reply as is_reply",
      "project_comments.replied_comment_id as replied_comment_id"
    )
    ->where('project_comments.id',$comment['replied_comment_id'])
    ->first();
    
    $comment['replied_comment'] = $thiscomment;

 }
    $userProjectCommentLike = ProjectCommentLike::where('project_comment_id',$comment["id"])->where('user_id',Auth::id())->get();

    if($userProjectCommentLike->isEmpty()){
     $comment['liked_by_user'] = false;
    }else{
     $comment['liked_by_user'] = true;
    }
  
 

 array_push($newCommentArray,$comment);
 
}
       
   
return $newCommentArray;
    }


    public function TeamComment($teamCode){
       

      $projectComments = DB::table('project_comments')
      ->join('users','users.id','project_comments.user_id')
      ->select(
        "project_comments.likes as likes",
        "project_comments.id as id",
        "project_comments.content as content",
        "project_comments.project_slug as project_slug",
        "users.username as username",
        "project_comments.is_reply as is_reply",
        "project_comments.replied_comment_id as replied_comment_id"
      )
      ->where('project_comments.project_slug',$teamCode)
      ->orderBy('project_comments.created_at', 'desc')->paginate(1000);
      

$newCommentArray = [];

foreach ($projectComments as $comment) {


$comment = (array) $comment;

if($comment['is_reply'] ==  true){

  $thiscomment = DB::table('project_comments')
  ->join('users','users.id','project_comments.user_id')
  ->select(
    "project_comments.likes as likes",
    "project_comments.id as id",
    "project_comments.content as content",
    "users.username as username",
    "project_comments.is_reply as is_reply",
    "project_comments.replied_comment_id as replied_comment_id"
  )
  ->where('project_comments.id',$comment['replied_comment_id'])
  ->first();
  
  $comment['replied_comment'] = $thiscomment;

}
  $userProjectCommentLike = ProjectCommentLike::where('project_comment_id',$comment["id"])->where('user_id',Auth::id())->get();

  if($userProjectCommentLike->isEmpty()){
   $comment['liked_by_user'] = false;
  }else{
   $comment['liked_by_user'] = true;
  }



array_push($newCommentArray,$comment);

}
     
 
return $newCommentArray;

    }



    public function saveProjectLikes(Request $request){
 
        $presenceProjectComment = projectComment::where('id',$request->get('comment_id'))->first();
    
        $userprojectCommentLike = projectCommentLike::where('project_comment_id',$request->get('comment_id'))->where('user_id',Auth::id())->get();
 
          if($userprojectCommentLike->isEmpty()){
 
             $projectCommentLikeData = projectCommentLike::create([
                "project_comment_id" => $request->get('comment_id'),
                "user_id" => Auth::id()
              ]);
        
               $projectCommentLikeData->save();
        
              $projectCommentLikes = $presenceProjectComment->likes + 1;
        
              $presenceProjectComment->update([
             'likes'=> $projectCommentLikes
              ]);
 
             
 
          }

          broadcast(new PanelChannel('new-comment-like',$presenceProjectComment->id,$presenceProjectComment->project_slug))->toOthers();
 
    }


    public function generateRandomNumber($length = 10,$characters) {
        
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }   
        return $randomString;
         }

         
    public function createProject(Request $request){
       
        $characters = '1234567890';
        $randomString = $this->generateRandomNumber(9,$characters);
  
        $newPanel = Panel::create([
          "user_id"=> Auth::id(),
          "purpose"=> 'duel',
          "panel_id"=> $randomString,
          "is_set"=> false
        ]);
  
       $newPanel->save();

        $slugCharacter = 'abcdefghijklmnopqrstuvwxyz1234567890';

         $thisSpace = Space::where('space_id',$request->get('owner'))->first();

        $slugRandom =  $this->generateRandomNumber(12,$slugCharacter);
         
        $projectSlug = 'project-' . $this->createSlug($thisSpace->name) . '-' . $slugRandom;
         
        $NewProject = Project::create([
           "project_slug"=> $projectSlug,
           "panel_id"=> $randomString,
           "title"=>  $request->get('title'),
           "stars"=> 0,
           "comments"=> 0,
           "views"=> 0,
           "user_id"=>Auth::id(),
           "type"=> $request->get('type'),
           "space_id"=> $request->get('owner')
        ]);

        $NewProject->save();

       

        return $NewProject;


    }

    public function saveProjectStar(Request $request){
       
        $projectStar = ProjectStar::where('id',$request->get('stars')[0]["id"])->first();

        $projectStar->update([
          "stars"=>  $request->get('stars')[0]["stars"]
        ]);
    }

    public function fetchProject($projectSlug){

        $project = Project::where('project_slug',$projectSlug)->get();

        $newProject = [];

        foreach ($project as $eachProject) {
             
            $eachProjectNew = (array) $eachProject;

            $totalStars = 0;

            $allStars = ProjectStar::where('project_id',$eachProject["id"])->get();

            foreach ($allStars as $star) {
              
                 $totalStars += $star->stars;
            }

            $eachProject["total_stars"] = $totalStars;

            array_push($newProject,$eachProject);
        }

       if(Auth::check()){
           
        $projectStar = ProjectStar::where('user_id',Auth::id())->where('project_id',$newProject[0]["id"])->get();
         
        if($projectStar->isEmpty() && (Auth::id() != $newProject[0]["user_id"])){
            
           $projectStar = ProjectStar::create([
             "user_id"=> Auth::id(),
             "project_id"=> $newProject[0]["id"],
             "stars"=> 0
           ]);

            $projectStar->save();
          
        }

        $projectStar = ProjectStar::where('user_id',Auth::id())->where('project_id',$newProject[0]["id"])->get();
       }else{
            $projectStar = [];
       }

       $projectOwners = SpaceMember::where('space_id',$newProject[0]["space_id"])->get();

        

        return [$newProject[0],$projectStar,$projectOwners];
    }

    public function fetchProjects($spaceId){
      
        $allProjects = Project::where('space_id',$spaceId)->orderBy('created_at','desc')->paginate(20);


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


    public function fetchTrendProject(){
       
      $allProjects = Project::where('title','!=','Citonhub Project')->orderBy('stars','desc')->paginate(50);


      $newProject = [];

      foreach ($allProjects as $eachProject) {
           
          $eachProjectNew = (array) $eachProject;


          $spaceOwner = Space::where('space_id',$eachProject["space_id"])->first();

            if($spaceOwner->type == 'Personal'){

               $userOwner = User::where('id',$eachProject["user_id"])->first();

               $eachProject["owner"] = $userOwner->username;

            }else{
              $eachProject["owner"] = $spaceOwner->name;
            }

          $totalStars = 0;

          $allStars = ProjectStar::where('project_id',$eachProject["id"])->get();

          foreach ($allStars as $star) {
            
               $totalStars += $star->stars;
          }

          $eachProject["total_stars"] = $totalStars;

          $space = Space::where('space_id',$eachProject["space_id"])->first();

          if($space->type != 'Team'){
            array_push($newProject,$eachProject);
          }
          
      }

      return $newProject;

    } 

    public function spaceNotification($baseSpaceId,$type,$userArrayBase){
       
      $presentSpace  = Space::where('space_id', $baseSpaceId)->first();
            
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

              
      
               
      
               
               
              
        
        $userDataArray = [];
     
   
        array_push($userDataArray,$userData);
         
        $userDataArray = serialize($userDataArray);


   // trigger notifications
        foreach ($userArrayBase as $user) {

          if($userData->background_color == null){
            $imagePath = '/imgs/usernew.png';
         }else{
           $imagePath = '/imgs/profile/' . $userData->image_name . '.' . $userData->image_extension;
         }


        $project = DB::table('projects')->where('project_slug',$baseSpaceId)->first();
       
        $baseUrl = '/space#\/' . $baseSpaceId . '/comments';


         $notificationPayload = [
            "owner_id" => $user->id,
            "name"=> $userData->username,
            "body"=> '',
            "tag"=> $baseSpaceId,
            "type"=> $type,
            "image"=> $imagePath,
            "project"=> $project,
            "url"=> $baseUrl
          ];
      
          $this->triggerNotification($notificationPayload);


         
         $checkSpaceNotification = Notification::where('user_id',$user->id)
        ->where('type',$type)->where('type_id',$baseSpaceId)
        ->where('status','unread')->get();
   
     if($checkSpaceNotification->isEmpty()){
         
     
      if($user->id != Auth::id()){
        
        $newNotification = Notification::create([
          'user_id'=> $user->id,
          'type'=> $type,
          'data_array' => $userDataArray,
          'type_id'=> $baseSpaceId,
          'status'=> 'unread'
        ]);
      
        $newNotification->save();

      }
   
          
   
   
        
   
     }else{
        
           $userArray = unserialize($checkSpaceNotification[0]->data_array);
   
          
            array_push($userArray,$userData);
   
            $checkSpaceNotification[0]->update([
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
        "badge" => "/imagesNew/icons/icon-72x72.png",
        "vibrate"=> [1000,500,1000],
        "tag" => $notificationPayload["tag"],
        "icon" => $notificationPayload["image"],
        "requireInteraction"=> true,
        "data"=> [
           "type"=>$notificationPayload["type"],
           "name"=>$notificationPayload["name"],
           "project"=>$notificationPayload["project"],
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

public function fetchAllProjects(){
  $allProjects = DB::table('space_members')
  ->join('projects','projects.space_id','space_members.space_id')
  ->select(
     'projects.project_slug as project_slug',
     'projects.title as title'
  )
  ->where('space_members.user_id',Auth::id())
  ->orderBy('projects.created_at','desc')
  ->get();


  return $allProjects;
}

}
