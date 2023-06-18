<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Carbon\Carbon;

class TypeObject extends Model
{
    protected $table = 'ms_tipo_objeto';
    protected $primaryKey = 'id'; // change to whatever your primary key is

      /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'NOMBRE',
    ];

    public function getDateAttribute(){
        return trim($this->attributes['created_at']);
    }


    function getDateDescriptive($date) {
        $timestamp = strtotime($date);
        $dateDescriptive = date('Y-m-d', $timestamp);
        return $dateDescriptive;
    }


}
