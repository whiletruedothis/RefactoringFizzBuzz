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

  for(i = 0; i < 100; i++) 
  {
  }
  
  fizzBuzzOf(3)

  module.exports = fizzBuzzOf;