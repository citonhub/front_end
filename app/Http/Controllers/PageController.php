<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Post;
use App\Duel;
use DB;
use App\Space;
use App\Project;
use App\Profile;
use App\DuelTeam;
use App\Bot;
use App\HubPost;
use App\Organization;


class PageController extends Controller
{

    public function handelLink($type,$uniqueId){
       

        if($type == 'post'){
         $thisPost = HubPost::where('post_id',$uniqueId)->first();

         $thisUser= DB::table('profiles')
              ->join('users','users.id','profiles.user_id')
              ->select(
                  'users.username as username',
                  'profiles.image_name as image_name',
                  'profiles.image_extension as image_extension'
              )
              ->where('users.id',$thisPost->user_id)
              ->first();

        $pageTitle = $thisPost->title;
        

         $pageDescription = 'Check out my project on CitonHub.';

         if( $thisPost->image_name  == null){
            $imagePath = 'logo.png';
         }else{
            $imagePath = 'posts/' . $thisPost->image_name .'.' . $thisPost->image_extension;
         }

         $pageLink = '/dashboard#/hub/' . $uniqueId;
       
        
        }


        if($type == 'challenge'){
            $thisDuel = Duel::where('duel_id',$uniqueId)->first();
           
   
           $pageTitle = 'Challenges on CitonHub';
           $pageDescription = $thisDuel->title;
   
           
            

            if( $thisDuel->image_name  == null){
               $imagePath = 'logo.png';
            }else{
               $imagePath = 'challenges/' . $thisDuel->image_name .'.' . $thisDuel->image_extension;
            }
            
               $pageLink = '/dashboard#/board/challenges/panel/' . $uniqueId . '/description';
            
           
           }

    

           if($type == 'channel'){
            $thisSpace = Space::where('space_id',$uniqueId)->first();
           
   
           $pageTitle = $thisSpace->name;
           $pageDescription = 'Join ' . $thisSpace->name . ' ' . $thisSpace->type  .' on Citonhub.';
   
             if($thisSpace->image_name == null){
                $imagePath = 'logo.png';
             }else{
                $imagePath = 'space/' . $thisSpace->image_name .'.' . $thisSpace->image_extension;
             }
          
            
               $pageLink = '/dashboard#/channels/' . $uniqueId .'/content';
              
           
           }


           if($type == 'support'){
            $thisSpace = Space::where('space_id',$uniqueId)->first();
           
   
           $pageTitle = $thisSpace->name;
           $pageDescription = 'Support ' . $thisSpace->name . ' ' . $thisSpace->type  .' on Citonhub.';
   
             if($thisSpace->image_name == null){
                $imagePath = 'logo.png';
             }else{
                $imagePath = 'space/' . $thisSpace->image_name .'.' . $thisSpace->image_extension;
             }
          
            
               $pageLink = '/dashboard#/channels/' . $uniqueId .'/payment';
              
           
           }


           if($type == 'referral'){

            $thisUser= DB::table('profiles')
              ->join('users','users.id','profiles.user_id')
              ->select(
                  'users.username as username',
                  'profiles.image_name as image_name',
                  'profiles.image_extension as image_extension',
                  'users.name as name'
              )
              ->where('users.username',$uniqueId)
              ->first();

        $pageTitle = $thisUser->name .' invites you to CitonHub';
        

         $pageDescription = 'Teach, grow your community and earn.';

         if( $thisUser->image_name  == null){
            $imagePath = 'logo.png';
         }else{
            $imagePath = 'profile/' . $thisUser->image_name .'.' . $thisUser->image_extension;
         }

         $pageLink = '/dashboard#/sign-up/' . $uniqueId;
              
           
           }



           if($type == 'project'){
            $thisProject = Project::where('project_slug',$uniqueId)->first();
            
            $thisSpace = Space::where('space_id',$thisProject->space_id)->first();
   
           $pageTitle =   $thisProject->title;
           $pageDescription = 'Check out this project, ' . $thisProject->title  .' on Citonhub.';
   
            
                $imagePath = 'logo.png';
          
          
            
               $pageLink = '/dashboard#/board/projects/panel/' . $uniqueId . '/panel-loader';
              
           
           }



           if($type == 'diary'){
            $thisbot = Bot::where('bot_id',$uniqueId)->first();
            
         
   
           $pageTitle =  $thisbot->name;
           $pageDescription = $thisbot->description;
   
             if($thisbot->image_name == null){
                $imagePath = 'logo.png';
             }else{
                $imagePath = 'space/' . $thisbot->image_name .'.' . $thisbot->image_extension;
             }
          
            
             $pageLink = '/dashboard#/channels/engine/diary/' . $uniqueId ;
              

           
   
           
           }


        return view('pages.link',compact('pageTitle','pageDescription','imagePath','pageLink','referral'));

    }


    public function home(){

        return view('pages.home');
    }

   

    public function terms(){
      
        return view('pages.terms');
    }


    public function dashboard(){

        return view('pages.dashboard');
    }



    public function privacy(){

        return view('pages.privacy');
    }


    public function contact(){

      return view('pages.contact');
    }

    public function showBeta()
    {
      return view('pages.beta');
    }
}
