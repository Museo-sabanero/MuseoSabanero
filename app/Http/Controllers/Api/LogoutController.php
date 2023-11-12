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
        //dd(Auth::user());
        if (Auth::user()==null) {
            $nickName = 'public';
            $name =  'public';
            $role=  'public';
            $isAdmin=  'public';
        } else {
            $nickName = Auth::user()->nickname;
            $name =  Auth::user()->name;
            $role=  Auth::user()->role;
            $isAdmin=  Auth::user()->isAdmin;
        }
        
       
        
        return response()->json([
            'user' => $nickName,
            'name'=>$name,
            'role'=> $role,
            'isAdmin' =>$isAdmin,
        ], 200);
    }
    public function isAuth()
    {
        if (Auth::user()==null) {
            return response()->json([
                'isAuth' => false
            ], 200);
        } else {
            return response()->json([
                'isAuth' => true
            ], 200);
        }
    }
}
