<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Stmt\Echo_;

class Articulo extends Model
{
    protected $guarded = [];


    //Método de busqueda
    public function scopeSearch($query, $search)

    {

        if ($search) {

            return $query->where(function ($query) use ($search) {

                $query->where('nombre', 'like', '%' . $search . '%')

                    ->orWhere('num_ref_inter', 'like', '%' . $search . '%');

            });

        }

        return $query;

    }

    //Método para obtener un articulo
    public function get_one_articulo(Articulo $articulo){
        return $articulo;
    }

    //Agregar
    public function add_articulo($data){
        $articulo = new Articulo();
        $articulo->num_ref_inter = $data['num_ref_inter'];
        $articulo->tipo_objeto = $data['tipo_objeto'];
        $articulo->nombre = $data['nombre'];
        $articulo->titulo = $data['titulo'];
        $articulo->estado_conservacion = $data['estado_conservacion'];
        $articulo->rasgo_distintivo = $data['rasgo_distintivo'];
        $articulo->tipo_adquisicion = $data['tipo_adquisicion'];
        $articulo->valor = $data['valor'];
        $articulo->estatus_legal = $data['estatus_legal'];
        $articulo->localizacion = $data['localizacion'];
        $articulo->ancho = $data['ancho'];
        $articulo->alto = $data['alto'];
        $articulo->largo = $data['largo'];
        $articulo->diametro = $data['diametro'];
        $articulo->peso = $data['peso'];
        $articulo->fragmentado = $data['fragmentado'];
        $articulo->cod_QR = $data['cod_QR'];
        $articulo->replica = $data['replica'];
        $articulo->creador = $data['creador'];
        $articulo->cedula_donante = $data['cedula_donante'];

        $articulo->save();

        return $articulo;
    }

    //Actualizar
    public function update_articulo($data, Articulo $articulo){
        
        $articulo->num_ref_inter = $data['num_ref_inter'];
        $articulo->tipo_objeto = $data['tipo_objeto'];
        $articulo->nombre = $data['nombre'];
        $articulo->titulo = $data['titulo'];
        $articulo->estado_conservacion = $data['estado_conservacion'];
        $articulo->rasgo_distintivo = $data['rasgo_distintivo'];
        $articulo->tipo_adquisicion = $data['tipo_adquisicion'];
        $articulo->valor = $data['valor'];
        $articulo->estatus_legal = $data['estatus_legal'];
        $articulo->localizacion = $data['localizacion'];
        $articulo->ancho = $data['ancho'];
        $articulo->alto = $data['alto'];
        $articulo->largo = $data['largo'];
        $articulo->diametro = $data['diametro'];
        $articulo->peso = $data['peso'];
        $articulo->fragmentado = $data['fragmentado'];
        $articulo->cod_QR = $data['cod_QR'];
        $articulo->replica = $data['replica'];
        $articulo->creador = $data['creador'];
        $articulo->cedula_donante = $data['cedula_donante'];

        $articulo->save();

        return $articulo;
    }
}
