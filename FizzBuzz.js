function isFizz(number) {
  return number % 3 === 0;
}

function isBuzz(number) {
  return number % 5 === 0;
}

function isFizzBuzz(number) {
  return (isFizz(number) && isBuzz(number));
}


function getFizzBuzzOf (number) {
  switch(true) {
    case (isFizzBuzz(number)):
      return 'FizzBuzz';
    case isFizz(number):
      return 'Fizz';
    case isBuzz(number):
      return 'Buzz';
    default:
      return number;
  }
}

function fizzBuzzSequenceTo(limit) {
  for(i = 0; i < limit; i++) {
    console.log(getFizzBuzzOf(i));
  }
}

fizzBuzzSequenceTo(100);

module.exports = getFizzBuzzOf;