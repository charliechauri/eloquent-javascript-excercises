/**
* @name fizzBuzz
* @description Write a program that uses console.log to print all the numbers from 1 to 100,
  with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number,
  and for numbers divisible by 5 (and not 3), print "Buzz" instead.
  When you have that working, modify your program to print "FizzBuzz"
  for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
  for numbers divisible by only one of those).
*/
const fizzBuzz = (repetitions = 100) => {
  for (let counter = 1; counter <= repetitions; counter += 1) {
    let output = (counter % 3) === 0 ? 'Fizz' : '';
    output += (counter % 5) === 0 ? 'Buzz' : '';
    output = output || counter;

    console.log(output);
  }
};

export default fizzBuzz;
