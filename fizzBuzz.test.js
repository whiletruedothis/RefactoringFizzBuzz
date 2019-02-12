const fizzbuzz = require('./fizzBuzz.js')

test('returns Fizz for multiple of 3 ', () => {
    expect(fizzbuzz(3)).toBe('Fizz');
});

