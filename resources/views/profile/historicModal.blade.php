<div class="modal" id="modal_historic" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
          <div class="modal-header">
              <h5 class="modal-title">Histórico de missões </h5>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                  <span class="text-dark" aria-hidden="true">&times;</span>
              </button>
          </div>
          <div class="modal-body">
              <div class="row">
                  <div class="col-sm-4 col-md-12 col-lg-12 mx-auto">
                      <h4>Seu total de estrelas: {{auth()->user()->stars}}</h4>
                  </div>
                  <div class="col-sm-4 col-md-12 col-lg-10 mx-auto">
                      <table class="table table-borderless">
                          <thead class="thead-dark">
                          <tr>
                              <th scope="col">Nome da fase</th>
                              <th scope="col">Linhas de Javascript</th>
                              <th scope="col">Estrelas ganhas</th>
                              <th scope="col">Data</th>
                              </tr>
                          </thead>
                          <tbody>
                              @foreach ($tasks as $t)
                              <tr>
                                  <td scope="row">{{$t->nameLevel}}</td>
                                  <td>{{$t->moves}}</td>
                                  <td>3</td>
                                  <td>{{$t->created_at->format('d/m/Y')}}</td>
                              </tr>
                          </tbody>
                          @endforeach
                      </table>
                  </div>
              </div>
          </div>
      </div>
  </div>
</div>