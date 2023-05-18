<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Resources\EventResource;
use App\Http\Resources\ArticleResource;
use App\Models\Estado;
use App\Models\TypeFile;
use App\Models\Article;
use App\Models\History;
use App\Models\File;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Collection;


class FileController extends Controller
{
    /**
     * End the ticket process.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

     public function store(Request $request)
     {
         $file = new File();

         $file->ELEMENTO_ID = $request->input('elementId');
         $file->FILENAME = time() . '_' . $request->file('file')->getClientOriginalName();
         $file->URI = Str::uuid()->toString() . '.' . $request->file('file')->getClientOriginalExtension();
         $file->ESTADO = Estado::ACTIVO;
         $file->TIPO = TypeFile::IMAGEN;
         $file->USUARIO = 'Juan';
         $file->FILEPATH = $request->file('file');
         $file->save();
         return response()->json(['success' => true, 'file' => $file]);
     }

    // public function store(Request $request)
    // {
    //     // Validar que el archivo no pese más de 10 MB
    //     // $validator = Validator::make($request->all(), [
    //     //     'file' => 'required|max:10240|mimes:jpeg,png,gif,pdf,doc,docx,xls,xlsx,ppt,pptx',
    //     // ]);

    //     // if ($validator->fails()) {
    //     //     return response()->json(['errorMessage' => $validator->errors()], 400);
    //     // }

    //     // Obtenemos el archivo enviado en la solicitud
    //     $file = $request->file('file');
    //     $fileName = $file->getClientOriginalName();
    //     // Obtenemos los demás datos enviados en la solicitud
    //     $id = $request->input('elementId');
    //     // Crear una nueva instancia del archivo file
    //     $file = new File();
    //     $file->ELEMENTO_ID = $id;
    //     $file->FILENAME = $fileName;
    //     $file->URI = Str::uuid()->toString() . '.' . $file->getClientOriginalExtension();
    //     $file->ESTADO = Estado::ACTIVO;
    //     $file->TIPO = TypeFile::IMAGEN;
    //     $file->USUARIO = 'Juan';
    //     $file->FILEPATH = ("app/public'/articlulos" . '/' . $file->ELEMENTO_ID);
    //     $file->save();
    //     $file->move(storage_path("app/public'/articlulos" . '/' . $file->ELEMENTO_ID), $file->uri);

    //     return response()->json(['success' => true, 'file' => $file]);
    // }

}
