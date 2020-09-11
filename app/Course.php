<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    protected $fillable = [
        'title', 'course_code', 'user_id','tutor_id','duration','cost','image_name','image_extension'
    ];
}