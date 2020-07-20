<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;


class PanelChannel implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $data;
    public $uniqueId;
    public $actionType;

    /**
     * Create a new event instance.
     *
     * @return void
     */

    public function __construct($actionType,$data,$uniqueId)
    {
        $this->uniqueId = $uniqueId;
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
        return new PrivateChannel('panel.' . $this->uniqueId);
    }

    

    public function broadcastAs()
    {
        return 'PanelChannel';
    }
}
