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
        //Diferentes atributos de la tabla Eventos
        Schema::create('ms_evento', function (Blueprint $table) {
            $table->id();
            $table->string('FECHA_INICIO',20);
            $table->string('FECHA_FIN',20);
            $table->string('HORA',8);
            $table->string('NOMBRE',50);
            $table->float('COSTO',8,2);
            $table->string('DESCRIPCION',200);
            $table->integer('MAX_PERSONAS');
            $table->string('ESTADO');
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
        Schema::dropIfExists('ms_evento');
    }
};
