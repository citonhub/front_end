<?php

namespace App\Jobs;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use App\Mail\SpaceInviteMail;
use Illuminate\Support\Facades\Mail;

class HandleSpaceMail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public $thisUser;
    public $space;
    public $mail;


    public function __construct($thisUser,$space,$mail)
    {
        $this->thisUser = $thisUser;
        $this->space = $space;
        $this->mail = $mail;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        
        Mail::to($this->mail)->send(new SpaceInviteMail($this->thisUser,$this->space));
    }
}
