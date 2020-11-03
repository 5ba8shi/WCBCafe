function FizzBuzz(number) {
  if(number % 3 === 0 && number % 5 === 0) {
      return 'FizzBuzz';
  } else if(number % 3 === 0) {
      return 'Fizz';
  } else if(number % 5 === 0) {
      return 'Buzz';
  } else {
      return number;
  }
}

var i = 1;
while(i <= 100) {
  console.log(FizzBuzz(i));
  i += 1;
}