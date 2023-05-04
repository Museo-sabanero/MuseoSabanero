<?php

namespace App\Http\Resources;

use App\Models\Donante;
use Illuminate\Http\Resources\Json\JsonResource;

class DonanteRecursos extends JsonResource
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
            "id" => $this->ID,
            "name" => $this->NOMBRE,
            "phone"=> $this->TELEFONO,
            "email"=> $this->EMAIL,
            "identification"=> $this->CEDULA,
            "description" => $this->DIRECCION,
            "status"=>$this->ESTADO,
            "statusDescription" => $this->getStatus(),
            "dateCreated" => $this->getFormatDate(),
        ];
    }
}
