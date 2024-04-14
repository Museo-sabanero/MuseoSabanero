<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Resources\EventResource;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\TypeObjectResource;
use App\Models\Estado;
use App\Models\Article;
use App\Models\History;
use App\Models\TypeObject;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Collection;

class ArticleController extends Controller
{
    /**
     * End the ticket process.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getArticles()
    {
        $articles = new Collection();

        $article = Article::on('mysql')
            ->selectRaw("articulo.*",)
            ->where("articulo.ESTADO", Estado::ACTIVO)
            ->orderByDesc('id')
            ->get();

        $articles = $articles->concat($article);


        return response()->json(ArticleResource::collection($articles), 200);
    }

    public function exportPDFArticles(){

        $articles = new Collection();

        $article = Article::on('mysql')
            ->selectRaw("articulo.*",)
            ->where("articulo.ESTADO", Estado::ACTIVO)
            ->orderByDesc('id')
            ->get();

        $articles = $articles->concat($article);
        // DD($articles);
        $pdf = Pdf::loadView('templatePDF.templatePDFArticulos', ['articlesList' => $articles])->setPaper('a4', 'landscape');
            return $pdf->download('Articulos del museo del sabanero.pdf');
           
    }
    public function getTypeObjects()
    {
        $object = new Collection();

        $objects = TypeObject::on('mysql')
            ->selectRaw("objeto.*",)
            ->get();

        $objects = $objects->concat($object);


        return response()->json(TypeObjectResource::collection($objects), 200);
    }

    public function getTypeObject(Request $request)
    {
        $identification = $request->input('id');
        $id = (int) $identification ;

            $objects = TypeObject::on('mysql')
                ->where("objeto.id", $id)
                ->first();

            if ($objects == null) {
                $error = "No existe este tipo de objecto";
                return response()->json(['errorMessage' => $error], 404);
            }

        return response()->json(new TypeObjectResource($objects), 200);
    }
    public function getArticle(Request $request)
    {

        $identification = $request->input('id');
        $id = (int) $identification;

        $article = Article::on('mysql')
            ->where("articulo.id", $id)
            ->get();

        if ($article == null) {
            $error = "No existe este artículo";
            return response()->json(['errorMessage' => $error], 404);
        }

        return response()->json(ArticleResource::collection($article), 200);
    }


    public function getArticleById(Request $request)
    {

        $identification = $request->input('id');
        $id = (int) $identification;

        $article = Article::on('mysql')
            ->where("articulo.id", $id)
            ->get();

        if ($article == null) {
            $error = "No existe este artículo";
            return response()->json(['errorMessage' => $error], 404);
        }

        return response()->json(ArticleResource::collection($article), 200);
    }

    public function store(Request $request)
    {
        $article = new Article();
        $article->NUM_REF_INTER = $request->input('numRefInter');
        $article->OTRA_REF = $request->input('otherRef');
        $article->NOMBRE = $request->input('name');
        $article->TITULO = $request->input('title');
        $article->DESCRIPCION = $request->input('description');
        $article->TIPO_OBJETO = $request->input('objectType');
        $article->TIPO_ADQUISICION = $request->input('acquisitionType');
        $article->ANCHO = $request->input('width');
        $article->MEDIDA_ANCHO = $request->input('measureWidth');
        $article->ALTO = $request->input('height');
        $article->MEDIDA_ALTO = $request->input('measureHeight');
        $article->LARGO = $request->input('lenght');
        $article->MEDIDA_LARGO = $request->input('measureLenght');
        $article->DIAMETRO = $request->input('diameter');
        $article->MEDIDA_DIAMETRO = $request->input('measureDiameter');
        $article->ESTADO = Estado::ACTIVO;
        $article->PESO = $request->input('weight');
        $article->MEDIDA_PESO = $request->input('measureWeight');
        $article->ESTADO_CONSERVACION = $request->input('conservationStatus');
        $article->ESTATUS_LEGAL = $request->input('legalStatus');
        $article->VALOR = $request->input('value');
        $article->TIPO_MONEDA = $request->input('typeCoin');
        $article->RASGO_DISTINTIVO = $request->input('distinguishingFeature');
        $article->LOCALIZACION = $request->input('location');
        $article->FRAGMENTADO = $request->input('fragmented');
        $article->REPLICA = $request->input('replica');
        $article->CEDULA_DONANTE = $request->input('cedulaDonor');
        $article->COD_QR = 'No tiene';
        $article->USUARIO = Auth::user()->name;

        $article->save();

        $findArticle = Article::latest()->first();

        return response()->json(new ArticleResource($findArticle), 201);
    }

    public function update(Request $request)
    {
        $id = $request->input('id');
        $article = Article::on('mysql')->find($id);

        if ($article == null) {
            $error = "No existe este articulo";
            return response()->json(['errorMessage' => $error], 404);
        }

        $article->NUM_REF_INTER = $request->input('numRefInter');
        $article->OTRA_REF = $request->input('otherRef');
        $article->NOMBRE = $request->input('name');
        $article->TITULO = $request->input('title');
        $article->DESCRIPCION = $request->input('description');
        $article->TIPO_OBJETO = $request->input('objectType');
        $article->TIPO_ADQUISICION = $request->input('acquisitionType');
        $article->ANCHO = $request->input('width');
        $article->MEDIDA_ANCHO = $request->input('measureWidth');
        $article->ALTO = $request->input('height');
        $article->MEDIDA_ALTO = $request->input('measureHeight');
        $article->LARGO = $request->input('lenght');
        $article->MEDIDA_LARGO = $request->input('measureLenght');
        $article->DIAMETRO = $request->input('diameter');
        $article->MEDIDA_DIAMETRO = $request->input('measureDiameter');
        $article->ESTADO = Estado::ACTIVO;
        $article->PESO = $request->input('weight');
        $article->MEDIDA_PESO = $request->input('measureWeight');
        $article->ESTADO_CONSERVACION = $request->input('conservationStatus');
        $article->ESTATUS_LEGAL = $request->input('legalStatus');
        $article->VALOR = $request->input('value');
        $article->TIPO_MONEDA = $request->input('typeCoin');
        $article->RASGO_DISTINTIVO = $request->input('distinguishingFeature');
        $article->LOCALIZACION = $request->input('location');
        $article->FRAGMENTADO = $request->input('fragmented');
        $article->REPLICA = $request->input('replica');
        $article->CEDULA_DONANTE = $request->input('cedulaDonor');
        $article->COD_QR = $request->input('codQr');
        $article->USUARIO = $request->input('user');
        $article->save();


        return response()->json(new ArticleResource($article), 200);
    }

    public function delete(Request $request)
    {
        $id = $request->input('id');
        $article = Article::on('mysql')->find($id);

        if ($article == null) {
            $error = "No existe este artículo";
            return response()->json(['errorMessage' => $error], 404);
        }

        $article->ESTADO = Estado::INACTIVO;
        $article->save();

        return response()->json(new ArticleResource($article), 200);
    }
    
}
