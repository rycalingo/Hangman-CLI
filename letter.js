// letter.js

const Char = function(char) {
  this.letter = char;
  this.isGuessed = false;
};

Char.prototype.print = function() {
  return this.isGuessed ? this.letter : '_ ';
};

module.exports = {Char: Char};