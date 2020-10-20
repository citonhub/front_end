<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use App\Panel;
use App\FileMessage;
use Response;
use App\PanelRoute;

class PanelController extends Controller
{

  public function createRoute($routeArray,$panelId){
          
    $panel= Panel::where('panel_id',$panelId)->first();
          
      foreach ($routeArray as $route) {
         
         
          $newRoute = PanelRoute::create([
            "panel_id"=> $panelId,
            "path"=> $route['path'],
            "function_name"=> $route['function_name'],
            "file_name"=> $route['file_name'],
            "route_type"=> $route['route_type']
          ]);

          $newRoute->save();

          if($panel->panel_language == 'PHP') {
            $baseUrl = 'https://php.citonhub.com';

            $requestData = [
              "panel_id"=> $panelId,
             "path"=> $route['path'],
             "function_name"=> $route['function_name'],
             "file_name"=> $route['file_name'],
             "route_type"=> $route['route_type']
           ];

           }

           if($panel->panel_language == 'NodeJs') {
            $baseUrl = 'https://nodejs.citonhub.com/node';
            $requestData = [
              "panel_id"=> $panelId,
             "path"=>  $panelId .  $route['path'],
             "function_name"=> $route['function_name'],
             "file_name"=> $route['file_name'],
             "route_type"=> $route['route_type']
           ];
           }

         

       $response = Http::post($baseUrl .'/create-route',$requestData);

      
      
      
       
      }


   }


   public function downloadFile($messageId){
     
    $fileMessage = FileMessage::where('message_id',$messageId)->first();

     if($fileMessage != null){
 
       $location = '/var/www/citonhubnew/public/file/';

       $fileFullName = $fileMessage->file_name . '.' . $fileMessage->file_extension;

       $file = $location . $fileFullName;
        
       $displayName = $fileMessage->display_name;

       return Response::download($file, $displayName);
        
     }

 }


  public function runPanel($panelId){

    $projectPanel = Panel::where('panel_id',$panelId)->first();

    $baseUrl = 'https://php.citonhub.com';

    

     if( $projectPanel != null){

        if($projectPanel->panel_language == 'PHP') {

         $baseUrl = 'https://php.citonhub.com';

        }

        if($projectPanel->panel_language == 'NodeJs') {

         $baseUrl = 'https://nodejs.citonhub.com/node';

        }

       

       $response = Http::get($baseUrl . '/' . $panelId . '/index' );

     

        if($response->status() == '404'){
        
         $routeArray =    [
           [
            "path"=> '/index',
            "function_name"=>'main',
            "file_name"=>'index',
            "route_type"=> 'get'
           ]
           ];
    
           $this->createRoute($routeArray,$panelId);


          $response = Http::get($baseUrl . '/' . $panelId . '/index' );

          return $response->body();
 
       
        
        }else{

         return $response->body();

        }
  
    

     }
    
   
 }
  

   

  public function pageLoader($panelId,$pageName){

  


    $projectPanel = Panel::where('panel_id',$panelId)->first();

    $baseUrl = 'https://php.citonhub.com';

     if( $projectPanel != null){

        if($projectPanel->panel_language == 'PHP') {

         $baseUrl = 'https://php.citonhub.com';

        }

        if($projectPanel->panel_language == 'NodeJs') {

         $baseUrl = 'https://nodejs.citonhub.com/node';

        }

    $response = Http::get($baseUrl .'/' . $panelId . '/' . $pageName );


    if($response->status() == '404'){
         
      $routeArray =    [
        [
         "path"=> '/' . $pageName ,
         "function_name"=> $pageName,
         "file_name"=>'routes',
         "route_type"=> 'get'
        ]
        ];
 
        $this->createRoute($routeArray,$panelId);


       $response = Http::get($baseUrl . '/' . $panelId . '/index' );

       return $response->body();

    
     
     }else{

      return $response->body();

     }
    
     
  }

  

}


}
