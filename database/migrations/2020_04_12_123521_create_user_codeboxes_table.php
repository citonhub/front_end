<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateUserCodeboxesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('user_codeboxes', function (Blueprint $table) {
            $table->id();
            $table->text('content');
            $table->char('box_code');
            $table->integer('user_id');
            $table->integer('no_of_shares');
            $table->integer('no_of_runs');
            $table->char('type');
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
        Schema::dropIfExists('user_codeboxes');
    }
}
