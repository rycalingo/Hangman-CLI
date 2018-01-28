// index.js

const inquirer = require('inquirer');
const word = require('./word.js');
const letter = require('./letter.js');


const hangMan = (function() {

	// create new word to guess
	let mysteryWord = new word.CurrentWord();
	
	const guessTheWord = function() {
		
		mysteryWord.DisplayChar();

		if (mysteryWord.missed < mysteryWord.limit) {

			inquirer.prompt([
			  {
				name: "char",
				message: "Guess a letter? "
			  }
			]).then(function(guess) {
				mysteryWord.guessChar.forEach( (char, i)=> {
					if ( char.letter === guess.char.toUpperCase() ) {

					}else {
						
					};
				});
				
				
				guessTheWord();
			});

		}

	};
	guessTheWord();

})();
