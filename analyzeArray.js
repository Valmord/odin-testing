
function getMax(array){
  return Math.max.apply(null, array);
}

function getMin(array){
  return Math.min.apply(null, array);
}

function getLength(array){
  return array.length;
}

function getAvg(array){
  const sumArray = array.reduce( (acc, val) => acc + val,0);
  return sumArray / array.length;
}

export default function analyzeArray(array){
  if (!Array.isArray(array)) throw new Error('invalid input');
  return {
    average: getAvg(array),
    min: getMin(array),
    max: getMax(array),
    length: getLength(array),
  }
}