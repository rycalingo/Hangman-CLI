// word.js


const wordList = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky', 'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi', 'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico', 'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania', 'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont', 'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
];

const CurrentWord = function () {
    // pick a random word from wordList
    let rNum = Math.floor(Math.random() * wordList.length);
    let rWord = wordList[rNum].toUpperCase();

    this.letters = [...rWord];
    this.guessLimit = 10;
    this.guessWrong = 0;

};

CurrentWord.prototype.DisplayChar = function(char) {
    let dashes = '\n\n';
    this.letters.forEach( (char, i, a) => {
        dashes += (char !== ' ' ? '_ ' : '  ');
    });
    return dashes + '\n';
  };

module.exports = {
    CurrentWord: CurrentWord
};