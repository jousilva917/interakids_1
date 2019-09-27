<script>
  // This file was automatically generated from template.soy.
  // Please don't edit this file by hand.

  /**
   * @fileoverview Templates in namespace Maze.soy.
   */

  goog.provide('Maze.soy');

  goog.require('soy');
  goog.require('soydata');
  goog.require('BlocklyGames.soy');


  Maze.soy.messages = function (opt_data, opt_ignored, opt_ijData) {
    return BlocklyGames.soy.messages(null, null, opt_ijData) +
      '<div style="display: none"><span id="Maze_moveForward">move forward</span><span id="Maze_turnLeft">turn left</span><span id="Maze_turnRight">turn right</span><span id="Maze_doCode">do</span><span id="Maze_elseCode">else</span><span id="Maze_helpIfElse">If-else blocks will do one thing or the other.</span><span id="Maze_pathAhead">if path ahead</span><span id="Maze_pathLeft">if path to the left</span><span id="Maze_pathRight">if path to the right</span><span id="Maze_repeatUntil">repeat until</span><span id="Maze_moveForwardTooltip">Moves the player forward one space.</span><span id="Maze_turnTooltip">Turns the player left or right by 90 degrees.</span><span id="Maze_ifTooltip">If there is a path in the specified direction, then do some actions.</span><span id="Maze_ifelseTooltip">If there is a path in the specified direction, then do the first block of actions. Otherwise, do the second block of actions.</span><span id="Maze_whileTooltip">Repeat the enclosed actions until finish point is reached.</span><span id="Maze_capacity0">You have %0 blocks left.</span><span id="Maze_capacity1">You have %1 block left.</span><span id="Maze_capacity2">You have %2 blocks left.</span></div>';
  };
  if (goog.DEBUG) {
    Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
  }


  Maze.soy.start = function (opt_data, opt_ignored, opt_ijData) {
    return Maze.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td>'+
      '<button href="/ilhas" class="secondary" onclick="voltar();">Voltar</button></td><td class="farSide"> <button id="helpButton" onclick="Help();">Ajuda <i class="fa fa-question-circle"></i></button></td><td style="display:none;">&nbsp;<button id="linkButton" title="Save and link to blocks."><img src="/images/game/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="/images/game/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Faz o jogador executar o que os blocos dizem."><img src="/images/game/1x1.gif" class="run icon21"> Executar o programa</button><button id="resetButton" class="primary" style="display: none" title="Coloca o jogador de volta ao início do labirinto."><img src="/images/game/1x1.gif" class="stop icon21"> Reiniciar</button></td></tr></table>' +
      Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div> @include("game.helpModal")' + BlocklyGames
      .soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(
        null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ?
        '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="/images/game/help.png"></td><td>&nbsp;</td><td>Empilhe alguns blocos \'avançar\' juntos para me ajudar a alcançar o objetivo.</td><td valign="top"><img src="/images/game/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="/images/game/help.png"></td><td>&nbsp;</td><td>Neste nível, você deve empilhar todos os blocos na área de trabalho branca.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Execute o código é veja o que acontece.</td><td rowspan=2><img src="/images/game/help.png"></td></tr><tr><td><div><img src="/images/game/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' :
        (opt_ijData.level == 2) ?
        '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Seu programa não resolveu o labirinto. Aperte \'Reiniciar\' e tente novamente.</td><td rowspan=2><img src="/images/game/help.png"></td></tr><tr><td><div><img src="/images/game/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' :
        (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ?
          '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="/images/game/help_up.png"></td><td>Alcance o fim deste caminho usando apenas dois blocos. Use \'repetir\' para executar um bloco mais de uma vez.</td><td><img src="/images/game/help.png"></td></tr></table></div>' :
          '') +
        '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="/images/game/help.png"></td><td>&nbsp;</td><td>Você usou todos os blocos para este nível. Para criar um novo bloco, você primeiro deve deletar um bloco existente.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="/images/game/help_up.png"></td><td>Você pode encaixar mais de um bloco dentro de um bloco \'repetir\'.</td><td><img src="/images/game/help.png"></td></tr></table></div>' :
        (opt_ijData.level == 5) ?
        '<div id="" class="dialogHiddenContent"><table><tr><td><img src="/images/game/help.png"></td><td width="95%">Choose your favourite player from this menu.</td><td><img src="/images/game/help_up.png"></td></tr></table></div>' :
        (opt_ijData.level == 6) ?
        '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="/images/game/help_up.png"></td><td>Um bloco \'se\' fará alguma coisa apenas se a condição for verdadeira. Tente virar à esquerda se houver um caminho para a esquerda.</td><td><img src="/images/game/help.png"></td></tr></table></div>' :
        (opt_ijData.level == 7) ?
        '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="/images/game/help_up.png"></td><td id="helpMenuText">Clique em %1 no bloco \'se\' para mudar sua condição</td><td><img src="/images/game/help.png"></td></tr></table></div>' :
        (opt_ijData.level == 9) ?
        '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="/images/game/help_down.png"></td><td>Blocos se-senão farão uma coisa ou outra.</td><td><img src="/images/game/help.png"></td></tr></table></div>' :
        (opt_ijData.level == 10) ?
        '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><tabe><tr><td><img src="/images/game/help.png"></td><td>&nbsp;</td>'+
        BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
  };
  if (goog.DEBUG) {
    Maze.soy.start.soyTemplateName = 'Maze.soy.start';
  }


  Maze.soy.toolbox = function (opt_data, opt_ignored, opt_ijData) {
    return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' +
      ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ?
        '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : (opt_ijData.level > 6) ?
        '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') :
        '') : '') + '</xml>';
  };
  if (goog.DEBUG) {
    Maze.soy.toolbox.soyTemplateName = 'Maze.soy.toolbox';
  }
</script>