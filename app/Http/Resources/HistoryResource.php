<?php

namespace App\Http\Resources;

use App\Models\Donante;
use Illuminate\Http\Resources\Json\JsonResource;

class HistoryResource extends JsonResource
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
           "materials" => $this->MATERIAS,
           "manufacturing" => $this->MANUFACTURACION,
           "inscripsionMarcas" => $this->INSCRIPCION_MARCAS,
           "antiquity" => $this->ANTIGUEDAD,
           "history" => $this->HISTORIA,
           "itemId" => $this->ID_ARTICULO,
           "dateCreated" => $this->getFormatDate(),
        ];
    }
}
