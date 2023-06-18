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
        //Diferentes atributos de la tabla Historia
        Schema::create('historia', function (Blueprint $table) {
            $table->id();
            $table->string('MATERIAS',100);
            $table->string('MANUFACTURACION',200)->nullable();
            $table->string('INSCRIPCION_MARCAS',200)->nullable();
            $table->string('ANTIGUEDAD',20);
            $table->string('HISTORIA',200);
            $table->integer('ID_ARTICULO');
            // $table->foreign('articulo_id')->references('id')->on('articulos');
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
        Schema::dropIfExists('historia');
    }
};
