<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Mail\VerifyUserEmail;
use App\Post;
use App\User;
use App\Duel;
use DB;
use App\Space;
use App\Project;
use App\Profile;
use Illuminate\Support\Facades\Mail;
use App\CustomClass\Curler;
use App\CustomClass\MetaParser;
use App\DuelTeam;

class PageController extends Controller
{


  public function fetchURLMetaData(Request $request){

     
     $baseUrl = $request->get('url');
       
     $response = Http::get($baseUrl);
      
     $parser = new MetaParser($response->body(), $baseUrl);

     
      $result = $parser->getDetails();
       
        

    
      
      $title = $result["title"];

      $description = $result["meta"]["description"];

      $keywords = $result["meta"]["keywords"];


    
      $keywordsString = '';
        if($keywords != false){
            foreach ($keywords as $word) {
                $keywordsString .= $word .',';
            }      
        }
     
       if(count($result["images"]) !=  0){
            $imageCount = count($result["images"]);
        $image = $result["images"][0];
       }else{
        $image = $result["favicon"];
       }
      
      $newDataArray = [
       "title"=> $title,
       "description"=> $description,
       "keywords"=> $keywordsString,
       "image"=> $image,
        "link"=> $request->get('url'),
        "response"=> $response->status()
      ];
    
      $newResultArray = (array) $newDataArray;

     
      return $newResultArray;

  }


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
            $pageLink = '/home#/post/comment/' . $thisUser->username .'/'. $uniqueId;
         }else{
            $pageLink = '/home#/post/' . $thisUser->username .'/'. $uniqueId;
         }
        

        
        }


        if($type == 'duel'){
            $thisDuel = Duel::where('duel_id',$uniqueId)->first();
           
   
           $pageTitle = 'CitonHub-Duels';
           $pageDescription = $thisDuel->title;
   
           
            $imagePath = 'CitonHub.png';
            
               $pageLink = '/duels#/duel/' . $uniqueId .'/board';
            
           
   
           
           }

        if($type == 'duel-team'){

            $thisDuelTeam = DuelTeam::where('team_code',$uniqueId)->first();
            
   
            $pageTitle = 'CitonHub-Duels';
            $pageDescription = 'Join ' . $thisDuelTeam->name . ' on CitonHub Duel';
    
            
             $imagePath = 'CitonHub.png';
             
                $pageLink = '/duels#/duel/' . $thisDuelTeam->duel_id .'/panel\/' . $uniqueId; 
             
            
    

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
          
            
               $pageLink = '/space#\/' . $uniqueId .'/page-loader';
              

           
   
           
           }
     
        return view('pages.link',compact('pageTitle','pageDescription','imagePath','pageLink','referral'));

    }


    public function home(){

        $tablabel = 'home';
        return view('pages.home',compact('tablabel'));
    }
    

     
    public function handleShare($type,$uniqueId){
        
        
    }

    public function sample(){
        return view('pages.codebox');
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
