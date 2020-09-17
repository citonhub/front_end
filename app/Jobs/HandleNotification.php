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

    public function __construct($payload)
    {
        $this->payload = $payload;
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

   

 
  
        $payload = [
            "title"=> '',
            "body"=> $notificationPayload["body"],
            "badge" => "/imagesNew/icons/icon-72x72.png",
            "vibrate"=> [1000,500,1000],
            "tag" => $notificationPayload["tag"],
            "icon" => $notificationPayload["image"],
            "requireInteraction"=> true,
            "data"=> [
               "type"=>$notificationPayload["type"],
               "name"=>$notificationPayload["name"],
               "space"=>$notificationPayload["space"],
               "url"=> $notificationPayload["url"]
            ]
        ];
     
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
