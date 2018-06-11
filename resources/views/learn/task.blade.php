@extends('learn.perfil')
@section('perfil')
        <p>
            <button onclick="runCode()">Run Javascript</button>
        </p>
        <div id="blocklyDiv" style="height:380px; width:600px;"></div>
        
    <xml id="toolbox" style="display: none;">
        <category name="Lógica" colour="255" secondaryColour="0">
            <block type="lightswitch">
                <field name="lightcolor">R</field>
                <field name="switch">on</field>
            </block>
        </category> 
    </xml>

    <div id="circle"></div>

    <script>
        var  workspace = Blockly.inject('blocklyDiv', {
          comments: false,
          disable: false,
          collapse: false,
          media: '/storage/media/',
          readOnly: false,
          scrollbars: true,
          toolbox: toolbox,
		  trashcan: true,
		  grid: {spacing: 16,
            length: 1,
            colour: '#2C344A',
            snap: false
          },
          zoom: {
            controls: false,
            wheel: false,
            startScale: 0.75,
            maxScale: 4,
            minScale: 0.25,
            scaleSpeed: 1.1
          }
});
        function runCode()
        {
            window.LoopTrap = 1000;
            Blockly.JavaScript.INFINITE_LOOP_TRAP =
                    'if (--window.LoopTrap == 0) throw "Infinite loop.";\n';
            var code = Blockly.JavaScript.workspaceToCode(workspace);
            Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
            try {
              eval(code);
            } catch (e) {
              alert(e);
            }
        }
    </script>
@endsection
