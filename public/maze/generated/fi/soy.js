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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">liiku eteenp\u00E4in</span><span id="Maze_turnLeft">k\u00E4\u00E4nny vasemmalle</span><span id="Maze_turnRight">k\u00E4\u00E4nny oikealle</span><span id="Maze_doCode">tee</span><span id="Maze_elseCode">muutoin</span><span id="Maze_helpIfElse">If-else (joko-tai) -lohko tekee joko yhden tai toisen asian.</span><span id="Maze_pathAhead">jos edess\u00E4 on polku</span><span id="Maze_pathLeft">jos polku k\u00E4\u00E4ntyy vasemmalle</span><span id="Maze_pathRight">jos polku k\u00E4\u00E4ntyy oikealle</span><span id="Maze_repeatUntil">toista kunnes</span><span id="Maze_moveForwardTooltip">Liikuta pelaajaa eteenp\u00E4in yksi askel.</span><span id="Maze_turnTooltip">K\u00E4\u00E4nt\u00E4\u00E4 pelaajaa vasemmalle tai oikealle 90 \\nastetta. </span><span id="Maze_ifTooltip">Jos on olemassa polku m\u00E4\u00E4ritettyyn suuntaan, \\ntee joitain toimintoja. </span><span id="Maze_ifelseTooltip">Jos polku vie annettuun suuntaan, \\nensimm\u00E4isen osan palikat suoritetaan. \\nMuuten suoritetaan toisen osan \\npalikat. </span><span id="Maze_whileTooltip">Toistaa sulkujen sis\u00E4ll\u00E4 olevaa koodia siihen \\nsaakka, ett\u00E4 sulkuja edelt\u00E4v\u00E4 ehto t\u00E4yttyy. </span><span id="Maze_capacity0">Sinulla on %0 lohkoa j\u00E4ljell\u00E4.</span><span id="Maze_capacity1">Sinulla on %1 lohko j\u00E4ljell\u00E4.</span><span id="Maze_capacity2">Sinulla on %2 lohkoa j\u00E4ljell\u00E4.</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: 'Sokkelo'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin)}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="Tallenna ja linkit\u00E4 lohkoihin. "><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Saa pelaajan tekem\u00E4\u00E4n asioita, \\njoita koodilohkot kuvailevat. "><img src="common/1x1.gif" class="run icon21"> Suorita ohjelma</button><button id="resetButton" class="primary" style="display: none" title="Aseta pelaaja sokkelon alkuun. "><img src="common/1x1.gif" class="stop icon21"> Nollaa</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Pinoa muutama "liiku eteenp\u00E4in" -lohko yhteen, jotta p\u00E4\u00E4sisin maaliin asti.</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>T\u00E4ss\u00E4 teht\u00E4v\u00E4ss\u00E4 sinun pit\u00E4\u00E4 pinota kaikki lohkot p\u00E4\u00E4llekk\u00E4in valkoisella ty\u00F6alueella.<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>Suorita ohjelmasi n\u00E4hd\u00E4ksesi, mit\u00E4 tapahtuu.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>Ohjelmasi ei ratkaise sokkeloa. Paina "Nollaa" ja yrit\u00E4 uudelleen.</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Koita saavuttaa polun p\u00E4\u00E4 k\u00E4ytt\u00E4en vain kahta lohkoa. K\u00E4yt\u00E4 \'toista\' lohkoa suorittaaksesi lohkoja useamman kerran.</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Olet k\u00E4ytt\u00E4ny t\u00E4m\u00E4n tason kaikki k\u00E4ytett\u00E4viss\u00E4 olevat lohkot. Sinun pit\u00E4\u00E4 ensin poistaa olemassa oleva lohko, ennen kuin voit luoda uuden lohkon.</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Voit laittaa useita lohkoja \'toista\' lohkon sis\u00E4\u00E4n.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">Valitse suosikkihahmosi t\u00E4st\u00E4 valikosta.</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\'jos\' lohko toimii vain jos jokin ehto on tosi. Kokeile k\u00E4\u00E4nty\u00E4 vasemmalle kun polku k\u00E4\u00E4ntuu vasemmalle.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">Napsauta %1 \'jos\' lohkossa vaihtaaksesi ehtoa.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>If-else (joko-tai) -lohko tekee joko yhden tai toisen asian.</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>Pystytk\u00F6 ratkaisemaan t\u00E4m\u00E4n monimutkaisen sokkelon? Kokeile seurata vasenta sein\u00E4\u00E4. Vain kokeneille ohjelmoijille.' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
