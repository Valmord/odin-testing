
export default function reverseString(string){
  if (typeof string !== 'string') return null;
  let newString = string.split('').reverse().join('');
  return newString;
}