<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserTeam extends Model
{
    protected $fillable = [
        'member_id','user_id'
    ];
}
