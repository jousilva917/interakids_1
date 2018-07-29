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
  return BlocklyGames.soy.messages(null, null, opt_ijData) + '<div style="display: none"><span id="Maze_moveForward">\u1021\u101B\u103E\u1031\u1037\u101E\u102D\u102F\u1037\u101B\u103D\u103E\u1031\u1037\u1015\u102B\u104B</span><span id="Maze_turnLeft">\u1018\u101A\u103A\u1018\u1000\u103A\u101C\u103E\u100A\u1037\u103A\u1015\u102B\u104B</span><span id="Maze_turnRight">\u100A\u102C\u1018\u1000\u103A\u101C\u103E\u100A\u1037\u103A\u1015\u102B\u104B</span><span id="Maze_doCode">\u101C\u102F\u1015\u103A\u1006\u1031\u102C\u1004\u103A\u1015\u102B\u104B</span><span id="Maze_elseCode">\u1014\u1031\u102C\u1000\u103A\u1011\u1015\u103A</span><span id="Maze_helpIfElse">\u1021\u1000\u101A\u103A\u104D block \u1019\u103B\u102C\u1038 \u1010\u1005\u103A\u1001\u102F \u101E\u102D\u102F\u1037\u1019\u101F\u102F\u1010\u103A \u1021\u1001\u103C\u102C\u1038\u1021\u101B\u102C\u1019\u103B\u102C\u1038 \u101C\u102F\u1015\u103A\u1006\u1031\u102C\u1004\u103A\u1019\u100A\u103A\u1006\u102D\u102F\u1015\u102B\u1000</span><span id="Maze_pathAhead">\u1021\u1000\u101A\u103A\u104D \u101C\u1019\u103A\u1038\u1000\u103C\u1031\u102C\u1004\u103A\u1038\u101E\u100A\u103A \u101B\u103E\u1031\u1037\u1010\u103D\u1004\u103A\u101B\u103E\u102D\u1015\u102B\u1000</span><span id="Maze_pathLeft">\u1021\u1000\u101A\u103A\u104D \u101C\u1019\u103A\u1038\u1000\u103C\u1031\u102C\u1004\u103A\u1038\u101E\u100A\u103A \u1018\u101A\u103A\u1018\u1000\u103A\u1010\u103D\u1004\u103A\u101B\u103E\u102D\u1015\u102B\u1000</span><span id="Maze_pathRight">\u1021\u1000\u101A\u103A\u104D \u101C\u1019\u103A\u1038\u1000\u103C\u1031\u102C\u1004\u103A\u1038\u101E\u100A\u103A \u100A\u102C\u1018\u1000\u103A\u1010\u103D\u1000\u103A\u101B\u103E\u102D\u1015\u102B\u1000</span><span id="Maze_repeatUntil">\u1010\u102D\u102F\u1004\u103A\u1021\u1031\u102C\u1004\u103A \u1006\u1000\u103A\u101C\u1000\u103A\u101C\u102F\u1015\u103A\u1006\u1031\u102C\u1004\u103A\u1015\u102B\u104B</span><span id="Maze_moveForwardTooltip">\u1000\u1005\u102C\u1038\u101E\u1019\u102C\u1038\u1000\u102D\u102F \u1010\u1005\u103A\u1014\u1031\u101B\u102C\u1005\u102C \u101B\u103E\u1031\u1037\u101E\u102D\u102F\u1037\u101E\u103D\u102C\u1038\u1001\u102D\u102F\u1004\u103A\u1038\u1015\u102B\u104B.</span><span id="Maze_turnTooltip">\u1000\u1005\u102C\u1038\u101E\u1019\u102C\u1038\u1000\u102D\u102F \u1049\u1040 \u1012\u102E\u1002\u101B\u102E \u1018\u101A\u103A \u101E\u102D\u102F\u1037\u1019\u101F\u102F\u1010\u103A \u100A\u102C\u1018\u1000\u103A \\n\u101E\u102D\u102F\u1037\u101C\u103E\u100A\u1037\u103A\u1001\u102D\u102F\u1004\u103A\u1038\u1015\u102B\u104B </span><span id="Maze_ifTooltip">\u1021\u1000\u101A\u103A\u104D \u1021\u1011\u1030\u1038\u1015\u103C\u102F\u1026\u1038\u1010\u100A\u103A\u101C\u102C\u1038\u101B\u102C\u1010\u103D\u1004\u103A \\n\u101C\u1019\u103A\u1038\u1000\u103C\u1031\u102C\u1004\u103A\u1038\u1010\u1005\u103A\u1001\u102F\u101B\u103E\u102D\u1015\u103C\u102E\u1038\u1015\u102B\u1000 </span><span id="Maze_ifelseTooltip">\u1021\u1000\u101A\u103A\u104D \u1021\u1011\u1030\u1038\u1015\u103C\u102F\u1026\u1038\u1010\u100A\u103A\u101C\u102C\u1038\u101B\u102C\u1010\u103D\u1004\u103A \\n\u101C\u1019\u103A\u1038\u1000\u103C\u1031\u102C\u1004\u103A\u1038\u1010\u1005\u103A\u1001\u102F\u101B\u103E\u102D\u1015\u103C\u102E\u1038\u1015\u102B\u1000\u104A \\n\u101C\u102F\u1015\u103A\u1006\u1031\u102C\u1004\u103A\u1001\u103B\u1000\u103A\u1019\u103B\u102C\u1038\u104F \u1015\u1011\u1019 Block \\n\u1000\u102D\u102F\u1015\u103C\u102F\u101C\u102F\u1015\u103A\u1015\u102B\u104B \u1011\u102D\u102F\u101E\u102D\u102F\u1037\u1019\u101F\u102F\u1010\u103A\u1015\u102B\u1000 \\n\u101C\u102F\u1015\u103A\u1006\u1031\u102C\u1004\u103A\u1001\u103B\u1000\u103A\u1019\u103B\u102C\u1038\u104F \u1012\u102F\u1010\u102D\u101A Block \\n\u1000\u102D\u102F\u1015\u103C\u102F\u101C\u102F\u1015\u103A\u1015\u102B\u104B </span><span id="Maze_whileTooltip">\u1006\u102F\u1036\u1038\u1019\u103E\u1010\u103A\u101B\u1031\u102C\u1000\u103A\u101E\u100A\u103A\u1021\u1011\u102D \\n\u101C\u102F\u1015\u103A\u1006\u1031\u102C\u1004\u103A\u1001\u103B\u1000\u103A\u1019\u103B\u102C\u1038\u1000\u102D\u102F\u1011\u100A\u1037\u103A\u101E\u103D\u1004\u103A\u1038\u1015\u103C\u102E\u1038 \\n\u1011\u1015\u103A\u1001\u102B\u1011\u1015\u103A\u1001\u102B\u1015\u103C\u102F\u101C\u102F\u1015\u103A\u1015\u102B\u104B </span><span id="Maze_capacity0">\u101E\u1004\u1037\u103A\u1010\u103D\u1004\u103A %0 block \u1019\u103B\u102C\u1038\u1000\u103B\u1014\u103A\u1014\u1031\u1015\u102B\u101E\u1031\u1038\u101E\u100A\u103A\u104B</span><span id="Maze_capacity1">\u101E\u1004\u1037\u103A\u1010\u103D\u1004\u103A %1 block \u1019\u103B\u102C\u1038\u1000\u103B\u1014\u103A\u1014\u1031\u1015\u102B\u101E\u1031\u1038\u101E\u100A\u103A\u104B</span><span id="Maze_capacity2">\u101E\u1004\u1037\u103A\u1010\u103D\u1004\u103A %2 block \u1019\u103B\u102C\u1038\u1000\u103B\u1014\u103A\u1014\u1031\u1015\u102B\u101E\u1031\u1038\u101E\u100A\u103A\u104B</span></div>';
};
if (goog.DEBUG) {
  Maze.soy.messages.soyTemplateName = 'Maze.soy.messages';
}


Maze.soy.start = function(opt_data, opt_ignored, opt_ijData) {
  return Maze.soy.messages(null, null, opt_ijData) + '<table width="100%"><tr><td><h1>' + BlocklyGames.soy.titleSpan({appName: '\u101D\u1004\u103A\u1039\u1000\u1018\u102C'}, null, opt_ijData) + BlocklyGames.soy.levelLinks({level: opt_ijData.level, maxLevel: opt_ijData.maxLevel, lang: opt_ijData.lang, suffix: '&skin=' + soy.$$escapeHtml(opt_ijData.skin)}, null, opt_ijData) + '</h1></td><td class="farSide"><select id="languageMenu"></select>&nbsp;<button id="linkButton" title="\u101E\u102D\u1019\u103A\u1038\u1006\u100A\u103A\u1038\u1015\u103C\u102E\u1038 \u1018\u101C\u1031\u102C\u1000\u103A\u1019\u103B\u102C\u1038\u1016\u103C\u1004\u1037\u103A\u1001\u103B\u102D\u1010\u103A\u1006\u1000\u103A\u1015\u102B\u104B."><img src="common/1x1.gif" class="link icon21"></button>&nbsp;<button id="pegmanButton"><img src="common/1x1.gif"><span id="pegmanButtonArrow"></span></button></td></tr></table><div id="visualization"><svg xmlns="http://www.w3.org/2000/svg" version="1.1" id="svgMaze" width="400px" height="400px"><g id="look"><path d="M 0,-15 a 15 15 0 0 1 15 15" /><path d="M 0,-35 a 35 35 0 0 1 35 35" /><path d="M 0,-55 a 55 55 0 0 1 55 55" /></g></svg><div id="capacityBubble"><div id="capacity"></div></div></div><table width="400"><tr><td style="width: 190px; text-align: center; vertical-align: top;"><td><button id="runButton" class="primary" title="Block \u1019\u103B\u102C\u1038\u1015\u103C\u1031\u102C\u101E\u100A\u1037\u103A\u1021\u1010\u102D\u102F\u1004\u103A\u1038 \u1000\u1005\u102C\u1038\u101E\u1019\u102C\u1038\u1000\u102D\u102F \\n\u101C\u102D\u102F\u1000\u103A\u101C\u102F\u1015\u103A\u1005\u1031\u1015\u102B\u104B "><img src="common/1x1.gif" class="run icon21"> Program run \u1015\u102B\u104B</button><button id="resetButton" class="primary" style="display: none" title="\u101D\u1004\u103A\u1039\u1000\u1018\u102C\u104F \u1021\u1005\u101E\u102D\u102F\u1037\u1000\u1005\u102C\u1038\u101E\u1019\u102C\u1038\u1000\u102D\u102F\u1015\u103C\u1014\u103A\u1015\u102D\u102F\u1037\u1015\u102B\u104B."><img src="common/1x1.gif" class="stop icon21"> \u1015\u103C\u1014\u103A\u1005\u1019\u100A\u103A\u104B</button></td></tr></table>' + Maze.soy.toolbox(null, null, opt_ijData) + '<div id="blockly"></div><div id="pegmanMenu"></div>' + BlocklyGames.soy.dialog(null, null, opt_ijData) + BlocklyGames.soy.doneDialog(null, null, opt_ijData) + BlocklyGames.soy.abortDialog(null, null, opt_ijData) + BlocklyGames.soy.storageDialog(null, null, opt_ijData) + ((opt_ijData.level == 1) ? '<div id="dialogHelpStack" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u101B\u103E\u1031\u1037\u101E\u102D\u102F\u1037\u101B\u103D\u103E\u1031\u1037\u1015\u102B block \u1042 \u1010\u102F\u1036\u1038\u1000\u102D\u102F\u1021\u1010\u1030\u101B\u103D\u103E\u1031\u1037\u1001\u103C\u1004\u103A\u1038\u1016\u103C\u1004\u1037\u103A \u1015\u1014\u103A\u1038\u1010\u102D\u102F\u1004\u103A\u101B\u1031\u102C\u1000\u103A\u101B\u1014\u103A \u1000\u103B\u103D\u1014\u103A\u102F\u1015\u103A\u1000\u102D\u102F\u1000\u1030\u100A\u102E\u1015\u1031\u1038\u1015\u102B\u104B</td><td valign="top"><img src="maze/help_stack.png" class="mirrorImg" height=63 width=136></td></tr></table></div><div id="dialogHelpOneTopBlock" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u1024\u1021\u1006\u1004\u1037\u103A\u1010\u103D\u1004\u103A block \u1019\u103B\u102C\u1038\u1021\u102C\u1038\u101C\u102F\u1036\u1038\u1000\u102D\u102F \u1010\u1005\u103A\u1005\u102F\u1010\u1005\u103A\u1005\u100A\u103A\u1038\u1011\u1032 \u1021\u101C\u102F\u1015\u103A\u101C\u102F\u1015\u103A\u1019\u100A\u1037\u103A \u1021\u1016\u103C\u1030\u101B\u1031\u102C\u1004\u103A\u1021\u1000\u103D\u1000\u103A\u1011\u1032\u1010\u103D\u1004\u103A \u1011\u102C\u1038\u101B\u103E\u102D\u101B\u1019\u100A\u103A\u104B<div id="sampleOneTopBlock" class="readonly"></div></td></tr></table></div><div id="dialogHelpRun" class="dialogHiddenContent"><table><tr><td>\u1019\u100A\u103A\u1000\u1032\u1037\u101E\u102D\u102F\u1037\u1016\u103C\u1005\u103A\u101E\u103D\u102C\u1038\u1019\u100A\u103A\u1000\u102D\u102F \u101E\u102D\u101B\u103E\u102D\u101B\u1014\u103A \u101E\u1004\u1037\u103A \u1015\u101B\u102D\u102F\u1002\u1019\u103A\u1000\u102D\u102F \u1005\u1010\u1004\u103A\u101C\u100A\u103A\u1015\u102B\u1010\u103A\u1000\u103C\u100A\u1037\u103A\u1015\u102B\u104B</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 2) ? '<div id="dialogHelpReset" class="dialogHiddenContent"><table><tr><td>\u101E\u1004\u1037\u103A \u1015\u101B\u102D\u102F\u1002\u1019\u103A \u1024\u101D\u1004\u103A\u1039\u1000\u1018\u102C\u1000\u102D\u102F \u1019\u1016\u103C\u1031\u101B\u103E\u1004\u103A\u1038\u1014\u102D\u102F\u1004\u103A\u1015\u102B\u104A \u1015\u103C\u1014\u103A\u1005\u1019\u100A\u103A \u1000\u102D\u102F\u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u104D \u1014\u1031\u102C\u1000\u103A\u1010\u1005\u103A\u1000\u103C\u102D\u1019\u103A\u1011\u1015\u103A\u1000\u103C\u102D\u102F\u1038\u1005\u102C\u1038\u1015\u102B\u104B</td><td rowspan=2><img src="common/help.png"></td></tr><tr><td><div><img src="maze/help_run.png" class="mirrorImg" height=27 width=141></div></td></tr></table></div>' : (opt_ijData.level == 3 || opt_ijData.level == 4) ? ((opt_ijData.level == 3) ? '<div id="dialogHelpRepeat" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>Block \u1042 \u1001\u102F\u101E\u102C\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u1015\u103C\u102E\u1038 \u1024\u101C\u1019\u103A\u1038\u1000\u103C\u1031\u102C\u1004\u103A\u1038\u104F \u1021\u1006\u102F\u1036\u1038\u1000\u102D\u102F\u101E\u103D\u102C\u1038\u1015\u102B\u104A \u1011\u1015\u103A\u1001\u102B\u1011\u1015\u103A\u1001\u102B\u1015\u103C\u102F\u101C\u102F\u1015\u103A\u1015\u103C\u102E\u1038 block \u1010\u1005\u103A\u1001\u102F\u1000\u102D\u102F \u1010\u1005\u103A\u1000\u103C\u102D\u1019\u103A\u1011\u1000\u103A\u1015\u102D\u102F\u104D \u101C\u100A\u103A\u1015\u102B\u1010\u103A\u1001\u102D\u102F\u1004\u103A\u1038\u1015\u102B\u104B</td><td><img src="common/help.png"></td></tr></table></div>' : '') + '<div id="dialogHelpCapacity" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u1024\u1021\u1006\u1004\u1037\u103A\u1021\u1010\u103D\u1000\u103A block \u1019\u103B\u102C\u1038\u1021\u102C\u1038\u101C\u102F\u1036\u1038\u1000\u102D\u102F \u101E\u1004\u103A\u1021\u101E\u102F\u1036\u1038\u1015\u103C\u102F\u101C\u102D\u102F\u1000\u103A\u1015\u103C\u102E\u1038\u1015\u102B\u1015\u103C\u102E\u104A Block \u1021\u101E\u1005\u103A\u1010\u1005\u103A\u1001\u102F\u1016\u1014\u103A\u1010\u102E\u1038\u101B\u1014\u103A</td></tr></table></div><div id="dialogHelpRepeatMany" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u1011\u1015\u103A\u1001\u102B\u1011\u1015\u103A\u1001\u102B\u1015\u103C\u102F\u101C\u102F\u1015\u103A\u101E\u100A\u1037\u103A block \u1010\u1005\u103A\u1001\u102F\u1011\u1032\u1010\u103D\u1004\u103A \u1010\u1005\u103A\u1001\u102F\u1011\u1000\u103A\u1015\u102D\u102F\u101E\u1031\u102C block \u1019\u103B\u102C\u1038\u101E\u1004\u1037\u103A\u1021\u1014\u1031\u1016\u103C\u1004\u1037\u103A\u1011\u100A\u1037\u103A\u101E\u103D\u1004\u103A\u1038\u1014\u102D\u102F\u1004\u103A\u101E\u100A\u103A\u104B</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 5) ? '<div id="dialogHelpSkins" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td width="95%">\u1024\u1005\u102C\u101B\u1004\u103A\u1038\u1010\u103D\u1004\u103A\u1038\u1019\u103E \u101E\u1004\u1037\u103A\u1021\u1000\u103C\u102D\u102F\u1000\u103A\u1006\u102F\u1036\u1038\u1000\u1005\u102C\u1038\u101E\u1019\u102C\u1038\u1000\u102D\u102F \u101B\u103D\u1031\u1038\u1001\u103B\u101A\u103A\u1015\u102B\u104B</td><td><img src="maze/help_up.png"></td></tr></table></div>' : (opt_ijData.level == 6) ? '<div id="dialogHelpIf" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td>\u1021\u1000\u101A\u103A\u104D block \u101E\u100A\u103A \u1021\u1001\u103C\u1031\u1021\u1014\u1031\u1010\u1005\u103A\u1001\u102F \u1019\u103E\u1014\u103A\u1000\u1014\u103A\u101E\u100A\u1037\u103A\u1021\u1001\u103B\u102D\u1014\u103A\u1010\u103D\u1004\u103A\u1019\u103E \u1021\u101C\u102F\u1015\u103A\u101C\u102F\u1015\u103A\u1014\u102D\u102F\u1004\u103A\u101E\u100A\u103A\u104B \u1021\u1000\u101A\u103A\u104D \u1018\u101A\u103A\u1018\u1000\u103A\u1010\u103D\u1004\u103A \u101C\u1019\u103A\u1038\u1000\u103C\u1031\u102C\u1004\u103A\u1038\u101B\u103E\u102D\u1015\u102B\u1000 \u1018\u101A\u103A\u1018\u1000\u103A\u101E\u102D\u102F\u1037\u101C\u103E\u100A\u1037\u103A\u1015\u102B\u104B</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 7) ? '<div id="dialogHelpMenu" class="dialogHiddenContent"><table><tr><td><img src="maze/help_up.png"></td><td id="helpMenuText">\u1021\u1000\u101A\u103A\u104D block \u104F \u1021\u1001\u103C\u1031\u1021\u1014\u1031\u1000\u102D\u102F \u1015\u103C\u1031\u102C\u1004\u103A\u1038\u101C\u1032\u101B\u1014\u103A\u1021\u1010\u103D\u1000\u103A %1 \u1000\u102D\u102F\u1014\u103E\u102D\u1015\u103A\u1015\u102B\u104B</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 9) ? '<div id="dialogHelpIfElse" class="dialogHiddenContent"><table><tr><td><img src="maze/help_down.png"></td><td>\u1021\u1000\u101A\u103A\u104D block \u1019\u103B\u102C\u1038 \u1010\u1005\u103A\u1001\u102F \u101E\u102D\u102F\u1037\u1019\u101F\u102F\u1010\u103A \u1021\u1001\u103C\u102C\u1038\u1021\u101B\u102C\u1019\u103B\u102C\u1038 \u101C\u102F\u1015\u103A\u1006\u1031\u102C\u1004\u103A\u1019\u100A\u103A\u1006\u102D\u102F\u1015\u102B\u1000</td><td><img src="common/help.png"></td></tr></table></div>' : (opt_ijData.level == 10) ? '<div id="dialogHelpWallFollow" class="dialogHiddenContent"><table><tr><td><img src="common/help.png"></td><td>&nbsp;</td><td>\u1024\u101B\u103E\u102F\u1015\u103A\u1011\u103D\u1031\u1038\u101E\u1031\u102C \u101D\u1004\u103A\u1039\u1000\u1018\u102C\u1000\u102D\u102F \u101E\u1004\u103A\u1016\u103C\u1031\u101B\u103E\u1004\u103A\u1038\u1014\u102D\u102F\u1004\u103A\u1015\u102B\u101E\u101C\u102C\u1038\u104A \u1018\u101A\u103A\u1018\u1000\u103A\u1021\u1001\u103C\u1019\u103A\u1038\u1010\u103D\u1004\u103A\u101B\u103E\u102D\u101E\u100A\u1037\u103A \u1014\u1036\u101B\u1036\u1018\u1000\u103A\u1019\u103E \u1016\u103C\u1031\u101B\u103E\u1004\u103A\u1038\u1000\u103C\u100A\u1037\u103A\u1015\u102B\u104A \u1021\u1006\u1004\u1037\u103A\u1019\u103C\u1004\u1037\u103A \u1015\u101B\u102D\u102F\u1002\u1019\u103A\u1019\u102C\u1019\u103B\u102C\u1038\u1021\u1010\u103D\u1000\u103A \u1016\u103C\u1005\u103A\u101E\u100A\u103A\u104B' + BlocklyGames.soy.ok(null, null, opt_ijData) + '</td></tr></table></div>' : '');
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
