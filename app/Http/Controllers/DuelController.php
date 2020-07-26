<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Duel;
use App\DuelParticipant;
use App\DuelComment;
use App\DuelLike;
use App\DuelCommentLikes;
use App\Panel;
use App\DuelPanel;
use DB;
use App\DuelVote;
use Carbon\Carbon;
use App\DuelTeam;
use App\DuelTeamMember;
use App\Notification;
use App\Events\UserChannel;
use App\Events\DuelChannel;


class DuelController extends Controller
{

    public function MakeTeam(Request $request){

      $characters = '1234567890abcdefghijklmnopqrstuvwxyz';
      $randomString = $this->generateRandomNumber(10,$characters);
        
      $duelId = $request->get('duel_id');

      $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->get();

       if($duelTeamMembers->isEmpty()){
         
        $duelParticipant = DuelParticipant::where('user_id',Auth::id())->where('duel_id',$duelId)->first();

        $duelParticipant->update([
        'type'=>'team'
        ]);

        $duelTeam = DuelTeam::create([
         "duel_id"=> $duelId,
         "name"=> $request->get('name'),
         'panel_id'=> $duelParticipant->panel_id,
         "team_code"=> $randomString
        ]);

        $duelTeam->save();

        $newMember = DuelTeamMember::create([
          "user_id"=> Auth::id(),
          "duel_id"=> $duelId,
          "duel_team_id"=>$duelTeam->id,
        ]);

        $newMember->save();
        
         return $duelTeam;
       }

    }
 
     public function FetchDuelResults($duelId){
      
      

     } 

    public function DuelVotes($duelId){
       
      $allDuelParticipants = DuelParticipant::where('duel_id',$duelId)->get();

      $userVotes = DuelVote::where('duel_id',$duelId)->where('user_id',Auth::id())->get();

      if($userVotes->isEmpty()){
        foreach ($allDuelParticipants as $participant) {
          $newVote = DuelVote::create([
           "duel_id"=> $duelId,
           "user_id"=> Auth::id(),
           "participant_id"=> $participant->id,
           "stars"=> 0
          ]);

          $newVote->save();
        }
      $userVotes = DuelVote::where('duel_id',$duelId)->where('user_id',Auth::id())->get();
      }
       

      return $userVotes;
      
    }

   
  public function joinDuel(Request $request){
    $presentDuel = Duel::where('duel_id',$request->get('duel_id'))->first();
     
    $currentDuelParticipant = $presentDuel->current_participant;

    $maxParticipant = $presentDuel->max_participant;

    if($currentDuelParticipant < $maxParticipant){
      
      $characters = '1234567890';
      $randomString = $this->generateRandomNumber(9,$characters);

      $newPanel = Panel::create([
        "user_id"=> Auth::id(),
        "purpose"=> 'duel',
        "panel_id"=> $randomString,
        "is_set"=> false
      ]);

     $newPanel->save();
 
      $duelPanel = DuelPanel::create([
         "user_id"=> Auth::id(),
         "duel_id"=> $request->get('duel_id'),
         "panel_id"=> $randomString
      ]);

      $duelPanel->save();

      $newParticipant = DuelParticipant::create([
       "duel_id"=> $request->get('duel_id'),
       "user_id"=> Auth::id(),
       "stars"=> 0,
       "panel_id"=> $randomString
      ]);

      $newParticipant->save();

       $presentDuel->update([
       "current_participant"=> $currentDuelParticipant + 1
       ]);

       $duelParticipant = DB::table('duel_participants')
       ->join('users','users.id','duel_participants.user_id')
       ->select(
            
            'duel_participants.panel_id as panel_id',
            'duel_participants.stars as stars',
            'duel_participants.duel_id as duel_id',
            'users.username as username'
         )
        ->where('duel_participants.duel_id',$request->get('duel_id'))
        ->where('duel_participants.id',$newParticipant->id)->first();

       

       broadcast(new DuelChannel('new-participant',$duelParticipant,$request->get('duel_id')));

       $this->duelNotification($request->get('duel_id'),'duel_join');
      
       return 'joined';
    }else{
      return 'duel_participant_exceeded';
    }

  } 

   public function saveDuelVotes(Request $request){
 
      $votes = $request->get('votes');

       foreach ($votes as $vote) {
          $duelVote = DuelVote::where('id',$vote['id'])->first();

          $duelVote->update([
            "stars"=> $vote['stars']
          ]);

       }

   }

  

  public function FetchDuelParticipants($duelId){

     $allParticipants = DB::table('duel_participants')
     ->join('users','users.id','duel_participants.user_id')
     ->select(
          'duel_participants.id as id',
          'duel_participants.panel_id as panel_id',
          'duel_participants.stars as stars',
          'users.username as username'
       )
      ->where('duel_participants.duel_id',$duelId)
     ->orderBy('duel_participants.created_at', 'desc')->get();

     $duel = $this->fetchThisDuel($duelId);

     $duelVotes = $this->DuelVotes($duelId);

      return [$allParticipants,$duelVotes,$duel];
  }

  public function DuelResults($duelId){
     
    $allParticipants = DB::table('duel_participants')
   ->join('users','users.id','duel_participants.user_id')
   ->select(
        'duel_participants.id as id',
        'duel_participants.panel_id as panel_id',
        'duel_participants.stars as stars',
        'users.username as username'
     )
    ->where('duel_participants.duel_id',$duelId)
   ->orderBy('duel_participants.created_at', 'desc')->get();

    $duelFullResult = [];

     foreach ($allParticipants as $participant) {
       
       $participant = (array) $participant;

       $allVotes = DuelVote::where('duel_id',$duelId)->where('participant_id',$participant["id"])->get();
        
       $voteCount = 0;

         foreach ($allVotes as $vote) {
           $voteCount += $vote->stars;
         }
        $participant["votes"] = $voteCount;
      
        array_push($duelFullResult,$participant);
     }

     $duel = $this->fetchThisDuel($duelId);

    
     return [$duelFullResult,$duel];
   
 } 



    public function generateRandomNumber($length = 10,$characters) {
        
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }   
        return $randomString;
         }


        
    public function userAllConnected(){
      
          $userConnections = DB::table('user_connections')
          ->join('users','users.id','user_connections.connected_user_id')
          ->join('profiles','profiles.user_id','user_connections.connected_user_id')
          ->select(
            'users.username as username',
            'users.id as user_id'
          )
          ->where('user_connections.user_id',Auth::id())
          ->get();
    
         return $userConnections;  
    
        }


   public function likeDuel(Request $request){
        $presentDuel = Duel::where('duel_id',$request->get('duel_id'))->first();
    
           $userDuelLike = DuelLike::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->get();
    
             if($userDuelLike->isEmpty()){
    
                $duelLikeData = DuelLike::create([
                   "duel_id" => $request->get('duel_id'),
                   "user_id" => Auth::id()
                 ]);
           
                  $duelLikeData->save();
           
                 $duelLikes = $presentDuel->likes + 1;
           
                 $presentDuel->update([
                'likes'=> $duelLikes
                 ]);
    
                
    
             }

          
             

             broadcast(new DuelChannel('duel-like',$presentDuel->duel_id,$presentDuel->duel_id))->toOthers();
             
            $this->duelNotification($presentDuel->duel_id,'duel_like');

            
    
         
         
       }



       public function likeDuelComments(Request $request){
        $presentDuelComment = DuelComment::where('id',$request->get('comment_id'))->first();
    
           $userDuelCommentLike = DuelCommentLikes::where('duel_comment_id',$request->get('comment_id'))->where('user_id',Auth::id())->get();
    
             if($userDuelCommentLike->isEmpty()){
    
                $duelCommentLikeData = DuelCommentLikes::create([
                   "duel_comment_id" => $request->get('comment_id'),
                   "user_id" => Auth::id()
                 ]);
           
                  $duelCommentLikeData->save();
           
                 $duelCommentLikes = $presentDuelComment->likes + 1;
           
                 $presentDuelComment->update([
                'likes'=> $duelCommentLikes
                 ]);
    
                
    
             }
    
             broadcast(new DuelChannel('duel-comment-like',$presentDuelComment->id,$presentDuelComment->duel_id))->toOthers();
         
       }

      public function fetchThisComment($commentId){

        $duelComments = DB::table('duel_comments')
                         ->join('duels','duels.duel_id','duel_comments.duel_id')
                         ->join('users','users.id','duel_comments.user_id')
                         ->select(
                           "duel_comments.likes as likes",
                           "duel_comments.id as id",
                           "duel_comments.content as content",
                           "duel_comments.duel_id as duel_id",
                           "users.username as username",
                           "duel_comments.is_reply as is_reply",
                           "duel_comments.replied_comment_id as replied_comment_id"
                         )
                         ->where('duel_comments.id',$commentId)
                         ->get();
                         

                  $newCommentArray = [];

                foreach ($duelComments as $comment) {
                   

                  $comment = (array) $comment;

                  if($comment['is_reply'] ==  true){

                     $thiscomment = DB::table('duel_comments')
                     ->join('duels','duels.duel_id','duel_comments.duel_id')
                     ->join('users','users.id','duel_comments.user_id')
                     ->select(
                       "duel_comments.likes as likes",
                       "duel_comments.id as id",
                       "duel_comments.content as content",
                       "users.username as username",
                       "duel_comments.is_reply as is_reply",
                       "duel_comments.replied_comment_id as replied_comment_id"
                     )
                     ->where('duel_comments.id',$comment['replied_comment_id'])
                     ->first();
                     
                     $comment['replied_comment'] = $thiscomment;
                     }

                     $userDuelCommentLike = DuelCommentLikes::where('duel_comment_id',$comment['id'])->where('user_id',Auth::id())->get();

                     if($userDuelCommentLike->isEmpty()){
                      $comment['liked_by_user'] = false;
                     }else{
                      $comment['liked_by_user'] = true;
                     }
                   
                  

                  array_push($newCommentArray,$comment);
                  
                }
                        
                    
         return $newCommentArray;

      }


      public function fetchDuelComments($duelId){
        $duelComments = DB::table('duel_comments')
                         ->join('duels','duels.duel_id','duel_comments.duel_id')
                         ->join('users','users.id','duel_comments.user_id')
                         ->select(
                           "duel_comments.likes as likes",
                           "duel_comments.id as id",
                           "duel_comments.content as content",
                           "duel_comments.duel_id as duel_id",
                           "users.username as username",
                           "duel_comments.is_reply as is_reply",
                           "duel_comments.replied_comment_id as replied_comment_id"
                         )
                         ->where('duel_comments.duel_id',$duelId)
                         ->orderBy('duel_comments.created_at', 'desc')->paginate(10);
                         

                  $newCommentArray = [];

                foreach ($duelComments as $comment) {
                   

                  $comment = (array) $comment;

                  if($comment['is_reply'] ==  true){

                     $thiscomment = DB::table('duel_comments')
                     ->join('duels','duels.duel_id','duel_comments.duel_id')
                     ->join('users','users.id','duel_comments.user_id')
                     ->select(
                       "duel_comments.likes as likes",
                       "duel_comments.id as id",
                       "duel_comments.content as content",
                       "users.username as username",
                       "duel_comments.is_reply as is_reply",
                       "duel_comments.replied_comment_id as replied_comment_id"
                     )
                     ->where('duel_comments.id',$comment['replied_comment_id'])
                     ->first();
                     
                     $comment['replied_comment'] = $thiscomment;
                     }

                     $userDuelCommentLike = DuelCommentLikes::where('duel_comment_id',$comment['id'])->where('user_id',Auth::id())->get();

                     if($userDuelCommentLike->isEmpty()){
                      $comment['liked_by_user'] = false;
                     }else{
                      $comment['liked_by_user'] = true;
                     }
                   
                  

                  array_push($newCommentArray,$comment);
                  
                }
                        
                    
         return $newCommentArray;
      }

     public function saveDuelComment(Request $request){
       $duelComment = DuelComment::create([
         "user_id"=>Auth::id(),
         "duel_id"=> $request->get('duel_id'),
         "content"=> $request->get('content'),
         "is_reply"=> $request->get('is_reply'),
         "replied_comment_id"=> $request->get('replied_comment_id'),
         "likes"=> 0
       ]);

       $duelComment->save();
        
       $currentDuel = Duel::where('duel_id', $request->get('duel_id'))->first();

       $newcomment = $currentDuel->comments + 1;

        $currentDuel->update([
         'comments'=> $newcomment
        ]);


        $commentData = $this->fetchThisComment($duelComment->id);

        broadcast(new DuelChannel('duel-comment',$commentData[0],$duelComment->duel_id))->toOthers();

       
        $this->duelNotification($duelComment->duel_id,'duel_comment');
       

        return $commentData;



       
     }

 
     public function fetchThisDuel($duelId,$type){


       if($type != 'user'){

        $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->get();

        if($duelTeamMembers->isEmpty()){
         
          $duelTeam = DuelTeam::where('team_code',$type)->first();

         
         $newMember = DuelTeamMember::create([
           "user_id"=> Auth::id(),
           "duel_id"=> $duelId,
           "duel_team_id"=>$duelTeam->id
         ]);
 
         $newMember->save();;
          
        }
         
       }
       
        $duels = DB::table('duels')
        ->join('users','users.id','duels.user_id')
        ->select(
             'duels.title as title',
             'duels.duel_language as languages',
             'duels.description as description',
             'duels.participant_type as participant_type',
             'duels.rules as rules',
             'duels.duration as duration',
             'duels.likes as likes',
             'duels.comments as comments',
             'duels.started as started',
             'duels.start_date as start_date',
             'duels.judges as judges',
             'duels.duel_id as duel_id',
             'duels.current_participant as current_participant',
             'duels.max_participant as max_participant',
             'users.username as username',
             'duels.created_at as created_at'
          )
        ->where('duels.duel_id',$duelId)
        ->orderBy('duels.created_at', 'desc')->paginate(100);

        $duelArray = $this->duelEngine($duels);
  
        return $duelArray;

     }

    public function fetchUserDuel(){
      
      $duels = DB::table('duels')
      ->join('users','users.id','duels.user_id')
      ->select(
           'duels.title as title',
           'duels.duel_language as languages',
           'duels.description as description',
           'duels.participant_type as participant_type',
           'duels.rules as rules',
           'duels.duration as duration',
           'duels.user_id as tempId',
           'duels.started as started',
             'duels.start_date as start_date',
           'duels.likes as likes',
           'duels.comments as comments',
           'duels.judges as judges',
           'duels.duel_id as duel_id',
           'duels.current_participant as current_participant',
           'duels.max_participant as max_participant',
           'users.username as username',
           'duels.created_at as created_at'
        )
      ->where('duels.user_id',Auth::id())
      ->orderBy('duels.created_at', 'desc')->paginate(100);

      $duelArray = $this->duelEngine($duels);

      return $duelArray;

    }

    public function fetchDuel(){  
        $duels = DB::table('duels')
        ->join('users','users.id','duels.user_id')
        ->select(
             'duels.title as title',
             'duels.duel_language as languages',
             'duels.description as description',
             'duels.participant_type as participant_type',
             'duels.rules as rules',
             'duels.duration as duration',
             'duels.likes as likes',
             'duels.started as started',
             'duels.start_date as start_date',
             'duels.comments as comments',
             'duels.judges as judges',
             'duels.duel_id as duel_id',
             'duels.current_participant as current_participant',
             'duels.max_participant as max_participant',
             'users.username as username',
             'duels.created_at as created_at'
          )
        ->orderBy('duels.created_at', 'desc')->paginate(100);

        $duelArray = $this->duelEngine($duels);
  
        return $duelArray;
    }


    public function duelEngine($duelArray){

        $newDuelArray = [];
  
        foreach ($duelArray as $duel) {
           
           $duel = (array) $duel;
         
           $duel["duel_language_array"] = unserialize($duel["languages"]);

           $duel["participant_type_array"] = unserialize($duel["participant_type"]);

           $duel["judges_array"]  = unserialize($duel["judges"]);

            $duelParticipantUser = DuelParticipant::where('duel_id',$duel['duel_id'])->where('user_id',Auth::id())->get();

              if($duelParticipantUser->isEmpty()){

             $duelTeamMembers = DuelTeamMember::where('duel_id',$duel['duel_id'])->where('user_id',Auth::id())->get();
               
             $duel["user_participating"]  = false;


            if($duelTeamMembers->isEmpty()){
            
              $duel["user_participating"]  = false;
               
            }else{

              $duel["user_participating"]  = true;
            }
                 
                

              }else{
                $duel["user_participating"]  = true;
              }


              $duelTeamMembers = DuelTeamMember::where('duel_id',$duel['duel_id'])->where('user_id',Auth::id())->get();

              if($duelTeamMembers->isEmpty()){
                $duel["user_type"]  = 'user';
              }else{
                $duelTeamMembers = DuelTeamMember::where('duel_id',$duel['duel_id'])->where('user_id',Auth::id())->first();
                $duel["user_type"] = 'team';
              
                $userTeam = DuelTeam::where('id',$duelTeamMembers->duel_team_id)->first();
                $duel["user_team"] = $userTeam;
              }




             if( $duel["current_participant"] >= $duel["max_participant"]){

              $duel["participant_reached"]  = true;
             }else{
              $duel["participant_reached"]  = false;
             }

           $duel["duel_terminal_time"]  =  Carbon::create($duel['start_date'])->addHours($duel["duration"] + 1 )->format('Y-m-d H:i:s');

           $duel["duel_voting_time"]  =  Carbon::create($duel['start_date'])->addHours($duel["duration"] + 2)->format('Y-m-d H:i:s');

           $duelParticipants = DB::table('duel_participants')
           ->join('users','users.id','duel_participants.user_id')
           ->select(
                
                'duel_participants.panel_id as panel_id',
                'duel_participants.stars as stars',
                'users.username as username',
                'duel_participants.user_id as user_id'
             )
            ->where('duel_participants.duel_id',$duel['duel_id'])
           ->orderBy('duel_participants.created_at', 'desc')->get();
           
           $duelParticipantsArray = [];
           foreach ($duelParticipants as $participant) {
             $newParticipant = (array) $participant;
           
             $duelTeamUser = DuelTeamMember::where('duel_id',$duel['duel_id'])->where('user_id',$newParticipant["user_id"])->get();

             if($duelTeamUser->isEmpty()){
              $newParticipant["type"] = 'user';
             }else{
               $newParticipant["type"] = 'team';

               $duelTeamUser = DuelTeamMember::where('duel_id',$duel['duel_id'])->where('user_id',$newParticipant["user_id"])->first();

               $userTeam = DuelTeam::where('id',$duelTeamUser->duel_team_id)->first();
               $newParticipant["team"] = $userTeam;
             }

             array_push($duelParticipantsArray,$newParticipant);

           }
        
           $duel["duel_participants_array"] =  $duelParticipantsArray;

             $userDuelLike = DuelLike::where('duel_id',$duel['duel_id'])->where('user_id',Auth::id())->get();

                     if($userDuelLike->isEmpty()){
                      $duel['liked_by_user'] = false;
                     }else{
                      $duel['liked_by_user'] = true;
                     }

           array_push($newDuelArray,$duel);
  
        }
         
        
        return $newDuelArray;
     }


     public function startDuel(Request $request){
      
      $duel = Duel::where('duel_id',$request->get('duelId'))->first();

      
      $duel->update([
        "started"=> true,
        "start_date"=> Carbon::now()
       ]);

     }
  

    public function saveDuel(Request $request){
         
         $characters = '1234567890';
         $randomString = $this->generateRandomNumber(4,$characters);

           
         if($request->get('duelId') == null){
          $newDuel = Duel::create([
            "title"=> $request->get('title'),
            "duel_language"=> serialize($request->get('duel_languages')),
            "description"=> $request->get('description'),
            "participant_type"=> serialize($request->get('participant_type')),
            "rules"=> $request->get('rules'),
            "duration"=> $request->get('duration'),
            "judges"=>  serialize($request->get('judges')),
            "user_id"=> Auth::id(),
            "duel_id"=> 'duel_' . $randomString,
            "max_participant"=> $request->get('max_participant')
           ]);
   
           $newDuel->save();

        

           $duelArray = $this->fetchThisDuel($newDuel->duel_id,'user');


           $allConnections = $this->userAllConnected();

        foreach($allConnections as $user){

          $DataArray = [];
     
        $duel = Duel::where('id',$newDuel->id)->get()[0];

        $newArrayduel = (array) $duel;

          array_push($DataArray,$newArrayduel);
           
          $DataArray = serialize($DataArray);

          $newNotification = Notification::create([
            'user_id'=> $user->user_id,
            'type'=> 'new_duel',
            'data_array' => $DataArray,
            'type_id'=> Auth::id(),
            'status'=> 'unread'
          ]);
        
          $newNotification->save();

         broadcast(new UserChannel('new-duel',$duelArray[0],$user->username));
        }

           

           return $duelArray;

         }else{
           $duel = Duel::where('duel_id',$request->get('duelId'))->first();

           $duel->update([
            "title"=> $request->get('title'),
            "duel_language"=> serialize($request->get('duel_languages')),
            "description"=> $request->get('description'),
            "participant_type"=> serialize($request->get('participant_type')),
            "rules"=> $request->get('rules'),
            "duration"=> $request->get('duration'),
            "judges"=>  serialize($request->get('judges')),
            "max_participant"=> $request->get('max_participant')
           ]);

           return 'edit';
         }

    }


    public function duelNotification($baseDuelId,$type){
       
      $presentDuel  = Duel::where('duel_id', $baseDuelId)->first();
            
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

     $checkDuelNotification = Notification::where('user_id',$presentDuel->user_id)
     ->where('type',$type)->where('type_id',$baseDuelId)
     ->where('status','unread')->get();

     if($checkDuelNotification->isEmpty()){
         
        if($presentDuel->user_id != Auth::id()){

           $newNotification = Notification::create([
             'user_id'=> $presentDuel->user_id,
             'type'=> $type,
             'data_array' => $userDataArray,
             'type_id'=> $baseDuelId,
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
}
