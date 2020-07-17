<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class CodeBoxPage extends Model
{
    protected $fillable = [
        'content','user_id', 'no_of_views','pageid','type'
    ];
}
