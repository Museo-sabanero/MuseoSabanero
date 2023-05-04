<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //Diferentes atributos de la tabla Donantes
        Schema::create('MS_DONANTE', function (Blueprint $table) {
            $table->id('ID');
            $table->string('NOMBRE',70);
            $table->string('TELEFONO',12);
            $table->string('EMAIL')->unique()->nullable();
            $table->string('CEDULA')->unique()->nullable();
            $table->string('DIRECCION', 500)->nullable();
            $table->char('ESTADO', 2)->nullable();
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
        Schema::dropIfExists('MS_DONANTE');
    }
};
