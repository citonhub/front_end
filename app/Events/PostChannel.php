<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;


class PostChannel implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $data;
    public $postId;
    public $actionType;

    /**
     * Create a new event instance.
     *
     * @return void
     */

    public function __construct($actionType,$data,$postId)
    {
        $this->postId = $postId;
        $this->actionType = $actionType;
        $this->data = $data;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    
    public function broadcastOn()
    {
        return new PrivateChannel('post.' . $this->postId);
    }

    

    public function broadcastAs()
    {
        return 'PostChannel';
    }
}
