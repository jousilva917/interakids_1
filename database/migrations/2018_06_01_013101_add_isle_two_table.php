<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class AddIsleTwoTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('Isletwo', function(Blueprint $table){
            $table->increments('id');
            $table->string('name');
            $table->string('description');
            $table->integer('level');
            $table->integer('stars_reward');
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
        Schema::dropIfexists('isletwo');
    }
}
