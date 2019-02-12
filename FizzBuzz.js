function isMultipleOf3(x) {
  return x % 3 === 0;
}

function isMultipleOf5(x) {
  return x % 5 === 0;
}

function isMultipleOf3And5(x) {
  return ( x % 5 === 0 && x % 3 === 0 );
}

function fizzBuzzOf (i) {
  switch(true) {
    case isMultipleOf3And5(i):
      return 'FizzBuzz';
    case isMultipleOf3(i):
      return 'Fizz';
    case isMultipleOf5(i):
      return 'Buzz';
    default:
      return i;
  }
}

function fizzBuzzSequenceTo(limit) {
  for(i = 0; i < limit; i++) {
    console.log(fizzBuzzOf(i));
  }
}

fizzBuzzSequenceTo(100);

module.exports = fizzBuzzOf;