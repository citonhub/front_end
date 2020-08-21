<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Space;
use App\SpaceMessage;
use App\ImageMessage;
use App\FileMessage;
use App\AudioMessage;
use App\VideoMessage;
use App\CodeMessage;
use ColorThief\ColorThief;
use App\traits\ManagesImages;
use FFMpeg\FFMpeg;
use App\Team;
use App\SpaceMember;
use Carbon\Carbon;
use App\User;
use App\Events\SpaceChannel;
use App\Events\UserChannel;
use DB;
use App\Notification;
use App\Project;
use App\UnreadMessage;
use App\Panel;
use App\PushNotification;
use App\CustomClass\Curler;
use App\CustomClass\MetaParser;
use App\DMList;
use App\Profile;
use App\ActionMessage;
use App\traits\PushNotificationTrait;
use Response;

class SpaceController extends Controller
{

    use ManagesImages,PushNotificationTrait;


    public $coinState;

    public function __construct()
    {
        $this->setImageDefaultsFromConfig('spaceImage');
      
    }

    public function updateSpace(Request $request){
          $characters = 'abcdefjhijklmnopqrstuvwxyz';
        $randomString =  $this->generateRandomNumber(10,$characters);

       $space = Space::where('space_id',$request->get('space_id'))->first();

         if($request->file('image') != null){
            $space->update([
               "name"=> $request->get('name'),
               "description"=> $request->get('description'),
               "image_name"=> 'space_profile_' . $randomString,
               "image_extension"=> $request->get('image_ext'),
              ]);
      
              
            
              $imageFile = $request->file('image');
      
              list($width, $height) = getimagesize($imageFile);
              $this->imgWidth = $width;
              $this->imgHeight = $height;
            $this->saveImageFiles($imageFile,$space); 
         
            $imagePath = '/var/www/citonhubnew/public/imgs/space/'. $space->image_name . '.' . $space->image_extension;
                
            $dominantColor = ColorThief::getColor($imagePath);
              $colorToRGBA = 'rgba('. $dominantColor[0] . ',' . $dominantColor[1] . ',' . $dominantColor[2] . ',0.6)'; 
            $space->update([
               "background_color"=> $colorToRGBA
            ]);
         }else{

            $space->update([
               "name"=> $request->get('name'),
               "description"=> $request->get('description')
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



   public function saveMessage(Request $request){
        $attachment_type = $request->get('attachment_type');

        if($request->get('attachment_type') == 'voiceRecord'){
           $attachment_type = 'audio';
        }
        
       
           
        $newMessage = SpaceMessage::create([
         "space_id"=>$request->get('space_id'),
         "type"=>$attachment_type,
         "is_reply"=>$request->get('is_reply'),
         "user_id"=> Auth::id(),
         "replied_message_id"=> $request->get('replied_message_id'),
         "content"=> $request->get('content'),
         "temp_id"=> $request->get('temp_id'),
      ]);

     
 
      $newMessage->save();

       $messageSpace = Space::where('space_id',$request->get('space_id'))->first();

        if($messageSpace != null){
         $messageSpace->update([
            "message_track"=> Carbon::now()
         ]);
        }

      

      
      if($attachment_type == 'project'){
       
         $newMessage->update([
            'content' => $request->get('project_data')
         ]);
            
         
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
   
           $this->saveMessageImgs($imageArray,$newMessage->id);            
       }

       $randomString = $newMessage->id;

       if($attachment_type == 'video'){
        
         $file = $request->file('video');
         $ffmpeg = FFMpeg::create();
        $video = $ffmpeg->open($file);
       
        $videoName = 'space_video_'. $randomString ;


        $video
        ->frame(\FFMpeg\Coordinate\TimeCode::fromSeconds(10))
        ->save('/var/www/citonhubnew/public/videos/previewImage/'. $videoName . '.jpg');

      

        $videoExtension =  $request->file('video')->getClientOriginalExtension();
      
        $location = '/var/www/citonhubnew/public/videos/';
              
        $file = $request->file('video');
        $file->move($location, $videoName . '.' . $videoExtension);

       


        $newMessageVideo = VideoMessage::create([
          "video_extension"=> $videoExtension,
          "video_name"=> $videoName,
          "preview_image_url"=> $videoName . '.jpg',
          "message_id"=> $newMessage->id,
          "display_name"=> $request->get('display_name'),
          "background_color"=> '#c5c5c5' 
        ]);

        $newMessageVideo->save();

       $imagePath = '/var/www/citonhubnew/public/videos/previewImage/'. $videoName . '.' . 'jpg';

       $dominantColor = ColorThief::getColor($imagePath);

         $colorToRGBA = 'rgba('. $dominantColor[0] . ',' . $dominantColor[1] . ',' . $dominantColor[2] . ',0.6)'; 
       $newMessageVideo->update([
          "background_color"=> $colorToRGBA
       ]);


        }




       if($request->get('attachment_type') == 'audio'){
         $file = $request->file('audio');
        
      
         $audioName = 'space_audio_'. $randomString ;
  
  
        
  
         $audioExtension =  $request->file('audio')->getClientOriginalExtension();
       
         $location = '/var/www/citonhubnew/public/audio/';
               
         $file = $request->file('audio');
  
         $file->move($location, $audioName . '.' . $audioExtension);
  
        
  
  
         $newMessageAudio = AudioMessage::create([
           "audio_extension"=> $audioExtension,
           "audio_name"=> $audioName,
           "message_id"=> $newMessage->id,
           "display_name"=> $request->get('display_name')
         ]);
  
         $newMessageAudio->save();
  
      }
      

       if($request->get('attachment_type') == 'voiceRecord'){
        
         $file = $request->file('audio');
         
         $ffmpeg = FFMpeg::create();
         $audio = $ffmpeg->open($file);

         $format = new \FFMpeg\Format\Audio\Mp3();
         $format->on('progress', function ($audio, $format) {
           
        });

        $format
          ->setAudioChannels(2)
         ->setAudioKiloBitrate(256);
      
         $audioName = 'space_audio_'. $randomString ;
      
         
  
        
  
         $audioExtension =  'mp3';
       
         $location = '/var/www/citonhubnew/public/audio/';

         $fullPath = $location .  $audioName . '.' . $audioExtension;

         $audio->save($format, $fullPath);
               
         
  
        
  
  
         $newMessageAudio = AudioMessage::create([
           "audio_extension"=> $audioExtension,
           "audio_name"=> $audioName,
           "message_id"=> $newMessage->id,
           "display_name"=> $request->get('display_name')
         ]);
  
         $newMessageAudio->save();
    
       }


       if($attachment_type == 'file'){
        
        $file = $request->file('file');
        
      
       $fileName = 'space_file_'. $randomString ;


      

       $fileExtension =  $request->file('file')->getClientOriginalExtension();
     
       $location = '/var/www/citonhubnew/public/file/';
             
       $file = $request->file('file');

       $file->move($location, $fileName . '.' . $fileExtension);

      


       $newMessageAudio = FileMessage::create([
         "file_extension"=> $fileExtension,
         "file_name"=> $fileName,
         "file_size"=> $request->get('file_size'),
         "message_id"=> $newMessage->id,
         "display_name"=> $request->get('display_name')
       ]);

       $newMessageAudio->save();

    
       }



        if($attachment_type == 'code'){
        
         $newMessageCode = CodeMessage::create([
           "name"=> $request->get('file_name'),
           "language_type"=> $request->get('language_type'),
           "content"=> $request->get('code'),
           "message_id"=> $newMessage->id
         ]);

         $newMessageCode->save();

        }

        $spacemessage =DB::table('space_messages')
        ->join('users','users.id','space_messages.user_id')
        ->select(
            'space_messages.content as content',
            'space_messages.type as type',
            'users.username as username',
            'space_messages.temp_id as temp_id',
            'users.id as user_id',
            'space_messages.space_id as space_id',
            'space_messages.created_at as created_at',
            'space_messages.is_reply as is_reply',
            'space_messages.replied_message_id as replied_message_id',
            'space_messages.id as message_id'
        )
        ->where('space_messages.id',$newMessage->id)
        ->get();

        $timeArray = [];


        $newMessage = $this->MessageEngine($spacemessage,$timeArray);
           
         
       
       

        if($request->get('current_user') == 'empty'){
         $activeMembers = [];
        }else{
           $activeMembers = json_decode($request->get('current_user'));
        }

         foreach ($activeMembers as $members) {

            $spaceMember = SpaceMember::where('space_id',$request->get('space_id'))->where('user_id',$members->id)->first();

            $spaceMember->update([
               'status'=> true
            ]);
         }

        
        

        $spaceMembers = DB::table('space_members')
                    ->join('users','users.id','space_members.user_id')
                    ->select(
                       'users.username as username',
                       'users.name as name',
                       'users.id as id'
                    )->where('space_members.space_id',$request->get('space_id'))
                     ->where('space_members.status',false)
                    ->get();

            
         $disconnectedUsers = $spaceMembers;
     
        
         foreach ($activeMembers as $members) {

            $spaceMember = SpaceMember::where('space_id',$request->get('space_id'))->where('user_id',$members->id)->first();
            $spaceMember->update([
               'status'=> false
            ]);
         }


         $this->spaceNotification($request->get('space_id'),'new_message',$disconnectedUsers,$newMessage);
     
        
         
         foreach ($disconnectedUsers as $user) {

            

            
               $userUnread = UnreadMessage::create([
               'user_id'=> $user->id,
               'space_id'=> $request->get('space_id'),
               'msg_read'=> false,
               'message_id'=> $newMessage[0]["message_id"]
               ]);

               $userUnread->save();
          

          

            broadcast(new UserChannel('message-alert',$newMessage[0],$user->username));
         }
         
          
     
        broadcast(new SpaceChannel('new-message',$newMessage[0],$request->get('space_id')))->toOthers();


        
        

      return $newMessage;
   }


   public function downloadFile($messageId){
     
      $fileMessage = FileMessage::where('message_id',$messageId)->first();

       if($fileMessage != null){
   
         $location = '/var/www/citonhubnew/public/file/';

         $fileFullName = $fileMessage->file_name . '.' . $fileMessage->file_extension;

         $file = $location . $fileFullName;
          
         $displayName = $fileMessage->display_name;

         return Response::download($file, $displayName);
          
       }

   }


   public function saveMessageImgs($imageArray,$newMessageId){
       
        $randomString = $newMessageId;
     
   
    $number = 0;

foreach ($imageArray as $image) {
         
  $number += 1;
  if($image != null){
        
     $ImageFile = $image[0];
     $type = $image[1];

     list($width, $height) = getimagesize($ImageFile);
  
     $imageName = 'space_image_'. $number . '_' . $randomString;

       if($type == null){
        $imageExtension = $ImageFile->getClientOriginalExtension();
       }else{
        $imageExtension = $type;
       }
    
  
     $newImageMessage = ImageMessage::create([
       "message_id"=> $newMessageId,
       "image_name"=> $imageName,
       "image_extension"=> $imageExtension,
       "background_color"=> "#c5c5c5"
     ]);
     $newImageMessage->save();
  
     $file = $this->getUploadedFile($ImageFile);
     // pass in the file and the model
       $this->imgWidth = $width;
       $this->imgHeight = $height;
     $this->saveImageFiles($file,$newImageMessage); 
  
     $imagePath = '/var/www/citonhubnew/public/imgs/space/'. $imageName . '.' . $imageExtension;
         
     $dominantColor = ColorThief::getColor($imagePath);
       $colorToRGBA = 'rgba('. $dominantColor[0] . ',' . $dominantColor[1] . ',' . $dominantColor[2] . ',0.6)'; 
     $newImageMessage->update([
        "background_color"=> $colorToRGBA
     ]);

    }
 }
}

 public function messageTime($messageArray){
 
    $messageTimeArray = [];

     foreach ($messageArray as $message) {
       
        $messageTimeArray[$message->message_id] =  Carbon::create($message->created_at)->toFormattedDateString();

          
     }
 
      $newTimedMessage = array_unique($messageTimeArray);
     

     return $newTimedMessage;
    
     
 }

  public function spaceResource($spaceId){
      
   $spacemessages =DB::table('space_messages')
   ->join('users','users.id','space_messages.user_id')
   ->select(
       'space_messages.content as content',
       'space_messages.type as type',
       'users.username as username',
       'users.id as user_id',
       'space_messages.space_id as space_id',
       'space_messages.created_at as created_at',
       'space_messages.is_reply as is_reply',
       'space_messages.replied_message_id as replied_message_id',
       'space_messages.id as message_id'
   )
    ->where('space_messages.type','!=',null)
    ->where('space_messages.type','!=', 'project')
    ->where('space_messages.type','!=', 'image')
    ->where('space_messages.type','!=', 'code')
   ->where('space_messages.space_id',$spaceId)
   ->paginate(30);



   $timeArray = $this->messageTime($spacemessages);

   $newMessages = $this->MessageEngine($spacemessages,$timeArray);

   return $newMessages;

  }


  public function checkUnreadMessages(Request $request){

    $existingMessages = $request->get('existingMsg');

    if($existingMessages != null){
     
       foreach ($existingMessages as $messageId) {
        
        $unreadMessage = UnreadMessage::where('space_id',$request->get('spaceId'))->where('user_id',Auth::id())->where('message_id',$messageId)->first();

        $unreadMessage->delete();
        
     }
   }

   $allUnread = UnreadMessage::where('space_id',$request->get('spaceId'))->where('user_id',Auth::id())->get();

    $unreadMsgArray =  [];

   foreach ($allUnread as $message) {

      $spacemessages =DB::table('space_messages')
      ->join('users','users.id','space_messages.user_id')
      ->select(
          'space_messages.content as content',
          'space_messages.type as type',
          'users.username as username',
          'users.id as user_id',
          'space_messages.space_id as space_id',
          'space_messages.created_at as created_at',
          'space_messages.is_reply as is_reply',
          'space_messages.replied_message_id as replied_message_id',
          'space_messages.id as message_id'
      )
      ->where('space_messages.id',$message->message_id)
   
      ->first();
      
      array_push($unreadMsgArray,$spacemessages);
      $message->delete();
   }


   $timeArray = $this->messageTime($unreadMsgArray);

   $newMessages = $this->MessageEngine($unreadMsgArray,$timeArray);


    $localMessageCount = $request->get('localMessageCount');
    $unreadCount = count($newMessages);

     $totalMessagesFromLocal = $localMessageCount + $unreadCount;

     $allSpaceMessages =  $spacemessages = DB::table('space_messages')
     ->join('users','users.id','space_messages.user_id')
     ->select(
         'space_messages.content as content',
         'space_messages.type as type',
         'users.username as username',
         'users.id as user_id',
         'space_messages.space_id as space_id',
         'space_messages.created_at as created_at',
         'space_messages.is_reply as is_reply',
         'space_messages.replied_message_id as replied_message_id',
         'space_messages.id as message_id'
     )
     ->where('space_messages.space_id',$request->get('spaceId'))
  
     ->get();

   $realMessageCount = count($allSpaceMessages);

   $msgComplete = true;

    if($totalMessagesFromLocal != $realMessageCount){
      $msgComplete = false;
    }


    $spaceMembers = SpaceMember::where('space_id',$request->get('spaceId'))->get();

     $space = Space::where('space_id',$request->get('spaceId'))->first();


      if($space->type == 'Direct'){



            $userDirectSpaces = DB::table('space_members')
            ->join('spaces','spaces.space_id','space_members.space_id')
            ->select(
                'spaces.image_name as image_name',
                'spaces.image_extension as image_extension',
                'spaces.type as type',
                'spaces.name as name',
                'spaces.background_color as background_color',
                'spaces.description as description',
                'spaces.space_id as space_id',
                'user_1 as user_1',
                'user_2 as user_2'
            )
            ->where('spaces.space_id',$request->get('spaceId'))
            ->paginate(2);

$newDirectArray = [];

foreach ($userDirectSpaces as $spaceDirect) {
   
   $userSpaceDirect = (array) $spaceDirect;

     
   if($userSpaceDirect["user_1"] != Auth::id()){
     
      $user1Info =  DB::table('profiles')
      ->join('users','users.id','profiles.user_id')
      ->select(
          'users.username as username',
          'profiles.image_name as image_name',
          'profiles.user_id as id',
          'users.name as name',
          'profiles.image_extension as image_extension' ,
          'profiles.background_color as background_color'
      )
      ->where('user_id',$userSpaceDirect["user_1"])
      ->first();
     
      $userSpaceDirect["userInfo"] = $user1Info;

   }

   if($userSpaceDirect["user_2"] != Auth::id()){
     
      $user2Info =  DB::table('profiles')
      ->join('users','users.id','profiles.user_id')
      ->select(
          'users.username as username',
          'users.name as name',
          'profiles.image_name as image_name',
          'profiles.user_id as id',
          'profiles.image_extension as image_extension' ,
          'profiles.background_color as background_color'
      )
      ->where('user_id',$userSpaceDirect["user_2"])
      ->first();

      $userSpaceDirect["userInfo"] = $user2Info;

   }

  
   $userUnread = UnreadMessage::where('space_id',$userSpaceDirect["space_id"])->where('user_id',Auth::id())->get();

   
      $userSpaceDirect["unread"] = count($userUnread);
      
   

   array_push($newDirectArray,$userSpaceDirect);

}
      
  $space = $newDirectArray[0];

         }

    
   return [$newMessages,$msgComplete,$spaceMembers,$space];
   
    

    

  }

  public function leaveSpace(Request $request){
   
     $spaceMember = SpaceMember::where('space_id',$request->get('space_id'))->where('user_id',Auth::id())->first();

     if($spaceMember != null){
       
      $spaceMember->delete();
     }

     $AllSpaceMember = SpaceMember::where('space_id',$request->get('space_id'))->get();

      if(count($AllSpaceMember) == 0){

      $space = Space::where('space_id',$request->get('space_id'))->first();

      $space->delete();

      }



  }



  
 public function fetchMessages($spaceId){

   $userUnread = UnreadMessage::where('space_id',$spaceId)->where('user_id',Auth::id())->get();

      foreach ($userUnread as $messageLog) {
         $messageLog->delete();
      }
   
     // mark notifications  as read
     $allNotifications = Notification::where('user_id',Auth::id())->where('type','new_message')->where('type_id',$spaceId)->get();

     foreach ($allNotifications as $notification) {
         
         $notification->update([
        'status'=> 'read'
         ]);
     }
   
     $space = Space::where('space_id',$spaceId)->first();

     $spaceLimit = $space->limit;

     $spaceMembers = SpaceMember::where('space_id',$spaceId)->get();

     $spaceMemberCount = count($spaceMembers);


     $UserMember = SpaceMember::where('user_id',Auth::id())->where('space_id',$spaceId)->get();

      if($UserMember->isEmpty() && ($spaceMemberCount < $spaceLimit)){
        
         $spaceMember = SpaceMember::create([
            'user_id'=> Auth::id(),
            "is_admin"=> false,
            'space_id'=> $spaceId
         ]);
   
         $spaceMember->save();

         $newSpaceMessage = SpaceMessage::create([
          "user_id"=>Auth::id(),
          'space_id'=>$spaceId,
          'type'=>'join',
         'is_reply'=> false,
         ]);

         $newSpaceMessage->save();

         broadcast(new SpaceChannel('new-message',$newSpaceMessage,$spaceId))->toOthers();
          
      }

      if($UserMember->isEmpty() && ($spaceMemberCount >= $spaceLimit)){
        
         return 'space_filled';
          
      }

         
      
   
     $spacemessages =DB::table('space_messages')
     ->join('users','users.id','space_messages.user_id')
     ->select(
         'space_messages.content as content',
         'space_messages.type as type',
         'users.username as username',
         'users.id as user_id',
         'space_messages.space_id as space_id',
         'space_messages.created_at as created_at',
         'space_messages.is_reply as is_reply',
         'space_messages.replied_message_id as replied_message_id',
         'space_messages.id as message_id'
     )
     ->where('space_messages.space_id',$spaceId)

     ->paginate(5000);
     
    

      $timeArray = $this->messageTime($spacemessages);

       


     $thisSpace = DB::table('space_members')
                  ->join('spaces','spaces.space_id','space_members.space_id')
                  ->select(
                      'spaces.image_name as image_name',
                      'spaces.image_extension as image_extension',
                      'spaces.type as type',
                      'spaces.name as name',
                      'spaces.background_color as background_color',
                      'spaces.description as description',
                      'spaces.space_id as space_id'
                  )
                  ->where('spaces.space_id',$spaceId)
                  ->first();
         
         if($thisSpace->type == 'Direct'){



            $userDirectSpaces = DB::table('space_members')
            ->join('spaces','spaces.space_id','space_members.space_id')
            ->select(
                'spaces.image_name as image_name',
                'spaces.image_extension as image_extension',
                'spaces.type as type',
                'spaces.name as name',
                'spaces.background_color as background_color',
                'spaces.description as description',
                'spaces.space_id as space_id',
                'user_1 as user_1',
                'user_2 as user_2'
            )
            ->where('spaces.space_id',$spaceId)
            ->paginate(2);

$newDirectArray = [];

foreach ($userDirectSpaces as $spaceDirect) {
   
   $userSpaceDirect = (array) $spaceDirect;

     
   if($userSpaceDirect["user_1"] != Auth::id()){
     
      $user1Info =  DB::table('profiles')
      ->join('users','users.id','profiles.user_id')
      ->select(
          'users.username as username',
          'profiles.image_name as image_name',
          'profiles.user_id as id',
          'users.name as name',
          'profiles.image_extension as image_extension' ,
          'profiles.background_color as background_color'
      )
      ->where('user_id',$userSpaceDirect["user_1"])
      ->first();
     
      $userSpaceDirect["userInfo"] = $user1Info;

   }

   if($userSpaceDirect["user_2"] != Auth::id()){
     
      $user2Info =  DB::table('profiles')
      ->join('users','users.id','profiles.user_id')
      ->select(
          'users.username as username',
          'users.name as name',
          'profiles.image_name as image_name',
          'profiles.user_id as id',
          'profiles.image_extension as image_extension' ,
          'profiles.background_color as background_color'
      )
      ->where('user_id',$userSpaceDirect["user_2"])
      ->first();

      $userSpaceDirect["userInfo"] = $user2Info;

   }

  
   

    $userUnread = UnreadMessage::where('space_id',$userSpaceDirect["space_id"])->where('user_id',Auth::id())->get();

   
   $userSpaceDirect["unread"] = count($userUnread);


   array_push($newDirectArray,$userSpaceDirect);

}
      
  $thisSpace = $newDirectArray[0];

         }

      $spaceMembers = SpaceMember::where('space_id',$spaceId)->get();
                  

     $newMessages = $this->MessageEngine($spacemessages,$timeArray);


      

     return [$newMessages,$thisSpace,$spaceMembers];
}

    

public function MessageEngine($messageArray,$timeArray){

     $newMessageArray = [];

     foreach ($messageArray as $message) {
        $message = (array) $message;


           foreach ($timeArray as $key => $timer) {
             
             if($key == $message["message_id"]){
               $message["showDate"] = $message["created_at"];
             }
           }

      
        $messageMember = $this->checkDirectMessage($message["space_id"],$message["user_id"]);

         if(count($messageMember) != 0){
            $message["member"] = $messageMember[0];
         }else{
            $message["member"] = [];
         }
         
      
         

        if($message["type"] == 'image'){
            
            $ImageMessage = ImageMessage::where('message_id',$message["message_id"])->get();

            $message["image"] = $ImageMessage;

         }

         if($message["type"] == 'action'){
           
            $ActionMessage = ActionMessage::where('message_id',$message["message_id"])->first();
   
            $message["action"] = $ActionMessage;
         }


         if($message["type"] == 'project'){
            
            $project = Project::where('project_slug',$message["content"])->first();

            $message["project"] = $project;

         }

         if($message["type"] == 'video'){
            
            $VideoMessage = VideoMessage::where('message_id',$message["message_id"])->first();

            $message["video"] = $VideoMessage;

         }

         if($message["type"] == 'join'){
            
            $user = User::where('username',$message["username"])->first();

            $message["user"] = $user;

         }

         if($message["type"] == 'code'){
            
            $CodeMessage = CodeMessage::where('message_id',$message["message_id"])->first();

            $message["code"] = $CodeMessage;

         }

         if($message["type"] == 'file'){
            
            $FileMessage = FileMessage::where('message_id',$message["message_id"])->first();

            $message["file"] = $FileMessage;

         }

         if($message["type"] == 'audio'){
            
            $AudioMessage = AudioMessage::where('message_id',$message["message_id"])->first();

            $message["audio"] = $AudioMessage;

         }
        
         $message["showReply"] = false;

         $message["tagged"] = false;

          $message["loading"] = false;

          
         if($message["is_reply"] == '1'){
            
           
             $repliedMessage = SpaceMessage::where('id',$message["replied_message_id"])->first();
                
             if($repliedMessage != null){
               $returnedResult = $this->subMessageEngine($repliedMessage);
               $message["replied_message"] = $returnedResult[0];
             }
            

         }else{
            $message["replied_message"] = [];
         }
   
         array_push($newMessageArray,$message);
         
     }
   
     return $newMessageArray;
     
}



 public function subMessageEngine($repliedMessage){
     
    
     $spacemessages =DB::table('space_messages')
    ->join('users','users.id','space_messages.user_id')
    ->select(
        'space_messages.content as content',
        'space_messages.type as type',
        'users.username as username',
        'users.id as user_id',
        'space_messages.is_reply as is_reply',
        'space_messages.replied_message_id as replied_message_id',
        'space_messages.id as message_id'
    )
    ->where('space_messages.id', $repliedMessage->id)
    ->get();
    $newMessageArray = [];

    

    foreach ($spacemessages as $message) {
       $message = (array) $message;

       if($message["type"] == 'image'){
           
           $ImageMessage = ImageMessage::where('message_id',$message["message_id"])->get();

           $message["image"] = $ImageMessage;

        }

        if($message["type"] == 'video'){
           
           $VideoMessage = VideoMessage::where('message_id',$message["message_id"])->first();

           $message["video"] = $VideoMessage;

        }

        if($message["type"] == 'action'){
           
         $ActionMessage = ActionMessage::where('message_id',$message["message_id"])->first();

         $message["action"] = $ActionMessage;
      }

        if($message["type"] == 'join'){
            
         $user = User::where('username',$message["username"])->first();

         $message["user"] = $user;

      }

      if($message["type"] == 'project'){
            
         $project = Project::where('project_slug',$message["content"])->first();

         $message["project"] = $project;

      }

        if($message["type"] == 'code'){
           
           $CodeMessage = CodeMessage::where('message_id',$message["message_id"])->first();

           $message["code"] = $CodeMessage;

        }

        if($message["type"] == 'file'){
           
           $FileMessage = FileMessage::where('message_id',$message["message_id"])->first();

           $message["file"] = $FileMessage;

        }

        if($message["type"] == 'audio'){
           
           $AudioMessage = AudioMessage::where('message_id',$message["message_id"])->first();

           $message["audio"] = $AudioMessage;

        }


      
  
        array_push($newMessageArray,$message);
        
    }  

   
    
  
    return $newMessageArray;
 }

  public function deleteMessage(Request $request){

     $message = SpaceMessage::where('id',$request->get('message_id'))->first();

      if($message != null){
       
         $message->delete();
      }
      
  }

 public function checkDirectMessage($spaceId,$member_user_id){

   $spaceMembers = DB::table('space_members')
   ->join('users','users.id','space_members.user_id')
   ->join('profiles','profiles.user_id','space_members.user_id')
   ->select(
      'users.username as username',
      'users.name as name',
      'profiles.image_name as image_name',
      'profiles.image_extension as image_extension', 
      'profiles.background_color as background_color',
      'users.id as id'
   )->where('space_members.space_id',$spaceId)
   ->where('space_members.user_id',$member_user_id)
   ->paginate(20);

   $newSpaceMembersArray = [];

 

foreach ($spaceMembers as $member) {
 $memberArray = (array) $member;
  
     
    $dmList = DMList::where('user_id',Auth::id())->where('other_user_id',$memberArray["id"])->get();
      
    if($dmList->isEmpty()){
      
       $memberArray["direct_present"] = false;

    
    }else{
    
       $memberArray["space_id"] = $dmList[0]->space_id;
       $memberArray["direct_present"] = true;

    }

    
     


 

array_push($newSpaceMembersArray,$memberArray);

}

return $newSpaceMembersArray;
 }

  public function fetchSpaceMembers($spaceId){
      
    $spaceMembers = DB::table('space_members')
                    ->join('users','users.id','space_members.user_id')
                    ->join('profiles','profiles.user_id','space_members.user_id')
                    ->select(
                       'users.username as username',
                       'users.name as name',
                       'profiles.image_name as image_name',
                       'profiles.image_extension as image_extension', 
                       'profiles.background_color as background_color',
                       'users.id as id'
                    )->where('space_members.space_id',$spaceId)
                    ->paginate(20);
         
                    $newSpaceMembersArray = [];
               
                  
            
               foreach ($spaceMembers as $member) {
                  $memberArray = (array) $member;
                   
                      
                     $dmList = DMList::where('user_id',Auth::id())->where('other_user_id',$memberArray["id"])->get();
                       
                     if($dmList->isEmpty()){
                       
                        $memberArray["direct_present"] = false;

                     
                     }else{
                     
                        $memberArray["space_id"] = $dmList[0]->space_id;
                        $memberArray["direct_present"] = true;

                     }

                     
                      
                

                  
                 
                array_push($newSpaceMembersArray,$memberArray);

               }

       return $newSpaceMembersArray;
  }


  public function checkUsersCoin($amount){
     $userProfile = Profile::where('user_id',Auth::id())->first();

     $userCoin = $userProfile->coins;

     

     if($userCoin >= $amount){
       $userProfile->update([
      'coins'=> $userCoin - $amount
       ]);

       broadcast(new UserChannel('coin-removed',$amount,Auth::user()->username));
     }else{
        
      $this->coinState = 'NotEnoughCoin';
     }

  }



 public function createSpace(Request $request){



    if($request->get('type') != 'Direct'){

      $this->checkUsersCoin(1);
   
    }

    if($this->coinState == 'NotEnoughCoin'){
        
      return 'NotEnoughCoin';

    }
    
       $characters = '123456789abcdefghijklmnopqrstuvwsyz';
       
       $spaceId = $this->generateRandomNumber(12,$characters);



     $newSpace = Space::create([
        "name"=> $request->get('name'),
        "user_id"=> Auth::id(),
        "type"=> $request->get('type'),
        "space_id"=> $spaceId,
        "limit" => $request->get('limit')
     ]);
     $newSpace->save();

      if($request->get('type') == 'Team'){
         $newTeam = Team::create([
            "user_id"=> Auth::id(),
            "name"=> $request->get('name'),
            "space_id"=> $newSpace->space_id
         ]);

         $newTeam->save();
      }

      if($request->get('type') == 'Direct'){
         $userInfo = User::where('id',$request->get('memberId'))->first();
         $newSpace->update([
          'user_1'=> Auth::id(),
          'user_2'=> $userInfo->id
         ]);

         $spaceMember1 = SpaceMember::create([
            'user_id'=> Auth::id(),
            "is_admin"=> true,
            'space_id'=> $spaceId
         ]);
   
         $spaceMember1->save();

         $spaceMember2 = SpaceMember::create([
            'user_id'=> $userInfo->id,
            "is_admin"=> true,
            'space_id'=> $spaceId
         ]);
   
         $spaceMember2->save();

         $dmList1 = DMList::create([
            'user_id'=> Auth::id(),
            'other_user_id'=> $userInfo->id,
            'space_id' => $spaceId
         ]);

         $dmList1->save();

         $dmList2 = DMList::create([
            'user_id'=> $userInfo->id,
            'other_user_id'=> Auth::id(),
            'space_id' => $spaceId
         ]);
         
         $dmList2->save();

        
          
         

      }else{
        
         $spaceMember = SpaceMember::create([
            'user_id'=> Auth::id(),
            "is_admin"=> true,
            'space_id'=> $spaceId
         ]);
   
         $spaceMember->save();

      }

      


      $userSpaces = DB::table('space_members')
      ->join('spaces','spaces.space_id','space_members.space_id')
      ->select(
          'spaces.image_name as image_name',
          'spaces.image_extension as image_extension',
          'spaces.type as type',
          'spaces.name as name',
          'spaces.message_track as message_track',
          'spaces.background_color as background_color',
          'spaces.description as description',
          'spaces.space_id as space_id',
          'user_1 as user_1',
          'user_2 as user_2'
      )
      ->where('spaces.id',$newSpace->id)
      ->paginate(10);
$newSpaceArray = [];


foreach ($userSpaces as $space) {

$userSpace = (array) $space;
  if($userSpace["type"] == 'Direct'){
   if($userSpace["user_1"] != Auth::id()){
           
      $user1Info =  DB::table('profiles')
      ->join('users','users.id','profiles.user_id')
      ->select(
          'users.username as username',
          'profiles.image_name as image_name',
          'profiles.user_id as id',
          'users.name as name',
          'profiles.image_extension as image_extension' ,
          'profiles.background_color as background_color'
      )
      ->where('user_id',$userSpace["user_1"])
      ->first();
     
      $userSpace["userInfo"] = $user1Info;
   
   }
   
   if($userSpace["user_2"] != Auth::id()){
     
      $user2Info =  DB::table('profiles')
      ->join('users','users.id','profiles.user_id')
      ->select(
          'users.username as username',
          'users.name as name',
          'profiles.image_name as image_name',
          'profiles.user_id as id',
          'profiles.image_extension as image_extension' ,
          'profiles.background_color as background_color'
      )
      ->where('user_id',$userSpace["user_2"])
      ->first();
   
      $userSpace["userInfo"] = $user2Info;
   
   }
  }


$userUnread = UnreadMessage::where('space_id',$userSpace["space_id"])->where('user_id',Auth::id())->get();


$userSpace["unread"] = count($userUnread);


array_push($newSpaceArray,$userSpace);

}

 if($newSpaceArray[0]["type"] == 'Direct'){
    
   broadcast(new UserChannel('new-direct-space',$newSpaceArray[0],$userInfo->username));
 }




 return $newSpaceArray[0];

 }

 public static function createSlug($str, $delimiter = '-'){

   $slug = strtolower(trim(preg_replace('/[\s-]+/', $delimiter, preg_replace('/[^A-Za-z0-9-]+/', $delimiter, preg_replace('/[&]/', 'and', preg_replace('/[\']/', '', iconv('UTF-8', 'ASCII//TRANSLIT', $str))))), $delimiter));
   return $slug;

} 



 public function createDefaultProject($spaceId){

    $NewProject= Project::where('user_id',Auth::id())->where('title','Citonhub Project')->get();

     if($NewProject->isEmpty()){

      $characters = '1234567890';
      $randomString = $this->generateRandomNumber(9,$characters);
   
      $newPanel = Panel::create([
         "user_id"=> Auth::id(),
         "purpose"=> 'space',
         "panel_id"=> $randomString,
         "is_set"=> false
       ]);
   
      $newPanel->save();
   
      $slugCharacter = 'abcdefghijklmnopqrstuvwxyz1234567890';
   
      $thisSpace = Space::where('space_id',$spaceId)->first();
   
     $slugRandom =  $this->generateRandomNumber(12,$slugCharacter);
      
     $projectSlug = 'project-' . $this->createSlug($thisSpace->name) . '-' . $slugRandom;
      
     $NewProject = Project::create([
        "project_slug"=> $projectSlug,
        "panel_id"=> $randomString,
        "title"=>  'Citonhub Project',
        "stars"=> 0,
        "comments"=> 0,
        "views"=> 0,
        "user_id"=>Auth::id(),
        "type"=> 'Public',
        "space_id"=> $spaceId
     ]);
   
     $NewProject->save();

     }
  
 }


 public function createDefaultSpaces(){


   $characters = '123456789abcdefghijklmnopqrstuvwsyz';
       
   $spaceId = $this->generateRandomNumber(12,$characters);

   $spaceIdChannel = 'channel' . $spaceId;

   $spaceIdTeam = 'team'. $spaceId;


   $spaceCreated = Profile::where('user_id',Auth::id())->first()->initial_space_created;


      if($spaceCreated == false){

      // create channel

         $newSpace = Space::create([
            "name"=> 'My Channel',
            "user_id"=> Auth::id(),
            "type"=> 'Channel',
            "space_id"=>  $spaceIdChannel,
            "limit" => 500
         ]);
         $newSpace->save();



        $spaceMember = SpaceMember::create([
         'user_id'=> Auth::id(),
         "is_admin"=> true,
         'space_id'=> $spaceIdChannel
        ]);

         $spaceMember->save();



    // create channel new action messages

   

    $MessageContent1 = ' <p>Grow your coding community 👫 in channels.
    Invite more people to share codes with you 👩🏾‍💻.
   The more people in your channels, the more
 coins you get to host projects and initiate duels 😃</p>'; 

    $newMessage1 = SpaceMessage::create([
       "space_id"=>$spaceIdChannel,
       "type"=>'action',
       "is_reply"=>false,
       "user_id"=> 93,
       "replied_message_id"=> null,
       "content"=> $MessageContent1
    ]);

    $newMessage1->save();


    // add to home screen message

    $MessageContent12 =  "<p>Add to homescreen 📱.
    Let's be honest with you 😊. We haven't yet figured out how to make the chatting experience really awesome on your browser. While we work on that, we'll really love you to 
    add CitonHub to your homescreen for a better experience 😃</p>"; 

    $newMessage12 = SpaceMessage::create([
       "space_id"=>$spaceIdChannel,
       "type"=> null,
       "is_reply"=>false,
       "user_id"=> 93,
       "replied_message_id"=> null,
       "content"=> $MessageContent12
    ]);

    $newMessage12->save();


    $messageURL1 = 'showShare';
    $messageLabel1 = 'Invite now.';

    $actionMessage1 = ActionMessage::create([
    "message_id"=> $newMessage1->id,
    "url"=> $messageURL1,
    "type"=>'custom',
    "label"=> $messageLabel1
    ]);
    
    $actionMessage1->save();



    // unread channel message

    $userUnread = UnreadMessage::create([
      'user_id'=> Auth::id(),
      'space_id'=> $spaceIdChannel,
      'msg_read'=> 0,
      'message_id'=> $newMessage1->id
      ]);

    $userUnread->save();



    // create team channel 
   

         $newSpace2 = Space::create([
            "name"=> 'My Team',
            "user_id"=> Auth::id(),
            "type"=> 'Team',
            "space_id"=>  $spaceIdTeam,
            "limit" => 500
         ]);
         $newSpace2->save();



        $spaceMember2 = SpaceMember::create([
         'user_id'=> Auth::id(),
         "is_admin"=> true,
         'space_id'=> $spaceIdTeam
        ]);

         $spaceMember2->save();



    // create team new action messages

   

    $MessageContentTeam1 = '<p>While anyone can join your channels,teams are private, and for a small number of developers 👨‍💻 you want to collaborate with.
    Assign projects to teams,
    and everyone has access to the same panel.</p> '; 

    $newMessage3 = SpaceMessage::create([
       "space_id"=>$spaceIdTeam,
       "type"=>'action',
       "is_reply"=>false,
       "user_id"=> 93,
       "replied_message_id"=> null,
       "content"=> $MessageContentTeam1
    ]);

    $newMessage3->save();

    // add to home screen

    $MessageContent22 = "<p>Add to homescreen 📱.
    Let's be honest with you 😊. We haven't yet figured out how to make the chatting experience really awesome on your browser. While we work on that, we'll really love you to 
    add CitonHub to your homescreen for a better experience 😃</p>"; 

    $newMessage22 = SpaceMessage::create([
       "space_id"=>$spaceIdTeam,
       "type"=> null,
       "is_reply"=>false,
       "user_id"=> 93,
       "replied_message_id"=> null,
       "content"=> $MessageContent22
    ]);

    $newMessage22->save();


    $messageURL3 = 'showShare';
    $messageLabel3 = 'Invite Team Members';

    $actionMessage3 = ActionMessage::create([
    "message_id"=> $newMessage3->id,
    "url"=> $messageURL3,
    "type"=>'custom',
    "label"=> $messageLabel3
    ]);
    
    $actionMessage3->save();


    // unread channel message

    $userUnread2 = UnreadMessage::create([
      'user_id'=> Auth::id(),
      'space_id'=> $spaceIdTeam,
      'msg_read'=> 0,
      'message_id'=> $actionMessage3->id
      ]);

    $userUnread2->save();



      // update space creation status

      $profileUser = Profile::where('user_id',Auth::id())->first();
     
      $profileUser->update([
       'initial_space_created'=> true
      ]);


      }



 }


 public function fetchTrendChannels($query = ''){

          $userChannelSpaces = DB::table('spaces')
                  ->join('users','users.id','spaces.user_id')
                  ->select(
                      'spaces.image_name as image_name',
                      'spaces.image_extension as image_extension',
                      'spaces.type as type',
                      'spaces.name as name',
                      'users.username as username',
                      'spaces.message_track as message_track',
                      'spaces.background_color as background_color',
                      'spaces.description as description',
                      'spaces.space_id as space_id'
                  )
                  ->orderBy('spaces.message_track','desc')
                  ->where('spaces.type','Channel')
                  ->where('spaces.name','like', '%' . $query . '%')
                  ->where('spaces.name','!=','My Channel')
                  ->paginate(10);

      $newChannelArray = [];

      foreach ($userChannelSpaces as $spaceChannel) {
         
         $userSpaceChannel = (array) $spaceChannel;

         $spaceMembers = SpaceMember::where('space_id',$userSpaceChannel["space_id"])->get();

         
            $userSpaceChannel["members"] = count($spaceMembers);

         
           
         

           
               array_push($newChannelArray,$userSpaceChannel);
            

      }

      return $newChannelArray;
   
 }


 public function fetchChannelsProfile($username){

    $user = User::where('username',$username)->first();

    if($user != null){
     
      $userChannelSpaces = DB::table('space_members')
      ->join('spaces','spaces.space_id','space_members.space_id')
      ->select(
          'spaces.image_name as image_name',
          'spaces.image_extension as image_extension',
          'spaces.type as type',
          'spaces.name as name',
          'spaces.message_track as message_track',
          'spaces.background_color as background_color',
          'spaces.description as description',
          'spaces.space_id as space_id'
      )
      ->where('space_members.user_id',$user->id)
      ->orderBy('spaces.created_at','desc')
      ->where('spaces.type','Channel')
      ->paginate(20);

$newChannelArray = [];

foreach ($userChannelSpaces as $spaceChannel) {

$userSpaceChannel = (array) $spaceChannel;

$userUnread = UnreadMessage::where('space_id',$userSpaceChannel["space_id"])->where('user_id',$user->id)->get();

$spaceMembers = SpaceMember::where('space_id',$userSpaceChannel["space_id"])->get();

$userSpaceChannel["unread"] = count($userUnread);

$userSpaceChannel["members"] = count($spaceMembers);



array_push($newChannelArray,$userSpaceChannel);

}
  
return  $newChannelArray;
        
    }else{

      return [];
    }

 }




 public function fetchUserSpaces(){
     
    $characters = '123456789abcdefghijklmnopqrstuvwsyz';
       
    $spaceId = $this->generateRandomNumber(12,$characters);

     $userPersonalSpace = Space::where('user_id',Auth::id())->where('type','Personal')->get();

     $userAssitanceAccount = Space::where('user_2',93)->where('user_1',Auth::id())->where('type','Direct')->get();

     $spaceCreated = Profile::where('user_id',Auth::id())->first()->initial_space_created;


      if($spaceCreated == false && $userAssitanceAccount->isEmpty()){

      
       $newSpace = Space::create([
          "name"=> null,
          "user_id"=> Auth::id(),
          "type"=> 'Direct',
          "space_id"=> $spaceId,
          "limit" => 2,
          "user_1"=>Auth::id(),
          "user_2"=> 93,
       ]);


       $spaceMember1 = SpaceMember::create([
         'user_id'=> Auth::id(),
         "is_admin"=> true,
         'space_id'=> $spaceId
      ]);

      $spaceMember1->save();

      $spaceMember2 = SpaceMember::create([
         'user_id'=> 93,
         "is_admin"=> true,
         'space_id'=> $spaceId
      ]);

      $spaceMember2->save();

      $dmList1 = DMList::create([
         'user_id'=> Auth::id(),
         'other_user_id'=> 93,
         'space_id' => $spaceId
      ]);

      $dmList1->save();

      $dmList2 = DMList::create([
         'user_id'=> 93,
         'other_user_id'=> Auth::id(),
         'space_id' => $spaceId
      ]);
      
      $dmList2->save();

      $userUnread = UnreadMessage::create([
         'user_id'=> Auth::id(),
         'space_id'=> $spaceId,
         'msg_read'=> 0
         ]);

      $userUnread->save();


      $defaultNotification = Notification::where('user_id',Auth::id())->where('type_id','empty_alert')->get();

      if(!$defaultNotification->isEmpty()){
      
         $defaultNotification = Notification::where('user_id',Auth::id())->where('type_id','empty_alert')->first();

         $defaultNotification->update([
        "status"=> 'read'
         ]);

      }



      $MessageContent = 'Hi <strong>' . Auth::user()->name . '</strong>, I\'m Olutola 😃. I\'m here to help with any problem you have using CitonHub.'; 
  
      $newMessage = SpaceMessage::create([
         "space_id"=>$spaceId,
         "type"=>null,
         "is_reply"=>false,
         "user_id"=> 93,
         "replied_message_id"=> null,
         "content"=> $MessageContent
      ]);
   

      }

        

     if($userPersonalSpace->isEmpty()){
       
      $personalSpace = Space::create([
        "name"=> 'You',
        "user_id"=> Auth::id(),
        "type"=> 'Personal',
        "space_id"=> $spaceId,
        "limit"=> 1
      ]);

      $personalSpace->save();

      $spaceMember = SpaceMember::create([
         'user_id'=> Auth::id(),
         "is_admin"=> false,
         'space_id'=> $spaceId
      ]);

      $spaceMember->save();
  }

  $userPersonalSpace = DB::table('space_members')
  ->join('spaces','spaces.space_id','space_members.space_id')
  ->select(
      'spaces.image_name as image_name',
      'spaces.image_extension as image_extension',
      'spaces.type as type',
      'spaces.background_color as background_color',
      'spaces.name as name',
      'spaces.message_track as message_track',
      'spaces.description as description',
      'spaces.space_id as space_id'
  )
  ->where('space_members.user_id',Auth::id())
  ->where('spaces.type','Personal')
  ->first();
  


       if($spaceCreated == false){

         $this->createDefaultProject($userPersonalSpace->space_id);
       }
   
      $this->createDefaultSpaces();

      

     $allPersonalProjects = Project::where('space_id',$userPersonalSpace->space_id)->where('title','Citonhub Project')->get();

     


     $userTeamSpaces = DB::table('space_members')
                  ->join('spaces','spaces.space_id','space_members.space_id')
                  ->select(
                      'spaces.image_name as image_name',
                      'spaces.image_extension as image_extension',
                      'spaces.type as type',
                      'spaces.message_track as message_track',
                      'spaces.name as name',
                      'spaces.background_color as background_color',
                      'spaces.description as description',
                      'spaces.space_id as space_id'
                  )
                  ->where('space_members.user_id',Auth::id())
                  ->where('spaces.type','Team')
                  ->orderBy('spaces.created_at','desc')
                  ->paginate(40);
      $newTeamArray = [];

      
      foreach ($userTeamSpaces as $space) {
         
         $userSpace = (array) $space;

         $userUnread = UnreadMessage::where('space_id',$userSpace["space_id"])->where('user_id',Auth::id())->get();

       
            $userSpace["unread"] = count($userUnread);
            
        

         

         array_push($newTeamArray,$userSpace);

      }
    
       $userChannelSpaces = DB::table('space_members')
                  ->join('spaces','spaces.space_id','space_members.space_id')
                  ->select(
                      'spaces.image_name as image_name',
                      'spaces.image_extension as image_extension',
                      'spaces.type as type',
                      'spaces.name as name',
                      'spaces.message_track as message_track',
                      'spaces.background_color as background_color',
                      'spaces.description as description',
                      'spaces.space_id as space_id'
                  )
                  ->where('space_members.user_id',Auth::id())
                  ->orderBy('spaces.created_at','desc')
                  ->where('spaces.type','Channel')
                  ->paginate(40);

      $newChannelArray = [];

      foreach ($userChannelSpaces as $spaceChannel) {
         
         $userSpaceChannel = (array) $spaceChannel;

         $userUnread = UnreadMessage::where('space_id',$userSpaceChannel["space_id"])->where('user_id',Auth::id())->get();

         $userSpaceChannel["unread"] = count($userUnread);

         

         array_push($newChannelArray,$userSpaceChannel);

      }


       $userSuggestedSpaces = DB::table('spaces')->where('user_id',94)->where('type','Channel')->orderBy('created_at','desc')->paginate(10);

      $newSuggestedArray = [];
     
      

      foreach ($userSuggestedSpaces as $spaceChannel) {
         
         $userSpaceChannel = (array) $spaceChannel;


         $spaceMembers = SpaceMember::where('space_id',$userSpaceChannel["space_id"])->get();

         
            $userSpaceChannel["members"] = count($spaceMembers);

         
            $userIsMember =  SpaceMember::where('space_id',$userSpaceChannel["space_id"])->where('user_id',Auth::id())->get();
        
           
            if($userIsMember->isEmpty()){
               array_push($newSuggestedArray,$userSpaceChannel);
            }
         
      }



      $userDirectSpaces = DB::table('space_members')
                  ->join('spaces','spaces.space_id','space_members.space_id')
                  ->select(
                      'spaces.image_name as image_name',
                      'spaces.image_extension as image_extension',
                      'spaces.type as type',
                      'spaces.name as name',
                      'spaces.background_color as background_color',
                      'spaces.message_track as message_track',
                      'spaces.description as description',
                      'spaces.space_id as space_id',
                      'user_1 as user_1',
                      'user_2 as user_2'
                  )
                  ->orderBy('spaces.created_at','desc')
                  ->where('space_members.user_id',Auth::id())
                  ->where('spaces.type','Direct')
                  ->paginate(40);

      $newDirectArray = [];

      foreach ($userDirectSpaces as $spaceDirect) {
         
         $userSpaceDirect = (array) $spaceDirect;

           
         if($userSpaceDirect["user_1"] != Auth::id()){
           
            $user1Info =  DB::table('profiles')
            ->join('users','users.id','profiles.user_id')
            ->select(
                'users.username as username',
                'profiles.image_name as image_name',
                'profiles.user_id as id',
                'users.name as name',
                'profiles.image_extension as image_extension' ,
                'profiles.background_color as background_color'
            )
            ->where('user_id',$userSpaceDirect["user_1"])
            ->first();
           
            $userSpaceDirect["userInfo"] = $user1Info;
   
         }

         if($userSpaceDirect["user_2"] != Auth::id()){
           
            $user2Info =  DB::table('profiles')
            ->join('users','users.id','profiles.user_id')
            ->select(
                'users.username as username',
                'users.name as name',
                'profiles.image_name as image_name',
                'profiles.user_id as id',
                'profiles.image_extension as image_extension' ,
                'profiles.background_color as background_color'
            )
            ->where('user_id',$userSpaceDirect["user_2"])
            ->first();

            $userSpaceDirect["userInfo"] = $user2Info;
   
         }
      
        
         $userUnread = UnreadMessage::where('space_id',$userSpaceDirect["space_id"])->where('user_id',Auth::id())->get();


         $userSpaceDirect["unread"] = count($userUnread);



         array_push($newDirectArray,$userSpaceDirect);

      }

      $userProjects = DB::table('space_members')
              ->join('projects','projects.space_id','space_members.space_id')
              ->select(
                 'projects.project_slug as project_slug',
                 'projects.title as title'
              )
              ->where('space_members.user_id',Auth::id())
              ->orderBy('projects.created_at','desc')
              ->paginate(50);
            

      
         $fullSpaceArray = [$userPersonalSpace,$newTeamArray,$newChannelArray,$userProjects,$newDirectArray];

        return $fullSpaceArray;

 }


  public function ownerList(){
   $ownerListArray = DB::table('space_members')
   ->join('spaces','spaces.space_id','space_members.space_id')
   ->select(
       'spaces.image_name as image_name',
       'spaces.image_extension as image_extension',
       'spaces.type as type',
       'spaces.name as name',
       'spaces.background_color as background_color',
       'spaces.description as description',
       'spaces.space_id as space_id'
   )
   ->where('space_members.user_id',Auth::id())
   ->where('spaces.type','!=','Channel')
   ->orderBy('spaces.created_at','asc')
   ->get();

    return $ownerListArray;
  }




  public function spaceNotification($baseSpaceId,$type,$userArrayBase,$newMessage){
       
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

     foreach ($userArrayBase as $user) {
      
    // trigger push notification
      $messageContent = '';


      $spaceData = DB::table('spaces')->where('space_id',$baseSpaceId)->first();
      

     if($newMessage[0]["type"] != null){
          if($newMessage[0]["type"] == 'image' || $newMessage[0]["type"] == 'audio'){

            $messageContent = "shared an " . $newMessage[0]["type"] . "\n";
          }else{
             
            $messageContent = 'shared a ' . $newMessage[0]["type"] . "\n";
          }

         
      
     }else{
       
       $html = new \Html2Text\Html2Text($newMessage[0]["content"]);
       $messageContent =  $html->getText();
     }

    if($spaceData->type != 'Direct'){
      $messageContent .= "\r\n"  . Auth::user()->username;
    }

     if($userData->background_color == null){
        $imagePathPost = '/imgs/usernew.png';
     }else{
       $imagePathPost = '/imgs/profile/' . $userData->image_name . '.' . $userData->image_extension;
     }

    $spaceData = DB::table('spaces')->where('space_id',$baseSpaceId)->first();
    
    $baseUrl = 'space#/space/' . $baseSpaceId . '/channel/content/user';

     $notificationPayload = [
        "owner_id" => $user->id,
        "name"=> $userData->username,
        "body"=> $messageContent,
        "tag"=> $baseSpaceId,
        "type"=> $type,
        "image"=> $imagePathPost,
        "space"=> $spaceData,
        "url"=> $baseUrl
      ];

      
  
      $this->triggerNotification($notificationPayload);

     // trigger internal notification

      $checkSpaceNotification = Notification::where('user_id',$user->id)
     ->where('type',$type)->where('type_id',$baseSpaceId)
     ->where('status','unread')->get();

  if($checkSpaceNotification->isEmpty()){
      
  

        $newNotification = Notification::create([
          'user_id'=> $user->id,
          'type'=> $type,
          'data_array' => $userDataArray,
          'type_id'=> $baseSpaceId,
          'status'=> 'unread'
        ]);
      
        $newNotification->save();


     

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
          "space"=>$notificationPayload["space"],
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

}
