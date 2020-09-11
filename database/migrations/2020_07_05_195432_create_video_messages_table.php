<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVideoMessagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('video_messages', function (Blueprint $table) {
            $table->id();
            $table->integer('message_id');
            $table->char('video_extension');
            $table->char('video_name');
            $table->char('display_name');
            $table->char('preview_image_url');
            $table->char('background_color');
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
        Schema::dropIfExists('video_messages');
    }
}
