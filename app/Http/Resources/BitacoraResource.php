<?php

namespace App\Http\Resources;

use App\Models\Bitacora;
use Illuminate\Http\Resources\Json\JsonResource;

class BitacoraResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        return [
            "id" => $this->id,
            "elemento" => $this->elemento,
            "usuario"=> $this->usuario,
            "status"=> $this->status,
            "nota"=> $this->nota,
            "fecha" => $this->fecha,
            "id_articulo" => $this->id_articulo,
        ];
    }
}
