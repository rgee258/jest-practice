function capitalize(str) {

  if (typeof str !== 'string') {
    throw 'Must pass in a string';
  }

  return str.slice(0, 1).toUpperCase().concat(str.slice(1));
}

function reverseString(str) {

  if (typeof str !== 'string') {
    throw 'Must pass in a string';
  }

  return str.split('').reverse().join('');
}

const calculator = {

  add(numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
      throw 'Must pass in two numbers';
    }

    return numOne + numTwo;
  },

  subtract(numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
      throw 'Must pass in two numbers';
    }

    return numOne - numTwo;
  },

  multiply(numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
      throw 'Must pass in two numbers';
    }

    return numOne * numTwo;
  },

  divide(numOne, numTwo) {
    if (typeof numOne !== 'number' || typeof numTwo !== 'number') {
      throw 'Must pass in two numbers';
    }

    if (numTwo === 0) {
      throw 'Cannot divide by 0';
    }

    return numOne / numTwo;
  }
}

export { capitalize, reverseString, calculator };