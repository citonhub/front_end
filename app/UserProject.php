<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserProject extends Model
{
    protected $fillable = [
        'project_name', 'user_id', 'git_repo','image_name','image_extension'
    ];
}
