// word.js

const letter = require('./letter.js');

const wordList = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const CurrentWord = function () {
    // pick a random word from wordList
    let rNum = Math.floor(Math.random() * wordList.length);
    let rWord = wordList[rNum].toUpperCase();

    this.charList = [...rWord];
    this.limit = 10;
    this.missed = 0;
    this.guessChar = [];
    
    this.charList.forEach( (char)=> {
        var Char = new letter.Char(char);
        if ( char !== ' ' ) {
            this.guessChar.push( Char );
        }
        else {
            this.guessChar.push(' ');
        }
    });
};

CurrentWord.prototype.DisplayChar = function() {
    let result = '\n\n';
    this.guessChar.forEach( (char, i) => {
        result += char !== ' ' ? char.print() : ' ';
    });
    console.log(result + '\n');
};
CurrentWord.prototype.Update = function(char, i) {
    this.guessChar[i] = char.print();
}
module.exports = {
    CurrentWord: CurrentWord
};