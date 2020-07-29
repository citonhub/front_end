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
use App\PushNotification;
use App\CustomClass\Curler;
use App\CustomClass\MetaParser;
use App\DMList;
use App\traits\PushNotificationTrait;

class SpaceController extends Controller
{

    use ManagesImages,PushNotificationTrait;

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
      ]);

     
 
      $newMessage->save();

      

      

       

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
     
         dd($disconnectedUsers);

         foreach ($activeMembers as $members) {

            $spaceMember = SpaceMember::where('space_id',$request->get('space_id'))->where('user_id',$members->id)->first();
            $spaceMember->update([
               'status'=> false
            ]);
         }


         $this->spaceNotification($request->get('space_id'),'new_message',$disconnectedUsers,$newMessage);
     
        
         
         foreach ($disconnectedUsers as $user) {

            $userUnread = UnreadMessage::where('space_id',$request->get('space_id'))->where('user_id',$user->id)->get();

            if($userUnread->isEmpty()){
               $userUnread = UnreadMessage::create([
               'user_id'=> $user->id,
               'space_id'=> $request->get('space_id'),
               'unread'=> 0
               ]);

               $userUnread->save();
            }

            $userUnread = UnreadMessage::where('space_id',$request->get('space_id'))->where('user_id',$user->id)->first();

             $userUnread->update([
               'unread' => $userUnread->unread + 1
             ]);

          

            broadcast(new UserChannel('message-alert',$request->get('space_id'),$user->username));
         }
         
          
     
        broadcast(new SpaceChannel('new-message',$newMessage[0],$request->get('space_id')))->toOthers();


        
        

      return $newMessage;
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

 
public function fetchMessages($spaceId){

   $userUnread = UnreadMessage::where('space_id',$spaceId)->where('user_id',Auth::id())->first();

     if($userUnread != null){
      $userUnread->update([
      "unread"=> 0
      ]);
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

   if($userUnread->isEmpty()){
      $userSpaceDirect["unread"] = 0;
      
   }else{
      
      $userUnread = UnreadMessage::where('space_id',$userSpaceDirect["space_id"])->where('user_id',Auth::id())->first();
      $userSpaceDirect["unread"] = $userUnread->unread;
   }

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

      

        if($message["type"] == 'image'){
            
            $ImageMessage = ImageMessage::where('message_id',$message["message_id"])->get();

            $message["image"] = $ImageMessage;

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


      
  
        array_push($newMessageArray,$message);
        
    }  

   
    
  
    return $newMessageArray;
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

 public function createSpace(Request $request){

    
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

$userUnread = UnreadMessage::where('space_id',$userSpace["space_id"])->where('user_id',Auth::id())->get();

if($userUnread->isEmpty()){
$userSpace["unread"] = 0;

}else{

$userUnread = UnreadMessage::where('space_id',$userSpace["space_id"])->where('user_id',Auth::id())->first();
$userSpace["unread"] = $userUnread->unread;
}



array_push($newSpaceArray,$userSpace);

}

 return $newSpaceArray[0];

 }

 public function fetchUserSpaces(){
     
    $characters = '123456789abcdefghijklmnopqrstuvwsyz';
       
    $spaceId = $this->generateRandomNumber(12,$characters);

     $userPersonalSpace = Space::where('user_id',Auth::id())->where('type','Personal')->get();
    
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
         'spaces.description as description',
         'spaces.space_id as space_id'
     )
     ->where('space_members.user_id',Auth::id())
     ->where('spaces.type','Personal')
     ->first();


     $userTeamSpaces = DB::table('space_members')
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
                  ->where('spaces.type','Team')
                  ->orderBy('spaces.created_at','desc')
                  ->paginate(40);
      $newTeamArray = [];

      
      foreach ($userTeamSpaces as $space) {
         
         $userSpace = (array) $space;

         $userUnread = UnreadMessage::where('space_id',$userSpace["space_id"])->where('user_id',Auth::id())->get();

         if($userUnread->isEmpty()){
            $userSpace["unread"] = 0;
            
         }else{
            
            $userUnread = UnreadMessage::where('space_id',$userSpace["space_id"])->where('user_id',Auth::id())->first();
            $userSpace["unread"] = $userUnread->unread;
         }

         

         array_push($newTeamArray,$userSpace);

      }
    
       $userChannelSpaces = DB::table('space_members')
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
                  ->orderBy('spaces.created_at','desc')
                  ->where('spaces.type','Channel')
                  ->paginate(40);

      $newChannelArray = [];

      foreach ($userChannelSpaces as $spaceChannel) {
         
         $userSpaceChannel = (array) $spaceChannel;

         $userUnread = UnreadMessage::where('space_id',$userSpaceChannel["space_id"])->where('user_id',Auth::id())->get();

         if($userUnread->isEmpty()){
            $userSpaceChannel["unread"] = 0;
            
         }else{
            
            $userUnread = UnreadMessage::where('space_id',$userSpaceChannel["space_id"])->where('user_id',Auth::id())->first();
            $userSpaceChannel["unread"] = $userUnread->unread;
         }

         

         array_push($newChannelArray,$userSpaceChannel);

      }



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

         if($userUnread->isEmpty()){
            $userSpaceDirect["unread"] = 0;
            
         }else{
            
            $userUnread = UnreadMessage::where('space_id',$userSpaceDirect["space_id"])->where('user_id',Auth::id())->first();
            $userSpaceDirect["unread"] = $userUnread->unread;
         }

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
              ->paginate(15);
            

      
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

     if($newMessage[0]["type"] != null){
          if($newMessage[0]["type"] == 'image' || $newMessage[0]["type"] == 'audio'){

            $messageContent = 'shared an '+ $newMessage[0]["type"];
          }else{
             
            $messageContent = 'shared a '+ $newMessage[0]["type"];
          }
      
     }else{
       
       $html = new \Html2Text\Html2Text($newMessage[0]["content"]);
       $messageContent =  $html->getText();
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
       "badge" => "/imgs/CitonHub.svg",
       "vibrate"=> [1000,500,1000],
       "tag" => $notificationPayload["tag"],
       "icon" => $notificationPayload["image"],
       "image"=> $notificationPayload["image"],
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

   

}

}
