<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Mail\EmailNotification;
use App\Models\Utils\EmailHelper;
use Illuminate\Contracts\Encryption\DecryptException;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Crypt;
use PhpParser\Node\Stmt\TryCatch;
use App\Models\Estado;



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
    
        $isValid = false;
        $user = User::where('login', $credentials['login'])->first();
        $credentials['Estado']= Estado::ACTIVO;;
        
        if ($user){
            try {
                $isValid = $credentials['password'] === Crypt::decryptString($user->getAuthPassword());
            } catch (DecryptException $e) {
                $isValid = false;
            }
        }

        
        if ($isValid && $user->Estado == Estado::ACTIVO) {
            Auth::login($user);
            $request->session()->regenerate();
            return redirect()->intended('/home');
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
        $plainPassword = Crypt::decryptString($user->contrasena);
        $emailBody = "<h4>Estimado/a {$user->nombre},</h4>"
        . "<p>Su usuario es: <strong>{$user->login}</strong></p>"
        . "<p>Su contraseña es: <strong>{$plainPassword}</strong></p>"
        . "<p>Le invitamos a iniciar sesión.</p>"
        . "<p><a href=\"{$url}\">MUSEO SABANERO</a></p>"
        . "<h4>¡Saludos!</h4>";
        
        Mail::to($email)->send(new EmailNotification($subject, $emailBody));
        

        return view('auth.login');
    }
}
