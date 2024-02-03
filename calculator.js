export const calculator = {};

calculator.add = (n1, n2) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') throw new Error('Invalid input');
  return n1+n2;
}

calculator.subtract = (n1, n2) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') throw new Error('Invalid input');
  return n1-n2;
}

calculator.multiply = (n1, n2) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') throw new Error('Invalid input');
  return n1*n2;
}

calculator.divide = (n1, n2) => {
  if (typeof n1 !== 'number' || typeof n2 !== 'number') throw new Error('Invalid input');
  if (n2 === 0) throw new Error('Cannot divide by zero');
  return n1/n2;
}

// module.exports = calculator;