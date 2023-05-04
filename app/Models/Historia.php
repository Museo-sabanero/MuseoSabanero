<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Historia extends Model
{
    protected $table = 'historia';

    protected $guarded = [];

    //Obtener historia
    public function get_historia($articulo_id){
        $historia = Historia::where('articulo_id',$articulo_id)->first();

        return $historia;
    }


    //Agregar
    public function add_historia($data,$articulo_id){
        $historia = new Historia();

        $historia->materiales = $data['materiales'];
        $historia->manufacturacion = $data['manufacturacion'];
        $historia->inscripcion_marcas = $data['inscripcion_marcas'];
        $historia->antiguedad = $data['antiguedad'];
        $historia->historia = $data['historia'];
        $historia->articulo_id = $articulo_id;

        $historia->save();

        return $historia;
    }

    //Actualizar
    public function update_historia($data,$articulo_id){
        $historia = $this->get_historia($articulo_id);
        
        //Log::info($data);
        $historia->materiales = $data['materiales'];
        $historia->manufacturacion = $data['manufacturacion'];
        $historia->inscripcion_marcas = $data['inscripcion_marcas'];
        $historia->antiguedad = $data['antiguedad'];
        $historia->historia = $data['historia'];
        $historia->articulo_id = $articulo_id;

        $historia->save();

        return $historia;
    }
}
