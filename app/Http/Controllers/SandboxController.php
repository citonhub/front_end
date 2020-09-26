<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Auth;
use App\SandboxLanguage;
use App\SandboxSubmission;
use App\SandboxLanguageExtra;

class SandboxController extends Controller
{

     public $baseUrl;

    



    
     public function __construct()
    {
        $this->baseUrl = 'https://gazux.com';
        
        
    }


    
    public function runCode(Request $request){

         if($request->get('langId')  == 100){

            $sandboxLanguage = SandboxLanguageExtra::where('id',20)->first();

            $this->baseUrl = 'https://extra.gazux.com';

         }else{
            $sandboxLanguage = SandboxLanguage::where('id',$request->get('langId'))->first();

            $this->baseUrl = 'https://gazux.com';
         }

       

        $submissionArray = [];

         if($sandboxLanguage != null){


            $requestData = [
                'source_code' =>  $request->get('code'),
                'language_id'=> $sandboxLanguage->language_id
            ];
    
            $response = Http::withHeaders([
                'X-Auth-Token' => 'f6583e60-b13b-4228-b554-2eb332ca64e7',
                'Content-Type'=> 'application/json'
            ])
            ->post($this->baseUrl .'/submissions/?base64_encoded=false&wait=false',$requestData);

             if($response->status() == 201){

                $returnData = json_decode($response->body());

               

                $newSubmission = SandboxSubmission::create([
                'message_id'=> $request->get('messageId'),
                'token'=> $returnData->token,
                'user_id'=> Auth::id()
                ]);

                $newSubmission->save();

                $getSubmission = Http::withHeaders([
                    'X-Auth-Token' => 'f6583e60-b13b-4228-b554-2eb332ca64e7',
                    'Content-Type'=> 'application/json'
                ])
                ->get($this->baseUrl .'/submissions' . '/' . $returnData->token  .'?base64_encoded=false');

                 $submissionArray = [json_decode($getSubmission->body())];

                 $status =  $submissionArray[0]->status->description;
                   

            
             }

         }

         return $submissionArray;

        

    }

    public function checkSubmission(Request $request){

        if($request->get('langId')  == 100){

           

            $this->baseUrl = 'https://extra.gazux.com';

         }else{
           

            $this->baseUrl = 'https://gazux.com';
         }



        $getSubmission = Http::withHeaders([
            'X-Auth-Token' => 'f6583e60-b13b-4228-b554-2eb332ca64e7',
            'Content-Type'=> 'application/json'
        ])
        ->get($this->baseUrl .'/submissions' . '/' . $request->get('token')  .'?base64_encoded=false');

         $submissionArray = [json_decode($getSubmission->body())];

         return $submissionArray;

    }

    

}
