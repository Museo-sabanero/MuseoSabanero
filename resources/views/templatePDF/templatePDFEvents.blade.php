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
<body style="font-size: 8">
    <header>
        <div>
            <img src="{{asset('images/logo/logo-w.png')}}" alt="">
        </div>
        <div class="contenedor">
            
            <div class="centrado">
                <h1>Eventos del museo del sabanero</h1>
            </div>
    </header>
    <section>
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Descripcion</th>
                        <th scope="col">Maximo de personas</th>
                        <th scope="col">Costo</th>
                        <th scope="col">Fecha inicio</th>
                        <th scope="col">Fecha fin</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Fecha de registro</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($eventsList as $event)
                        <tr>
                            <td>{{$event->id}}</td>
                            <td>{{$event->NOMBRE}}</td>
                            <td>{{$event->DESCRIPCION}}</td>
                            <td>{{$event->MAX_PERSONAS}}</td>
                            <td>{{$event->COSTO}}</td>
                            <td>{{$event->FECHA_INICIO}}</td>
                            <td>{{$event->FECHA_FIN}}</td>
                            <td>{{$event->ESTADO}}</td>
                            <td>{{$event->created_at}}</td>
                            
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </section>
</body>
</html>