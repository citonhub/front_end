<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Mail\VerifyUserEmail;
use Illuminate\Support\Facades\Mail;

class PageController extends Controller
{
    public function home(){

        $tablabel = 'home';
        return view('pages.home',compact('tablabel'));
    }

     
    public function handleShare($type,$uniqueId){
        
        
    }

    public function testMail(){
        Mail::to('sample@myemail.com')->send(new VerifyUserEmail());

        return 'done';
    }

    public function space(){
      
       
        $tablabel = 'space';
        return view('pages.space',compact('tablabel'));
    }
    public function duels(){

        $tablabel = 'duels';
        return view('pages.duels',compact('tablabel'));
    }

    public function viewProfile(){
     
        $tablabel = 'view-profile';
        return view('pages.profile',compact('tablabel'));

    }

    public function profile(){

        $tablabel = 'profile';
        return view('pages.profile',compact('tablabel'));
    }
}
