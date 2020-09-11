<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCourseChallengesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('course_challenges', function (Blueprint $table) {
            $table->id();
            $table->char('course_code');
            $table->integer('user_id');
            $table->integer('index');
            $table->char('title');
            $table->text('summary');
            $table->text('full_details');
            $table->integer('attempt_no');
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
        Schema::dropIfExists('course_challenges');
    }
}
