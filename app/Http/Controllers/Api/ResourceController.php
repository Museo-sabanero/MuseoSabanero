<?php

namespace App\Http\Controllers\Api;

use App\Models\Estado;
use App\Models\Recursos;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\File;
use App\Http\Resources\RecursoResource;

class ResourceController extends Controller
{
    /**
     * End the ticket process.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
       $resource= new Recursos();
       if ($request->hasFile('file')) {
            $archivo = $request->file('file');
            $resource->ESTADO = Estado::ACTIVO;
            $resource->TIPO = $archivo->guessExtension();
            $resource->USUARIO = Auth::user()->name;
            $originalFileName = $request->file('file')->getClientOriginalName();
            $resource->FILENAME = $originalFileName;
            $resource->URI = Str::uuid()->toString() . '.' . $request->file('file')->getClientOriginalExtension();
            $originalUri =$resource->URI;
            // Almacenar el archivo en la carpeta "public/articulos/{ELEMENTO_ID}"
            //$resourcePath = $request->file('file')->storeAs("recursos",$originalUri,'public');
            $resourcePath = 'recursos/' . $originalUri;
            $resource->FILEPATH =$resourcePath;
            $resource->save();
            if (!File::isDirectory(storage_path('app/public/recursos'))) {
                File::makeDirectory(storage_path('app/public/recursos'), 0777, true, true);
        }
        $archivo->move(storage_path('app/public/recursos'),  $originalUri);
            return response()->json(['success' => true, 'resource' =>$resource]);
       }
     
       
    }
    public function getResources()
    {
       $resource = Recursos::on()
       ->where("recursos.ESTADO", Estado::ACTIVO)
       ->get();
    //    return response()->json(RecursoResource::collection($resource),
    //    200);
    return response()->json(['success' => true, 'resource' =>$resource]);
       
    }
    public function downloadResource(Request $request){ 
        $filepath=$request->get('filepath');
        $filename=$request->get('filename');
        if (File::exists(storage_path('app/public/'.$filepath))) {
            $pathToFile = storage_path('app/public/'.$filepath);
            return response()->file($pathToFile, $filename);
        }
        return response('file not found', 404);
    }
}
