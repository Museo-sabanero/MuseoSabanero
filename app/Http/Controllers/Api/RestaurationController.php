<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Models\Estado;
use App\Models\Article;
use App\Models\Restauration;
use Illuminate\Http\Request;
use App\Models\ArtRestauration;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\ArticleResource;
use App\Http\Resources\HistoryResource;
use Illuminate\Support\Facades\Validator;
use App\Http\Resources\RestaurationResource;
use Illuminate\Database\Eloquent\Collection;
use App\Http\Resources\ArtRestaurationResource;

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

        $restaurationsWithArticles = collect();

        $artRestauration = ArtRestauration::on('mysql')
        ->orderByDesc('id')
        ->get();

        foreach ($artRestauration as $art){

            $restaurations = Restauration::on('mysql')
            ->where('restauraciones.id', $art->ID_RESTAURACION)
            ->first();

            $article = Article::on('mysql')
                ->where("articulo.id", $art->ID_ARTICULO)
                ->first();

            $articlesResource = new ArticleResource($article);

            $restaurationWithArticles = new RestaurationResource($restaurations);
            $restaurationWithArticles->articles = $articlesResource;

            $restaurationsWithArticles->push($restaurationWithArticles);

        }

        return response()->json($restaurationsWithArticles, 200);
    }
    public function exportPDFRestaurations(){

        $restaurationsWithArticles = collect();

        $artRestauration = ArtRestauration::on('mysql')
        ->orderByDesc('id')
        ->get();

        foreach ($artRestauration as $art){

            $restaurations = Restauration::on('mysql')
            ->where('restauraciones.id', $art->ID_RESTAURACION)
            ->first();

            $article = Article::on('mysql')
                ->where("articulo.id", $art->ID_ARTICULO)
                ->first();

            $articlesResource = new ArticleResource($article);

            $restaurationWithArticles = new RestaurationResource($restaurations);
            $restaurationWithArticles->articles = $articlesResource;

            $restaurationsWithArticles->push($restaurationWithArticles);

        }
       //dd($restaurationsWithArticles);
        $pdf = Pdf::loadView('templatePDF.templatePDFRestaurations', ['restaurationsList' => $restaurationsWithArticles])->setPaper('a4', 'landscape');
            return $pdf->download('Restauraciones del museo del sabanero.pdf');
           
    }

    public function getRestaurationsByArticle(Request $request)
    {

        $identification = $request->input('id');
        $id = (int) $identification;

        $restaurationsWithArticles = collect();

        $artRestauration = ArtRestauration::on('mysql')
        ->where('artrestauracion.ID_ARTICULO', $id)
        ->get();

        foreach ($artRestauration as $art){

            $restaurations = Restauration::on('mysql')
            ->where('restauraciones.id', $art->ID_RESTAURACION)
            ->first();

            $article = Article::on('mysql')
                ->where("articulo.id", $art->ID_ARTICULO)
                ->first();

            $articlesResource = new ArticleResource($article);

            $restaurationWithArticles = new RestaurationResource($restaurations);
            $restaurationWithArticles->articles = $articlesResource;

            $restaurationsWithArticles->push($restaurationWithArticles);

        }

        return response()->json($restaurationsWithArticles, 200);
    }


    public function getRestauration(Request $request)
    {

        $identification = $request->input('id');
        $id = (int) $identification;

        $restaurations = Restauration::on('mysql')
            ->where("restauraciones.id", $id)
            ->get();

        if ($restaurations == null) {
            $error = "No existe esta restauracion";
            return response()->json(['errorMessage' => $error], 404);
        }

        $restaurationsWithArticles = collect();


        foreach ($restaurations as $restauration) {
            $artRestauration = ArtRestauration::on('mysql')
                ->where("artrestauracion.ID_RESTAURACION", $restauration->id)
                ->get();


                $articles = collect();


            foreach ($artRestauration as $art) {
                $article = Article::on('mysql')
                    ->where("articulo.id", $art->ID_ARTICULO)
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

        $restauration = new Restauration();
        $restauration->USUARIO_REGISTRA_ENVIO = Auth::user()->name;
        $restauration->USUARIO_AUTORIZA_ENVIO = $request->input('userAutorizedSend');
        $restauration->TIPO_ARTICULO = $request->input('typeArticle');
        $restauration->FECHA_ENVIO = $request->input('dateSend');
        $restauration->FECHA_PREV_RECIBIDO_RESTAU = $request->input('datePrevReceived');
        $restauration->ENCARGADO_RESTAURACION = $request->input('inChargeRestauration');
        $restauration->LUGAR_RESTAURACION = $request->input('placeRestauration');
        $restauration->DETALLE_ENVIO = $request->input('detailsSend');
        $restauration->COSTE = $request->input('cost');
        $restauration->ESTADO = 'E';
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

        $restauration->USUARIO_REGISTRA_ENVIO = Auth::user()->name;
        $restauration->USUARIO_AUTORIZA_ENVIO = $request->input('userAutorizedSend');
        $restauration->TIPO_ARTICULO = $request->input('typeArticle');
        $restauration->FECHA_ENVIO = $request->input('dateSend');
        $restauration->FECHA_PREV_RECIBIDO_RESTAU = $request->input('datePrevReceived');
        $restauration->ENCARGADO_RESTAURACION = $request->input('inChargeRestauration');
        $restauration->LUGAR_RESTAURACION = $request->input('placeRestauration');
        $restauration->DETALLE_ENVIO = $request->input('detailsSend');
        $restauration->COSTE = $request->input('cost');
        //$restauration->ESTADO = 'E';
        $restauration->save();

        $artRestauration = ArtRestauration::on('mysql')
            ->where("artrestauracion.id", $id)
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
        $restauration->USUARIO_RECIBE = Auth::user()->name;
        $restauration->USUARIO_AUTORIZA_RECIBIDO = $request->input('userAutorizedReceived');
        $restauration->ESTADO = Estado::ACTIVO;
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
