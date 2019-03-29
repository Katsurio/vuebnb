<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateListingTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('listing', function (Blueprint $table) {
            $table->primary('id');
            $table->unsignedInteger('id');
            $table->string('title');
            $table->string('address');
            $table->longText('about');

            // Amenities
            $table->boolean('amenitiy_wifi')->default(false);
            $table->boolean('amenitiy_pets_allowed')->default(false);
            $table->boolean('amenitiy_tv')->default(false);
            $table->boolean('amenitiy_kitchen')->default(false);
            $table->boolean('amenitiy_breakfast')->default(false);
            $table->boolean('amenitiy_laptop')->default(false);

            // Prices
            $table->string('price_per_night')->nullable();
            $table->string('price_extra_people')->nullable();
            $table->string('price_weekly_discount')->nullable();
            $table->string('price_monthly_discount')->nullable();

//            $table->increments('id');
//            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('listing');
    }
}
