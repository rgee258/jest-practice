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

function caesarCipher(str, key) {

  if (typeof str !== 'string' || typeof key !== 'number') {
      throw 'Must pass in a string and key';
  }

  function convertToChar(str) {
    let allLower = str.toLowerCase();
    let allCodes = [];
    for (let i = 0; i < allLower.length; i++) {
      allCodes.push(allLower.charCodeAt(i));
    }

    return allCodes;
  }

  function encrypt(code, key) {
    if (code > 96 && code < 123) {
      return (((code - 97) + key) % 26) + 97;
    } else {
      return code;
    }
  }

  function encryptAll(codeArr, key) {
    let encrypted = [];
    for (let i = 0; i < codeArr.length; i++) {
      encrypted.push(encrypt(codeArr[i], key));
    }

    return encrypted;
  }

  function restoreCaps(original, allLowerCodes) {
    let originalCodes = [];
    let encrypted = [];

    for (let i = 0; i < original.length; i++) {
      originalCodes.push(original.charCodeAt(i));
    }

    for (let i = 0; i < originalCodes.length; i++) {
      if (originalCodes[i] > 64 && originalCodes[i] < 91) {
        encrypted.push(String.fromCharCode(allLowerCodes[i] - 32));
      } else {
        encrypted.push(String.fromCharCode(allLowerCodes[i]));
      }
    }

    return encrypted.join('');
  }

  return restoreCaps(str, encryptAll(convertToChar(str), key));
}

function analyze(nums) {

  if (!Array.isArray(nums)) {
    throw 'Must pass in an array';
  }

  if (nums.length === 0) {
    throw 'Array must not be empty';
  }

  nums.forEach(function(elem) {
    if (typeof elem !== "number") {
      throw 'Must pass only numbers';
    }
  })

  let sortedNums = nums;
  sortedNums = sortedNums.sort((a, b) => a - b);
  const sum = (accumulator, curr) => accumulator + curr;

  return {
    average: nums.reduce(sum)/nums.length,
    min: sortedNums[0],
    max: sortedNums[sortedNums.length - 1],
    length: nums.length
  }
}

export { capitalize, reverseString, calculator, caesarCipher, analyze };