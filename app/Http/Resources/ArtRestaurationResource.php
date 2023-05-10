<?php

namespace App\Http\Resources;

use App\Models\Donante;
use Illuminate\Http\Resources\Json\JsonResource;

class ArtRestaurationResource extends JsonResource
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
            "articleId" => $this->ID_ARTICULO,
            "restaurationId" => $this->ID_RESTAURACION,
            "dateCreated" => $this->getFormatDate(),
        ];
    }
}
