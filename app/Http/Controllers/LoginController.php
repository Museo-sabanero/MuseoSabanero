<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\Utils\EmailHelper;
use Illuminate\Support\Facades\Mail;
use App\Mail\EmailNotification;
use App\Models\User;

class LoginController extends Controller
{
    /**
     * Handle an authentication attempt.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function authenticate(Request $request)
    {
        $credentials = $request->validate([
            'login' => ['required'],
            'password' => ['required'],
        ]);

        if (Auth::attempt($credentials)) {
            $request->session()->regenerate();

            return redirect()->intended('home');
        }

        return back()->withErrors([
            'login' => 'Usuario o contraseña son incorrectos',
        ])->onlyInput('login');
    }

    public function login()
    {
        if (Auth::check()) {
            return redirect('/home');
        }

        return view('auth.login');
    }

    public function logout(Request $request)
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return view('auth.login');
    }

    public function forgot(Request $request)
    {
        $validator = $request->validate([
            'email' => ['email', 'exists:usuarios,email'],
        ], [
            'email.exists' => 'El correo no está registrado en nuestra base de datos.',
        ]);

        $email = $request->input('email');
        $url = url('/');
        if ($email == '') {
            return view('auth.forgot');
        }
        
        $user = User::on('mysql')
            ->selectRaw("usuarios.*",)
            ->where("usuarios.email", $email)
            ->first();
        
        $subject = "Envio de contraseña";
        $emailBody = "<h3>Estimado: {$user->nombre}</h3>"
            . "<p>Su contraseña es: {$user->contrasena}</p>"
            . "<p>Te invitamos a restaurarla en la configuración de su perfil: <a href=\"{$url}\">MUSEO SABANERO</a></p>"
            . "<h4>¡Saludos!</h4>";
        
        Mail::to($email)->send(new EmailNotification($subject, $emailBody));
        

        return view('auth.login');
    }
}
