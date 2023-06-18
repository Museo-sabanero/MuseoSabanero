<?php

namespace App\Http\Resources;

use App\Models\Donante;
use Illuminate\Http\Resources\Json\JsonResource;

class RestaurationResource extends JsonResource
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
            'id' => $this->id,
            'userRegisterSend'=> $this->USUARIO_REGISTRA_ENVIO,
            'userAutorizedSend' => $this->USUARIO_AUTORIZA_ENVIO,
            'typeArticle'=> $this->TIPO_ARTICULO,
            'dateSend' => $this->FECHA_ENVIO,
            'datePrevReceived'=> $this->FECHA_PREV_RECIBIDO_RESTAU,
            'inChargeRestauration'=> $this->ENCARGADO_RESTAURACION,
            'placeRestauration'=> $this->LUGAR_RESTAURACION,
            'detailsSend'=> $this->DETALLE_ENVIO,
            'cost'=> $this->COSTE,
            'status'=> $this->ESTADO,
            "statusDescription" => $this->getStatus($this->ESTADO),
            'detailsReceived'=> $this->DETALLE_RECIBIDO,
            'dateReceived'=> $this->FECHA_RECIBIDO,
            'userReceived'=> $this->USUARIO_RECIBE,
            'userAutorizedReceived'=> $this->USUARIO_AUTORIZA_RECIBIDO,
            "dateCreated" => $this->getFormatDate(),
            "articles" => $this->articles,
            "objectTypeDescription" => $this->getObjectType($this->TIPO_ARTICULO),

        ];
    }
}
