<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\traits\PushNotificationTrait;
use App\PushNotification;

class HandleNotification implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels, PushNotificationTrait;

    /**
     * Create a new job instance.
     *
     * @return void
     */

    public $payload;
    public $type;

    public function __construct($payload,$type)
    {
        $this->payload = $payload;

        $this->type = $type;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $this->createNotification();
    }

    public function createNotification(){
         
        $notificationPayload = $this->payload;

        $allNotification = PushNotification::where('user_id',$notificationPayload["owner_id"])->get();

       

        if($this->type == 'space'){

            $payload = [
                "title"=> '',
                "body"=> $notificationPayload["body"],
                "badge" => "/imagesNew/icons/icon-72x72.png",
                "vibrate"=> [200, 100, 200, 100, 200, 100, 400],
                "tag" => $notificationPayload["tag"],
                "icon" => $notificationPayload["image"],
                "requireInteraction"=> true,
                "data"=> [
                   "type"=>$notificationPayload["type"],
                   "name"=>$notificationPayload["name"],
                   "space"=>$notificationPayload["space"],
                   "url"=> $notificationPayload["url"],
                   "url_rd"=>  $notificationPayload["url_rd"]
                ]
            ];


        }

        if($this->type == 'duel'){
           

            $payload = [
                "title"=> '',
                "body"=> $notificationPayload["body"],
                "badge" => "/imagesNew/icons/icon-72x72.png",
                "vibrate"=> [200, 100, 200, 100, 200, 100, 400],
                "tag" => $notificationPayload["tag"],
                "icon" => $notificationPayload["image"],
                "requireInteraction"=> true,
                "data"=> [
                   "type"=>$notificationPayload["type"],
                   "name"=>$notificationPayload["name"],
                   "duel"=>$notificationPayload["duel"],
                   "url"=> $notificationPayload["url"],
                   "url_rd"=>  $notificationPayload["url_rd"]
                ]
            ];
        }

        if($this->type == 'post'){
           

            $payload = [
                "title"=> '',
                "body"=> $notificationPayload["body"],
                "badge" => "/imagesNew/icons/icon-72x72.png",
                "vibrate"=> [200, 100, 200, 100, 200, 100, 400],
                "tag" => $notificationPayload["tag"],
                "icon" => $notificationPayload["image"],
                "requireInteraction"=> true,
                "data"=> [
                   "type"=>$notificationPayload["type"],
                   "name"=>$notificationPayload["name"],
                   "duel"=>$notificationPayload["duel"],
                   "url"=> $notificationPayload["url"]
                ]
            ];
        }

        if($this->type == 'project'){
         

            $payload = [
                "title"=> '',
                "body"=> $notificationPayload["body"],
                "badge" => "/imagesNew/icons/icon-72x72.png",
                "vibrate"=> [200, 100, 200, 100, 200, 100, 400],
                "tag" => $notificationPayload["tag"],
                "icon" => $notificationPayload["image"],
                "requireInteraction"=> true,
                "data"=> [
                   "type"=>$notificationPayload["type"],
                   "name"=>$notificationPayload["name"],
                   "project"=>$notificationPayload["project"],
                   "url"=> $notificationPayload["url"],
                   "url_rd"=>  $notificationPayload["url_rd"]
                ]
            ];


        }
 
     
        $defaultOption = [
            'TTL' => 2000000, // defaults to 4 weeks
            'urgency' => 'high', // protocol defaults to "normal"
            'topic' => 'CitonHub Notification', // not defined by default,
            'batchSize' => 10000, // defaults to 1000
        ];
         
        $this->generateNotification($allNotification,json_encode($payload));
         
        $this->sendNotification($defaultOption);
     
        $this->notificationReport();

    }
}
