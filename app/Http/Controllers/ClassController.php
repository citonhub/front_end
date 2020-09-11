<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\ClassMessage;
use App\CodeBoxPage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Auth;
use App\TimeTable;
use App\PushNotification;
use App\traits\ManagesImages;
use App\Events\MessageSent;
use App\traits\PushNotificationTrait;
use App\CourseClass;
use DB;

class ClassController extends Controller
{
    use ManagesImages,PushNotificationTrait;

    public function __construct()
    {
        $this->setImageDefaultsFromConfig('classImages');
      
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
    public function sendCode($messageid){
        $code = ClassMessage::where('id',$messageid)->first();
        return [$code->content,$code->code_type];
    }

    public function triggerNotification($newmessage,$message,$activemembers){
      
        
        $allClassMembers = DB::table('payment_histories')->where('course_class_id',$message->class_code)->get();

       
        

          $remainingMembers = [];
         foreach($allClassMembers as $member){
             foreach($activemembers as $activemember){
                if($activemember['id'] != $member->user_id){
                    array_push($remainingMembers,$member);
                }
             }
         }
         
         $notificationArray= [];
         $allNotification = PushNotification::all();
         foreach($remainingMembers as $member){
            foreach($allNotification as $notification){
                if($notification->user_id == $member->user_id){
                    array_push($notificationArray,$notification);
                }
             }
         }

        
       
       
        

        $payload = [
            "title"=> "New Message!",
            "body"=> $newmessage,
            "icon" => "/imgs/citon.jpg",
            "vibrate"=> "[100,50,100]",
            "data"=> "{ primaryKey: " . $message->id .  " }" 
        ];
    
        $defaultOption = [
            'TTL' => 2000, // defaults to 4 weeks
            'urgency' => 'high', // protocol defaults to "normal"
            'topic' => 'You have a new message', // not defined by default,
            'batchSize' => 200, // defaults to 1000
        ];
         
        $this->generateNotification($notificationArray,json_encode($payload));
         
        $this->sendNotification($defaultOption);
 
        $this->notificationReport();

    }


    public function saveMessage(Request $request){
        $user = Auth::user();
        $randomstring = $this->generateRandomString(5);
        if($request->get('type') == 'text'){
            $classmessage = ClassMessage::create([
             'class_code'=> $request->get('classid'),
             'content'=> $request->get('content'),
             'user_id'=> Auth::id(),
             'type'=> 'text'
            ]);

            $classmessage = DB::table('class_messages')
    ->join('course_classes','course_classes.id','class_messages.class_code')
    ->join('tutors','tutors.id','course_classes.tutor_id')
    ->join('users','users.id','class_messages.user_id')
  ->select(
      'users.name as username',
      'class_messages.id as id',
      'class_messages.type as type',
      'class_messages.code_type as code_type',
      'users.id as user_id',
      'class_messages.class_code as class_code',
      'tutors.user_id as tutoruserid',
      'class_messages.image_name as image_name',
      'class_messages.image_extension as image_extension',
      'class_messages.content as content',
      'class_messages.created_at as created_at'
  )->where('class_messages.id',$classmessage->id)
  ->first();
            $class = CourseClass::where('id',$request->get('classid'))->first();
               broadcast(new MessageSent($classmessage,$user))->toOthers();

          $this->triggerNotification("A new message from " . $classmessage->username, $classmessage,$request->get('activemembers'));
        }
        if($request->get('type') == 'code'){
            $classmessage = ClassMessage::create([
             'class_code'=> $request->get('classid'),
             'content'=> $request->get('code'),
             'user_id'=> Auth::id(),
             'type'=> 'code',
             'code_type'=>$request->get('code_type')
            ]);
            $class = CourseClass::where('id',$request->get('classid'))->first();
            $classmessage = DB::table('class_messages')
            ->join('course_classes','course_classes.id','class_messages.class_code')
            ->join('tutors','tutors.id','course_classes.tutor_id')
            ->join('users','users.id','class_messages.user_id')
          ->select(
              'users.name as username',
              'class_messages.id as id',
              'class_messages.type as type',
              'class_messages.code_type as code_type',
              'users.id as user_id',
              'class_messages.class_code as class_code',
              'tutors.user_id as tutoruserid',
              'class_messages.image_name as image_name',
              'class_messages.image_extension as image_extension',
              'class_messages.content as content',
              'class_messages.created_at as created_at'
          )->where('class_messages.id',$classmessage->id)
          ->first();
            broadcast(new MessageSent($classmessage,$user));
            $this->triggerNotification($classmessage->username . " sent a code sample", $classmessage,$request->get('activemembers'));
        }
        if($request->get('type') == 'image'){
           
            $classmessage = ClassMessage::create([
                'class_code'=> $request->get('classid'),
                'content'=> 'class_image_' . $randomstring .'.' . $request->file('image')->getClientOriginalExtension(),
                'user_id'=> Auth::id(),
                'image_name'=> 'class_image_' . $randomstring,
                'image_extension'=> $request->file('image')->getClientOriginalExtension(),
                'type'=> 'image'
               ]);

               $classmessage->save();
               $file = $this->getUploadedFile($request);
               // pass in the file and the model
               $this->saveImageFiles($file,$classmessage); 
               $classmessage = DB::table('class_messages')
               ->join('course_classes','course_classes.id','class_messages.class_code')
               ->join('tutors','tutors.id','course_classes.tutor_id')
               ->join('users','users.id','class_messages.user_id')
             ->select(
                 'users.name as username',
                 'class_messages.id as id',
                 'class_messages.type as type',
                 'class_messages.code_type as code_type',
                 'class_messages.class_code as class_code',
                 'users.id as user_id',
                 'tutors.user_id as tutoruserid',
                 'class_messages.image_name as image_name',
                 'class_messages.image_extension as image_extension',
                 'class_messages.content as content',
                 'class_messages.created_at as created_at'
             )->where('class_messages.id',$classmessage->id)
             ->first();
               $class = CourseClass::where('id',$request->get('classid'))->first();
               broadcast(new MessageSent($classmessage,$user));
            $this->triggerNotification($classmessage->username . " shared an image", $classmessage,$request->get('activemembers'));
        }
        if($request->get('type') == 'audio'){
            $classmessage = ClassMessage::create([
                'class_code'=> $request->get('classid'),
                'content'=> 'class_audio_' . $randomstring .'.' . $request->file('audio')->getClientOriginalExtension(),
                'user_id'=> Auth::id(),
                'image_name'=> 'class_audio_' . $randomstring,
                'image_extension'=> $request->file('audio')->getClientOriginalExtension(),
                'type'=> 'audio'
               ]);
               $classmessage->save();
               $location = public_path() . '/files/audios/';
              
               $file = $request->file('audio');
               $file->move($location, $classmessage->content);
               $classmessage = DB::table('class_messages')
               ->join('course_classes','course_classes.id','class_messages.class_code')
               ->join('tutors','tutors.id','course_classes.tutor_id')
               ->join('users','users.id','class_messages.user_id')
             ->select(
                 'users.name as username',
                 'class_messages.id as id',
                 'class_messages.type as type',
                 'class_messages.code_type as code_type',
                 'class_messages.class_code as class_code',
                 'users.id as user_id',
                 'tutors.user_id as tutoruserid',
                 'class_messages.image_name as image_name',
                 'class_messages.image_extension as image_extension',
                 'class_messages.content as content',
                 'class_messages.created_at as created_at'
             )->where('class_messages.id',$classmessage->id)
             ->first();
               $class = CourseClass::where('id',$request->get('classid'))->first();
               broadcast(new MessageSent($classmessage,$user));
               $this->triggerNotification($classmessage->username . " shared an audio", $classmessage,$request->get('activemembers'));
        }

        if($request->get('type') == 'recorder'){
            $classmessage = ClassMessage::create([
                'class_code'=> $request->get('classid'),
                'content'=> 'class_audio_' . $randomstring,
                'user_id'=> Auth::id(),
                'image_name'=> 'class_audio_' . $randomstring,
                'type'=> 'audio'
               ]);
               $classmessage->save();
               $location = public_path() . '/files/audios/';
              
               $file = $request->file('audio');
               $file->move($location, $classmessage->content);
               $classmessage = DB::table('class_messages')
               ->join('course_classes','course_classes.id','class_messages.class_code')
               ->join('tutors','tutors.id','course_classes.tutor_id')
               ->join('users','users.id','class_messages.user_id')
             ->select(
                 'users.name as username',
                 'class_messages.id as id',
                 'class_messages.type as type',
                 'class_messages.code_type as code_type',
                 'class_messages.class_code as class_code',
                 'users.id as user_id',
                 'tutors.user_id as tutoruserid',
                 'class_messages.image_name as image_name',
                 'class_messages.image_extension as image_extension',
                 'class_messages.content as content',
                 'class_messages.created_at as created_at'
             )->where('class_messages.id',$classmessage->id)
             ->first();
               $class = CourseClass::where('id',$request->get('classid'))->first();
               broadcast(new MessageSent($classmessage,$user));
               $this->triggerNotification($classmessage->username . " sent a voicenote", $classmessage,$request->get('activemembers'));
        }
        
        if($request->get('type') == 'video'){
            $classmessage = ClassMessage::create([
                'class_code'=> $request->get('classid'),
                'content'=> 'class_video_' . $randomstring .'.' . $request->file('video')->getClientOriginalExtension(),
                'user_id'=> Auth::id(),
                'image_name'=> 'class_video_' . $randomstring,
                'image_extension'=> $request->file('video')->getClientOriginalExtension(),
                'type'=> 'video'
               ]);
               $classmessage->save();
               $location = public_path() . '/files/videos/';
              
               $file = $request->file('video');
               $file->move($location, $classmessage->content);
               $classmessage = DB::table('class_messages')
            ->join('course_classes','course_classes.id','class_messages.class_code')
            ->join('tutors','tutors.id','course_classes.tutor_id')
            ->join('users','users.id','class_messages.user_id')
          ->select(
              'users.name as username',
              'class_messages.id as id',
              'class_messages.type as type',
              'class_messages.code_type as code_type',
              'users.id as user_id',
              'class_messages.class_code as class_code',
              'tutors.user_id as tutoruserid',
              'class_messages.image_name as image_name',
              'class_messages.image_extension as image_extension',
              'class_messages.content as content',
              'class_messages.created_at as created_at'
          )->where('class_messages.id',$classmessage->id)
          ->first();
           $class = CourseClass::where('id',$request->get('classid'))->first();
               broadcast(new MessageSent($classmessage,$user));
               $this->triggerNotification($classmessage->username . " shared a video", $classmessage,$request->get('activemembers'));
        }

        if($request->get('type') == 'document'){
            $classmessage = ClassMessage::create([
                'class_code'=> $request->get('classid'),
                'content'=> 'class_file_' . $randomstring .'.' . $request->file('document')->getClientOriginalExtension(),
                'user_id'=> Auth::id(),
                'image_name'=> $request->get('file_name'),
                'type'=> 'document'
               ]);
               $classmessage->save();
               $location = public_path() . '/files/documents/';
              
               $file = $request->file('document');
               $file->move($location, $classmessage->content);
               $classmessage = DB::table('class_messages')
            ->join('course_classes','course_classes.id','class_messages.class_code')
            ->join('tutors','tutors.id','course_classes.tutor_id')
            ->join('users','users.id','class_messages.user_id')
          ->select(
              'users.name as username',
              'class_messages.id as id',
              'class_messages.type as type',
              'class_messages.code_type as code_type',
              'users.id as user_id',
              'class_messages.class_code as class_code',
              'tutors.user_id as tutoruserid',
              'class_messages.image_name as image_name',
              'class_messages.image_extension as image_extension',
              'class_messages.content as content',
              'class_messages.created_at as created_at'
          )->where('class_messages.id',$classmessage->id)
          ->first();
           $class = CourseClass::where('id',$request->get('classid'))->first();
               broadcast(new MessageSent($classmessage,$user));

               $this->triggerNotification($classmessage->username . " shared a file", $classmessage,$request->get('activemembers'));
        }

       

    
       

            
        return ['status','ok'];
    }

    public function downloadfile($filelink){
    $classmessage = ClassMessage::where('content',$filelink)->first();
       $file = public_path() . '/files/documents/' . $filelink;
    return response()->download($file,$classmessage->image_name);
    }

    public function CodeboxPage(Request $request){
        $randomstring = $this->generateRandomString(7);
        $newcodepage = CodeBoxPage::create([
           'user_id'=> Auth::id(),
           'no_of_views'=> 0,
           'pageid'=> $randomstring,
           'content'=>$request->get('content'),
           'type'=> $request->get('type')
        ]);
        $newcodepage->save();
        return $newcodepage;
    }
    public function sendpage($pageid){
        $resultpage = CodeboxPage::where('pageid',$pageid)->first();

        return view('pages.codebox',compact('resultpage'));
    }
    public function getClassMembers($classid){
        $rows = DB::table('payment_histories')
          ->join('users','users.id','payment_histories.user_id')
        ->select(
            'users.name as username',
            'users.image_name as image_name',
            'users.type as type',
            'users.image_extension as image_extension',
            'users.id as id'
        )->where('payment_histories.course_class_id',$classid)
        ->orderBy('payment_histories.created_at', 'asc')
        ->get();

        return $rows;
    }
    public function saveTimetable(Request $request){
        if($request->get('selectedtimetable') == 0){
            $coursecode = CourseClass::where('id',$request->get('classid'))->first()->course_code;
            $timetable = TimeTable::create([
                'course_code'=> $coursecode,
                'user_id'=>Auth::id(),
                'outline_index'=> $request->get('outlineindex'),
                'class_id'=> $request->get('classid'),
                'date'=> $request->get('date'),
                'start_time'=> $request->get('start'),
                'end_time'=> $request->get('end'),
                'comment'=>$request->get('comment'),
                'is_break'=> $request->get('classbreak')
              ]);
              $timetable->save();
           }else{
            $coursecode = CourseClass::where('id',$request->get('classid'))->first()->course_code;
               $timetable = TimeTable::where('id',$request->get('selectedtimetable'))->first();
               $timetable->update([
                'course_code'=> $coursecode,
                'user_id'=>Auth::id(),
                'outline_index'=> $request->get('outlineindex'),
                'class_id'=> $request->get('classid'),
                'date'=> $request->get('date'),
                'start_time'=> $request->get('start'),
                'end_time'=> $request->get('end'),
                'comment'=>$request->get('comment'),
                'is_break'=> $request->get('classbreak')
               ]);
               }
               return ['status','ok'];
    }

    public function sendTimetable(){
        $rows = DB::table('course_classes')
         ->join('courses','courses.course_code','course_classes.course_code')
         ->join('course_outlines','course_outlines.course_code','course_classes.course_code')
         ->join('time_tables','time_tables.outline_index','course_outlines.index')
         ->select(
                'course_outlines.title as outline_title',
                'time_tables.comment as comment',
                'time_tables.is_break as isBreak',
                'time_tables.date as date',
                'time_tables.start_time as start',
                'time_tables.end_time as end'
         )
      ->get();

      return $rows;
    }

    public function classTimetable($classid){
        $rows = DB::table('time_tables')
        ->where('time_tables.class_id',$classid)
      ->orderBy('time_tables.created_at', 'asc')
      ->paginate(4);

      return $rows;
    }
}
