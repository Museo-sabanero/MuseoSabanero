<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Event extends Model
{
    protected $table = 'evento';
    protected $primaryKey = 'id'; // change to whatever your primary key is

      /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'FECHA_INICIO',
        'FECHA_FIN',
        'HORA',
        'NOMBRE',
        'COSTO',
        'DESCRIPCION',
        'MAX_PERSONAS',
        'ESTADO',
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
