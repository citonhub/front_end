<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCodeBoxesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('code_boxes', function (Blueprint $table) {
            $table->id();
            $table->text('content');
            $table->char('language_type');
            $table->char('file_name');
            $table->char('type');
            $table->integer('user_id');
            $table->char('panel_id');
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
        Schema::dropIfExists('code_boxes');
    }
}
