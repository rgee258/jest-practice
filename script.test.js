import { capitalize, reverseString, calculator } from './script.js';

// Capitalize Tests

test('capitalizes a string properly', () => {
  expect(capitalize('success')).toBe('Success');
});

test('capitalizes a one length string properly', () => {
  expect(capitalize('s')).toBe('S');
});

test('returns empty string with an empty string', () => {
  expect(capitalize('')).toBe('');
});

test('returns the same string when not starting with a letter', () => {
  expect(capitalize(';f3')).toBe(';f3');
});

test('returns the same string if already capitalized', () => {
  expect(capitalize('Success')).toBe('Success');
});

// We wrap this in a function because of operator precedence
// See: https://stackoverflow.com/questions/46707357/why-jests-tothrow-wont-work-when-create-an-instance-of-a-es6-class-directly-in
test('throws error if not a string', () => {
  expect(() => { capitalize(5) }).toThrow('Must pass in a string');
});

test('throws error if undefined', () => {
  expect(() => { capitalize() }).toThrow('Must pass in a string');
});

test('throws error if null', () => {
  expect(() => { capitalize(null) }).toThrow('Must pass in a string');
});

// Reverse String Tests

test('reverses a string properly', () => {
  expect(reverseString('success')).toBe('sseccus');
});

test('reverses a string of length 1 properly', () => {
  expect(reverseString('s')).toBe('s');
});

test('returns an empty string with an empty string', () => {
  expect(reverseString('')).toBe('');
});

test('throws error if not a string', () => {
  expect(() => { reverseString(7) }).toThrow('Must pass in a string');
});

test('throws error if undefined', () => {
  expect(() => { reverseString() }).toThrow('Must pass in a string');
});

test('throws error if null', () => {
  expect(() => { reverseString(null) }).toThrow('Must pass in a string');
});

// Calculator Tests

// Add Tests

test('adds two values properly', () => {
  expect(calculator.add(2, 2)).toBe(4);
});

test('adds a negative value properly', () => {
  expect(calculator.add(-2, 5)).toBe(3);
});

test('throws error if both inputs are non-numbers', () => {
  expect(() => { calculator.add("5", 5) }).toThrow('Must pass in two numbers');
});

test('throws error if only one input', () => {
  expect(() => { calculator.add(5) }).toThrow('Must pass in two numbers');
});

test('throws error if undefined', () => {
  expect(() => { calculator.add() }).toThrow('Must pass in two numbers');
});

test('throws error if null', () => {
  expect(() => { calculator.add(null, 5) }).toThrow('Must pass in two numbers');
});

// Subtract Tests

test('subtracts two values properly', () => {
  expect(calculator.subtract(2, 2)).toBe(0);
});

test('subtracts a negative value properly', () => {
  expect(calculator.subtract(-2, 5)).toBe(-7);
});

test('throws error if both inputs are non-numbers', () => {
  expect(() => { calculator.subtract("5", 5) }).toThrow('Must pass in two numbers');
});

test('throws error if only one input', () => {
  expect(() => { calculator.subtract(5) }).toThrow('Must pass in two numbers');
});

test('throws error if undefined', () => {
  expect(() => { calculator.subtract() }).toThrow('Must pass in two numbers');
});

test('throws error if null', () => {
  expect(() => { calculator.subtract(null, 5) }).toThrow('Must pass in two numbers');
});

// Multiply Tests

test('multiplies two values properly', () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test('multiplies a negative value properly', () => {
  expect(calculator.multiply(-2, 5)).toBe(-10);
});

test('multiplies two negative values properly', () => {
  expect(calculator.multiply(-2, -2)).toBe(4);
});

test('multiplies with argument of 0 properly', () => {
  expect(calculator.multiply(0, 2)).toBe(0);
});

test('throws error if both inputs are non-numbers', () => {
  expect(() => { calculator.multiply("5", 5) }).toThrow('Must pass in two numbers');
});

test('throws error if only one input', () => {
  expect(() => { calculator.multiply(5) }).toThrow('Must pass in two numbers');
});

test('throws error if undefined', () => {
  expect(() => { calculator.multiply() }).toThrow('Must pass in two numbers');
});

test('throws error if null', () => {
  expect(() => { calculator.multiply(null, 5) }).toThrow('Must pass in two numbers');
});

// Division Tests

test('divides two values properly', () => {
  expect(calculator.divide(2, 2)).toBe(1);
});

test('divides a negative value properly', () => {
  expect(calculator.divide(-2, 4)).toBe(-0.5);
});

test('divides two negative values properly', () => {
  expect(calculator.divide(-2, -2)).toBe(1);
});

test('throws error with 0 as divisor', () => {
  expect(() => { calculator.divide(2, 0) }).toThrow('Cannot divide by 0');
});

test('throws error if both inputs are non-numbers', () => {
  expect(() => { calculator.divide("5", 5) }).toThrow('Must pass in two numbers');
});

test('throws error if only one input', () => {
  expect(() => { calculator.divide(5) }).toThrow('Must pass in two numbers');
});

test('throws error if undefined', () => {
  expect(() => { calculator.divide() }).toThrow('Must pass in two numbers');
});

test('throws error if null', () => {
  expect(() => { calculator.divide(null, 5) }).toThrow('Must pass in two numbers');
});
