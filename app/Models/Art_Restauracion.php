<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Art_Restauracion extends Model
{
    protected $table = 'art_restauracion';

    protected $guarded = [];

    //Agregar una restauración
    public function add_articulo_restauracion($restauracion_id,$articulo_id){
        $art_res = new Art_Restauracion();

        $art_res->articulo_id = $articulo_id;
        
        $art_res->restauracion_id = $restauracion_id;

        $art_res->save();

        return $art_res;
    }

    //Acualiza una restauraciónw
    public function update_articulo_restauracion($restauracion_id,$articulo_id){
        $art_res = Art_Restauracion::where('restauracion_id',$restauracion_id)->first();

        $art_res->articulo_id = $articulo_id;

        $art_res->update();

        return $art_res;
    }
}
