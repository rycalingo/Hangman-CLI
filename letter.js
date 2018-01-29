// letter.js

const Char = function(char) {
  this.letter = char;
  this.isGuessed = false;
};

Char.prototype.print = function() {
  // if this.isGuessed is 'true' return a letter
  return this.isGuessed ? this.letter + ' ' : '_ ';
};

module.exports = {Char: Char};