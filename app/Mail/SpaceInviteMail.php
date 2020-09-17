<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class SpaceInviteMail extends Mailable 
{
    use Queueable, SerializesModels;
 
     
      public $user;
      public $space;
      public $url;
    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user,$space)
    {
        $this->user = $user;

        $this->space = $space;

        $this->url = "https://www.citonhub.com/link/space/" . $space->space_id . "/" . $user->username;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->from('citonhub@gmail.com')
                    ->subject($this->user->name .' invites you to ' . $this->space->name . ' ' . $this->space->type . ' on CitonHub' )
                    ->markdown('emails.invitation');
    }
}
