// letter.js

const Char = function(char) {
  this.letter = char;
};

Char.prototype.check = function(char) {
  return this.letter === char ? char : '_ ';
};

module.exports = {Char: Char};