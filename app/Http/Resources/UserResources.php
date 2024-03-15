<?php

namespace App\Http\Resources;

use App\Models\Donante;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResources extends JsonResource
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
            "id"=> $this->iduser,
            "name" => $this->nombre,
            "login" => $this->login,
            "password"=> $this->contrasena,
            "email"=> $this->email,
            "token"=> $this->remember_token,
            "role" => $this->ROL_ID,
            "roleDescription" => $this->role,
            "status" => $this->Estado,
        ];
    }
}
