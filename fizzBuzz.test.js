const fizzbuzz = require('./fizzBuzz.js')

test('returns Fizz for multiple of 3 ', () => {
    expect(fizzbuzz(6)).toBe('Fizz');
});

test('returns Buzz for multiple of 5 ', () => {
    expect(fizzbuzz(5)).toBe('Buzz');
});

