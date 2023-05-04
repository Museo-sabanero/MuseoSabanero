<?php

namespace App\Http\Resources;

use App\Models\Donante;
use Illuminate\Http\Resources\Json\JsonResource;

class ArticleResource extends JsonResource
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
            "id"  => $this->id,
            "numRefInter"  => $this->NUM_REF_INTER,
            "otherRef"  => $this->OTRA_REF,
            "name" => $this->NOMBRE,
            "title" => $this->TITULO,
            "objectType" => $this->TIPO_OBJETO,
            "objectTypeDescription" => $this->getObjectType($this->TIPO_OBJETO),
            "acquisitionType" => $this->TIPO_ADQUISICION,
            "acquisitionTypeDescription" => $this->getAdquisitionType($this->TIPO_ADQUISICION),
            "width" => $this->ANCHO,
            "measureWidth" => $this->MEDIDA_ANCHO,
            "height" => $this->ALTO,
            "measureHeight" => $this->MEDIDA_ALTO,
            "lenght" => $this->LARGO,
            "measureLenght" => $this->MEDIDA_LARGO,
            "diameter" => $this->DIAMETRO,
            "measureDiameter" => $this->MEDIDA_DIAMETRO,
            "status" => $this->ESTADO,
            "weight" => $this->PESO,
            "measureWeight" => $this->MEDIDA_PESO,
            "conservationStatus" => $this->ESTADO_CONSERVACION,
            "conservationStatusDescription" => $this->getConservationStatus($this->ESTADO_CONSERVACION),
            "legalStatus" => $this->ESTATUS_LEGAL,
            "legalStatusDescription" => $this->getLegalStatus($this->ESTATUS_LEGAL),
            "value" => $this->VALOR,
            "distinguishingFeature" => $this->RASGO_DISTINTIVO,
            "location" => $this->LOCALIZACION,
            "fragmented" => $this->FRAGMENTADO,
            "replica" => $this->REPLICA,
            "cedulaDonor" => $this->CEDULA_DONANTE,
            "codQR" => $this->COD_QR,
            "user" => $this->USUARIO,
            "dateCreated" => $this->getFormatDate(),
        ];
    }
}
