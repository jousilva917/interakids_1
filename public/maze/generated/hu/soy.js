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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">Menj el\u0151re</span><span id="Maze_turnLeft">Fordulj balra</span><span id="Maze_turnRight">Fordulj jobbra</span><span id="Maze_doCode">v\u00E9grehajt</span><span id="Maze_elseCode">egy\u00E9bk\u00E9nt</span><span id="Maze_helpIfElse">A Ha-egy\u00E9bk\u00E9nt felt\u00E9tel eset\u00E9n vagy az egyik, vagy a m\u00E1sik utas\u00EDt\u00E1s-csoport ker\u00FCl v\u00E9grehajt\u00E1sra.</span><span id="Maze_pathAhead">Ha szabad az \u00FAt el\u0151tted</span><span id="Maze_pathLeft">Ha szabad az \u00FAt balra</span><span id="Maze_pathRight">Ha szabad az \u00FAt jobbra</span><span id="Maze_repeatUntil">Ism\u00E9teld am\u00EDg eljut\u02D0</span><span id="Maze_moveForwardTooltip">A figura el\u0151re l\u00E9p egy mez\u0151t.</span><span id="Maze_turnTooltip">A figura 90 fokot fordul balra, vagy jobbra.</span><span id="Maze_ifTooltip">Ha szabad az \u00FAt a megadott ir\u00E1nyban, \\nakkor v\u00E9grehajtja az utas\u00EDt\u00E1sokat. </span><span id="Maze_ifelseTooltip">Ha szabad az \u00FAt a megadott ir\u00E1nyban, \\nakkor v\u00E9grehajtja az els\u0151 blokkban \\nmegadott utas\u00EDt\u00E1sokat. Egy\u00E9bk\u00E9nt a \\nm\u00E1sodik blokkban szerepl\u0151 utas\u00EDt\u00E1sokat \\nhajtja v\u00E9gre. </span><span id="Maze_whileTooltip">A be\u00E1gyazott utas\u00EDt\u00E1sokat hajtja v\u00E9gre a c\u00E9l \\nel\u00E9r\u00E9s\u00E9ig. </span><span id="Maze_capacity0">Nem haszn\u00E1lhatsz fel t\u00F6bb blokkot.</span><span id="Maze_capacity1">M\u00E9g %1 blokkot haszn\u00E1lhatsz fel.</span><span id="Maze_capacity2">M\u00E9g %2 blokkot haszn\u00E1lhatsz fel.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Labirintus'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin)}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Ment\u00E9s \u00E9s hivatkoz\u00E1s a blokkokra."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="A figura v\u00E9grehajtja a blokkokkal megadott \\nprogramot. "><img src="common/1x1.gif" class="run icon21"> Program futtat\u00E1sa</button><button id="resetButton" class="primary" style="display: none" title="A labirintus kezd\u0151 poz\u00EDci\u00F3j\u00E1ba \u00E1ll\u00EDtja a figur\u00E1t."><img src="common/1x1.gif" class="stop icon21"> Vissza\u00E1ll\u00EDt\u00E1s</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Seg\u00EDts eljuttatni a figur\u00E1t a c\u00E9lig, kapcsolj \u00F6ssze n\u00E9h\u00E1ny \'Menj el\u0151re\' blokkot!</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Ezen a szinten \u00F6ssze kell kapcsolnod minden blokkot a munkater\u00FCleten.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Futtasd a programot, n\u00E9z\u00FCk meg mi t\u00F6rt\u00E9nik.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>A programmal nem siker\u00FClt a figur\u00E1t a c\u00E9lba juttatni. Kezdd el\u00F6lr\u0151l.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Juttasd el a figur\u00E1t a c\u00E9lig mind\u00F6ssze 2 blokk felhaszn\u00E1l\u00E1s\u00E1val. Haszn\u00E1ld az \'Ism\u00E9teld a c\u00E9l el\u00E9r\u00E9s\u00E9ig\' blokkot egy m\u00E1sik blokk ism\u00E9telt v\u00E9grehajt\u00E1s\u00E1hoz.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Minden rendelkez\u00E9sedre \u00E1ll\u00F3 blokkot felhaszn\u00E1lt\u00E1l. \u00DAj blokk kirak\u00E1s\u00E1hoz egy l\u00E9tez\u0151t t\u00F6r\u00F6ln\u00F6d kell.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>T\u00F6bb blokkot is haszn\u00E1lhatsz az Ism\u00E9tl\u00E9sen bel\u00FCl.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">V\u00E1laszd ki kedvenc figur\u00E1dat a men\u00FCb\u0151l.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Egy \'Ha\' eset\u00E9n az utas\u00EDt\u00E1sok csak akkor ker\u00FClnek v\u00E9grehajt\u00E1sra, ha a felt\u00E9tel igaz. Pr\u00F3b\u00E1ld a figur\u00E1t balra ford\u00EDtani, ha van \u00FAt balra.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Kattints a(z) %1 elemre \u00E9s v\u00E1ltoztass a \'ha\' blokk felt\u00E9tel\u00E9n.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>A Ha-egy\u00E9bk\u00E9nt felt\u00E9tel eset\u00E9n vagy az egyik, vagy a m\u00E1sik utas\u00EDt\u00E1s-csoport ker\u00FCl v\u00E9grehajt\u00E1sra.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>V\u00E9gig tudod vezetni a figur\u00E1t ezen a bonyolult labirintuson? Pr\u00F3b\u00E1ld a bal oldali falat k\u00F6vetni. Halad\u00F3 programoz\u00F3knak!' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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