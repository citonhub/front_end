<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class DuelTeam extends Model
{
    protected $guarded = [];

    protected $hidden = [
        'panel_id'
    ];
}
