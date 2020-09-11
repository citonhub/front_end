<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tutor extends Model
{
    protected $fillable = [
        'profession', 'user_id', 'twitter_handle','git_repo','linkedin_link','ratings','about'
    ];
}
