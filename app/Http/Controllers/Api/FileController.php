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
use App\Http\Resources\FilesResource;
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
        $file->ESTADO = Estado::ACTIVO;
        $file->TIPO = TypeFile::IMAGEN;
        $file->USUARIO = Auth::user()->name;

        $originalFileName = $request->file('file')->getClientOriginalName();
        $file->FILENAME = $originalFileName;

        $elementoIdFolder = $file->ELEMENTO_ID;

        $file->URI = Str::uuid()->toString() . '.' . $request->file('file')->getClientOriginalExtension();

        $originalUri = $file->URI;
        // Almacenar el archivo en la carpeta "public/articulos/{ELEMENTO_ID}"
        $filePath = $request->file('file')->storeAs("articulos/{$elementoIdFolder}",
            $originalUri,
            'public'
        );

        $file->FILEPATH = $filePath;
        $file->save();

        return response()->json(['success' => true, 'file' => $file]);
    }

    public function update(Request $request)
    {

        $identification = $request->input('elementId');
        $id = (int) $identification;

        $image = File::on('mysql')
        ->where("MS_ARCHIVOS.ELEMENTO_ID", $id)
            ->get();

        $file = new File();

        if ($image == null) {

           // $file = new File();

            $file->ELEMENTO_ID = $request->input('elementId');
            $file->ESTADO = Estado::ACTIVO;
            $file->TIPO = TypeFile::IMAGEN;
            $file->USUARIO = Auth::user()->name;

            $originalFileName = $request->file('file')->getClientOriginalName();
            $file->FILENAME = $originalFileName;

            $elementoIdFolder = $file->ELEMENTO_ID;

            $file->URI = Str::uuid()->toString() . '.' . $request->file('file')->getClientOriginalExtension();

            $originalUri = $file->URI;

            // Almacenar el archivo en la carpeta "public/articulos/{ELEMENTO_ID}"
            $filePath = $request->file('file')->storeAs(
                "articulos/{$elementoIdFolder}",
                $originalUri,
                'public'
            );

            $file->FILEPATH = $filePath;
            $file->save();
        } else {

                foreach ($image as $images) {
                    $images->ESTADO = Estado::INACTIVO;
                    $images->save();
                }

                $file->ELEMENTO_ID = $request->input('elementId');
                $file->ESTADO = Estado::ACTIVO;
                $file->TIPO = TypeFile::IMAGEN;
                $file->USUARIO = Auth::user()->name;

                $originalFileName = $request->file('file')->getClientOriginalName();
                $file->FILENAME = $originalFileName;

                $elementoIdFolder = $file->ELEMENTO_ID;

                $file->URI = Str::uuid()->toString() . '.' . $request->file('file')->getClientOriginalExtension();

                $originalUri = $file->URI;

                // Almacenar el archivo en la carpeta "public/articulos/{ELEMENTO_ID}"
                $filePath = $request->file('file')->storeAs(
                    "articulos/{$elementoIdFolder}",
                    $originalUri,
                    'public'
                );

                $file->FILEPATH = $filePath;
                $file->save();
        }

        return response()->json(['success' => true, 'file' => $file]);
    }

    public function getImageByIdArticle(Request $request)
    {

        $identification = $request->input('id');
        $id = (int) $identification;

        $image = File::on('mysql')
            ->where("MS_ARCHIVOS.ELEMENTO_ID", $id)
            ->where("MS_ARCHIVOS.ESTADO", Estado::ACTIVO)
            ->first();

        if ($image == null) {
            return response()->json('null', 200);
        }

        return response()->json(new FilesResource($image), 200);
    }

}
