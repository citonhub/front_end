<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Providers\RouteServiceProvider;
use App\User;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Http\Request;
use App\Mail\VerifyUserEmail;
use Illuminate\Support\Facades\Mail;
use App\Events\UserChannel;
use App\Profile;
use App\Jobs\HandleMail;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = RouteServiceProvider::HOME;

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function generateRandomNumber($length = 10) {
        $characters = '1234567890';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }
        return $randomString;
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {
        return Validator::make($data, [
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
            'password' => ['required', 'string', 'min:8'],
           
        ]);
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(Request $request)
    {
          $referralUser = User::where('username',$request->get('referral'))->first();
            if($referralUser != null){
          $referralUserProfile = Profile::where('user_id',$referralUser->id)->first();
           
                $referralUserProfile->update([
                 'coins'=> $referralUserProfile->coins + 5
                ]);
      
              
            }

            $newUser =  User::create([
                'name' => $request->get('name'),
                'email' => $request->get('email'),
                'password' => Hash::make($request->get('password')),
                'verification_code'=> $this->generateRandomNumber(6)
            ]);

              $userProfile = Profile::create([
                "user_id"=> $newUser->id,
                "image_name"=> null,
                "image_extension"=> null,
                "coins"=> 10,
                "interests"=> null,
                "about"=> null
               ]);
            
               $userProfile->save();
           
         

               dispatch(new HandleMail($newUser));
       

        return  ["status","ok"];
    }
}
