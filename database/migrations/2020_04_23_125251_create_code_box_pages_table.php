<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateCodeBoxPagesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('code_box_pages', function (Blueprint $table) {
            $table->id();
            $table->text('content');
            $table->text('type');
            $table->integer('user_id');
            $table->char('pageid');
            $table->integer('no_of_views');
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
        Schema::dropIfExists('code_box_pages');
    }
}
