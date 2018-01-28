// index.js

const inquirer = require('inquirer');
const word = require('./word.js');


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
    
                mysteryWord.missed++;
                guessTheWord();
            });

        }

    };
    guessTheWord();

})();
