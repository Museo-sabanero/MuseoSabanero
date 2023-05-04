<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use PhpParser\Node\Stmt\Echo_;

class Role extends Model
{
    protected $guarded = [];

     //Agregar
    public function add_role($data){
        $role = new Role();
        $role->short_name = $data['short_name'];
        $role->name = $data['name'];
        $role->save();
        return $role;
    }

    //metodo para actualizar el role
    public function update_role($data, Role $role){
        $role->short_name = $data['short_name'];
        $role->name = $data['name'];
        $role->save();
        return $role;
    }
    public function get_one_role(Role $role){
        return $role;
    }
    //Método para obtener todos los roles
    public function getAllRoles(){

        $roles = Role::select('id','short_name','name')->get();

        return $roles;
    }
}
