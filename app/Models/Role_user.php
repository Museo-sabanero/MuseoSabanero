<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Role_user extends Model
{
    // use HasFactory;
    protected $table = 'role_user';

    protected $guarded = [];

    public function get_one_role_user(Role_user $role_user){
        return $role_user;
    }
}
