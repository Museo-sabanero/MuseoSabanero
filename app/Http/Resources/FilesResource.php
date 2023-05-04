<?php

namespace App\Http\Resources;

use App\Models\Donante;
use Illuminate\Http\Resources\Json\JsonResource;

class FilesResource extends JsonResource
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
            "fileName" => $this->FILENAME,
            "filePath" => $this->FILEPATH,
            "status"=> $this->ESTADO,
            "type"=> $this->TIPO,
            "elementId"=> $this->ELEMENTO_ID,
            "user"=>$this->USUARIO,
            "dateCreated" => $this->getFormatDate(),
        ];
    }
}
