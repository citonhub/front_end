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
use Illuminate\Support\Facades\Storage;
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



      public function deleteProjectPanel(Request $request){
    
        $project = Project::where('project_slug',$request->get('project_slug'))->first();

         if($project != null){
           
          $this->deleteFilesFolder($project->panel_id);


          $backEndFilesArray = [];
          $frontEndfilesArray = [];

          if($request->panel_code_files != null){
            foreach ($request->panel_code_files as $file) {
           
              if($file['type'] == 'back_end'){
                    array_push($backEndFilesArray, $file);
              }else{
                  array_push($frontEndfilesArray,$file);
              }
          }
          }
      
       



       
      
        $this->deleteControllerFiles($backEndFilesArray);

        $this->deleteFilesFromServer($project->panel_id);

        $panel = Panel::where('panel_id',$project->panel_id)->first();

        if($panel != null){
          $panel->delete();
        }

        $project->delete();



         }

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

  

        $characters = '1234567890';
        $randomString = $this->generateRandomNumber(9,$characters);


        if($request->get('panel_language') == 'NodeJs'){
        
          $newPanel = Panel::create([
            "user_id"=> Auth::id(),
            "purpose"=> 'duel',
            "panel_id"=> $randomString,
            "app_type" => $request->get('app_type'),
            "is_set"=> true,
            "panel_language"=>$request->get('panel_language')
          ]);
    
         $newPanel->save();
         

            $projectPanel->update([
            "panel_id"=> $randomString
           ]);

            

           $this->NodeJsProject($randomString);

        }

         if($request->get('panel_language') == 'PHP'){

          $panel = Panel::where('panel_id',$projectPanel->panel_id)->first();
              
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



         
          $projectPanel->update([
            "panel_id"=> $randomString
           ]);

          $this->deleteControllerFiles($backEndFilesArray);

          $this->recreateController($backEndFilesArray,$randomString);

           if($panel != null){
            $this->deleteFilesFromServer($panel->id);
           }

          if($projectPanel->title == 'Citonhub Project'){

            $this->deleteDefaultResources($panel->id);

          $this->recreateDefaultResources($randomString);

          }

          

         

           
          $this->recreateFileFolder($randomString);

           $this->recreateDefaultFiles($randomString);


          $this->recreateFiles($frontEndfilesArray,$randomString);

          $this->createDefaultController($randomString);

          if($panel != null){
            $panel->update([
              "app_type" => $request->get('app_type'),
              "is_set"=> true,
              "panel_id"=> $randomString,
              "panel_language"=>$request->get('panel_language')
              ]);
  
           }

         
          $routeArray = [
            [
             "path"=> '/index',
             "function_name"=>'main',
             "file_name"=>'index',
             "route_type"=> 'get'
            ]
          ];
   
          if($projectPanel->title == 'Citonhub Project'){
   
           $routeArray =    [
             [
              "path"=> '/index',
              "function_name"=>'main',
              "file_name"=>'index',
              "route_type"=> 'get'
             ],
             [
              "path"=> '/new-page',
              "function_name"=>'anotherPage',
              "file_name"=>'index',
              "route_type"=> 'get'
             ]
             ];
   
         }
   
         $this->createRoute($routeArray,$randomString);

         }

       

         
       

     
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




        if($request->get('panel_language') == 'NodeJs'){
        
          $newPanel = Panel::create([
            "user_id"=> Auth::id(),
            "purpose"=> 'duel',
            "panel_id"=> $randomString,
            "app_type" => $request->get('app_type'),
            "is_set"=> true,
            "panel_language"=>$request->get('panel_language')
          ]);
    
         $newPanel->save();
         

            $duelPanel->update([
            "panel_id"=> $randomString
           ]);

            

           $this->NodeJsProject($randomString);

        }

        if($request->get('panel_language') == 'PHP'){
         

          $this->deleteFilesFolder($duelPanel->panel_id);
         
          $backEndFilesArray = [];
           $frontEndfilesArray = [];
       

            if($request->panel_code_files != null){

              foreach ($request->panel_code_files as $file) {
            
                if($file['type'] == 'back_end'){
                      array_push($backEndFilesArray, $file);
                }else{
                    array_push($frontEndfilesArray,$file);
                }
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

          
        


         $duelId = $request->get('duel_id');

        $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->get();
        if(!$duelTeamMembers->isEmpty()){
           

          $duelTeamMembers = DuelTeamMember::where('duel_id',$duelId)->where('user_id',Auth::id())->first();

          $duelTeam = DuelTeam::where('id',$duelTeamMembers->duel_team_id)->first();

          $duelTeam->update([
            "panel_id"=> $randomString
          ]);
         

        }
      

       
         
        $duelParticipant = DuelParticipant::where('duel_id',$request->get('duel_id'))->where('user_id',Auth::id())->first();

        $duelParticipant->update([
          "panel_id"=> $randomString,
        ]);

     }
    
     public function NodeJsProject($panelId){

      $baseUrl = 'https://nodejs.citonhub.com/node';

      // create project panel

      $requestData = [
      "panel_id" => $panelId,
      ];

      $response = Http::post($baseUrl .'/create-panel',$requestData);
     
      // create index html, css and Js view

      $cssContent = "<style>
body{
  background: #c5c5c5;
}
</style>";

$javaScriptContent = "<script>
var start_building = \"Let's build it!\";
</script>";

      $filePath = '/var/www/citonhubnew/resources/views/pages/NodeIndex.html'; 

       $htmlContent = file_get_contents($filePath);


    

      // send data to NodeJs server

     
      // send HTML

      $requestData = [
          'panel_id' =>  $panelId,
          'file_name' =>  'index',
          'content'=> $htmlContent,
          'language_type' => 'html'
      ];

     $response = Http::post($baseUrl .'/create-view-file',$requestData);

   

      if($response->body() == 'done'){
       
          // save contents to database

      $HtmlCodeBox = CodeBox::create([
        "content"=> $htmlContent,
        "language_type"=> "HTML",
        "file_name"=> "index",
        "type"=> "front_end",
        "user_id"=> Auth::id(),
        "panel_id"=> $panelId
      ]);

      $HtmlCodeBox->save();

      }

     // send CSS

   

     $requestData = [
      'panel_id' =>  $panelId,
      'file_name' =>  'index',
      'content'=> $cssContent,
      'language_type' => 'css'
      ];

      $response = Http::post($baseUrl .'/create-view-file',$requestData);

      
      if($response->body() == 'done'){
      
        $CssCodeBox = CodeBox::create([
          "content"=> $cssContent,
          "language_type"=> "CSS",
          "file_name"=> "index",
          "type"=> "front_end",
          "user_id"=> Auth::id(),
          "panel_id"=> $panelId
        ]);
        
        $CssCodeBox->save();
       }

       // send JAVASCRIPT

     $requestData = [
      'panel_id' =>  $panelId,
      'file_name' =>  'index',
      'content'=> $javaScriptContent,
      'language_type' => 'js'
      ];

    $response = Http::post($baseUrl .'/create-view-file',$requestData);

    if($response->body() == 'done'){
      $JavascriptCodeBox = CodeBox::create([
        "content"=> $javaScriptContent,
        "language_type"=> "JAVASCRIPT",
        "file_name"=> "index",
        "type"=> "front_end",
        "user_id"=> Auth::id(),
        "panel_id"=> $panelId
      ]);
      
      $JavascriptCodeBox->save();
    }

     // create controller

     // save data to database 

    

     $root = '$root';

      $jsContent = "const main=(req,res)=>{
res.sendFile(dirname+\"" ."$root". "/views/index.html" . "\")
        
}";

     

    // send request to NodeJs Server

    $requestData = [
      'panel_id' =>  $panelId,
      'file_name'=> 'index',
      'content'=> $jsContent
     ];

    $response = Http::post($baseUrl .'/create-controller',$requestData);

    

     if($response->body() == 'done'){
     
      $JSCodeBox = CodeBox::create([
        "content"=> $jsContent,
        "language_type"=> "JAVASCRIPT",
        "file_name"=> "index",
        "type"=> "back_end",
        "user_id"=> Auth::id(),
        "panel_id"=> $panelId
      ]);
  
      $JSCodeBox->save();
      
     }

    // create route 

  // send to NodeJs server

    $requestData = [
      "panel_id"=> $panelId,
      "path"=>   $panelId .  '/index',
      "function_name"=> 'main',
      "file_name"=> 'index',
      "route_type"=> 'get'
  ];

   $response = Http::post($baseUrl .'/create-route',$requestData);

   if($response->body() == 'done'){
   // save route to database

   $newRoute = PanelRoute::create([
    "panel_id"=> $panelId,
    "path"=>'/index',
    "function_name"=> 'main',
    "file_name"=> 'index',
    "route_type"=> 'get'
  ]);

  $newRoute->save();
   }



     

     }

    public function deleteDefaultResources($panelId){

      $allResources = PanelResource::where('panel_id',$panelId)->get();

       foreach ($allResources as $resource) {
         $resource->delete();  
       }

       Storage::disk('resources')->deleteDirectory($panelId);

    }

    public function recreateDefaultResources($panelId){

      $fileArray = [
        0=>  ["jquery.js","Framework"],
        1=>  ["vue.js","Framework"],
        2=>  ["angular.js","Framework"],
        3 =>  ["bootstrap.min.js","Framework"],
        4=>  ["bootstrap.min.css","Framework"],
        5=> [ "mdb.min.css","Framework"],
        6 => ["build.jpg","Images"],
        7 => ["team.jpg","Images"],
        8 => ["homeimg1.jpg","Images"],
        9 => ["image.jpg","Images"],
        10=> ["video.mp4","Videos"],
        11 => ["newpage.jpg",'Images']
      ];

      foreach ($fileArray as $key => $value) {
       
       
        $newPanelResource = PanelResource::create([
          "user_id"=>Auth::id(),
          "panel_id"=> $panelId,
          "type"=> $value[1],
          "file_full_name"=>  $value[0]
        ]);
      
      
        $newPanelResource->save();

         
      }
     
     

       $filePathArray = [
        "jquery.js" => "Framework/jquery.js",
         "vue.js" =>"Framework/vue.js",
         "angular.js" => "Framework/angular.js",
         "bootstrap.min.js"=>"Framework/bootstrap.min.js",
         "bootstrap.min.css" => "Framework/bootstrap.min.css",
          "mdb.min.css"=>"Framework/mdb.min.css",
          "build.jpg" => "Images/build.jpg",
          "team.jpg" => "Images/team.jpg",
          "image.jpg" => "Images/image.jpg",
          "homeimg1.jpg" => "Images/homeimg1.jpg",
          "video.mp4" => "Videos/video.mp4",
          "newpage.jpg"=> "Images/newpage.jpg"
       ];

       foreach ($filePathArray as $key => $value) {
          
        $filePath = '/var/www/citonhubnew/public/default/' . $key; 

        $fileContent = file_get_contents($filePath);

        Storage::disk('resources')->put( $panelId . '/' . $value , $fileContent);

       }

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

    $projectPanel = Project::where('panel_id',$newpanelId)->first();
     
    $panelId = '$panel';

    $filePath = '/var/www/citonhubnew/resources/views/pages/default.blade.php'; 

    $htmlContent = file_get_contents($filePath);

    
     if($projectPanel != null){


      if($projectPanel->title == 'Citonhub Project'){

        $filePath = '/var/www/citonhubnew/resources/views/pages/codebox.blade.php'; 
  
        $htmlContent = file_get_contents($filePath);
    
    
        $filePath2 = '/var/www/citonhubnew/resources/views/pages/codeboxnew.blade.php'; 
    
        $htmlContent2 = file_get_contents($filePath2);
  
      }

     }

   
    
    



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

  if($projectPanel != null){
    if($projectPanel->title == 'Citonhub Project'){
      $HtmlCodeBox2 = CodeBox::create([
        "content"=> $htmlContent2,
        "language_type"=> "HTML",
        "file_name"=> "NewPage",
        "type"=> "front_end",
        "user_id"=> Auth::id(),
        "panel_id"=> $newpanelId
      ]);
      
      $HtmlCodeBox2->save();
    }
  }



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

          if($projectPanel != null){
            if($projectPanel->title == 'Citonhub Project'){
            
              $baseUrl = 'https://php.citonhub.com';
              $requestData = [
                  'panel_id' =>  $newpanelId,
                  'file_name'=> 'NewPage',
                  'content'=> $htmlContent2,
                  'language_type'=> 'HTML'
              ];
             $response = Http::post($baseUrl .'/create-view-file',$requestData);
    
             }
          }

        
         

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

  $projectPanel = Project::where('panel_id',$newpanelId)->first();
    $thisVar = '$this';
    $panelId = '$panelId';
    $tableFields = '$tableFields';
    $requestData = '$requestData';
     

$phpContent ="
public function main(){
  return $thisVar" . '' . "->showView('index');
} 

// create user data
public function myUserDataBase(){
 $tableFields = [
   [
    \"name\" => 'phone',
     \"data_type\"=> 'int',
   ],
    [
    \"name\" => 'email',
     \"data_type\"=> 'char',
   ],
    [
    \"name\" => 'name',
     \"data_type\"=> 'char',
   ]
  ];
    
    $thisVar" . '' . "->CreateDB('usersData',$tableFields);
}

// save data into your table
public function saveMyData(){
  $requestData = [
   \"phone\"=> '08023417382',
    \"email\"=> 'example@gmail.com',
    \"name\"=> 'James'
  ];
  
  $thisVar" . '' . "->saveData('usersData',$requestData);
  
}

";

   if($projectPanel != null){
    if($projectPanel->title == 'Citonhub Project'){
      $phpContent ="
    public function main(){
      return $thisVar" . '' . "->showView('index');
    } 
    
    public function anotherPage(){
      return $thisVar" . '' . "->showView('NewPage');
    } ";
    }
   }

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

         if($panel->panel_language == 'PHP') {
          $baseUrl = 'https://php.citonhub.com';
         }

         if($panel->panel_language == 'NodeJs') {
          $baseUrl = 'https://nodejs.citonhub.com/node';
         }

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

          if($panel->panel_language == 'PHP') {
            $baseUrl = 'https://php.citonhub.com';
           }
  
           if($panel->panel_language == 'NodeJs') {
            $baseUrl = 'https://nodejs.citonhub.com/node';
           }

           
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
      

      $panel = Panel::where('panel_id',$projectPanel->panel_id)->first();



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


        if($request->get('language_type') == 'HTML'){

          $htmlFiles = CodeBox::where('panel_id',$projectPanel->panel_id)->where('file_name','!=','index')->where('language_type','HTML')->get();
          
          $phpContent = '';
          $JsContent = '';
          foreach ($htmlFiles as $files) {

            $thisVar = '$this';
           $panelId = '$panelId';

           if($panel->panel_language == 'PHP') {

            $phpContent .="
            public function ". $files->file_name ."(){
              return $thisVar" . '' . "->showView('" .  $files->file_name . "');
            }
            
            ";
            }


             if($panel->panel_language == 'NodeJs') {

              $JsContent .="const " .  $files->file_name .  "=(req,res)=>{
                res.sendFile(dirname+\"" ."/public" . '/' . $projectPanel->panel_id . "/views" . '/' .  $files->file_name  . ".html" . "\")
                        
                }
                
                ";
              }
    
           }
           
            
             
          }

           $panelRouteController = CodeBox::where('panel_id',$projectPanel->panel_id)->where('file_name','routes')->get();

           if($panelRouteController->isEmpty()){

            if($panel->panel_language == 'PHP') {
              $PHPCodeBox = CodeBox::create([
                "content"=> $phpContent,
                "language_type"=> "PHP",
                "file_name"=> "routes",
                "type"=> "back_end",
                "user_id"=> Auth::id(),
                "panel_id"=> $projectPanel->panel_id
              ]);

              $PHPCodeBox->save();

            }

            if($panel->panel_language == 'NodeJs') {

              $JsCodeBox = CodeBox::create([
                "content"=> $JsContent,
                "language_type"=> "JAVASCRIPT",
                "file_name"=> "routes",
                "type"=> "back_end",
                "user_id"=> Auth::id(),
                "panel_id"=> $projectPanel->panel_id
              ]);

              $JsCodeBox->save();
            }

            
             
           }else{

            $backCodeBox = CodeBox::where('panel_id',$projectPanel->panel_id)->where('file_name','routes')->first();

            if($panel->panel_language == 'PHP') {

            $backCodeBox->update([
           "content"=> $phpContent
            ]);

            }

           if($panel->panel_language == 'NodeJs') {
            $backCodeBox->update([
              "content"=> $JsContent
               ]);
   
           }

           }


           if($panel->panel_language == 'PHP') {
            $baseUrl = 'https://php.citonhub.com';

            $requestData = [
              'panel_id' =>  $projectPanel->panel_id,
              'file_name'=> 'routes',
              'content'=> $phpContent
          ];

           }

           if($panel->panel_language == 'NodeJs') {
            $baseUrl = 'https://nodejs.citonhub.com/node';

            $requestData = [
              'panel_id' =>  $projectPanel->panel_id,
              'file_name'=> 'routes',
              'content'=> $JsContent
          ];
           }
        
          
         
          
         $response = Http::post($baseUrl .'/create-controller',$requestData);

         

          $routeArray =    [
            [
             "path"=> '/'. $request->get('file_name'),
             "function_name"=>$request->get('file_name'),
             "file_name"=>'routes',
             "route_type"=> 'get'
            ]
            ];

          $this->createRoute($routeArray,$projectPanel->panel_id);  

      
          if($panel->panel_language == 'PHP') {
            $baseUrl = 'https://php.citonhub.com';
           }

           if($panel->panel_language == 'NodeJs') {
            $baseUrl = 'https://nodejs.citonhub.com/node';
           }
        


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
       
      


      if($request->get('code_category') == 'back_end'){
        
        if($panel->panel_language == 'PHP') {
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

         if($panel->panel_language == 'NodeJs') {
          $baseUrl = 'https://nodejs.citonhub.com/node';

          $requestData = [
            'panel_id' =>  $projectPanel->panel_id,
            'file_name'=> $request->get('file_name'),
            'content'=> ''
        ];
       $response = Http::post($baseUrl .'/create-controller',$requestData);
       
      if($response->status() == 200){
         
        $newCodeBox = CodeBox::create([
            "content"=> 'start coding...',
            "language_type"=> 'js',
            "file_name"=> $request->get('file_name'),
            "type"=> $request->get('code_category'),
            "user_id"=> Auth::id(),
            "panel_id"=> $projectPanel->panel_id
         ]);

         $newCodeBox->save();

      }
         }

         broadcast(new PanelChannel('new-file',$newCodeBox,$request->get('project_slug')))->toOthers();

         return $newCodeBox;

         
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

      $panel = Panel::where('panel_id',$duelPanel->panel_id)->first();

     
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


      if($request->get('language_type') == 'HTML'){

        $htmlFiles = CodeBox::where('panel_id',$duelPanel->panel_id)->where('file_name','!=','index')->where('language_type','HTML')->get();
        
        $phpContent = '';
        $JsContent = '';
        foreach ($htmlFiles as $files) {

          $thisVar = '$this';
         $panelId = '$panelId';

         if($panel->panel_language == 'PHP') {

          $phpContent .="
          public function ". $files->file_name ."(){
            return $thisVar" . '' . "->showView('" .  $files->file_name . "');
          }
          
          ";
          }


           if($panel->panel_language == 'NodeJs') {

            $JsContent .="const " .  $files->file_name .  "=(req,res)=>{
              res.sendFile(dirname+\"" ."/public" . '/' . $duelPanel->panel_id . "/views" . '/' .  $files->file_name  . ".html" . "\")
                      
              }
              
              ";
            }
  
         }
         
          
           
        }

         $panelRouteController = CodeBox::where('panel_id',$duelPanel->panel_id)->where('file_name','routes')->get();

         if($panelRouteController->isEmpty()){

          if($panel->panel_language == 'PHP') {
            $PHPCodeBox = CodeBox::create([
              "content"=> $phpContent,
              "language_type"=> "PHP",
              "file_name"=> "routes",
              "type"=> "back_end",
              "user_id"=> Auth::id(),
              "panel_id"=> $duelPanel->panel_id
            ]);

            $PHPCodeBox->save();

          }

          if($panel->panel_language == 'NodeJs') {

            $JsCodeBox = CodeBox::create([
              "content"=> $JsContent,
              "language_type"=> "JAVASCRIPT",
              "file_name"=> "routes",
              "type"=> "back_end",
              "user_id"=> Auth::id(),
              "panel_id"=> $duelPanel->panel_id
            ]);

            $JsCodeBox->save();
          }

          
           
         }else{

          $backCodeBox = CodeBox::where('panel_id',$duelPanel->panel_id)->where('file_name','routes')->first();

          if($panel->panel_language == 'PHP') {

          $backCodeBox->update([
         "content"=> $phpContent
          ]);

          }

         if($panel->panel_language == 'NodeJs') {
          $backCodeBox->update([
            "content"=> $JsContent
             ]);
 
         }

         }


         if($panel->panel_language == 'PHP') {
          $baseUrl = 'https://php.citonhub.com';

          $requestData = [
            'panel_id' =>  $duelPanel->panel_id,
            'file_name'=> 'routes',
            'content'=> $phpContent
        ];
         }

         if($panel->panel_language == 'NodeJs') {
          $baseUrl = 'https://nodejs.citonhub.com/node';

          $requestData = [
            'panel_id' =>  $duelPanel->panel_id,
            'file_name'=> 'routes',
            'content'=> $JsContent
        ];
         }
      
        
       
        
       $response = Http::post($baseUrl .'/create-controller',$requestData);

       

        $routeArray =    [
          [
           "path"=> '/'. $request->get('file_name'),
           "function_name"=>$request->get('file_name'),
           "file_name"=>'routes',
           "route_type"=> 'get'
          ]
          ];

        $this->createRoute($routeArray,$duelPanel->panel_id);  

    
        if($panel->panel_language == 'PHP') {
          $baseUrl = 'https://php.citonhub.com';
         }

         if($panel->panel_language == 'NodeJs') {
          $baseUrl = 'https://nodejs.citonhub.com/node';
         }
      


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



     if($request->get('code_category') == 'back_end'){
        
        if($panel->panel_language == 'PHP') {
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

      }
         }

         if($panel->panel_language == 'NodeJs') {
          $baseUrl = 'https://nodejs.citonhub.com/node';

          $requestData = [
            'panel_id' =>  $duelPanel->panel_id,
            'file_name'=> $request->get('file_name'),
            'content'=> ''
        ];
       $response = Http::post($baseUrl .'/create-controller',$requestData);
       
      if($response->status() == 200){
         
        $newCodeBox = CodeBox::create([
            "content"=> 'start coding...',
            "language_type"=> 'js',
            "file_name"=> $request->get('file_name'),
            "type"=> $request->get('code_category'),
            "user_id"=> Auth::id(),
            "panel_id"=> $duelPanel->panel_id
         ]);

         $newCodeBox->save();

      }
         }

         if($duelTeam != null){
          broadcast(new PanelChannel('new-file',$newCodeBox,$duelTeam->team_code))->toOthers();
         }

         return $newCodeBox;

         
      }


       

      
       
      
    }

     

    public function saveCodeContentProject(Request $request){
        
      $projectPanel = Project::where('project_slug',$request->get('project_slug'))->first();

       

      $CodeBox = CodeBox::where('panel_id',$projectPanel->panel_id)->where('id',$request->get('file_id'))->first();

       

       $CodeBox->update([
          'content'=> $request->get('content')
       ]);
         
     
       $this->updateRealFile($CodeBox,$request,$projectPanel->panel_id);


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
           
       
         $this->updateRealFile($CodeBox,$request,$duelPanel->panel_id);
       
         if($duelTeam != null){
          broadcast(new PanelChannel('new-file-update',$CodeBox,$duelTeam->team_code))->toOthers();
         }
    }




     public function updateRealFile($codeBox,$request,$panelId){

        $panel = Panel::where('panel_id',$panelId)->first();

          if($request->get('code_category') == 'front-end'){
            
           
            if($panel->panel_language == 'PHP') {
              $baseUrl = 'https://php.citonhub.com';

              $requestData = [
                'panel_id' =>  $codeBox->panel_id,
                'file_name' =>  $codeBox->file_name,
                'content'=> $codeBox->content,
                'language_type'=> $codeBox->language_type
            ];

           
           $response = Http::post($baseUrl .'/create-view-file',$requestData);
             }
  
             if($panel->panel_language == 'NodeJs') {
                $home = '$home';
                $panel = '$panel';
              $baseUrl = 'https://nodejs.citonhub.com/node';
               
                                // Input string 
                 $str  = $codeBox->content;
  
                 // Array containing search string  
                $searchVal = array("$home", "$panel"); 
  
                  // Array containing replace string from  search string 
                $replaceVal = array("https://nodejs.citonhub.com/node", $panelId); 
  
                // Function to replace string 
                $resultFull = str_replace($searchVal, $replaceVal, $str); 


               if($codeBox->language_type == 'CSS'){



                $requestData = [
                  'panel_id' =>  $codeBox->panel_id,
                  'file_name' =>  $codeBox->file_name,
                  'content'=> $resultFull,
                  'language_type'=> 'css'
              ];

               }

               if($codeBox->language_type == 'HTML'){

                $requestData = [
                  'panel_id' =>  $codeBox->panel_id,
                  'file_name' =>  $codeBox->file_name,
                  'content'=> $resultFull,
                  'language_type'=> 'html'
              ];

               }

               if($codeBox->language_type == 'JAVASCRIPT'){

                $requestData = [
                  'panel_id' =>  $codeBox->panel_id,
                  'file_name' =>  $codeBox->file_name,
                  'content'=> $resultFull,
                  'language_type'=> 'js'
              ];

               }
              

           
           $response = Http::post($baseUrl .'/create-view-file',$requestData);

             }

           
          
         

          }

          if($request->get('code_category') == 'back-end'){
            
            if($panel->panel_language == 'PHP') {
            $baseUrl = 'https://php.citonhub.com';

            $requestData = [
              'panel_id' =>  $codeBox->panel_id,
              'file_name'=> $codeBox->file_name,
              'content'=> $codeBox->content
          ];
           }

           if($panel->panel_language == 'NodeJs') {

            $baseUrl = 'https://nodejs.citonhub.com/node';

               $home = '$home';
                $panel = '$panel';
                $root = '$root';

               // Input string 
               $str  = $codeBox->content;
  
               // Array containing search string  
              $searchVal = array("$home", "$panel","$root"); 

                // Array containing replace string from  search string 
              $replaceVal = array("https://nodejs.citonhub.com/node", $panelId, "/public" . '/' . $panelId); 

              // Function to replace string 
              $resultFull = str_replace($searchVal, $replaceVal, $str); 

              

              $requestData = [
                'panel_id' =>  $codeBox->panel_id,
                'file_name'=> $codeBox->file_name,
                'content'=> $resultFull
            ];

           }

           
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

        $panelResources = PanelResource::where('panel_id',$duelPanel->panel_id)->get();

      return [$allCodeBoxes,$panel,$allRouteConfig,$newDbTable,$panelResources];

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

      if($request->get('project_slug') != 'undefined'){

        $projectPanel = Project::where('project_slug',$request->get('project_slug'))->first();

        $panel = Panel::where('panel_id',$projectPanel->panel_id)->first();
        
      }

      if($request->get('duel_id') != 'undefined'){

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

      }

   

     
   
      if($panel->panel_language == 'PHP') {

        $location = '/var/www/php/public/'.  $panel->panel_id . '/' .  $request->get('type');

       }


       if($panel->panel_language == 'NodeJs') {

       
        $location = '/var/www/nodejs/public/'.  $panel->panel_id . '/' .  $request->get('type');

       }

  
               
  $file = $request->file('file');

  $file->move($location, $request->get('file_name'));

  $newPanelResource = PanelResource::create([
    "user_id"=>Auth::id(),
    "panel_id"=> $panel->panel_id,
    "type"=> $request->get('type'),
    "file_full_name"=>  $request->get('file_name')
  ]);


  $newPanelResource->save();
  

    return $newPanelResource;

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
