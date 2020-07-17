<?php
namespace App\traits;
use Minishlink\WebPush\WebPush;
use Minishlink\WebPush\Subscription;

trait PushNotificationTrait
{
    public $notifications;
    public $webPush;
   
    public function generateNotification($notificationArray,$payload){
      $allNotifications = [];

      foreach ($notificationArray as $notification) {
         $thisnotification = [];
         $thisnotification =  [
            'subscription' => Subscription::create([
                'endpoint' => $notification->endpoint,
                'publicKey' => $notification->public_key,
                'authToken' => $notification->auth_token
            ]),
            'payload' => $payload,
            ];
        
            array_push($allNotifications,$thisnotification);
         
      }

      $this->notifications = $allNotifications;

    }

    public function sendNotification($defaultOptions){
        $auth = [
            'VAPID' => [
                'subject' => 'mailto:admin@citonhub.com', // can be a mailto: or your website address
                'publicKey' => 'BA5RO17EugggZ7VQBGMf6_dQat4fLr5qwmS1Q8FUl8Wg0Pm7vOtX_Thws0OdafoWg1tdF-A0mDK-JcZJ09VoEq8', // (recommended) uncompressed public key P-256 encoded in Base64-URL
                'privateKey' => 'HtJvbInyi54NZbIQrgeA9ZxbXw1W_X6jFghdfhoYtMw', // (recommended) in fact the secret multiplier of the private key encoded in Base64-URL
            ],
        ];
        $this->webPush = new WebPush($auth,$defaultOptions);
        $this->webPush->setDefaultOptions($defaultOptions);
        $this->webPush->setReuseVAPIDHeaders(true);
        // send multiple notifications with payload
      foreach ($this->notifications as $notification) {
        $this->webPush->sendNotification(
        $notification['subscription'],
        $notification['payload'] // optional (defaults null)
       );
       }
    }

    public function notificationReport(){
        foreach ( $this->webPush->flush() as $report) {
            $endpoint = $report->getRequest()->getUri()->__toString();
        
            if ($report->isSuccess()) {
                echo "[v] Message sent successfully for subscription {$endpoint}.";
            } else {
                echo "[x] Message failed to sent for subscription {$endpoint}: {$report->getReason()}";
            }
        }
    }
   
   
}