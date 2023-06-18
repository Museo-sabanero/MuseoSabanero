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
        //Diferentes atributos de la tabla Artículos, correspondientes a las piezas de inventario
        Schema::create('articulo', function (Blueprint $table) {
            $table->id();
            $table->string('NUM_REF_INTER',20);
            $table->string('OTRA_REF',20)->nullable();
            $table->string('NOMBRE',30);
            $table->string('TITULO',20);
            $table->string('TIPO_OBJETO',250);
            $table->string('TIPO_ADQUISICION',20);
            $table->float('ANCHO',8,2)->nullable();
            $table->string('MEDIDA_ANCHO',20);
            $table->float('ALTO',8,2)->nullable();
            $table->string('MEDIDA_ALTO',20);
            $table->float('LARGO',8,2)->nullable();
            $table->string('MEDIDA_LARGO',20);
            $table->float('DIAMETRO',8,2)->nullable();
            $table->string('MEDIDA_DIAMETRO',20);
            $table->float('PESO',8,2);
            $table->string('MEDIDA_PESO',20);
            $table->string('ESTADO_CONSERVACION',20);
            $table->string('ESTATUS_LEGAL',20);
            $table->float('VALOR', 10,2);
            $table->string('TIPO_MONEDA',50);
            $table->string('RASGO_DISTINTIVO',50);
            $table->string('LOCALIZACION',50);
            $table->string('FRAGMENTADO',40)->nullable();
            $table->string('REPLICA',40)->nullable();
            $table->string('CEDULA_DONANTE')->nullable();
            $table->string('COD_QR',50)->nullable();
            $table->string('USUARIO',50)->nullable();
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
        Schema::dropIfExists('articulos');
    }
};
