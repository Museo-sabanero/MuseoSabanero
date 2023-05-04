<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Resources\ArtRestaurationResource;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\RestaurationResource;
use App\Http\Resources\HistoryResource;
use App\Models\Article;
use App\Models\ArtRestauration;
use App\Models\Estado;
use App\Models\Restauration;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Collection;

class RestaurationController extends Controller
{
    /**
     * End the ticket process.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getRestaurations()
    {
        $restaurations = Restauration::on('mysql')
            ->orderByDesc('id')
            ->get();

        $restaurationsWithArticles = collect();
        $articles = collect();

        foreach ($restaurations as $restauration) {
            $artRestauration = ArtRestauration::on('mysql')
                ->where("MS_ART_RESTAURACION.id", $restauration->id)
                ->get();

            foreach ($artRestauration as $art) {
                $article = Article::on('mysql')
                    ->where("MS_ARTICULO.id", $art->ID_ARTICULO)
                    ->first();
                $articles->push($article);
            }

            $articlesResource = $articles->map(function ($article) {
                return new ArticleResource($article);
            });

            $restaurationWithArticles = new RestaurationResource($restauration);
            $restaurationWithArticles->articles = $articlesResource;

            $restaurationsWithArticles->push($restaurationWithArticles);
        }

        return response()->json($restaurationsWithArticles, 200);
    }
    // public function getRestaurations()
    // {
    //     $restaurations = new Collection();
    //     $restaurationsList = Restauration::on('mysql')
    //         ->selectRaw("MS_RESTAURACION.*",)
    //         ->orderByDesc('id')
    //         ->get();

    //     $restaurations = $restaurations->concat($restaurationsList);



    //     foreach ($restaurations as $restauration) {

    //         // Obtener la información de las art restauraciones
    // $artRestauration = ArtRestauration::on('mysql')
    // ->where("MS_ART_RESTAURACION.id", $id)
    // ->get();
    // // Crear una lista vacía para los artículos
    // $articles = [];

    // // Obtener la información de los artículos
    // foreach ($artRestauration as $restauration) {
    //     $article = Article::on('mysql')
    //         ->where("MS_ARTICULO.id", $restauration->ID_ARTICULO)
    //         ->get();
    //     $articles[] = $article;
    // }

    // // Pasar la información de las restauraciones y los artículos al recurso
    // $restaurationResource = new RestaurationResource($restaurations);
    // $restaurationResource->additional([
    //     'articles' => $articles
    // ]);
    //     }




    // return response()->json($restaurationResource, 200);
    // //return response()->json($identification, 200);
    // }

    public function getRestauration(Request $request)
    {

        $identification = $request->input('id');
        $id = (int) $identification;

        $restaurations = Restauration::on('mysql')
            ->where("MS_RESTAURACIONES.id", $id)
            ->get();

        if ($restaurations == null) {
            $error = "No existe esta restauracion";
            return response()->json(['errorMessage' => $error], 404);
        }

        $restaurationsWithArticles = collect();


        foreach ($restaurations as $restauration) {
            $artRestauration = ArtRestauration::on('mysql')
                ->where("MS_ART_RESTAURACION.ID_RESTAURACION", $restauration->id)
                ->get();


                $articles = collect();


            foreach ($artRestauration as $art) {
                $article = Article::on('mysql')
                    ->where("MS_ARTICULO.id", $art->ID_ARTICULO)
                    ->first();
                $articles->push($article);
            }

            $articlesResource = $articles->map(function ($article) {
                return new ArticleResource($article);
            });

            $restaurationWithArticles = new RestaurationResource($restauration);
            $restaurationWithArticles->articles = $articlesResource;

            $restaurationsWithArticles->push($restaurationWithArticles);
        }

        return response()->json($restaurationsWithArticles, 200);
    }

    public function store(Request $request)
    {
        // $validator = Validator::make($request->all(), [
        //     'startDate' => 'required',
        //     'endDate' => 'required',
        //     'type' => 'required',
        //     'articleId' => 'required',
        //     'observations' => 'required',
        //     'status' => 'required',
        //     'userAuthorized' => 'required'
        // ]);

        // if ($validator->fails()) {
        //     return response()->json('Los campos son requeridos!', 400);
        // }


        $restauration = new Restauration();
        $restauration->USUARIO_REGISTRA_ENVIO = 1;
        $restauration->USUARIO_AUTORIZA_ENVIO = $request->input('userAutorizedSend');
        $restauration->TIPO_ARTICULO = $request->input('typeArticle');
        $restauration->FECHA_ENVIO = $request->input('dateSend');
        $restauration->FECHA_PREV_RECIBIDO_RESTAU = $request->input('datePrevReceived');
        $restauration->ENCARGADO_RESTAURACION = $request->input('inChargeRestauration');
        $restauration->LUGAR_RESTAURACION = $request->input('placeRestauration');
        $restauration->DETALLE_ENVIO = $request->input('detailsSend');
        $restauration->COSTE = $request->input('cost');
        $restauration->ESTADO = '0';
        $restauration->save();

        $findRestauration = Restauration::latest()->first();
        $idFind = $findRestauration->id;

        $artRestauration = new ArtRestauration();
        $artRestauration->ID_ARTICULO = $request->input('articleId');
        $artRestauration->ID_RESTAURACION = $idFind;

        $artRestauration->save();

        $data = [
            'Restauration' => $restauration,
            'ArtRestauration' => $artRestauration
        ];

        return response()->json($data, 200);
    }

    public function update(Request $request)
    {
        $id = $request->input('id');
        $restauration = Restauration::on('mysql')->find($id);

        if ($restauration == null) {
            $error = "No existe esta restauración";
            return response()->json(['errorMessage' => $error], 404);
        }

        $restauration->USUARIO_REGISTRA_ENVIO = 1;
        $restauration->USUARIO_AUTORIZA_ENVIO = $request->input('userAutorizedSend');
        $restauration->TIPO_ARTICULO = $request->input('typeArticle');
        $restauration->FECHA_ENVIO = $request->input('dateSend');
        $restauration->FECHA_PREV_RECIBIDO_RESTAU = $request->input('datePrevReceived');
        $restauration->ENCARGADO_RESTAURACION = $request->input('inChargeRestauration');
        $restauration->LUGAR_RESTAURACION = $request->input('placeRestauration');
        $restauration->DETALLE_ENVIO = $request->input('detailsSend');
        $restauration->COSTE = $request->input('cost');
        $restauration->ESTADO = '0';
        $restauration->save();

        $artRestauration = ArtRestauration::on('mysql')
            ->where("MS_ART_RESTAURACION.id", $id)
            ->first();
        $artRestauration->ID_ARTICULO = $request->input('articleId');
        $artRestauration->save();

        $data = [
            'Restauration' => $restauration,
            'ArtRestauration' => $artRestauration
        ];

        return response()->json($data, 200);
    }

    public function approve(Request $request)
    {
        $id = $request->input('id');
        $restauration = Restauration::on('mysql')->find($id);

        if ($restauration == null) {
            $error = "No existe esta restauración";
            return response()->json(['errorMessage' => $error], 404);
        }

        $restauration->DETALLE_RECIBIDO = $request->input('detailsReceived');
        $restauration->FECHA_RECIBIDO = $request->input('dateReceived');
        $restauration->USUARIO_RECIBE = 1;
        $restauration->USUARIO_AUTORIZA_RECIBIDO = $request->input('userAutorizedReceived');
        $restauration->ESTADO = '1';
        $restauration->save();

        $data = [
            'Restauration' => $restauration,
        ];

        return response()->json($data, 200);
    }

    public function delete(Request $request)
    {
        $id = $request->input('id');
        $artRestauration = History::on('mysql')->find($id);

        if ($artRestauration == null) {
            $error = "No existe esta restauración";
            return response()->json(['errorMessage' => $error], 404);
        }
        $artRestauration->save();

        return response()->json(new ArtRestaurationResource($artRestauration), 200);
    }
}
