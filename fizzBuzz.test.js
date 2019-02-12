const fizzbuzz = require('./fizzBuzz.js')

test('returns Fizz for multiple of 3 ', () => {
    expect(fizzbuzz(6)).toBe('Fizz');
});

test('returns Buzz for multiple of 5 ', () => {
    expect(fizzbuzz(10)).toBe('Buzz');
});

test('returns FizzBuzz for multiple of 5 and 3 ', () => {
    expect(fizzbuzz(15)).toBe('FizzBuzz');
});

