<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateClassTodosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('class_todos', function (Blueprint $table) {
            $table->id();
            $table->char('title');
            $table->text('summary');
            $table->text('details');
            $table->integer('student_id');
            $table->integer('score');
            $table->text('remark');
            $table->char('class_code');
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
        Schema::dropIfExists('class_todos');
    }
}
