<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Explore</title>
    {!!Minify::stylesheet(['/css/site/app.css','/css/blockly/explore.css'])->withFullUrl()!!}
    {!!Minify::javascript(['/js/site/app.js', '/js/blockly/blockly_compressed_horizontal.js',
    '/js/blockly/blockly_compressed_vertical.js','/js/blockly/customblock.js',
    '/js/blockly/msg/pt-br.js','/js/blockly/explore.js'])->withFullUrl()!!}   
</head>
<body>
    <table>
        <tr id="tabRow" height="1em">
        <td id="main_tab" class="tabon">Blocks</td>
        <td class="tabmin">&nbsp;</td>
        <td class="taboff">JavaScript</td>
        <td class="tabmin">&nbsp;</td>
        <td class="tabmax"><button class="btn btn-danger mt-2 ml-2" onclick="runCode()"><img src="/media/1x1.gif"  class="run icon21"></button></td>
        <td class="tabmax"><a class="btn btn-success" href="/home">Home</a></td>
    </tr>
    </table>
    <div id="content_blocks"></div>
    <xml id="toolbox" style="display: none;">
            <category name="Lógica" colour="255" secondaryColour="0">
                <block type="lightswitch">
                    <field name="lightcolor">R</field>
                    <field name="switch">on</field>
                </block>
            </category> 
        </xml>
    <script>var  workspace = Blockly.inject('content_blocks', {
             comments: true,
             disable: true,
             collapse: true,
             media: '/media/',
             trashcan: true,
             readOnly: false,
             scrollbars: false,
             toolbox: toolbox,
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
        }</script>
</body>
</html>