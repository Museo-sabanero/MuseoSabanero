<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateMsArchivosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('ms_archivos', function (Blueprint $table) {
            $table->id();
            $table->bigInteger('ELEMENTO_ID');
            $table->string('FILENAME',150);
            $table->string('URI',150);
            $table->string('FILEPATH',150);
            $table->string('ESTADO',150);
            $table->string('TIPO',150);
            $table->string('USUARIO',150);
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
        Schema::dropIfExists('ms_archivos');
    }
}
