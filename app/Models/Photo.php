<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Photo extends Model
{
    use HasFactory;
    protected $table = 'photos';
    protected $guarded = [];

    //Agregar
    public function add_photo($path,$idArticulo)
    {
        $photo = new Photo();
        $photo->photo_name = $path;
        $photo->id_articulo = $idArticulo;


        $photo->save();

        return $photo;
    }

    public function get_one_photo($id){
        $photo = Photo::where('id_articulo',$id->id);
        return $photo;
    }
}
