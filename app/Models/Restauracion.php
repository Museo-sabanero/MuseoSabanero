<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restauracion extends Model
{
    protected $table = 'restauraciones';

    protected $guarded = [];

    //Método de busqueda
    public function scopeSearch($query, $search)

    {

        if ($search) {

            return $query->where(function ($query) use ($search) {

                $query->where('articulos.nombre', 'like', '%' . $search . '%')

                    ->orWhere('users.identification', 'like', '%' . $search . '%');

            });

        }

        return $query;

    }

    //Agregar
    public function add_restauracion($data){
        $res = new Restauracion();

        $res->fecha_inicio = $data['fecha_inicio'];
        $res->fecha_fin = $data['fecha_fin'];
        $res->user_id = $data['user_id'];
        $res->tipo = $data['tipo'];
        $res->autorizado = $data['autorizado'];
        $res->observaciones = $data['observaciones'];
        $res->estado = $data['estado'];

        $res->save();

        return $res;
    }

    //Obtener una restauración
    public function get_one_restauracion(Restauracion $restauracion){
        return $restauracion;
    }

    //Actualizar
    public function update_restauracion($data, Restauracion $res){
        
        $res->fecha_inicio = $data['fecha_inicio'];
        $res->fecha_fin = $data['fecha_fin'];
        $res->user_id = $data['user_id'];
        $res->tipo = $data['tipo'];
        $res->autorizado = $data['autorizado'];
        $res->observaciones = $data['observaciones'];
        $res->estado = $data['estado'];
        
        $res->update();

        return $res;
    }
}
