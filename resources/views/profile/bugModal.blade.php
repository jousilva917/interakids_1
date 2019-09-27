<!-- Modal para reportar um bug -->
<div class="modal fade" id="modal_report" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
    aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
        <div class="modal-content border">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Reporte um erro <i class="fa fa-bug"></i></h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span class="text-dark" aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form id="bugReportForm" role="form" action="{{action('ProfileController@report')}}" method="post">
                    @csrf
                    <div class="form-group">
                        <label class="sr-only" for="contact-email">Email:</label>
                        <input type="email" name="email" placeholder="Email*" class="contact-email form-control" id="contact-email">
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="contact-subject">Assunto:</label>
                        <input type="text" name="subject" placeholder="Assunto*" class="contact-subject form-control"
                            id="contact-subject">
                    </div>
                    <div class="form-group">
                        <label class="sr-only" for="contact-message">Mensagem:</label>
                        <textarea name="message" placeholder="Mensagem*" class="contact-message form-control" id="contact-message"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Enviar</button>
                </form>
                <div id="bugReport" class="alert alert-success mt-1" style="display:none;">
                    </div>
            </div>
        </div>
    </div>
</div>