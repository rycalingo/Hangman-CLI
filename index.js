// index.js

const inquirer = require('inquirer');
const word = require('./word.js');
const letter = require('./letter.js');

const hangMan = (function() {

    // create new word to guess
    let mysteryWord = new word.CurrentWord();
    
    const guessTheWord = function() {
        
        console.log(mysteryWord.DisplayChar( ));

        if (mysteryWord.guessWrong < mysteryWord.guessLimit) {

            inquirer.prompt([
              {
                name: "char",
                message: "Guess a letter? "
              }
            ]).then(function(guess) {
    
                // if ( )
                mysteryWord.guessWrong++;
                guessTheWord();
            });

        }

    };
    guessTheWord();

})();
