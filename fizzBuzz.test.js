const getFizzBuzzOf = require('./fizzBuzz.js')

test('returns Fizz for multiple of 3 ', () => {
    expect(getFizzBuzzOf(6)).toBe('Fizz');
    expect(getFizzBuzzOf(3)).toBe('Fizz');
});

test('returns Buzz for multiple of 5 ', () => {
    expect(getFizzBuzzOf(10)).toBe('Buzz');
    expect(getFizzBuzzOf(5)).toBe('Buzz');
});

test('returns FizzBuzz for multiple of 5 and 3 ', () => {
    expect(getFizzBuzzOf(15)).toBe('FizzBuzz');
    expect(getFizzBuzzOf(30)).toBe('FizzBuzz');
});

test('returns number for number that is not multiple of 5 or 3 ', () => {
    expect(getFizzBuzzOf(17)).toBe(17);
    expect(getFizzBuzzOf(14)).toBe(14);
});


