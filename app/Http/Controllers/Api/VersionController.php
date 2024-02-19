<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
class VersionController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    //protected $version = env('APP_VERSION');

    public function checkUpdate(){
        
        $version = env('APP_VERSION');
        return response()->json(["Version"=>$version], 200);
    }
    public function getVersion(){
        
        $version = env('APP_VERSION');
        return response()->json(["Version"=>$version], 200);
    }
}
