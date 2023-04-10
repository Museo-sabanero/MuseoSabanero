<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'usuarios';

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'iduser',
        'nombre',
        'email',
        'login',
        'contrasena',
        'ROL_ID',
        'remember_token',
    ];

    /**
     * The primary key for the model.
     * @var string
     */
    protected $primaryKey = 'iduser';

    /***********************************************************************
     * SCOPES
     ***********************************************************************/

    /**
     * Add a where statement for current logged in user
     * @param Builder $query
     * @return Builder
     */
    public function scopeCurrentUser($query)
    {
        return $query->where('iduser', '=', \Auth::user()->id);
    }

    protected $maps = [
        'id' => 'iduser',
        'name' => 'nombre',
        'password' => 'contrasena',
        'remember_token' => 'token_recordarme',
        'email_verified_at' => 'email_verificado',
        'idRol' => 'ROL_ID'
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'contrasena',
        'token_recordarme',
        'email_verificado'
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'email_verificado' => 'datetime',
    ];

    public function getAuthPassword()
    {
        return $this->attributes['contrasena'];
    }

    public function getAuthIdentifierName()
    {
        return 'iduser';
    }

    public function getAuthIdentifier()
    {
        return $this->attributes['iduser'];
    }

    public function getNameAttribute()
    {
        return $this->attributes['nombre'];
    }

    public function getIdRoleAttribute()
    {
        return $this->attributes['ROL_ID'];
    }

    public function getNicknameAttribute()
    {
        return trim($this->attributes["login"]);
    }

    public function getEmailAttribute()
    {
        return $this->attributes["email"];
    }

    public function getIsAdminAttribute()
    {
        if ($this->idRole == 1) {
            return true;
        }
    }

    public function getRoleAttribute()
    {


        switch ($this->idRole) {
            case '1':
                return 'Administrador';
                break;

            case '2':
                return 'Usuario';
                break;
        }
    }
}
