<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserTimetable extends Model
{
    protected $fillable = [
        'class_code', 'user_id', 'class_date','class_time'
    ];
}
