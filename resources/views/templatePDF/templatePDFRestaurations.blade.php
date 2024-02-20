<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Document</title>
    <style>
        .contenedor {
            text-align: center;
        }

        .centrado {
            display: inline-block;
            margin: 0 auto;
        }

        table {
            width: 100%;
            border-collapse: collapse;
            border-color: black;
        }

        td {
            border: 1px solid black;
        }

        th {
            border: 1px solid black;
        }
        img {
            width: 10%;
        }
    </style>
</head>
<body style="font-size: 5">
    <header>
        <div>
            <img src="{{asset('images/logo/logo-w.png')}}" alt="">
        </div>
        <div class="contenedor">
            
            <div class="centrado">
                <h1>Restauraciones del museo del sabanero</h1>
            </div>
    </header>
    <section>
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col"># de referencia del articulo</th>
                        <th scope="col">Fecha de envio</th>
                        <th scope="col">Fecha de prevista</th>
                        <th scope="col">Encargado de restauracion</th>
                        <th scope="col">Lugar de restauracion</th>
                        <th scope="col">Detalle de envio</th>
                        <th scope="col">Detalle de recibido</th>
                        <th scope="col">Tipo de cambio</th>
                        <th scope="col">Usuario que registra</th>
                        <th scope="col">Coste</th>
                        <th scope="col">Detalle de recibido</th>
                        <th scope="col">Fecha de recibido</th>
                        <th scope="col">Usuario que recibe</th>
                        <th scope="col">Autoriza recibido</th>
                        <th scope="col">Fecha de registro</th>
                        <th scope="col">Fecha de actulizacion</th>
                        <th scope="col">Estado</th>
                        
                        
                    </tr>
                </thead>
                <tbody>
                    @foreach ($restaurationsList as $restauration)
                        <tr>
                            <td>{{$restauration->id}}</td>
                            <td>{{$restauration->articles->NUM_REF_INTER}}</td>
                            <td>{{$restauration->FECHA_ENVIO}}</td>
                            <td>{{$restauration->FECHA_PREV_RECIBIDO_RESTAU}}</td>
                            <td>{{$restauration->ENCARGADO_RESTAURACION}}</td>
                            <td>{{$restauration->LUGAR_RESTAURACION}}</td>
                            <td>{{$restauration->DETALLE_ENVIO}}</td>
                            <td>{{$restauration->DETALLE_RECIBIDO}}</td>
                            <td>{{$restauration->TIPO_ARTICULO}}</td>
                            <td>{{$restauration->USUARIO_REGISTRA_ENVIO}}</td>
                            <td>{{$restauration->COSTE}}</td>
                            <td>{{$restauration->DETALLE_RECIBIDO}}</td>
                            <td>{{$restauration->FECHA_RECIBIDO}}</td>
                            <td>{{$restauration->USUARIO_RECIBE}}</td>
                            <td>{{$restauration->USUARIO_AUTORIZA_RECIBIDO}}</td>
                            <td>{{$restauration->created_at}}</td>
                            <td>{{$restauration->updated_at}}</td>
                            <td>{{$restauration->ESTADO}}</td>

                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </section>
</body>
</html>