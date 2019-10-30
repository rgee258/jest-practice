function capitalize(str) {

  if (typeof str !== 'string') {
    throw 'Must pass in a string';
  }

  return str.slice(0, 1).toUpperCase().concat(str.slice(1));
}

export { capitalize };