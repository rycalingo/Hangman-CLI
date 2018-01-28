// letter.js

const Char = function(char) {
  this.letter = char;
  this.isGuessed = false;
};

Char.prototype.check = function(v) {
  this.isGuessed = v | false;
  return this.isGuessed ? this.letter : '_ ';
};

module.exports = {Char: Char};