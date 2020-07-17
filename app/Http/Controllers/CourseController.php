<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Tutor;
use Illuminate\Support\Facades\Auth;
use App\traits\ManagesImages;
use App\Course;
use App\PaymentHistory;
use App\CourseOutline;
use App\CourseChallenge;
use App\CourseClass;
use DB;

class CourseController extends Controller
{
    use ManagesImages;

    public function __construct()
    {
        $this->setImageDefaultsFromConfig('courseImages');
      
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

    public function saveCourseDetails(Request $request){
        $course = Course::where('id',$request->get('courseid'))->first();
        $tutor = Tutor::where('user_id',Auth::id())->first();
        $randomstring= $this->generateRandomString(5);
        if($course == null){
           
            $course= Course::create([
                'title'=> $request->get('title'),
                'course_code'=> 'course_'.$randomstring,
                'tutor_id'=> $tutor->id,
                'user_id'=> Auth::id(),
                'cost'=> $request->get('cost'),
                'duration'=> $request->get('duration'),
                'image_name'=> 'course_image_'. $randomstring . Auth::id(),
                'image_extension'=> $request->file('image')->getClientOriginalExtension(),
              ]);
             
              $course->save();
              $file = $this->getUploadedFile($request);
              // pass in the file and the model
              $this->saveImageFiles($file,$course); 
        } else{
           if($request->file('image') != null){
            $course = Course::where('id',$request->get('courseid'))->first();
            $course->update([
                'title'=> $request->get('title'),
                'tutor_id'=> $tutor->id,
                'user_id'=> Auth::id(),
                'cost'=> $request->get('cost'),
                'duration'=> $request->get('duration'),
                'image_name'=> 'course_image_'. $randomstring . Auth::id(),
                'image_extension'=> $request->file('image')->getClientOriginalExtension(),
              ]);
              $file = $this->getUploadedFile($request);
              // pass in the file and the model
              $this->saveImageFiles($file,$course); 
           }else{
            $course->update([
                'title'=> $request->get('title'),
                'course_code'=> 'course_'.$randomstring,
                'tutor_id'=> $tutor->id,
                'user_id'=> Auth::id(),
                'cost'=> $request->get('cost'),
                'duration'=> $request->get('duration')
              ]);
           }
        }
        
       
         
       return ['status','OK'];
    }

    public function courseOutlineDetails(Request $request){
       if($request->get('selectedOutlineid') == 0){
        $courseOutline = CourseOutline::create([
            'course_code'=> $request->get('courseCode'),
            'user_id'=>Auth::id(),
            'index'=> $request->get('index'),
            'title'=> $request->get('title'),
            'summary'=> $request->get('summary'),
            'full_outline'=> $request->get('details')
          ]);
          $courseOutline->save();
       }else{
           $courseOutline = CourseOutline::where('id',$request->get('selectedOutlineid'))->first();
           $courseOutline->update([
            'course_code'=> $request->get('courseCode'),
            'user_id'=>Auth::id(),
            'index'=> $request->get('index'),
            'title'=> $request->get('title'),
            'summary'=> $request->get('summary'),
            'full_outline'=> $request->get('details')
           ]);
       }
       

       return ['status','OK'];
    }

    public function courseChallengeDetails(Request $request){
        if($request->get('selectedChallengeid') == 0){
         $courseChallenge = CourseChallenge::create([
             'course_code'=> $request->get('courseCode'),
             'user_id'=>Auth::id(),
             'index'=> $request->get('index'),
             'title'=> $request->get('title'),
             'summary'=> $request->get('summary'),
             'full_details'=> $request->get('details'),
             'attempt_no'=>0
           ]);
           $courseChallenge->save();
        }else{
            $courseChallenge = CourseChallenge::where('id',$request->get('selectedChallengeid'))->first();
            $courseChallenge->update([
             'course_code'=> $request->get('courseCode'),
             'user_id'=>Auth::id(),
             'index'=> $request->get('index'),
             'title'=> $request->get('title'),
             'summary'=> $request->get('summary'),
             'full_details'=> $request->get('details'),
             'attempt_no'=>0
            ]);
        }
        
 
        return ['status','OK'];
     }

    public function courseDetails(){
            
        $tutor = Tutor::where('user_id',Auth::id())->first();
        $rows = DB::table('courses')->where('tutor_id',$tutor->id)
        ->orderBy('courses.created_at', 'desc')
       ->paginate(4);
       return $rows;
    }
    public function fetchDetails($coursecode){
        $rows = DB::table('course_outlines')
         ->select(
             'id as id',
             'created_at as created_at',
             'index as index',
             'summary as summary',
             'course_code as course_code',
             'title as title'
         )
        ->where('course_code',$coursecode)
        ->orderBy('course_outlines.created_at', 'asc')
        ->paginate(4);
        return $rows;
    }

    public function courseWithTutor(){
       
        $rows = DB::table('courses')
        ->join('tutors','tutors.id','courses.tutor_id')
        ->join('users','users.id','tutors.user_id')
        ->select(
            'courses.id as id',
            'tutors.id as tutorId',
            'courses.title as title',
            'courses.cost as cost',
            'users.name as tutorName',
            'start_date as start_date',
            'courses.image_name as image_name',
            'courses.course_code as code',
            'courses.image_extension as image_extension'
        )
        ->orderBy('courses.created_at', 'asc')
       ->paginate(4);

       return $rows;
    }

    public function fetchChallengeDetails($coursecode){
        $rows = DB::table('course_challenges')
         ->select(
             'id as id',
             'created_at as created_at',
             'index as index',
             'summary as summary',
             'course_code as course_code',
             'title as title'
         )
        ->where('course_code',$coursecode)
        ->orderBy('course_challenges.created_at', 'desc')
        ->paginate(4);
        return $rows;
    }

    public function fetchCourseOutline($coursecode){
        $rows = DB::table('course_outlines')
         ->select(
             'id as id',
             'created_at as created_at',
             'index as index',
             'summary as summary',
             'course_code as course_code',
             'title as title'
         )
        ->where('course_code',$coursecode)
        ->orderBy('course_outlines.index', 'asc')
        ->paginate(6);
        return $rows;
    }

    public function fetchTutorDetails($tutorid){
       $rows = DB::table('tutors')
       ->join('users','users.id','tutors.user_id')
       ->select(
           'users.name as tutorName',
           'tutors.profession as profession',
           'tutors.about as about',
           'tutors.twitter_handle as twitter',
           'image_name as image_name',
           'image_extension as image_extension',
           'tutors.git_repo as gitrepo',
           'tutors.linkedin_link as linkedin'
       )
       ->where('tutors.id',$tutorid)->paginate(1);
       return $rows;
    }

    public function fetchCourseChallenge($coursecode){
        $rows = DB::table('course_challenges')
         ->select(
             'id as id',
             'created_at as created_at',
             'index as index',
             'summary as summary',
             'course_code as course_code',
             'title as title'
         )
        ->where('course_code',$coursecode)
        ->orderBy('course_challenges.index', 'asc')
        ->paginate(6);
        return $rows;
    }

    public function fetchFullOutline($outlineid){
        $rows = DB::table('course_outlines')
        ->select(
            'full_outline as full_outline',
            'title as title'
        )
       ->where('id',$outlineid)
       ->paginate(1);
       return $rows;
    }

    public function fetchFullChallenge($challengeid){
        $rows = DB::table('course_challenges')
        ->select(
            'full_details as full_details',
            'title as title'
        )
       ->where('id',$challengeid)
       ->paginate(1);
       return $rows;
    }

    public function savePayment(Request $request){
      $course = Course::where('course_code',$request->get('classcode'))->first();
       
     
       
    if($request->get('status') == 'successful'){

         if($request->get('fromhub') == true){
             $paymenthistory = PaymentHistory::where('id',$request->get('paymentid'))->first();

             $paymenthistory->update([
                'user_id'=> Auth::id(),
                'status'=> $request->get('status'),
                'reference'=> $request->get('reference'),
                'amount'=> $request->get('amount'),
                'trial'=> $request->get('trial')
             ]);

             return ['status','OK'];
         }

        $courseclass = CourseClass::where('course_code',$request->get('classcode'))->get();
        
        if($courseclass->count() == 0){
            $courseclass = CourseClass::create([
                'user_id'=> Auth::id(),
                'course_code'=> $request->get('classcode'),
                'members'=> 1,
                'tutor_id'=> $course->tutor_id,
                'current_stage'=>1
              ]);
                
            $courseclass->save();
     
         
        }else{
            $courseclass = CourseClass::where('course_code',$request->get('classcode'))->first();

            $classmember = $courseclass->members;
    
            if($classmember < 50){
               $classmember += 1;
             $courseclass->update([
                'members'=> $classmember
             ]);
            }else{
             
                $courseclass = CourseClass::create([
                    'user_id'=> Auth::id(),
                    'course_code'=> $request->get('classcode'),
                    'members'=> 1,
                    'tutor_id'=> $course->tutor_id,
                    'current_stage'=>1
                  ]);
                    
                   $courseclass->save();
            }
        }
    
          $payment = PaymentHistory::create([
             'user_id'=> Auth::id(),
             'status'=> $request->get('status'),
             'course_class_id'=> $courseclass->id,
             'reference'=> $request->get('reference'),
             'amount'=> $request->get('amount'),
             'trial'=> $request->get('trial')
          ]);
           $payment->save();
    }
     
       
       return ['status','OK'];
    
    }

    public function allUserPaidCourses(){
        $rows = DB::table('payment_histories')
          ->join('course_classes','course_classes.id','payment_histories.course_class_id')
        ->select(
            'course_classes.course_code as course_code'
        )->where('payment_histories.user_id',Auth::id())->get();

        return $rows;
    }

    public function allUserPaidCourseClasses(){
        $rows = DB::table('payment_histories')
          ->join('course_classes','course_classes.id','payment_histories.course_class_id')
          ->join('courses','courses.course_code','course_classes.course_code')
        ->select(
            'course_classes.course_code as course_code',
            'courses.image_name as image_name',
            'course_classes.id as classid',
            'payment_histories.trial as trial',
            'payment_histories.id as payment_id',
            'courses.image_extension as image_extension',
            'courses.title as title'
        )->where('payment_histories.user_id',Auth::id())->get();

        return $rows;
    }

    public function allClassesTutor(){
        $tutor = Tutor::where('user_id',Auth::id())->first();
        if($tutor != null){
            $rows = DB::table('course_classes')
            ->join('courses','courses.course_code','course_classes.course_code')
          ->select(
              'course_classes.course_code as course_code',
              'courses.image_name as image_name',
              'course_classes.id as classid',
              'courses.image_extension as image_extension',
              'courses.title as title'
          )->where('courses.tutor_id',$tutor->id)->get();
  
          return $rows;
        }
         
        return false;
        
    }

   public function getAllMessages($classid){
    $rows = DB::table('class_messages')
    ->join('course_classes','course_classes.id','class_messages.class_code')
    ->join('tutors','tutors.id','course_classes.tutor_id')
    ->join('users','users.id','class_messages.user_id')
  ->select(
      'users.name as username',
      'class_messages.id as id',
      'class_messages.type as type',
      'class_messages.code_type as code_type',
      'users.id as user_id',
      'tutors.user_id as tutoruserid',
      'class_messages.image_name as image_name',
      'class_messages.image_extension as image_extension',
      'class_messages.content as content',
      'class_messages.created_at as created_at'
  )->where('class_messages.class_code',$classid)
  ->orderBy('class_messages.created_at', 'asc')->take(1000)
  ->get();

  return $rows;
   }
  

  

}
