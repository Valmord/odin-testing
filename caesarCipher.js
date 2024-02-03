const firstCharCode = 'A'.codePointAt(); // 65
const lastCharCode = 'Z'.codePointAt(); // 90

function shift(letter, shift){
  let charCode = letter.toUpperCase().codePointAt(0);
  if (charCode > lastCharCode || charCode < firstCharCode) return letter;

  let codeShifted = (charCode+shift-firstCharCode) % 26 + firstCharCode;
  let newChar = String.fromCodePoint(codeShifted);
  return newChar;
}


export default function caesarCipher(string, key){
  if (typeof string !== 'string') throw new Error('invalid input');
  if (typeof key !== 'number') throw new Error('invalid shift amount');

  return string.split('').map( (letter) => shift(letter,key)).join('');
}