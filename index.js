// index.js

const inquirer = require('inquirer');
const word = require('./word.js');
const letter = require('./letter.js');


(function() {

	// create new word to guess
	let mysteryWord = new word.CurrentWord();
	console.log(mysteryWord.guessChar);
	// display character placeholder
	mysteryWord.DisplayChar();

	// game prompt logic
	const guessTheWord = function() {

		if (mysteryWord.guesses > 0) {

			inquirer.prompt([
			  {
				name: 'char',
				message: 'Guess a letter? '
			  }
			]).then(function(guess) {
				let guessL = guess.char.toUpperCase();
				let view = '\n\n';
				let charFound;
				
				mysteryWord.guessChar.forEach((char, i)=> {
					if (char.letter === guessL) {
						// if a character is found set 'isGuess=true'
						charFound = char.isGuessed = true;
						// adds character to 'view' to be console.log
						view += char.print();

					} else
					  if ( char.isGuessed ) {
					// 	// if any character has 'isGuess=true' add to 'view'
						view += char.print();

					} else {
						// print out '_'
						view += char.print();
					}
				});
				// checks logic for remaining letters
				if (charFound) {

					// count if all the characters 'isGuessed=true'
					let isGuessCount = 0;
					mysteryWord.guessChar.forEach((char)=> {
						// count characters with 'isGuessed=false'
						if (!char.isGuessed) isGuessCount++;
					});
					// if 'isGuessed=false' count is 0
					if (isGuessCount <= 0) {
						mysteryWord.guesses = 0;
						console.log('\nCONGRATULATIONS');

					}else {
						console.log('\nCORRECT!!!');
					}

				}else {
					mysteryWord.guesses--;
					console.log('\nMISSED!!!\n');

					if (mysteryWord.guesses === 0 ) return guessTheWord();
					console.log(mysteryWord.guesses + ' Guess Remaining');
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
				  choices: ['yes', 'no']
				}
			  ]).then(function(res) {
			  // restart logic
			  // console.log(res.replay);
			  if (res.replay === 'yes') {
				mysteryWord = new word.CurrentWord();
				mysteryWord.DisplayChar();

				guessTheWord();
			  }
			  else {
				  console.log('Ending Game');
			  }
			});
		};

	};
	guessTheWord();

})();
