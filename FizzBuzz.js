function fizzbuzz (i) {
  switch(true) {
    case ( i % 3 === 0 && i % 5 === 0 ):
      return 'FizzBuzz';
    case i % 3 === 0:
      return 'Fizz';
    case i % 5 === 0:
      return 'Buzz';
    default:
      return i;
  }
}

  for(i = 0; i < 100; i++) 
  {
  }
  
  fizzbuzz(3)

  module.exports = fizzbuzz;