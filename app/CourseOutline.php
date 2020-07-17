<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CourseOutline extends Model
{
    protected $fillable = [
        'title', 'course_code', 'user_id','title','summary','full_outline','index'
    ];
}
