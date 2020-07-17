<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateProjectsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('projects', function (Blueprint $table) {
            $table->id();
            $table->char('project_slug');
            $table->char('panel_id');
            $table->char('title');
            $table->integer('stars');
            $table->integer('comments');
            $table->integer('user_id')->nullable();
            $table->integer('views');
            $table->char('type');
            $table->integer('team_id')->nullable();
            $table->char('status');
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
        Schema::dropIfExists('projects');
    }
}
