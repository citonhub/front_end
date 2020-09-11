<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TimeTable extends Model
{
    protected $fillable = [
        'course_code', 'user_id','start_time','end_time','date','is_break','outline_index','class_id','comment'
    ];
}
