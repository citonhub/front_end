<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ClassMessage extends Model
{
    protected $fillable = [
        'content', 'class_code', 'user_id','type','code_type','image_name','image_extension','fake_link'
    ];
}
