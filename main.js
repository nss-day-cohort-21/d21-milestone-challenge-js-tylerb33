console.log ("works");
let heightenter = document.getElementById("height-input");
let characterenter = document.getElementById("character-input");
let enter = document.getElementById("height-input" && "character-input");
let button = document.getElementById("grow-tree");
let consoleOutput = "";
let consoleOutputSpaces = " ";
let space = " ";
let tree = {height: 0, character: "a"};


(characterenter && heightenter).onkeydown = function(e){
   if(e.keyCode == 13){
     validateForm();
   }
};


function validateForm() {
	tree.height = document.getElementById("height-input").value;
	tree.character = document.getElementById("character-input").value;

	if (tree.height == 0) {
		alert("You must enter a tree height!");
	}else if (tree.character == 0) {
		alert("You must enter a character!")
	}
	getInputValues();
}


function getInputValues() {
	tree.height = document.getElementById("height-input").value;
	tree.character = document.getElementById("character-input").value;
	printInConsole();
}

function printInConsole() {
	for (let i = 1; i <= tree.height; i++) {
			consoleOutputSpaces = space.repeat(tree.height - i);
			consoleOutput = tree.character.repeat((i*2)-1);
			console.log(consoleOutputSpaces, consoleOutput);
		}
	}


			
button.addEventListener("click", validateForm);
enter.addEventListener("keyup", function(event) {
	if (event.which === 13) {
	validateForm();	
	};
});


