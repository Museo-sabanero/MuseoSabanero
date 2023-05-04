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
        Schema::create('MS_RESTAURACIONES', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('USUARIO_REGISTRA_ENVIO')->unsigned();
            $table->bigInteger('USUARIO_AUTORIZA_ENVIO')->unsigned();
            $table->string('TIPO_ARTICULO',20);
            $table->string('FECHA_ENVIO',20);
            $table->string('FECHA_PREV_RECIBIDO_RESTAU',20)->nullable();
            $table->string('ENCARGADO_RESTAURACION',200)->nullable();
            $table->string('LUGAR_RESTAURACION',200)->nullable();
            $table->string('DETALLE_ENVIO',200)->nullable();
            $table->string('COSTE',50)->nullable();
            $table->string('ESTADO',5);
            $table->string('DETALLE_RECIBIDO',200)->nullable();
            $table->string('FECHA_RECIBIDO',20)->nullable();
            $table->bigInteger('USUARIO_RECIBE')->unsigned()->nullable();
            $table->bigInteger('USUARIO_AUTORIZA_RECIBIDO')->unsigned()->nullable();
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
        Schema::dropIfExists('MS_RESTAURACIONES');
    }
};
