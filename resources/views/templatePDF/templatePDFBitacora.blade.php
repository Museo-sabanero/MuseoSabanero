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
                <h1>bitacora del museo del sabanero</h1>
            </div>
    </header>
    <section>
        <div>
            <table>
                <thead>
                    <tr>
                        <th scope="col">Id</th>
                        <th scope="col">Articulo</th>
                        <th scope="col">Id del articulo</th>
                        <th scope="col">Nota</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Fecha </th>
                        {{-- <th scope="col">Fecha inicio</th>
                        <th scope="col">Fecha de registro</th> --}}
                        
                    </tr>
                </thead>
                <tbody>
                    @foreach ($bitacoraList as $bitacora)
                        <tr>
                            <td>{{$bitacora->id}}</td>
                            <td>{{$bitacora->elemento}}</td>
                            <td>{{$bitacora->id_articulo}}</td>
                            <td>{{$bitacora->nota}}</td>
                            <td>{{$bitacora->status}}</td>
                            <td>{{$bitacora->created_at}}</td>
                            {{-- <td>{{$bitacora->updated_at}}</td> --}}
                            
                            
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </section>
</body>
</html>