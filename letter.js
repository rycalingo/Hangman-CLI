// letter.js

const Char = function(char) {
  this.letter = char;
};

Char.prototype.check = function(char) {
  return this.letter === char ? this.letter : '_ ';
};

module.exports = {Char: Char};