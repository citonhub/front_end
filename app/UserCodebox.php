<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserCodebox extends Model
{
    protected $fillable = [
        'content', 'box_code', 'user_id','no_of_shares','no_of_runs','type'
    ];
}
