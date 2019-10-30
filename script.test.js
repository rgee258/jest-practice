import { capitalize } from './script.js';

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
  expect(() => { capitalize(5) }).toThrow();
});

test('throws error if undefined', () => {
  expect(() => { capitalize() }).toThrow();
});

test('throws error if null', () => {
  expect(() => { capitalize(null) }).toThrow();
});