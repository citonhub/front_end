<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateDuelsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('duels', function (Blueprint $table) {
            $table->id();
            $table->char('title');
            $table->char('duel_language');
            $table->text('description');
            $table->char('participant_type');
            $table->char('judge');
            $table->text('rules');
            $table->char('duration');
            $table->char('max_participant');
            $table->char('pre_match_time');
            $table->integer('user_id')->nullable();
            $table->char('match_id')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('duels');
    }
}
