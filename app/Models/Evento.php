<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Evento extends Model
{
    protected $table = 'evento';

    protected $guarded = [];

    //Método de busqueda
    public function scopeSearch($query, $search)

    {

        if ($search) {

            return $query->where(function ($query) use ($search) {

                $query->where('nombre', 'like', '%' . $search . '%')

                    ->orWhere('descripcion', 'like', '%' . $search . '%');

            });

        }

        return $query;

    }

    //Agregar
    public function add_evento($data){
        $evento = new Evento();

        $evento->fecha_inicio = $data['fecha_inicio'];
        $evento->fecha_fin = $data['fecha_fin'];
        $evento->hora = $data['hora'];
        $evento->nombre = $data['nombre'];
        $evento->costo = $data['costo'];
        $evento->descripcion = $data['descripcion'];
        $evento->max_personas = $data['max_personas'];
        $evento->estado = $data['estado'];

        $evento->save();

        return $evento;
    }

    //Obtener un evento
    public function get_one_evento(Evento $evento){
        return $evento;
    }


    //Actualizar
    public function update_evento($data, Evento $evento){
        
        $evento->fecha_inicio = $data['fecha_inicio'];
        $evento->fecha_fin = $data['fecha_fin'];
        $evento->hora = $data['hora'];
        $evento->nombre = $data['nombre'];
        $evento->costo = $data['costo'];
        $evento->descripcion = $data['descripcion'];
        $evento->max_personas = $data['max_personas'];
        $evento->estado = $data['estado'];

        $evento->save();

        return $evento;
    }

    //Cambia el estado de un evento
    public function change_evento_status(Evento $evento){

        $evento->estado = 0;

        $evento->save();

        return $evento;
    }
}
