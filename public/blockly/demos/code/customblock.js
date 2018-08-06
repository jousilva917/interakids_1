/* global Blockly */

Blockly.Blocks['lightswitch'] = {
  init: function() {
    this.jsonInit({
				"type": "lightswitch",
				"message0": "Acender %1 %2",
				"args0": [
					{
						"type": "field_dropdown",
						"name": "lightcolor",
						"options": [
							[
								"Vermelho",
								"R"
							],
							[
								"Amarelo",
								"Y"
							],
							[
								"Verde",
								"G"
							],
							[
								"Laranja",
								"O"
							]
						]
					},
					{
						"type": "field_dropdown",
						"name": "switch",
						"options": [
							[
								"Ligar",
								"on"
							],
							[
								"Desligar",
								"off"
							]
						]
					}
				],
				"previousStatement": null,
  			"nextStatement": null,
				"colour": 230,
				"tooltip": "",
				"helpUrl": ""
		});
	}
};
Blockly.Blocks['boolean'] = {
	init: function() {
	  this.jsonInit({
		"type": "boolean",
		"message0": "%1",
		"args0": [
		  {
			"type": "field_dropdown",
			"name": "boolean",
			"options": [
			  [
				"true",
				"true"
			  ],
			  [
				"false",
				"false"
			  ]
			]
		  }
		],
		"category": Blockly.Categories.operators,
      	"extensions": ["colours_operators", "output_boolean"]
	  });
	}
};
Blockly.Blocks['control_if'] = {
	/**
	 * Block for if-then.
	 * @this Blockly.Block
	 */
	init: function() {
	  this.jsonInit({
		"type": "control_if",
		"message0": Blockly.Msg.CONTROL_IF,
		"message1": "%1", // Statement
		"args0": [
		  {
			"type": "input_value",
			"name": "CONDITION",
			"check": "Boolean"
		  }
		],
		"args1": [
		  {
			"type": "input_statement",
			"name": "SUBSTACK"
		  }
		],
		"category": Blockly.Categories.control,
		"extensions": ["colours_control", "shape_statement"]
	  });
	}
  };

  Blockly.JavaScript['control_if'] = function(block) {
	var value_condition = Blockly.JavaScript.valueToCode(block, 'CONDITION', Blockly.JavaScript.ORDER_ATOMIC);
	var statements_substack = Blockly.JavaScript.statementToCode(block, 'SUBSTACK');
	// TODO: Assemble JavaScript into code variable.
	var test = "....";
	if(!value_condition){
		test = "...";
	}else{
		test = null;
	}
	console.log(value_condition);
	console.log(statements_substack);
	console.log(test)
	// TODO: Change ORDER_NONE to the correct strength.
	return [test, Blockly.JavaScript.ORDER_NONE];
  };




Blockly.JavaScript['boolean'] = function(block) {
	var dropdown_boolean = block.getFieldValue('boolean');
	// TODO: Assemble JavaScript into code variable.
	var boolean = null;
	if(dropdown_boolean == "true"){
		dropdown_boolean = true;
		boolean = dropdown_boolean;
	}else{
		dropdown_boolean = false;
		boolean = dropdown_boolean;
	}
	// TODO: Change ORDER_NONE to the correct strength.
	return [boolean, Blockly.JavaScript.ORDER_NONE];
  };

Blockly.JavaScript['lightswitch'] = function(block, dropdown_switch) {
  var dropdown_lightcolor = block.getFieldValue('lightcolor');
  var dropdown_switch = block.getFieldValue('switch');
    // TODO: Assemble JavaScript into code variable.
  var color = null;
	  if(dropdown_lightcolor == "R" && dropdown_switch == "on"){
	  color = "document.getElementById('circle').style.backgroundColor='red'";
	  }
	  if(dropdown_lightcolor == "Y" && dropdown_switch == "on"){
	  color = "document.getElementById('circle').style.backgroundColor='yellow'";
	  } 
	  if(dropdown_lightcolor == "G" && dropdown_switch == "on"){
	  color = "document.getElementById('circle').style.backgroundColor='green'";
	  } 
	  if(dropdown_lightcolor == "O" && dropdown_switch == "on"){
	  color = "document.getElementById('circle').style.backgroundColor='orange'";
	  } 
	 if(dropdown_switch == "off"){
		color = "document.getElementById('circle').style.backgroundColor='white'";
	  }
	  return color;
	};
