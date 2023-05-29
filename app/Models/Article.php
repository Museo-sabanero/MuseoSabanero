<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Article extends Model
{
    protected $table = 'MS_ARTICULO';
    protected $primaryKey = 'id'; // change to whatever your primary key is

      /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'NUM_REF_INTER',
        'OTRA_REF',
        'NOMBRE',
        'TITULO',
        'TIPO_OBJETO',
        'TIPO_ADQUISICION',
        'ANCHO',
        'MEDIDA_ANCHO',
        'ALTO',
        'MEDIDA_ALTO',
        'LARGO',
        'MEDIDA_LARGO',
        'DIAMETRO',
        'MEDIDA_DIAMETRO',
        'ESTADO',
        'PESO',
        'MEDIDA_PESO',
        'ESTADO_CONSERVACION',
        'ESTATUS_LEGAL',
        'VALOR',
        'TIPO_MONEDA',
        'RASGO_DISTINTIVO',
        'LOCALIZACION',
        'FRAGMENTADO',
        'REPLICA',
        'CEDULA_DONANTE',
        'COD_QR',
        'USUARIO',
        'created_at',
    ];

    public function getDateAttribute(){
        return trim($this->attributes['created_at']);
    }

    public function getStatus()
    {
        switch ($this->status) {
            case 'A':
                return 'Activo';
                break;

            case 'I':
                return 'Inactivo';
                break;
        }
    }


    public function getAdquisitionType($acquisitionType)
    {
        switch ($acquisitionType) {
            case 'R':
                return 'Regalía';
                break;

            case 'D':
                return 'Donativo';
                break;
        }
    }

    public function getConservationStatus($conservationStatus)
    {
        switch ($conservationStatus) {
            case 'B':
                return 'Bueno';
                break;

            case 'R':
                return 'Regular';
                break;

            case 'M':
                return 'Malo';
                break;
        }
    }

    public function getLegalStatus($legalStatus)
    {
        switch ($legalStatus) {
            case 'P':
                return 'Prestamo';
                break;

            case 'D':
                return 'Donado';
                break;

            case 'M':
                return 'Propio del museo';
                break;
        }
    }

    function getDateDescriptive($date) {
        $timestamp = strtotime($date);
        $dateDescriptive = date('Y-m-d', $timestamp);
        return $dateDescriptive;
    }

    function formatMoneyCRC($amount) {
        // Utilizamos number_format para dar formato al número
        $formattedAmount = number_format($amount, 2, ',', '.');

        // Agregamos el símbolo de la moneda al inicio del número
        $formattedAmount = '₡' . $formattedAmount;

        // Retornamos el número formateado
        return $formattedAmount;
      }



    public function getFormatDate()
    {
        $formatted_date = Carbon::parse($this->date)->format('Y-m-d H:i:s');
        return $formatted_date;
    }
}
