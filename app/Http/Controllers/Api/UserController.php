<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserResources;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Support\Facades\Mail;
use App\Mail\EmailNotification;

class UserController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function showUser()
    {
        $useres = new Collection();
        $user = User::on('mysql')
            ->selectRaw("usuarios.*",)
            ->get();

        $useres = $useres->concat($user);


        return response()->json(UserResources::collection($useres), 200);
    }


    public function detailsUser()
    {
        $nickName = Auth::user()->nickname;
        $user = User::on('mysql')
            ->selectRaw("usuarios.*",)
            ->where("usuarios.login", $nickName)
            ->first();
        if ($user == null) {
            $error = "No existe este usuario";
            return response()->json(['errorMessage' => $error], 404);
        }

        return response()->json(UserResources::make($user), 200);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:70',
            'nameUser' => 'required|max:50',
            'password' => 'required|max:20',
            'role' => 'required',
            'email' => 'required|max:50|unique:usuarios,email',
            'token' => 'required',
        ], [
            'email.unique' => 'La dirección de correo electrónico ya está en uso',
            'email.required' => 'El email es un campo requerido',
        ]);

        if ($validator->fails()) {
            return response()->json(['errorMessage' => $validator->errors()], 400);
        }

        $name = $request->input('name');
        $password = $request->input('password');
        $nameUser = $request->input('nameUser');
        $email = $request->input('email');
        $role = $request->input('role');
        $token = $request->input('token');
        $now = Carbon::now();

        try {
            DB::connection('mysql')->beginTransaction();

            $user = new User();
            $user->nombre = $name;
            $user->login = $nameUser;
            $user->email = $email;
            $user->email_verified_at = $now;
            $user->contrasena = $password;
            $user->ROL_ID = $role;
            $user->remember_token = $token;

            $user->setConnection('mysql');
            $user->save();

            $email =$user->email;
            $url = url('/');
            $subject = "Envio de credenciales";
            $emailBody = "<h4>Estimado/a {$user->nombre},</h4>"
            . "<p>Su usuario es: <strong>{$user->login}</strong></p>"
            . "<p>Su contraseña es: <strong>{$user->contrasena}</strong></p>"
            . "<p>Le invitamos a iniciar sesión.</p>"
            . "<p><a href=\"{$url}\">MUSEO SABANERO</a></p>"
            . "<h4>¡Saludos!</h4>";
            
            Mail::to($email)->send(new EmailNotification($subject, $emailBody));

            DB::connection('mysql')->commit();
            return response()->json(UserResources::make($user), 201);
        } catch (\PDOException $th) {
            DB::connection('mysql')->rollback();
            Log::error($th->getMessage());

            return response($th->getMessage(), 500);
        } catch (\Throwable $th) {
            DB::connection('mysql')->rollback();
            Log::error($th->getMessage());

            return response($th->getMessage(), 500);
        }
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:70',
            'nameUser' => 'required|max:50',
            'password' => 'required|max:20',
            'role' => 'required',
            'email' => 'required|max:50',
            'id'=> 'required',
        ]);

        if ($validator->fails()) {
            return response()->json(['errorMessage' => $validator->errors()], 400);
        }

        $name = $request->input('name');
        $password = $request->input('password');
        $nameUser = $request->input('nameUser');
        $email = $request->input('email');
        $role = $request->input('role');
        $id = $request->input('id');
        $now = Carbon::now();

        try {
            DB::connection('mysql')->beginTransaction();

            $user = User::on('mysql')->find($id);
            if ($user == null) {
                $error = "No existe este usuario";
                return response()->json(['errorMessage' => $error], 400);
            }
            $user->nombre = $name;
            $user->login = $nameUser;
            $user->email = $email;
            $user->email_verified_at = $now;
            $user->contrasena = $password;
            $user->ROL_ID = $role;

            $user->setConnection('mysql');
            $user->save();

            DB::connection('mysql')->commit();
            return response()->json(UserResources::make($user), 201);
        } catch (\PDOException $th) {
            DB::connection('mysql')->rollback();
            Log::error($th->getMessage());

            return response($th->getMessage(), 500);
        } catch (\Throwable $th) {
            DB::connection('mysql')->rollback();
            Log::error($th->getMessage());

            return response($th->getMessage(), 500);
        }
    }
}
