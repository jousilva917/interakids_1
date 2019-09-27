<!-- Modal para Logout -->
<div class="modal fade" id="modal_logout" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content border">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Logout <i class="fa fa-lock"></i></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <i class="fa fa-question-circle"></i> Tem certeza que deseja sair?
            </div>
            <div class="modal-footer">
                <a class="btn btn-lg btn-danger" href="{{ route('logout') }}" onclick="event.preventDefault();document.getElementById('logout-form').submit();">
                    {{ __('Sair') }}</a>
                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                    @csrf
                </form>
            </div>
        </div>
    </div>
</div>