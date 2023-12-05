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
       return response()->json(RecursoResource::collection($resource),
       200);
    //return response()->json(['success' => true, 'resource' =>$resource]);
       
    }
    public function deleteResources(Request $request)
    {
       
        $id=$request->get('id');
        $resource = Recursos::on()->find($id);
        //dd($resource);
        if ($resource == null) {
            $error = "No existe este artículo";
            return response()->json(['errorMessage' => $error], 404);
        }
        $resource->ESTADO = Estado::INACTIVO;
        $resource->save();
        $resources = Recursos::on()->where("recursos.ESTADO", Estado::ACTIVO)->get();
       return response()->json(RecursoResource::collection($resources),
       200);
    //return response()->json(['success' => true, 'resource' =>$resource]);
       
    }
    public function downloadResource(Request $request){ 
        //dd($request);
        $filepath=$request->get('filepath');
        $filename=$request->get('filename');
        if (File::exists(storage_path('app/public/'.$filepath))) {
            $pathToFile = storage_path('app/public/'.$filepath);
            
            return response()->download($pathToFile, $filename);
        }
        return response('file not found', 404);
    }
    public function update(Request $request){
        
        $id=$request->get('id');
        //dd($id);
        $resource = Recursos::on()->find($id);
        
        if ($resource == null) {
            $error = "No existe este recurso";
            return response()->json(['errorMessage' => $error], 404);
        }
        $archivo = $request->file('file');

        $oldFilePath = $resource->FILEPATH;

        $resource->TIPO = $archivo->guessExtension();
        $originalFileName = $request->file('file')->getClientOriginalName();
        $resource->FILENAME = $originalFileName;
        $resource->URI = Str::uuid()->toString() . '.' . $request->file('file')->getClientOriginalExtension();
        $originalUri =$resource->URI;
        
        $resourcePath = 'recursos/' . $originalUri;
        $resource->FILEPATH =$resourcePath;

        
        $archivo->move(storage_path('app/public/recursos'),  $originalUri);
        $resource->save();
        $resource_path = storage_path('app/public/'.$oldFilePath );
        if ($resource_path != null) {
            unlink($resource_path);
        }
        return response()->json(['success' => true, 'resource' =>$resource]);
   }
    
}
