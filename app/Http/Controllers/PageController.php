<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;


class PageController extends Controller
{


    public function hub(){

        $tablabel = 'hub';
        return view('pages.home',compact('tablabel'));
    }

   

    public function space(){
      
       
        $tablabel = 'space';
        return view('pages.space',compact('tablabel'));
    }




    public function duels(){

        $tablabel = 'duels';
        return view('pages.duels',compact('tablabel'));
    }



    public function profile(){

        $tablabel = 'profile';
        return view('pages.profile',compact('tablabel'));
    }
}
