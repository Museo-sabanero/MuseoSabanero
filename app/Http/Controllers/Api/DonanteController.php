<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Resources\DonanteRecursos;
use App\Models\Estado;
use App\Http\Resources\ArticleResource;
use App\Models\Article;
use App\Models\Donante;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Collection;


class DonanteController extends Controller
{
    /**
     * End the ticket process.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function showDonor()
    {
        $donores = new Collection();
        $donor = Donante::on('mysql')
            ->selectRaw("donante.*",)
            ->orderByDesc('ID')
            ->get();

        $donores = $donores->concat($donor);


        return response()->json(DonanteRecursos::collection($donores), 200);
    }


    public function detailsDonor($id)
    {
        $donor = Donante::on('mysql')
            ->selectRaw("donante.*",)
            ->where("donante.ID", $id)
            ->first();
        if ($donor == null) {
            $error = "No existe este donante";
            return response()->json(['errorMessage' => $error], 404);
        }

        $article = Article::on('mysql')
            ->selectRaw("articulo.*",)
            ->where("articulo.CEDULA_DONANTE", $donor->CEDULA)
            ->get();

        return response()->json([
            'Donante' =>  DonanteRecursos::make($donor),
            'Articulo' => ArticleResource::collection($article),
        ], 200);
    }


    public function detailsDonorByCedula($cedula)
    {
        $donor = Donante::on('mysql')
            ->selectRaw("donante.*",)
            ->where("donante.CEDULA", $cedula)
            ->first();
        if ($donor == null) {
            $error = "No existe este donante";
            return response()->json(['errorMessage' => $error], 404);
        }

        return response()->json(DonanteRecursos::make($donor), 200);
    }

    public function update(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:70',
            'phone' => 'required|max:12',
            'identification'=> 'required',
            'email' => 'required|max:50',
            'location' => 'required|max:400',
            'id'=> 'required',
        ]);
        if ($validator->fails()) {
            return response()->json(['errorMessage' => $validator->errors()], 400);
        }

        $name = $request->input('name');
        $phone = $request->input('phone');
        $identification = $request->input('identification');
        $email = $request->input('email');
        $location = $request->input('location');
        $id = $request->input('id');
        $now = Carbon::now();

        try {
            DB::connection('mysql')->beginTransaction();

            $donante = Donante::on('mysql')->find($id);
            if ($donante == null) {
                $error = "No existe este donante";
                return response()->json(['errorMessage' => $error], 400);
            }
            $donante->NOMBRE = $name;
            $donante->CEDULA = $identification;
            $donante->EMAIL = $email;
            $donante->TELEFONO = $phone;
            $donante->DIRECCION = $location;

            $donante->setConnection('mysql');
            $donante->save();

            DB::connection('mysql')->commit();
            return response()->json(DonanteRecursos::make($donante), 201);
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
    public function changeStatus($id)
    {
        $donor = Donante::on('mysql')->find($id);
        if ($donor == null) {
            $error = "No existe este donante";
            return response()->json(['errorMessage' => $error], 404);
        }
        if ($donor->status == 'A') {
            $donor->ESTADO = Estado::INACTIVO;
            $donor->save();
            // Register in Log
        } else {
            $donor->ESTADO = Estado::ACTIVO;
            $donor->save();
            // Register in Log
        }
        return response()->json(DonanteRecursos::make($donor), 200);
    }

    public function register(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required|max:70',
            'id' => 'required|max:50|unique:donante,CEDULA',
            'phone' => 'required|max:12',
            'ubication' => 'required|max:500',
            'email' => 'required|max:50|unique:donante,email',
        ], [
            'email.unique' => 'La dirección de correo electrónico ya está en uso',
            'id.unique' => 'Esta cédula ya esta en uso',
            'id.required' => 'La cédula es un campo requerido',
            'email.required' => 'El email es un campo requerido',
        ]);

        if ($validator->fails()) {
            return response()->json(['errorMessage' => $validator->errors()], 400);
        }

        $name = $request->input('name');
        $identification = $request->input('id');
        $phone = $request->input('phone');
        $email = $request->input('email');
        $ubication = $request->input('ubication');

        try {
            DB::connection('mysql')->beginTransaction();

            $donor = new Donante();
            $donor->NOMBRE = $name;
            $donor->TELEFONO = $phone;
            $donor->EMAIL = $email;
            $donor->CEDULA = $identification;
            $donor->DIRECCION = $ubication;
            $donor->ESTADO = Estado::ACTIVO;

            $donor->setConnection('mysql');
            $donor->save();

            DB::connection('mysql')->commit();
            return response()->json(DonanteRecursos::make($donor), 201);
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
