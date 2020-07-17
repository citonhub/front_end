<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PushNotification extends Model
{
    protected $fillable = [
        'endpoint', 'public_key','user_id','report_info','auth_token'
    ];
}
