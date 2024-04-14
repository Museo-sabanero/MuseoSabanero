<?php

namespace App\Http\Controllers\Api;

use Carbon\Carbon;
use App\Models\Event;
use App\Models\Estado;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use App\Http\Resources\EventResource;
use Illuminate\Support\Facades\Validator;
use Illuminate\Database\Eloquent\Collection;
use App\Models\Estado;


class EventController extends Controller
{
    /**
     * End the ticket process.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function getEvents()
    {
        $events = new Collection();

            $event = Event::on('mysql')
                ->selectRaw( "evento.*",)
                ->where("evento.ESTADO", Estado::ACTIVO)
                ->orderByDesc('id')
                ->get();

            $events = $events->concat($event);


        return response()->json(EventResource::collection($events), 200);
    }
    public function exportPDFEvents(){

        $events = new Collection();

            $event = Event::on('mysql')
                ->selectRaw( "evento.*",)
                ->where("evento.ESTADO", Estado::ACTIVO)
                ->orderByDesc('id')
                ->get();

            $events = $events->concat($event);
        
        $pdf = Pdf::loadView('templatePDF.templatePDFEvents', ['eventsList' => $events]);
            return $pdf->download('Eventos del museo del sabanero.pdf');
           
    }
    public function getEvent(Request $request)
    {

        $identification = $request->input('id');
        $id = (int) $identification ;


            $event = Event::on('mysql')
                ->where("evento.id", $id)
                ->get();

            if ($event == null) {
                $error = "No existe este donante";
                return response()->json(['errorMessage' => $error], 404);
            }

        return response()->json(EventResource::collection($event), 200);
    }

    public function store(Request $request)
    {

        $event = new Event();
        $event->FECHA_INICIO = $request->input('dateStart');
        $event->FECHA_FIN = $request->input('dateEnd');
        $event->HORA = $request->input('time');
        $event->NOMBRE = $request->input('name');
        $event->COSTO = $request->input('cost');
        $event->DESCRIPCION = $request->input('description');
        $event->MAX_PERSONAS = $request->input('maxPersons');
        $event->ESTADO = Estado::ACTIVO;

        $event->save();

        return response()->json(new EventResource($event), 201);
    }

    public function update(Request $request){

        $id = $request->input('id');
        $event = Event::on('mysql')->find($id);

        if ($event == null) {
            $error = "No existe este evento";
            return response()->json(['errorMessage' => $error], 404);
        }

        $event->FECHA_INICIO = $request->input('dateStart');
        $event->FECHA_FIN = $request->input('dateEnd');
        $event->HORA = $request->input('time');
        $event->NOMBRE = $request->input('name');
        $event->COSTO = $request->input('cost');
        $event->DESCRIPCION = $request->input('description');
        $event->MAX_PERSONAS = $request->input('maxPersons');
        $event->ESTADO = Estado::ACTIVO;
        $event->save();


        return response()->json(new EventResource($event), 200);
    }

    public function delete(Request $request){

        $id = $request->input('id');
        $event = Event::on('mysql')->find($id);

        if ($event == null) {
            $error = "No existe este evento";
            return response()->json(['errorMessage' => $error], 404);
        }

        $event->ESTADO = Estado::INACTIVO;
        $event->save();

        return response()->json(new EventResource($event), 200);
    }
}
