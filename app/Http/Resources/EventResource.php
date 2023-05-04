<?php

namespace App\Http\Resources;

use App\Models\Donante;
use Illuminate\Http\Resources\Json\JsonResource;

class EventResource extends JsonResource
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
            "dateStart" => $this->getDateDescriptive($this->FECHA_INICIO),
            "dateEnd"=> $this->getDateDescriptive($this->FECHA_FIN),
            "time"=> $this->HORA,
            "name"=> $this->NOMBRE,
            "cost"=> $this->formatMoneyCRC($this->COSTO),
            "costUpdate" => $this->COSTO,
            "description" => $this->DESCRIPCION,
            "maxPersons"=> $this->MAX_PERSONAS,
            "status"=>$this->ESTADO,
            "statusDescription" => $this->getStatus(),
            "dateCreated" => $this->getFormatDate(),
        ];
    }
}
