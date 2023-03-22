<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class LogoutController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */


    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return view('auth.login');
    }
    
    public function userSession()
    {
        $nickName = Auth::user()->nickname;
        $name =  Auth::user()->name;
        
        return response()->json([
            'user' => $nickName,
            'name'=>$name,
        ], 200);
    }
}
