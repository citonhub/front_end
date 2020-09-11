<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class PaymentHistory extends Model
{
    protected $fillable = [
        'reference', 'status','user_id','amount','course_class_id','trial'
    ];
}
