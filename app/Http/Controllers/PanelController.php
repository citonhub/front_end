<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\CodeBox;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Http;
use App\Panel;
use App\PanelRoute;
use App\DBTable;
use App\DuelParticipant;
use App\TableField;
use App\TableEntry;
use App\Project;
use App\TableEntryTrack;
use App\DuelPanel;
use App\DuelTeamMember;
use App\PanelResource;
use App\DuelTeam;
use Carbon\Carbon;
use App\Events\PanelChannel;

class PanelController extends Controller
{
  

    public function generateRandomNumber($length = 10,$characters) {
        
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[rand(0, $charactersLength - 1)];
        }   
        return $randomString;
         }


    public function CreateDBProject(Request $request){
      $projectPanel = Project::where('project_slug',$request->get('project_slug'))->first();

      $panel = Panel::where('panel_id',$projectPanel->panel_id)->first();
        
      $newTable = DBTable::create([
         
        "user_id"=> Auth::id(),
        "name"=> $request->get('table_name'),
        "panel_id"=> $panel->id

      ]);

      $newTable->save();

      $defaultFields = [
       [
           "table_id"=> $newTable->id,
           "user_id"=> Auth::id(),
           "name"=> 'id',
           "data_type"=> 'Int'
       ],
      [
        "table_id"=> $newTable->id,
        "user_id"=> Auth::id(),
        "name"=> 'created_at',
        "data_type"=> 'DateTime'  
      ]
      ];

         $this->createTableFields($defaultFields);

         broadcast(new PanelChannel('new-DBtable',$newTable,$request->get('project_slug')))->toOthers();

         return $newTable;
    }
      
    
    public function CreateDB(Request $request){

      $duelId = $request->get('duel_id');
 
      
      $duelPanel = DuelPanel::where('duel_id',$duelId)->where('user_id',Auth::id())->get();

    
      if($duelPanel->isEmpty()){
        
       $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->get();
        if($duelTeamMembers->isEmpty()){
          
         return;

        }else{
         $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->first();

          $duelTeam = DuelTeam::where('id',$duelTeamMembers->duel_team_id)->first();

         $duelPanel = DuelPanel::where('panel_id',$duelTeam->panel_id)->first(); 
         
        }

      }else{

        $duelTeamMembers = DuelTeamMember::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->get();

        if($duelTeamMembers->isEmpty()){
            
            $duelPanel = null;

        }else{
         $duelTeamMembers = DuelTeamMember::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->first();

          $duelTeam = DuelTeam::where('id',$duelTeamMembers->duel_team_id)->first();

         $duelPanel = DuelPanel::where('panel_id',$duelTeam->panel_id)->first(); 
         
        }

       $duelPanel = DuelPanel::where('duel_id',$duelId)->where('user_id',Auth::id())->first();
      }


        $panel = Panel::where('panel_id',$duelPanel->panel_id)->first();
        
      $newTable = DBTable::create([
         
        "user_id"=> Auth::id(),
        "name"=> $request->get('table_name'),
        "panel_id"=> $panel->id

      ]);

      $newTable->save();

      $defaultFields = [
       [
           "table_id"=> $newTable->id,
           "user_id"=> Auth::id(),
           "name"=> 'id',
           "data_type"=> 'Int'
       ],
      [
        "table_id"=> $newTable->id,
        "user_id"=> Auth::id(),
        "name"=> 'created_at',
        "data_type"=> 'DateTime'  
      ]
      ];

         $this->createTableFields($defaultFields);
      
         if($duelTeam != null){
          broadcast(new PanelChannel('new-DBtable',$newTable,$duelTeam->team_code))->toOthers();
         }

      return $newTable;
    }


    public function CreateDBTableField(Request $request){

      $newDBField = TableField::create([
        "db_table_id"=> $request->get('table_id'),
        "user_id"=> Auth::id(),
        "name"=> $request->get('name'),
        "data_type"=>$request->get('data_type') 
      ]);

      $newDBField->save();

    }


    public function createTableFields($defaultFields){
        foreach ($defaultFields as $field) {
            
            $newDBField = TableField::create([
              "db_table_id"=> $field['table_id'],
              "user_id"=> Auth::id(),
              "name"=> $field['name'],
              "data_type"=> $field['data_type'] 
            ]);

            $newDBField->save();
        }
    }


     public function SaveSettingsProject(Request $request){

      $projectPanel = Project::where('project_slug',$request->get('project_slug'))->first();

        $panel = Panel::where('panel_id',$projectPanel->panel_id)->first();
          
        $characters = '1234567890';
        $randomString = $this->generateRandomNumber(9,$characters);
          
         $this->deleteFilesFolder($projectPanel->panel_id);
         
           $backEndFilesArray = [];
            $frontEndfilesArray = [];
        
          foreach ($request->panel_code_files as $file) {
             
              if($file['type'] == 'back_end'){
                    array_push($backEndFilesArray, $file);
              }else{
                  array_push($frontEndfilesArray,$file);
              }
          }



         
        
          $this->deleteControllerFiles($backEndFilesArray);

          $this->recreateController($backEndFilesArray,$randomString);


          $this->deleteFilesFromServer($panel->id);

         

           
          $this->recreateFileFolder($randomString);

           $this->recreateDefaultFiles($randomString);


          $this->recreateFiles($frontEndfilesArray,$randomString);

          $this->createDefaultController($randomString);


        

        $projectPanel->update([
         "panel_id"=> $randomString
        ]);

        $panel->update([
        "app_type" => $request->get('app_type'),
        "is_set"=> true,
        "panel_id"=> $randomString,
        "panel_language"=>$request->get('panel_language')
        ]);

         
       

       $routeArray = [
         [
          "path"=> '/index',
          "function_name"=>'main',
          "file_name"=>'index',
          "route_type"=> 'get'
         ]
       ];

      $this->createRoute($routeArray,$randomString);
     }
        

     public function SaveSettings(Request $request){

      $duelId = $request->get('duel_id');
 
      
      $duelPanel = DuelPanel::where('duel_id',$duelId)->where('user_id',Auth::id())->get();

    
      if($duelPanel->isEmpty()){
        
       $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->get();
        if($duelTeamMembers->isEmpty()){
          
         return;

        }else{
         $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->first();

          $duelTeam = DuelTeam::where('id',$duelTeamMembers->duel_team_id)->first();

         $duelPanel = DuelPanel::where('panel_id',$duelTeam->panel_id)->first(); 
         
        }

      }else{
       $duelPanel = DuelPanel::where('duel_id',$duelId)->where('user_id',Auth::id())->first();
      }

        $panel = Panel::where('panel_id',$duelPanel->panel_id)->first();
          
        $characters = '1234567890';
        $randomString = $this->generateRandomNumber(9,$characters);
          
         $this->deleteFilesFolder($duelPanel->panel_id);
         
           $backEndFilesArray = [];
            $frontEndfilesArray = [];
        
          foreach ($request->panel_code_files as $file) {
             
              if($file['type'] == 'back_end'){
                    array_push($backEndFilesArray, $file);
              }else{
                  array_push($frontEndfilesArray,$file);
              }
          }



         
        
          $this->deleteControllerFiles($backEndFilesArray);

          $this->recreateController($backEndFilesArray,$randomString);


          $this->deleteFilesFromServer($panel->id);

         

           
          $this->recreateFileFolder($randomString);

           $this->recreateDefaultFiles($randomString);


          $this->recreateFiles($frontEndfilesArray,$randomString);

          $this->createDefaultController($randomString);


        

        $duelPanel->update([
         "panel_id"=> $randomString
        ]);

         $duelId = $request->get('duel_id');

        $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->get();
        if(!$duelTeamMembers->isEmpty()){
           

          $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->first();

          $duelTeam = DuelTeam::where('id',$duelTeamMembers->duel_team_id)->first();

          $duelTeam->update([
            "panel_id"=> $randomString
          ]);
         

        }
      

        $panel->update([
        "app_type" => $request->get('app_type'),
        "is_set"=> true,
        "panel_id"=> $randomString,
        "panel_language"=>$request->get('panel_language')
        ]);

         
        $duelParticipant = DuelParticipant::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->first();

        $duelParticipant->update([
          "panel_id"=> $randomString,
        ]);




       

       $routeArray = [
         [
          "path"=> '/index',
          "function_name"=>'main',
          "file_name"=>'index',
          "route_type"=> 'get'
         ]
       ];

      $this->createRoute($routeArray,$randomString);
        
     }

    public function deleteFilesFromServer($panelId){
        $allCodeFiles = CodeBox::where('panel_id',$panelId)->get();

         foreach ($allCodeFiles as $codeFile) {
          $codeFile->delete();
         }
    }
 

    public function deleteControllerFiles($backEndFilesArray){

        foreach ($backEndFilesArray as $backEndFile) {
           
            $baseUrl = 'https://php.citonhub.com';
            $requestData = [
                'panel_id' =>  $backEndFile['panel_id'],
                'file_name' =>  $backEndFile['file_name']
            ];
           $response = Http::post($baseUrl .'/delete-controller',$requestData);

        }
    }


     public function deleteFilesFolder($oldPanelId){

        $baseUrl = 'https://php.citonhub.com';
        $requestData = [
            'panel_id' => $oldPanelId,
        ];
       $response = Http::post($baseUrl .'/delete-view-folder',$requestData);

     }

     public function recreateFileFolder($newpanelId){
        
       
        $baseUrl = 'https://php.citonhub.com';
        $requestData = [
            'panel_id' =>  $newpanelId,
            'username' =>  Auth::user()->username
        ];
       $response = Http::post($baseUrl .'/create-view',$requestData);

     }

     public function recreateController($backEndFilesArray,$newpanelId){
        
        foreach ($backEndFilesArray as $file) {
            
            $baseUrl = 'https://php.citonhub.com';
            $requestData = [
                'panel_id' =>  $newpanelId,
                'file_name'=> $file['file_name'],
                'content'=> $file['content']
            ];
            $response = Http::post($baseUrl .'/create-controller',$requestData);

        }
       

     }


     public function recreateFiles($frontEndfilesArray,$newpanelId){
      
            foreach ($frontEndfilesArray as $file) {
              
                $baseUrl = 'https://php.citonhub.com';
                $requestData = [
                    'panel_id' =>  $newpanelId,
                    'file_name'=> $file['file_name'],
                    'content'=> $file['content']
                ];
               $response = Http::post($baseUrl .'/create-view-file',$requestData);

            }

     }


  public function recreateDefaultFiles($newpanelId){
     
    $panelId = '$panel';
    
// index html file
$htmlContent = "<!DOCTYPE html>
<html>
<head>
<title>Let's Build it!</title>
<!-- include style file -->
 

@include($panelId  . '.Styles.index')


</head>
<body>
        
<h1>Your First Page on CitonHub</h1>

<!-- include script file -->

@include($panelId  . '.Scripts.index')


</body>
</html>";

$cssContent = "<style>
body{
  background: #c5c5c5;
}
</style>";

$javaScriptContent = "<script>
var start_building = \"Let's build it!\";
</script>";

        
$HtmlCodeBox = CodeBox::create([
  "content"=> $htmlContent,
  "language_type"=> "HTML",
  "file_name"=> "index",
  "type"=> "front_end",
  "user_id"=> Auth::id(),
  "panel_id"=> $newpanelId
]);

$HtmlCodeBox->save();

$CssCodeBox = CodeBox::create([
  "content"=> $cssContent,
  "language_type"=> "CSS",
  "file_name"=> "index",
  "type"=> "front_end",
  "user_id"=> Auth::id(),
  "panel_id"=> $newpanelId
]);

$CssCodeBox->save();





$JavascriptCodeBox = CodeBox::create([
  "content"=> $javaScriptContent,
  "language_type"=> "JAVASCRIPT",
  "file_name"=> "index",
  "type"=> "front_end",
  "user_id"=> Auth::id(),
  "panel_id"=> $newpanelId
]);

$JavascriptCodeBox->save();

  

          $baseUrl = 'https://php.citonhub.com';
          $requestData = [
              'panel_id' =>  $newpanelId,
              'file_name'=> 'index',
              'content'=> $htmlContent,
              'language_type'=> 'HTML'
          ];
         $response = Http::post($baseUrl .'/create-view-file',$requestData);

         

         $baseUrl = 'https://php.citonhub.com';
         $requestData = [
             'panel_id' =>  $newpanelId,
             'file_name'=> 'index',
             'content'=> $cssContent,
             'language_type'=> 'CSS'
         ];
        $response = Http::post($baseUrl .'/create-view-file',$requestData);


        $baseUrl = 'https://php.citonhub.com';
        $requestData = [
            'panel_id' =>  $newpanelId,
            'file_name'=> 'index',
            'content'=> $javaScriptContent,
            'language_type'=> 'JAVASCRIPT'
        ];
       $response = Http::post($baseUrl .'/create-view-file',$requestData);

    

}

public function createDefaultController($newpanelId){
    $thisVar = '$this';
    $panelId = '$panelId';
$phpContent ="
public function main(){
  return $thisVar" . '' . "->showView('index');
}  ";
  $PHPCodeBox = CodeBox::create([
    "content"=> $phpContent,
    "language_type"=> "PHP",
    "file_name"=> "index",
    "type"=> "back_end",
    "user_id"=> Auth::id(),
    "panel_id"=> $newpanelId
  ]);

  $baseUrl = 'https://php.citonhub.com';
  $requestData = [
      'panel_id' =>  $newpanelId,
      'file_name'=> 'index',
      'content'=> $phpContent
  ];
 $response = Http::post($baseUrl .'/create-controller',$requestData);
  
 
}



     public function updateCodeFile($fileArray,$newpanelId){
   
        foreach ($fileArray as $file) {
            $codeBox = CodeBox::where('id',$file['id'])->first();

            $codeBox->update([
             "panel_id"=> $newpanelId
            ]);
        } 
     }


     public function createRoute($routeArray,$panelId){
         
            
        foreach ($routeArray as $route) {
           
           
            $newRoute = PanelRoute::create([
              "panel_id"=> $panelId,
              "path"=> $route['path'],
              "function_name"=> $route['function_name'],
              "file_name"=> $route['file_name'],
              "route_type"=> $route['route_type']
            ]);

            $newRoute->save();

            $baseUrl = 'https://php.citonhub.com';
            $requestData = [
                "panel_id"=> $panelId,
              "path"=> $route['path'],
              "function_name"=> $route['function_name'],
              "file_name"=> $route['file_name'],
              "route_type"=> $route['route_type']
            ];

         $response = Http::post($baseUrl .'/create-route',$requestData);

        
         dd($response->body());
         
        
         
        }


     }

     public function saveRouteFileProject(Request $request){

      $projectPanel = Project::where('project_slug',$request->get('project_slug'))->first();


      $panel = Panel::where('panel_id',$projectPanel->panel_id)->first();

       
     
      $newRoute = PanelRoute::create([
          "panel_id"=> $projectPanel->panel_id,
          "path"=> $request->get('path'),
          "function_name"=> $request->get('function_name'),
          "file_name"=> $request->get('file_name'),
          "route_type"=> $request->get('route_type')
        ]);

        $newRoute->save();

        $baseUrl = 'https://php.citonhub.com';
        $requestData = [
          "panel_id"=> $projectPanel->panel_id,
          "path"=> $request->get('path'),
          "function_name"=> $request->get('function_name'),
          "file_name"=> $request->get('file_name'),
          "route_type"=> $request->get('route_type')
        ];

     $response = Http::post($baseUrl .'/create-route',$requestData);
      
     broadcast(new PanelChannel('new-route',$newRoute,$request->get('project_slug')))->toOthers();

     return $newRoute;
       
   }



     public function saveRouteFile(Request $request){
        
      $duelId = $request->get('duel_id');

      $duelPanel = DuelPanel::where('duel_id',$duelId)->where('user_id',Auth::id())->get();

      if($duelPanel->isEmpty()){
        
       $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->get();
        if($duelTeamMembers->isEmpty()){
          
         return;

        }else{
         $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->first();

          $duelTeam = DuelTeam::where('id',$duelTeamMembers->duel_team_id)->first();

         $duelPanel = DuelPanel::where('panel_id',$duelTeam->panel_id)->first(); 
         
        }

      }else{

        $duelTeamMembers = DuelTeamMember::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->get();

        if($duelTeamMembers->isEmpty()){
            
            $duelPanel = null;

        }else{
         $duelTeamMembers = DuelTeamMember::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->first();

          $duelTeam = DuelTeam::where('id',$duelTeamMembers->duel_team_id)->first();

         $duelPanel = DuelPanel::where('panel_id',$duelTeam->panel_id)->first(); 
         
        }

       $duelPanel = DuelPanel::where('duel_id',$duelId)->where('user_id',Auth::id())->first();
      }

        $panel = Panel::where('panel_id',$duelPanel->panel_id)->first();

         
       
        $newRoute = PanelRoute::create([
            "panel_id"=> $duelPanel->panel_id,
            "path"=> $request->get('path'),
            "function_name"=> $request->get('function_name'),
            "file_name"=> $request->get('file_name'),
            "route_type"=> $request->get('route_type')
          ]);

          $newRoute->save();

          $baseUrl = 'https://php.citonhub.com';
          $requestData = [
            "panel_id"=> $duelPanel->panel_id,
            "path"=> $request->get('path'),
            "function_name"=> $request->get('function_name'),
            "file_name"=> $request->get('file_name'),
            "route_type"=> $request->get('route_type')
          ];

       $response = Http::post($baseUrl .'/create-route',$requestData);

       if($duelTeam != null){
        broadcast(new PanelChannel('new-route',$newRoute,$duelTeam->team_code))->toOthers();
       }

       return $newRoute;
       
         
     }

     


    public function SaveCodeFileProject(Request $request){

      $projectPanel = Project::where('project_slug',$request->get('project_slug'))->first();

      if($request->get('code_category') == 'front_end'){
          
          $newCodeBox = CodeBox::create([
             "content"=> 'start coding...',
             "language_type"=> $request->get('language_type'),
             "file_name"=> $request->get('file_name'),
             "type"=> $request->get('code_category'),
             "user_id"=> Auth::id(),
             "panel_id"=> $projectPanel->panel_id
          ]);

          $newCodeBox->save();

      
          $baseUrl = 'https://php.citonhub.com';
      $requestData = [
          'panel_id' =>  $projectPanel->panel_id,
          'file_name' =>  $request->get('file_name'),
          'content'=> 'start coding...',
          'language_type' => $request->get('language_type')
      ];
     $response = Http::post($baseUrl .'/create-view-file',$requestData);

     
      broadcast(new PanelChannel('new-file',$newCodeBox,$request->get('project_slug')))->toOthers();
   

     return $newCodeBox;
       
      }

      if($request->get('code_category') == 'back_end' && $request->get('language_type') == 'PHP'){
        
          $baseUrl = 'https://php.citonhub.com';
          $requestData = [
              'panel_id' =>  $projectPanel->panel_id,
              'file_name'=> $request->get('file_name'),
              'content'=> ''
          ];
      $response = Http::post($baseUrl .'/create-controller',$requestData);
         
        if($response->status() == 200){
           
          $newCodeBox = CodeBox::create([
              "content"=> 'start coding...',
              "language_type"=> $request->get('language_type'),
              "file_name"=> $request->get('file_name'),
              "type"=> $request->get('code_category'),
              "user_id"=> Auth::id(),
              "panel_id"=> $projectPanel->panel_id
           ]);

           $newCodeBox->save();

        }
      }

    }

    


    public function SaveCodeFile(Request $request){
      
      $duelPanel = DuelPanel::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->get();
          
      $duelTeam = null;

      if($duelPanel->isEmpty()){
        
       $duelTeamMembers = DuelTeamMember::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->get();
        if($duelTeamMembers->isEmpty()){
            
         return;

        }else{
         $duelTeamMembers = DuelTeamMember::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->first();

          $duelTeam = DuelTeam::where('id',$duelTeamMembers->duel_team_id)->first();

         $duelPanel = DuelPanel::where('panel_id',$duelTeam->panel_id)->first(); 
         
        }

      }else{
        $duelTeamMembers = DuelTeamMember::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->get();

        if($duelTeamMembers->isEmpty()){
            
            $duelPanel = null;

        }else{
         $duelTeamMembers = DuelTeamMember::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->first();

          $duelTeam = DuelTeam::where('id',$duelTeamMembers->duel_team_id)->first();

         $duelPanel = DuelPanel::where('panel_id',$duelTeam->panel_id)->first(); 
         
        }

       

       $duelPanel = DuelPanel::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->first();
      }

     


        if($request->get('code_category') == 'front_end'){
            
            $newCodeBox = CodeBox::create([
               "content"=> 'start coding...',
               "language_type"=> $request->get('language_type'),
               "file_name"=> $request->get('file_name'),
               "type"=> $request->get('code_category'),
               "user_id"=> Auth::id(),
               "panel_id"=> $duelPanel->panel_id
            ]);

            $newCodeBox->save();

        
            $baseUrl = 'https://php.citonhub.com';
        $requestData = [
            'panel_id' =>  $duelPanel->panel_id,
            'file_name' =>  $request->get('file_name'),
            'content'=> 'start coding...',
            'language_type' => $request->get('language_type')
        ];
       $response = Http::post($baseUrl .'/create-view-file',$requestData);   
       
       if($duelTeam != null){
        broadcast(new PanelChannel('new-file',$newCodeBox,$duelTeam->team_code))->toOthers();
       }

       return $newCodeBox;
         
        }

        if($request->get('code_category') == 'back_end' && $request->get('language_type') == 'PHP'){
          
            $baseUrl = 'https://php.citonhub.com';
            $requestData = [
                'panel_id' =>  $duelPanel->panel_id,
                'file_name'=> $request->get('file_name'),
                'content'=> ''
            ];
        $response = Http::post($baseUrl .'/create-controller',$requestData);
           
          if($response->status() == 200){
             
            $newCodeBox = CodeBox::create([
                "content"=> 'start coding...',
                "language_type"=> $request->get('language_type'),
                "file_name"=> $request->get('file_name'),
                "type"=> $request->get('code_category'),
                "user_id"=> Auth::id(),
                "panel_id"=> $duelPanel->panel_id
             ]);
 
             $newCodeBox->save();
      
             if($duelTeam != null){
              broadcast(new PanelChannel('new-file',$newCodeBox,$duelTeam->team_code))->toOthers();
             }
             
             return $newCodeBox;
          }
        }
     
       
      
    }

     

    public function saveCodeContentProject(Request $request){
        
      $projectPanel = Project::where('project_slug',$request->get('project_slug'))->first();

      $CodeBox = CodeBox::where('panel_id',$projectPanel->panel_id)->where('id',$request->get('file_id'))->first();

      

       $CodeBox->update([
          'content'=> $request->get('content')
       ]);
         
     
       $this->updateRealFile($CodeBox,$request);


       broadcast(new PanelChannel('new-file-update',$CodeBox,$request->get('project_slug')))->toOthers();

    }


    public function saveCodeContent(Request $request){
        
      $duelPanel = DuelPanel::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->get();

      if($duelPanel->isEmpty()){
        
       $duelTeamMembers = DuelTeamMember::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->get();
        if($duelTeamMembers->isEmpty()){
          
         return;

        }else{
         $duelTeamMembers = DuelTeamMember::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->first();

          $duelTeam = DuelTeam::where('id',$duelTeamMembers->duel_team_id)->first();

         $duelPanel = DuelPanel::where('panel_id',$duelTeam->panel_id)->first(); 
         
        }

      }else{

        $duelTeamMembers = DuelTeamMember::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->get();

        if($duelTeamMembers->isEmpty()){
            
            $duelPanel = null;

        }else{
         $duelTeamMembers = DuelTeamMember::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->first();

          $duelTeam = DuelTeam::where('id',$duelTeamMembers->duel_team_id)->first();

         $duelPanel = DuelPanel::where('panel_id',$duelTeam->panel_id)->first(); 
         
        }

        
       $duelPanel = DuelPanel::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->first();
      }


        $CodeBox = CodeBox::where('panel_id',$duelPanel->panel_id)->where('id',$request->get('file_id'))->first();

        

         $CodeBox->update([
            'content'=> $request->get('content')
         ]);
           
       
         $this->updateRealFile($CodeBox,$request);
       
         if($duelTeam != null){
          broadcast(new PanelChannel('new-file-update',$CodeBox,$duelTeam->team_code))->toOthers();
         }
    }




     public function updateRealFile($codeBox,$request){

          if($request->get('code_category') == 'front-end'){
            
            $baseUrl = 'https://php.citonhub.com';
            $requestData = [
                'panel_id' =>  $codeBox->panel_id,
                'file_name' =>  $codeBox->file_name,
                'content'=> $codeBox->content,
                'language_type'=> $codeBox->language_type
            ];

           
           $response = Http::post($baseUrl .'/create-view-file',$requestData);
          
         

          }

          if($request->get('code_category') == 'back-end'){
            
            $baseUrl = 'https://php.citonhub.com';
            $requestData = [
                'panel_id' =>  $codeBox->panel_id,
                'file_name'=> $codeBox->file_name,
                'content'=> $codeBox->content
            ];
           $response = Http::post($baseUrl .'/create-controller',$requestData);

         
           
          }
          
       

     }

  
    public function fetchCodeFiles($duelId){
      
        $duelPanel = DuelPanel::where('duel_id',$duelId)->where('user_id',Auth::id())->get();

         if($duelPanel->isEmpty()){
           
          $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->get();
           if($duelTeamMembers->isEmpty()){
             
            return;

           }else{
            $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->first();

             $duelTeam = DuelTeam::where('id',$duelTeamMembers->duel_team_id)->first();

            $duelPanel = DuelPanel::where('panel_id',$duelTeam->panel_id)->first(); 
            
           }

         }else{
          $duelPanel = DuelPanel::where('duel_id',$duelId)->where('user_id',Auth::id())->first();
         }

        $panel = Panel::where('panel_id',$duelPanel->panel_id)->first();
        
        $panelDTables = DBTable::where('panel_id',$panel->id)->get();

           $newDbTable = [];


          foreach ($panelDTables as $table) {
            
            $tablenew = (array) $table;
               
             
            $tableFields = TableField::where('db_table_id',$table["id"])->get();

            $table['fields'] = $tableFields;
              
             array_push($newDbTable,$table);
          }

       
       
         $allRouteConfig = PanelRoute::where('panel_id',$duelPanel->panel_id)->get();
        $allCodeBoxes = CodeBox::where('panel_id',$duelPanel->panel_id)->orderBy('code_boxes.created_at', 'desc')->get();

      return [$allCodeBoxes,$panel,$allRouteConfig,$newDbTable];

    }


     public function fetchCodeFilesProject($projectSlug){
       
      $projectPanel = Project::where('project_slug',$projectSlug)->first();

      $panel = Panel::where('panel_id',$projectPanel->panel_id)->first();
      
      $panelDTables = DBTable::where('panel_id',$panel->id)->get();

         $newDbTable = [];


        foreach ($panelDTables as $table) {
          
          $tablenew = (array) $table;
             
           
          $tableFields = TableField::where('db_table_id',$table["id"])->get();

          $table['fields'] = $tableFields;
            
           array_push($newDbTable,$table);
        }

     
     
       $allRouteConfig = PanelRoute::where('panel_id',$projectPanel->panel_id)->get();
      $allCodeBoxes = CodeBox::where('panel_id',$projectPanel->panel_id)->orderBy('code_boxes.created_at', 'desc')->get();

      $panelResources = PanelResource::where('panel_id',$projectPanel->panel_id)->get();

    return [$allCodeBoxes,$panel,$allRouteConfig,$newDbTable,$panelResources];

     }


    public function CreateDBTableEntry(Request $request){

       $lastTableEntry = TableEntry::where('table_id',$request->get('table_id'))->orderBy('created_at','desc')->first();
        
       $counter = 1;

       $FieldArray = $request->get('fieldEntries');

       if($lastTableEntry != null){
        $counter = $lastTableEntry->entry_id + 1;
       }

        $tableIndexId = TableField::where('db_table_id',$FieldArray[0]["db_table_id"])->where('name','id')->first()->id;

        $tableCreatedId = TableField::where('db_table_id',$FieldArray[0]["db_table_id"])->where('name','created_at')->first()->id;
         
        $idField = TableEntry::create([
          "entry_id" => $counter,
          "table_field_id"=>$tableIndexId,
          "table_id"=> $FieldArray[0]["db_table_id"],
          "content"=> $counter
        ]);

         $idField->save();

         


       foreach ($FieldArray as $entry) {
         
        $counter = 1;

        if($lastTableEntry != null){
         $counter = $lastTableEntry->entry_id + 1;
        }

        $newEntry = TableEntry::create([
         "entry_id" => $counter,
         "table_field_id"=> $entry["id"],
         "table_id"=> $entry["db_table_id"],
         "content"=> $entry["content"]
        ]);
         
         $newEntry->save();
       }

       $createdDate = TableEntry::create([
        "entry_id" => $counter,
        "table_field_id"=> $tableCreatedId,
        "table_id"=> $FieldArray[0]["db_table_id"],
        "content"=> Carbon::now()->format('Y-m-d H:i:s')
      ]);

      $createdDate->save();

       $tableEntryTrack = TableEntryTrack::create([
          "table_id"=> $FieldArray[0]["db_table_id"],
          "entry_id"=> $counter
       ]);

        $tableEntryTrack->save();
    }

  public function fetchDatabaseContent($tableId){
  
     $tableEntryTrack = TableEntryTrack::where('table_id',$tableId)->orderBy('created_at','asc')->get();
    $allTableEntries = TableEntry::where('table_id',$tableId)->get();
    $allTableFields = TableField::where('db_table_id',$tableId)->get();
     
    $entryArray = [];
    foreach ($tableEntryTrack as $track) {
         $innerEntries = [];
      foreach ($allTableEntries as $entry) {
        if($entry->entry_id == $track->entry_id) {
           array_push($innerEntries,$entry);
        }
      }

       array_push($entryArray,$innerEntries);
       
    }
    
     $finalEntryArray = [];
    foreach ($entryArray as $eachEntry) {
        $refinedEntryArray = [];
      foreach ($eachEntry as $directEntry) {

        foreach ($allTableFields as $field) {
            
          if($field->id == $directEntry["table_field_id"]){
            $refinedEntryArray[$field->name]= $directEntry["content"];
          }

      }

      }
       
       array_push($finalEntryArray,$refinedEntryArray);
    }

    $dbTableFields = [];

     foreach ($allTableFields as $field) {
        $refinedField = [
          "text"=> $field->name,
          "value"=> $field->name,
        ];
       array_push($dbTableFields,$refinedField);
     }

     
    

    return  [$finalEntryArray,$dbTableFields];
    
  
  }

  public function uploadPanelFiles(Request $request){

    $projectPanel = Project::where('project_slug',$request->get('project_slug'))->first();
   

  $location = '/var/www/php/public/'.  $projectPanel->panel_id . '/' .  $request->get('type');
               
  $file = $request->file('file');

  $file->move($location, $request->get('file_name'));

  $newPanelResource = PanelResource::create([
    "user_id"=>Auth::id(),
    "panel_id"=> $projectPanel->panel_id,
    "type"=> $request->get('type'),
    "file_full_name"=>  $request->get('file_name')
  ]);


  $newPanelResource->save();
  

    return $newPanelResource;

  }

  public function runPanel($panelId){
     
    $baseUrl = 'https://php.citonhub.com';

   $response = Http::get($baseUrl . '/' . $panelId . '/index' );
   
      return $response->body();
  }

  public function pageLoader($panelId,$pageName){

    $baseUrl = 'https://php.citonhub.com';

    $response = Http::get($baseUrl .'/' . $panelId . '/' . $pageName );
    
       return $response->body();
  }


}
