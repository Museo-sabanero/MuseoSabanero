<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Resources\EventResource;
use App\Http\Resources\ArticleResource;
use App\Models\Estado;
use App\Models\Article;
use App\Models\History;
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
            ->selectRaw("MS_ARTICULO.*",)
            ->where("MS_ARTICULO.ESTADO", "A")
            ->orderByDesc('id')
            ->get();

        $articles = $articles->concat($article);


        return response()->json(ArticleResource::collection($articles), 200);
    }
    public function getArticle(Request $request)
    {

        $identification = $request->input('id');
        $id = (int) $identification;

        //$events = new Collection();

        // $event = Event::on('mysql')
        //     ->where("MS_EVENTO.ID", $id)
        //     ->first();

        $article = Article::on('mysql')
            ->where("MS_ARTICULO.id", $id)
            ->get();

        if ($article == null) {
            $error = "No existe este artículo";
            return response()->json(['errorMessage' => $error], 404);
        }

        // $events = $events->concat($event);


        return response()->json(ArticleResource::collection($article), 200);
        //return response()->json($identification, 200);
    }

    public function store(Request $request)
    {
        //     $validator = Validator::make($request->all(),[
        //         'dateStart' => 'required',
        //         'dateEnd' => 'required',
        //         'time' => 'required',
        //         'name' => 'required',
        //         'cost' => 'required',
        //         'description'=> 'required',
        //         'maxPersons' => 'required'
        //    ]);

        //     if ($validator->fails()) {
        //         return response()->json('Los campos son requeridos!', 400);
        //     }


        $article = new Article();
        $article->NUM_REF_INTER = $request->input('numRefInter');
        $article->OTRA_REF = $request->input('otherRef');
        $article->NOMBRE = $request->input('name');
        $article->TITULO = $request->input('title');
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
        $article->RASGO_DISTINTIVO = $request->input('distinguishingFeature');
        $article->LOCALIZACION = $request->input('location');
        $article->FRAGMENTADO = $request->input('fragmented');
        $article->REPLICA = $request->input('replica');
        $article->CEDULA_DONANTE = $request->input('cedulaDonor');
        $article->COD_QR = 'No tiene';
        $article->USUARIO = 'Juan';

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
