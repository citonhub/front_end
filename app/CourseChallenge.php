<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CourseChallenge extends Model
{
    protected $fillable = [
        'title', 'course_code', 'user_id','title','summary','full_details','attempt_no','index'
    ];
}
