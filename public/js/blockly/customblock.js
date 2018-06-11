/* global Blockly */

Blockly.Blocks['lightswitch'] = {
  init: function() {
    this.appendDummyInput()
        .appendField("Acender")
        .appendField(new Blockly.FieldDropdown([["Vermelho","R"], ["Amarelo","Y"], ["Verde","G"], ["Laranja","O"]]), "lightcolor")
        .appendField(new Blockly.FieldDropdown([["Ligar","on"], ["Desligar","off"]]), "switch");
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(210);
 this.setTooltip("");
 this.setHelpUrl("");
  }
};


Blockly.JavaScript['lightswitch'] = function(block) {
  var dropdown_lightcolor = block.getFieldValue('lightcolor');
  var dropdown_switch = block.getFieldValue('switch');
  // TODO: Assemble JavaScript into code variable.
  var code = "";
	  if(dropdown_lightcolor == "R" && dropdown_switch=="on"){
	  code = "document.getElementById('circle').style.backgroundColor='red'";
	  }
	  if(dropdown_lightcolor == "Y" && dropdown_switch=="on"){
	  code = "document.getElementById('circle').style.backgroundColor='yellow'";
	  } 
	  if(dropdown_lightcolor == "G" && dropdown_switch=="on"){
	  code = "document.getElementById('circle').style.backgroundColor='green'";
	  } 
	  if(dropdown_lightcolor == "O" && dropdown_switch=="on"){
	  code = "document.getElementById('circle').style.backgroundColor='orange'";
	  } 
	 if(dropdown_switch=="off"){
		code = "document.getElementById('circle').style.backgroundColor='white'";
	  }
  return code;
	};
