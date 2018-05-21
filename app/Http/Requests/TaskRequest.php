<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class TaskRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if(Auth()->check())
        {
            return true;
      }
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'titulo' => 'max:255',
            'texto' => 'max:255'
        ];
    }
    public function messages()
    {
        return [
            'max' => 'O :attribute precisa ter no mínimo :max caracteres'
        ];        
    }
}
