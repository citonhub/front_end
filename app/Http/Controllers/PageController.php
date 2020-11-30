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
use App\Organization;


class PageController extends Controller
{

    public function handelLink($type,$uniqueId,$referral){
       

        if($type == 'post'){
         $thisPost = Post::where('post_id',$uniqueId)->first();
         $thisUser= DB::table('profiles')
              ->join('users','users.id','profiles.user_id')
              ->select(
                  'users.username as username',
                  'profiles.image_name as image_name',
                  'profiles.image_extension as image_extension'
              )
              ->where('users.id',$thisPost->user_id)
              ->first();

        $pageTitle = $thisUser->username . ' on CitonHub.';
        $pageDescription = '';

         if($thisPost->content != ''){
            
            $html = new \Html2Text\Html2Text($thisPost->content);
            $myText =  $html->getText();
             
           

            $pageDescription = $myText;
         }else{
            $pageDescription = 'Check out this post.';
         }

         if( $thisUser->image_name  == null){
            $imagePath = 'CitonHub.png';
         }else{
            $imagePath = 'profile/' . $thisUser->image_name .'.' . $thisUser->image_extension;
         }

        
            
         if($thisPost->is_comment == 'true'){
            $pageLink = '/hub#/post/comment/' . $thisUser->username .'/'. $uniqueId;
         }else{
            $pageLink = '/hub#/post/' . $thisUser->username .'/'. $uniqueId;
         }
        

        
        }


        if($type == 'duel'){
            $thisDuel = Duel::where('duel_id',$uniqueId)->first();
           
   
           $pageTitle = 'CitonHub-Duels';
           $pageDescription = $thisDuel->title;
   
           
            $imagePath = 'CitonHub.png';
            
               $pageLink = '/dashboard#/duel/' . $uniqueId .'/board';
            
           
   
           
           }

        if($type == 'duel-team'){

            $thisDuelTeam = DuelTeam::where('team_code',$uniqueId)->first();
            
   
            $pageTitle = 'CitonHub-Duels';
            $pageDescription = 'Join ' . $thisDuelTeam->name . ' on CitonHub Duel';
    
            
             $imagePath = 'CitonHub.png';
             
                $pageLink = '/dashboard#/duel/' . $thisDuelTeam->duel_id .'/panel\/' . $uniqueId; 
             
            
    

        }

           if($type == 'space'){
            $thisSpace = Space::where('space_id',$uniqueId)->first();
           
   
           $pageTitle = 'CitonHub-Space';
           $pageDescription = 'Join ' . $thisSpace->name . ' ' . $thisSpace->type  .' on Citonhub.';
   
             if($thisSpace->image_name == null){
                $imagePath = 'CitonHub.png';
             }else{
                $imagePath = 'space/' . $thisSpace->image_name .'.' . $thisSpace->image_extension;
             }
          
            
               $pageLink = '/space#/space/' . $uniqueId .'/channel/content';
              

           
   
           
           }


           if($type == 'project'){
            $thisProject = Project::where('project_slug',$uniqueId)->first();
            
            $thisSpace = Space::where('space_id',$thisProject->space_id)->first();
   
           $pageTitle = 'CitonHub-Project:' . $thisProject->title;
           $pageDescription = 'Check out this project:' . $thisProject->title  .',on Citonhub.';
   
             if($thisSpace->image_name == null){
                $imagePath = 'CitonHub.png';
             }else{
                $imagePath = 'space/' . $thisSpace->image_name .'.' . $thisSpace->image_extension;
             }
          
            
               $pageLink = '/#\/' . $uniqueId .'/page-loader';
              

           
   
           
           }

           if($type == 'bot'){
            $thisbot = Bot::where('bot_id',$uniqueId)->first();
            
         
   
           $pageTitle = 'CitonHub-Bot:' . $thisbot->name;
           $pageDescription = $thisbot->description;
   
             if($thisbot->image_name == null){
                $imagePath = 'CitonHub.png';
             }else{
                $imagePath = 'space/' . $thisbot->image_name .'.' . $thisbot->image_extension;
             }
          
            
             $pageLink = '/#\/bot-engine\/' . $uniqueId ;
              

           
   
           
           }

           if($type == 'org'){
            $thisOrg = Organization::where('organization_id',$uniqueId)->first();
            
         
   
           $pageTitle =  $thisOrg->name . ' on CitonHub';
           $pageDescription = $thisOrg->description;
   
             if($thisOrg->image_name == null){
                $imagePath = 'CitonHub.png';
             }else{
                $imagePath = 'space/' . $thisOrg->image_name .'.' . $thisOrg->image_extension;
             }
          
            
             $pageLink = '/dashboard#\/panel\/main\/' . $uniqueId ;
              

           
   
           
           }


           if($type == 'projectPanel'){
            $thisProject = Project::where('project_slug',$uniqueId)->first();
            
            $thisSpace = Space::where('space_id',$thisProject->space_id)->first();
   
           $pageTitle = 'CitonHub-Project:' . $thisProject->title;
           $pageDescription = 'Check out this project:' . $thisProject->title  .',on Citonhub.';
   
             if($thisSpace->image_name == null){
                $imagePath = 'CitonHub.png';
             }else{
                $imagePath = 'space/' . $thisSpace->image_name .'.' . $thisSpace->image_extension;
             }
          
            
               $pageLink = '/#\/' . $uniqueId .'/panel';
              

           
   
           
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
}
