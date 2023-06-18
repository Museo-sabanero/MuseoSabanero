<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Restauration extends Model
{
    protected $table = 'ms_restauraciones';
    protected $primaryKey = 'id'; // change to whatever your primary key is

      /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'USUARIO_REGISTRA_ENVIO',
        'USUARIO_AUTORIZA_ENVIO',
        'TIPO_ARTICULO',
        'FECHA_ENVIO',
        'FECHA_PREV_RECIBIDO_RESTAU',
        'ENCARGADO_RESTAURACION',
        'LUGAR_RESTAURACION',
        'DETALLE_ENVIO',
        'COSTE',
        'ESTADO',
        'DETALLE_RECIBIDO',
        'FECHA_RECIBIDO',
        'USUARIO_RECIBE',
        'USUARIO_AUTORIZA_RECIBIDO',
        'created_at',


    ];

    public function getStatus($status)
    {
        switch ($status) {
            case 'E':
                return 'Enviado';
                break;

            case 'A':
                return 'Aprobado';
                break;

            default:
                return 'No definido';
        }
    }

    public function getObjectType($objectType)
    {
        switch ($objectType) {
            case 'A':
                return 'Artesanía';
                break;

            case 'T':
                return 'Herramienta de trabajo';
                break;
            case 'C':
                return 'Herramienta de cocina';
                 break;
        }
    }

    public function getDateAttribute(){
        return trim($this->attributes['created_at']);
    }


    function getDateDescriptive($date) {
        $timestamp = strtotime($date);
        $dateDescriptive = date('Y-m-d', $timestamp);
        return $dateDescriptive;
    }


    public function getFormatDate()
    {
        $formatted_date = Carbon::parse($this->date)->format('Y-m-d H:i:s');
        return $formatted_date;
    }
}
