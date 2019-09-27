<!-- Modal foto de perfil -->
<div class="modal fade bd-profileEdit-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel"
    aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Informações do perfil</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="text-dark" aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="profile_edit" action="{{route('updateProfile')}}" method="post" enctype="multipart/form-data">
                    @csrf
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="firstName">{{__('Nome:')}}</label>
                            <input type="text" name="name" class="form-control" id="Name" aria-describedby="emailHelp"
                                placeholder="Nome" value="{{ auth()->user()->name }}">
                            <div id="nameAlert" class="alert alert-success mt-1" style="display:none;">
                            </div>
                        </div>
                        <div class="col-md-6 mb-3">
                            <label for="lastName">{{__('Email:')}}</label>
                            <input type="email" name="email" class="form-control" id="Email1" aria-describedby="emailHelp"
                                placeholder="Email" value="{{ auth()->user()->email }}">
                            <div id="emailAlert" class="alert alert-success mt-1" style="display:none;">
                            </div>
                            <div id="emailAlertDanger" class="alert alert-danger mt-1" style="display:none;">
                            </div>
                        </div>
                    </div>
                    @if(empty(Auth::user()->socialLogin))
                    <div class="row">
                        <div class="col-md-6 mb-3">
                            <label for="username">{{__('Senha antiga:')}}</label>
                            <div class="input-group">
                                <input type="password" name="old_password" class="form-control" id="old_Password"
                                    placeholder="Senha antiga">
                            </div>
                            <div id="oldPasswordAlert" class="alert alert-danger mt-1" style="display:none;">
                            </div>
                        </div>

                        <div class="col-md-6 mb-3">
                            <label for="email">{{__('Nova senha:')}}</label>
                            <input type="password" name="new_password" class="form-control" id="new_Password"
                                placeholder="Nova senha">
                        </div>
                    </div>
                    <div class="mb-3">
                        <div id="PasswordAlert" class="alert alert-success" style="display:none;">
                        </div>
                        <div id="PasswordAlertDanger" class="alert alert-danger" style="display:none;">
                        </div>
                    </div>
                    @endif

                    <div class="mb-3">
                        <label for="address">{{_('Escolher foto de perfil')}}</label>
                        <div class="custom-file">
                            <input type="file" name="profile_image" class="custom-file-input" id="customFile">
                            <label class="custom-file-label" for="customFile">Escolher foto</label>
                        </div>
                        <div id="imageAlert" class="alert alert-success mt-1" style="display:none;">
                        </div>
                        <div id="imageAlertDanger" class="alert alert-danger mt-1" style="display:none;">
                        </div>
                    </div>
                        <div class="col-md-12 mb-3">
                            <button type="submit" class="d-block w-100 btn btn-primary">Salvar</button>
                        </div>

                </form>
                <div class="col-md-12 mb-3">
                    <button id="remove_pic" class="d-block w-100 btn btn-danger">
                        Remover foto de perfil</button>
                </div>
                <button type="button" class="float-right btn btn-default" data-dismiss="modal">Fechar</button>
            </div>
        </div>
    </div>
</div>
</div>
</div>
</div>
<!--<div class="modal fade" id="modal_photo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content border">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Informações do perfil</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="text-dark" aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="row">
                    <div class="col-sm-4 col-md-12 col-lg-10 mx-auto">
                        <form id="profile_edit" action="{{route('updateProfile')}}" method="post" enctype="multipart/form-data">
                            @csrf
                                <div class="form-row">
                                    <label>
                                        <span>{{__('Nome:')}}</span>
                                    </label>
                                    <input type="text" name="name" class="form-control" id="Name"
                                        aria-describedby="emailHelp" placeholder="Nome" value="{{ auth()->user()->name }}">
                                    <div id="nameAlert" class="alert alert-success" style="display:none;">
                                        <strong></strong>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <label>
                                        <span>{{__('Email:')}}</span>
                                    </label>
                                    <input type="email" name="email" class="form-control" id="Email1"
                                        aria-describedby="emailHelp" placeholder="Email" value="{{ auth()->user()->email }}">
                                    <div id="emailAlert" class="alert alert-success" style="display:none;">
                                    </div>
                                    <div id="emailAlertDanger" class="alert alert-danger" style="display:none;">
                                        </div>
                                </div>
                            @if(empty(Auth::user()->socialLogin))
                          
                                <div class="form-row">
                                    <label>
                                        <span>{{ __('Senha antiga:') }}</span>
                                    </label>
                                    <input type="password" name="old_password" class="form-control" id="old_Password"
                                        placeholder="Senha antiga">
                                    <div id="oldPasswordAlert" class="alert alert-danger" style="display:none;">
                                    </div>
                                </div>
                                <div class="form-row">
                                    <label>
                                        <span>{{__('Nova senha:')}}</span>
                                    </label>
                                    <input type="password" name="new_password" class="form-control" id="new_Password"
                                        placeholder="Nova senha">
                                    <div id="newPasswordAlert" class="alert alert-success" style="display:none;">
                                    </div>
                                </div>
                            @endif
                                <div class="form-row">
                                    <label>
                                        <span>{{__('Imagem de perfil')}}</span>
                                    </label>
                                    <div class="custom-file">
                                        <input type="file" name="profile_image" class="custom-file-input" id="customFile">
                                        <label class="custom-file-label" for="customFile">Escolher foto</label>
                                    </div>
                                    <div id="imageAlert" class="alert alert-success" style="display:none;">
                                    </div>
                                </div>
                            <button type="submit" class="float-left btn btn-primary">Salvar</button>
                            <button type="button" class="float-right btn btn-primary" data-dismiss="modal">Fechar</button>
                        </form>
                        <button id="remove_pic" class="text-light btn btn-primary ml-1">
                            Remover foto de perfil</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>-->