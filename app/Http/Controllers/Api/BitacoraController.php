<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Resources\BitacoraResource;
use App\Models\Bitacora;
use Illuminate\Support\Facades\Auth;
use Illuminate\Database\Eloquent\Collection;

class BitacoraController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

    public function showBitacora()
    {
        $bitacoras = new Collection();
        $bitacora = Bitacora::on('mysql')
            ->selectRaw("bitacora.*",)
            ->orderByDesc('id')
            ->get();

        $bitacoras = $bitacoras->concat($bitacora);


        return response()->json(BitacoraResource::collection($bitacoras), 200);
    }
    
    public function detailsBitacora($id)
    {
        $bitacora = Bitacora::on('mysql')
            ->selectRaw("bitacora.*",)
            ->where("bitacora.id", $id)
            ->get();

        if ($bitacora == null) {
            $error = "No existe la Bitacora";
            return response()->json(['errorMessage' => $error], 404);
        }

        return response()->json(BitacoraResource::collection($bitacora), 200);
    }

    public function bitacoraByIdArticulo($id_articulo)
    {
        $bitacora = Bitacora::on('mysql')
            ->selectRaw("bitacora.*",)
            ->where("bitacora.id_articulo", $id_articulo)
            ->orderByDesc('id')
            ->get();

        if ($bitacora == null) {
            $error = "No existe la Bitacora";
            return response()->json(['errorMessage' => $error], 404);
        }

        return response()->json(BitacoraResource::collection($bitacora), 200);
    }

    public function store(Request $request)
    {
        $bitacora = new Bitacora();
        $bitacora->id_articulo = $request->input('id_articulo');
        $bitacora->elemento = $request->input('name');
        $bitacora->usuario = Auth::user()->name;
        $bitacora->status = $request->input('status');       
        $bitacora->nota = $request->input('nota');
        $bitacora->fecha = date("d-m-Y");

        $bitacora->save();

        //$findBitacora = Bitacora::latest()->first();

        return response()->json(new BitacoraResource($bitacora), 201);
    }
    
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
