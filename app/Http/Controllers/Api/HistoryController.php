<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Resources\HistoryResource;
use App\Models\Estado;
use App\Models\Event;
use App\Models\History;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Collection;


class HistoryController extends Controller
{
    /**
     * End the ticket process.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getHistories()
    {
        $histories = new Collection();
        $history = History::on('mysql')
            ->selectRaw( "historia.*",)
            ->orderByDesc('id')
            ->get();

        $histories = $histories->concat($history);

        return response()->json(HistoryResource::collection($histories), 200);
    }

    public function getHistory(Request $request)
    {

        $identification = $request->input('id');
        $id = (int) $identification ;


            $histories = History::on('mysql')
                ->where("historia.id", $id)
                ->get();

            if ($histories == null) {
                $error = "No existe esta historia";
                return response()->json(['errorMessage' => $error], 404);
            }


        return response()->json(HistoryResource::collection($histories), 200);
    }

    public function getHistoryByArticle(Request $request)
    {

        $identification = $request->input('id');
        $id = (int) $identification ;


            $histories = History::on('mysql')
                ->where("historia.ID_ARTICULO", $id)
                ->get();

            if ($histories == null) {
                $error = "No existe esta historia";
                return response()->json(['errorMessage' => $error], 404);
            }

        return response()->json(HistoryResource::collection($histories), 200);
    }

    public function store(Request $request)
    {

    $history = new History();
    $history->MATERIAS = $request->input('materials');
    $history->MANUFACTURACION = $request->input('manufacturing');
    $history->INSCRIPCION_MARCAS = $request->input('inscripsionMarcas');
    $history->ANTIGUEDAD = $request->input('antiquity');
    $history->HISTORIA = $request->input('history');
    $history->ID_ARTICULO = $request->input('itemId');

    $history->save();

    return response()->json(new HistoryResource($history), 201);
    }

    public function update(Request $request){
        $id = $request->input('id');
        $history = History::on('mysql')->find($id);

        if ($history == null) {
            $error = "No existe esta historia";
            return response()->json(['errorMessage' => $error], 404);
        }

        $history->MATERIAS = $request->input('materials');
        $history->MANUFACTURACION = $request->input('manufacturing');
        $history->INSCRIPCION_MARCAS = $request->input('inscripsionMarcas');
        $history->ANTIGUEDAD = $request->input('antiquity');
        $history->HISTORIA = $request->input('history');
        $history->ID_ARTICULO = $request->input('itemId');
        $history->save();


        return response()->json(new HistoryResource($history), 200);
    }

    public function delete(Request $request){
        $id = $request->input('id');
        $history = History::on('mysql')->find($id);

        if ($history == null) {
            $error = "No existe esta historia";
            return response()->json(['errorMessage' => $error], 404);
        }
        $history->save();

        return response()->json(new HistoryResource($history), 200);

    }
}
