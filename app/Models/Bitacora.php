<?php

namespace App\Models;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bitacora extends Model
{
    protected $table = 'bitacora';

    protected $guarded = [];

     //Método de busqueda
    public function scopeSearch($query, $search)

    {

        if ($search) {

            return $query->where(function ($query) use ($search) {

                $query->where('elemento', 'like', '%' . $search . '%')->orWhere('id_articulo', 'like', '%' . $search . '%')->orWhere('fecha', 'like', '%' . $search . '%');

            });

        }

        return $query;

    }

    //Método para obtener una bitacora
    public function get_one_bitacora(Bitacora $bitacora){
        return $bitacora;
    }

    //Agregar
    public function add_bitacora($data){
        $bitacora = new Bitacora();
        
        $bitacora->id = $data['id'];
        $bitacora->elemento = $data['elemento'];
        $bitacora->usuario = $data['usuario'];
        $bitacora->status = $data['status'];
        $bitacora->nota = $data['nota'];
        $bitacora->fecha = $data['fecha'];
        $bitacora->id_articulo = $data['id_articulo'];

        $bitacora->save();

        return $bitacora;
    }

    public function getFormatDate()
    {
        $formatted_date = Carbon::parse($this->date)->format('Y-m-d H:i:s');
        return $formatted_date;
    }
}
