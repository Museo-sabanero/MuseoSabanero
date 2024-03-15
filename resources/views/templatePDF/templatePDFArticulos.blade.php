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
                <h1>Articulos del museo del sabanero</h1>
            </div>
    </header>
    <section>
        <div>
            <table>
                <thead>
                    <tr>
                        {{-- <th scope="col">Id</th> --}}
                        <th scope="col">Numero de referencia</th>
                        <th scope="col">Otra referencia</th>
                        <th scope="col">Nombre</th>
                        <th scope="col">Titulo</th>
                        <th scope="col">Tipo de objeto</th>
                        <th scope="col">Tipo de adquicision</th>
                        <th scope="col">Ancho</th>
                        <th scope="col">Medida del ancho</th>
                        <th scope="col">Altura</th>
                        <th scope="col">Medida de altura</th>
                        <th scope="col">Largo</th>
                        <th scope="col">Medida del largo</th>
                        <th scope="col">Diametro</th>
                        <th scope="col">Medida del diametro</th>
                        <th scope="col">Estado</th>
                        <th scope="col">Peso</th>
                        <th scope="col">Medida del peso</th>
                        <th scope="col">Estado de conservacion</th>
                        <th scope="col">Estado legal</th>
                        <th scope="col">valor</th>
                        <th scope="col">Tipo de moneda</th>
                        <th scope="col">característica distintiva</th>
                        <th scope="col">Localizacion</th>
                        <th scope="col">Fracmentado</th>
                        <th scope="col">Replica</th>
                        <th scope="col">Ced donador</th>
                        <th scope="col">Fecha de registro</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($articlesList as $article)
                        <tr>
                            {{-- <td>{{$article->id}}</td> --}}
                            <td>{{$article->NUM_REF_INTER}}</td>
                            <td>{{$article->OTRA_REF}}</td>
                            <td>{{$article->NOMBRE}}</td>
                            <td>{{$article->TITULO}}</td>
                            <td>{{$article->TIPO_OBJETO}}</td>
                            <td>{{$article->TIPO_ADQUISICION}}</td>
                            <td>{{$article->ANCHO}}</td>
                            <td>{{$article->MEDIDA_ANCHO}}</td>
                            <td>{{$article->ALTO}}</td>
                            <td>{{$article->MEDIDA_ALTO}}</td>
                            <td>{{$article->LARGO}}</td>
                            <td>{{$article->MEDIDA_LARGO}}</td>
                            <td>{{$article->DIAMETRO}}</td>
                            <td>{{$article->MEDIDA_DIAMETRO}}</td>
                            <td>{{$article->ESTADO}}</td>
                            <td>{{$article->PESO}}</td>
                            <td>{{$article->MEDIDA_PESO}}</td>
                            <td>{{$article->ESTADO_CONSERVACION}}</td>
                            <td>{{$article->ESTATUS_LEGAL}}</td>
                            <td>{{$article->VALOR}}</td>
                            <td>{{$article->TIPO_MONEDA}}</td>
                            <td>{{$article->RASGO_DISTINTIVO}}</td>
                            <td>{{$article->LOCALIZACION}}</td>
                            <td>{{$article->FRAGMENTADO}}</td>
                            <td>{{$article->REPLICA}}</td>
                            <td>{{$article->CEDULA_DONANTE}}</td>
                            <td>{{$article->created_at}}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
        </div>
    </section>
</body>
</html>