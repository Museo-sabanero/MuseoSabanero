<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class History extends Model
{
    protected $table = 'ms_historia';
    protected $primaryKey = 'id'; // change to whatever your primary key is

      /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'MATERIAS',
        'MANUFACTURACION',
        'INSCRIPCION_MARCAS',
        'ANTIGUEDAD',
        'HISTORIA',
        'ID_ARTICULO',
        'created_at',
    ];

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
