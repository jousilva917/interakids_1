// This file was automatically generated from template.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Maze.soy.
 */

goog.provide('Maze.soy');

goog.require('soy');
goog.require('soydata');
goog.require('BlocklyGames.soy');


Maze.soy.messages = function(opt_data, opt_ignored, opt_ijData) {
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">vorw\u00E4rts laufen</span><span id="Maze_turnLeft">links abbiegen</span><span id="Maze_turnRight">rechts abbiegen</span><span id="Maze_doCode">ausf\u00FChren</span><span id="Maze_elseCode">sonst</span><span id="Maze_helpIfElse">Wenn-Sonst-Bausteine f\u00FChren das eine oder das andere aus.</span><span id="Maze_pathAhead">wenn Pfad geradeaus ist</span><span id="Maze_pathLeft">wenn Pfad nach links ist</span><span id="Maze_pathRight">wenn Pfad nach rechts ist</span><span id="Maze_repeatUntil">wiederholen bis</span><span id="Maze_moveForwardTooltip">Bewegt den Spieler ein Feld vor.</span><span id="Maze_turnTooltip">Dreht den Spieler um 90 Grad nach links oder \\nrechts. </span><span id="Maze_ifTooltip">Falls es einen Pfad in der angegebenen Richtung \\ngibt, dann einige Aktionen ausf\u00FChren. </span><span id="Maze_ifelseTooltip">Falls es einen Pfad in der angegebenen Richtung \\ngibt, dann den ersten Aktionenbaustein ausf\u00FChren, \\nanderenfalls den zweiten. </span><span id="Maze_whileTooltip">Die beigef\u00FCgten Aktionen wiederholen, \\nbis das Ziel erreicht wurde. </span><span id="Maze_capacity0">Du hast noch %0 Bausteine.</span><span id="Maze_capacity1">Du hast noch %1 Baustein.</span><span id="Maze_capacity2">Du hast noch %2 Bausteine.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Labyrinth'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin)}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Speichern und auf Bl\u00F6cke verlinken."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Der Spieler macht das, was die Bausteine sagen."><img src="common/1x1.gif" class="run icon21"> Programm ausf\u00FChren</button><button id="resetButton" class="primary" style="display: none" title="Setzt den Spieler an den Start des Labyrinths \\nzur\u00FCck. "><img src="common/1x1.gif" class="stop icon21"> Zur\u00FCcksetzen</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Verbinde einige \'laufe vorw\u00E4rts\' Bl\u00F6cke, um mir zu helfen, das Ziel zu erreichen.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>In diesem Level musst du die ganzen Bausteine in dem wei\u00DFen Arbeitsbereich zusammenstapeln.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>F\u00FChre dein Programm aus, um zu sehen, was passiert.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Dein Programm l\u00F6st das Labyrinth nicht. Dr\u00FCcke \'Zur\u00FCcksetzen\' und versuche es erneut.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Computer haben begrenzten Speicher. Erreiche das Ende dieses Pfads mit nur zwei Bausteinen. Benutze \u201EWiederholen\u201C, um einen Baustein mehr als einmal auszuf\u00FChren.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Du hast f\u00FCr dieses Level alle Bausteine aufgebraucht. Um einen neuen Baustein zu erstellen, musst du zuerst einen vorhandenen Baustein l\u00F6schen.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Sie k\u00F6nnen mehrere Bl\u00F6cke innerhalb eines Blocks \'repeat\' passen.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">W\u00E4hle deinen Lieblingsspieler vom Men\u00FC aus.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Ein \u201EWenn\u201C-Baustein macht etwas, falls die Bedingung wahr ist. Versuche links abzubiegen, falls es einen Pfad nach links gibt.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Klicke auf %1 im \'Wenn\'-Baustein um die Bedingung zu \u00E4ndern.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>Wenn-Sonst-Bausteine f\u00FChren das eine oder das andere aus.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Kannst du dieses komplizierte Labyrinth l\u00F6sen? Folge der linken Wand. Nur f\u00FCr fortgeschrittene Programmierer!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
};
if (goog.DEBUG) {
  Maze.soy.start.soyTemplateName = 'Maze.soy.start';
}


Maze.soy.toolbox = function(opt_data, opt_ignored, opt_ijData) {
  return '<xml id="toolbox" style="display: none;"><block type="maze_moveForward"></block><block type="maze_turn"><field name="DIR">turnLeft</field></block><block type="maze_turn"><field name="DIR">turnRight</field></block>' + ((opt_ijData.level > 2) ? '<block type="maze_forever"></block>' + ((opt_ijData.level == 6) ? '<block type="maze_if"><field name="DIR">isPathLeft</field></block>' : (opt_ijData.level > 6) ? '<block type="maze_if"></block>' + ((opt_ijData.level > 8) ? '<block type="maze_ifElse"></block>' : '') : '') : '') + '</xml>';
};
if (goog.DEBUG) {
  Maze.soy.toolbox.soyTemplateName = 'Maze.soy.toolbox';
}
