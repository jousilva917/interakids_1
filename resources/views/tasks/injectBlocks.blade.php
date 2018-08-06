@section('scripts')
let workshop = Blockly.inject('blockly',{
    toolbox: document.getElementById('toolbox'),
    media:'/blockly/media'
});

@endsection