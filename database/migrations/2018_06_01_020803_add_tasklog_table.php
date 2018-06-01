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
        Schema::create('tasklog',function (Blueprint $table){
            $table->increments('id');
            $table->integer('user_id')->unsigned();
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
            $table->integer('isleone_id')->unsigned();
            $table->foreign('isleone_id')->references('id')->on('isleone')->onDelete('cascade');
            $table->integer('isletwo_id')->unsigned();
            $table->foreign('isletwo_id')->references('id')->on('isletwo')->onDelete('cascade');
            $table->integer('islethree_id')->unsigned();
            $table->foreign('islethree_id')->references('id')->on('islethree')->onDelete('cascade');
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
