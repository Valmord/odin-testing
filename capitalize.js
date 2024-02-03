export default function capitalize(input){
  if (input === null || input === undefined || input === '') return '';
  let word = String(input);
  word = word[0].toUpperCase() + word.slice(1)
  return word;
}