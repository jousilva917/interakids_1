<!-- Modal para Notificações -->
<div class="modal fade" id="modal_notify" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content border">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Notificações</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="text-dark" aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            @if(count(Auth()->user()->unreadnotifications) == 0)
                            <span>Sem notificações</span>
                            @else
                            <a class="close text-dark" data-dismiss="alert" aria-label="Close" onclick="markNotificationAsRead() ">
                                Marcar todas como lida</a>
                            <span id="NotificationSpan">Notifications ({{count(Auth()->user()->unreadnotifications)}})</span>
                            @endif
                        </div>
                        <div class="col-sm-12 col-md-12 col-lg-12">
                            <ul style="list-style-type:none;">
                                @foreach(Auth()->user()->unreadnotifications as $notification)
                                <li class="notification-box" onclick="markNotificationAsRead()" id="notification">
                                    <div class="row">
                                        <div class="col-lg-3 col-sm-3 col-3 text-center">
                                            <img src="/images/star.png" class="w-100 rounded-circle">
                                        </div>
                                        <div class="col-lg-8 col-md-8 col-sm-8">
                                            <strong class="text-info">Parabéns, {{Auth()->user()->name}}!</strong>
                                            <div>
                                                Você conseguiu 3 estrelas por completar a fase
                                                {{($notification->data['level'])}}
                                            </div>
                                            <small class="text-warning" role="close-small">{{($notification->created_at->format('d/m/Y
                                                H:i:s'))}}</small>
                                        </div>
                                </li>
                                @endforeach
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>