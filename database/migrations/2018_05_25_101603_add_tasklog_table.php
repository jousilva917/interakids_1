<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddTasklogTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tasklog', function(Blueprint $table){
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('isleOne_id')->unsigned();
            $table->foreign('isleOne_id')->references('id')->on('isleOne')->onDelete('cascade');
            $table->integer('isleTwo_id')->unsigned();
            $table->foreign('isleTwo_id')->references('id')->on('isleTwo')->onDelete('cascade');
            $table->integer('isleThree_id')->unsigned();
            $table->foreign('isleThree_id')->references('id')->on('isleThree')->onDelete('cascade');
            $table->boolean('completed');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfexists('tasklog');
    }
}
