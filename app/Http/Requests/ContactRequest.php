<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ContactRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'email' => 'required|email|max:255',
            'subject' =>'required|string|min:5|max:255',
            'message' => 'required|string|max:100000'
        ];
    }

    /**
    * Get the error messages for the defined validation rules.
    *
    * @return array
    */
    public function messages()
    {
        return [
        'required' => 'Este campo é obrigatório',
        'subject.min' => 'O assunto precisa de pelo menos 5 caracteres',
        'email' => 'O email precisa ser válido'
    ];
    }
}
