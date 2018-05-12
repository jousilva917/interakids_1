@extends('layouts.app')

@section('conteudo')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
<<<<<<< HEAD
                    <div class="alert alert-success">
                        {{ session('status') }}
                    </div>
=======
                        <div class="alert alert-success">
                            {{ session('status') }}
                        </div>
>>>>>>> d41c6177bf0e06020866d54c15ec8231dc2dbe3a
                    @endif

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
