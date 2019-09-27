<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\ContactRequest; 
use App\Mail\Contact;
use Mail;

class ContactController extends Controller
{

const email = '';

public function contact(ContactRequest $request)
{
    $data = ['email' => $request->email, 'subject' => $request->subject, 'message' => $request->message];

    $email = Mail::to(ContactController::email)->send(new Contact($data));

        return redirect('/contato')->with('success', 'Enviado com sucesso');
    }



}
