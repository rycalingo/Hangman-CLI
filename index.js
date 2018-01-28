// index.js

const inquirer = require('inquirer');
const word = require('./word.js');
const letter = require('./letter.js');


const hangMan = (function() {

	// create new word to guess
	let mysteryWord = new word.CurrentWord();
	// console.log(mysteryWord.charList);

	mysteryWord.DisplayChar();

	const guessTheWord = function() {

		if (mysteryWord.missed < mysteryWord.limit) {

			inquirer.prompt([
			  {
				name: 'char',
				message: 'Guess a letter? '
			  }
			]).then(function(guess) {
				let guessL = guess.char.toUpperCase();
				let view = '\n\n';
				let charFound = false;
				
				mysteryWord.guessChar.forEach( (char, i)=> {
					if (char.letter === guessL) {
						charFound = true;
						char.isGuessed = true;
						view += char.print();

					}else
					if ( char.isGuessed ) {
						view += char.print();

					}else {
						view += char.print();
					}
				});
				if (charFound) {
					console.log('\nCORRECT!!!');
					charFound = false;
				}else {
					console.log('\nMISSED!!!');
					mysteryWord.missed--;
				}

				console.log(view + '\n');
				
				guessTheWord();
			});

		}else {
			inquirer.prompt([
				{
				  type: 'list',
				  name: 'replay',
				  message: 'Play Again? ',
				  choices: [ 'Yes', 'No']
				}
			  ]).then(function(game) {
			  // restart logic
			});
		}

	};
	guessTheWord();

})();
