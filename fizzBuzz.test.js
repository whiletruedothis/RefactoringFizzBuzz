const fizzBuzz = require('./fizzBuzz');

test('returns Fizz for multiple of 3 ', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
});