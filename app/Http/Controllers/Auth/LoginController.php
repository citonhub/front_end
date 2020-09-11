<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\Mail\VerifyUserEmail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use App\Notification;
use App\User;
use DB;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/';

    protected $username;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    


    public function __construct()
    {
        $this->middleware('guest')->except('logout');

        $this->username = $this->findUsername();
    }

    public function findUsername()
    {
    
         $login = request()->input('username');
 
        $fieldType = filter_var($login, FILTER_VALIDATE_EMAIL) ? 'email' : 'username';
 
        request()->merge([$fieldType => $login]);
 
        return $fieldType;
    }
 
    /**
     * Get username property.
     *
     * @return string
     */
    public function username()
    {
        return $this->username;
    }


    public function createNotification($request){
        $user = User::where('email',$request->get('username'))->first();

        if($user == null){
            $user = User::where('username',$request->get('username'))->first();
        }

        $defaultNotification = Notification::where('user_id',$user->id)->where('type_id','empty_alert')->get();

        if($defaultNotification->isEmpty()){
           
            $newNotification = Notification::create([
                'user_id'=> $user->id,
                'type'=> 'new_message',
                'data_array' => '[]',
                'type_id'=> 'empty_alert',
                'status'=> 'unread'
              ]);
            
             $newNotification->save();

        }
           
    }

    public function checkIfUserIsVerified($request){
     
        $user = User::where('email',$request->get('username'))->first();

        
        
         if($user != null){
  
       
              if($user->email_verified_at == null){
       

               Mail::to($user->email)->send(new VerifyUserEmail($user));
            
                  
                dd('emailNotVerified');
              }
         }
    }


    public function login(Request $request)
    {
       
        $this->validateLogin($request);

        $this->checkIfUserIsVerified($request);

        $this->createNotification($request);


        // If the class is using the ThrottlesLogins trait, we can automatically throttle
        // the login attempts for this application. We'll key this by the username and
        // the IP address of the client making these requests into this application.
        if (method_exists($this, 'hasTooManyLoginAttempts') &&
            $this->hasTooManyLoginAttempts($request)) {
            $this->fireLockoutEvent($request);

            return $this->sendLockoutResponse($request);
        }

        if ($this->attemptLogin($request)) {
            return $this->sendLoginResponse($request);
        }

        // If the login attempt was unsuccessful we will increment the number of attempts
        // to login and redirect the user back to the login form. Of course, when this
        // user surpasses their maximum number of attempts they will get locked out.
        $this->incrementLoginAttempts($request);

        return $this->sendFailedLoginResponse($request);
    }
}
