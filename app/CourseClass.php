<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CourseClass extends Model
{
    protected $fillable = [
        'tutor_id', 'course_code', 'user_id','current_stage','members'
    ];
}
