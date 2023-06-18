<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class Donante extends Model
{
    protected $table = 'donante';
    protected $primaryKey = 'ID'; // change to whatever your primary key is

      /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'ID',
        'NOMBRE',
        'TELEFONO',
        'EMAIL',
        'CEDULA',
        'DIRECCION',
        'ESTADO',
        'created_at',
    ];

    public function getNameAttribute(){
        return trim($this->attributes['NOMBRE']);
    }

    public function getStatusAttribute(){
        return trim($this->attributes['ESTADO']);
    }

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


    public function getFormatDate()
    {
        $formatted_date = Carbon::parse($this->date)->format('Y-m-d H:i:s');
        return $formatted_date;
    }
}
