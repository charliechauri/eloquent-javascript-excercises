/**
* @name countBs
* @param {string} string
* @description Write a function that takes a string as its only argument
* and returns a number that indicates how many uppercase “B” characters there are in the string.
*/
const countBs = (string = 'BB-8') => countChar(string, 'B');

/**
* @name countChar
* @param {string} string
* @param {string} lookupChar
* @description Write a function called countChar that behaves like countBs,
* except it takes a second argument that indicates the character that is to be counted (rather than
* counting only uppercase “B” characters). Rewrite countBs to make use of this new function
*/
function countChar(string, lookupChar) {
  let repetitions = 0;

  for (let index = 0, { length } = string; index < length; index += 1) {
    if (string[index] === lookupChar) {
      repetitions += 1;
    }
  }

  return repetitions;
}

console.log(`Number of 'B's included on 'BB-8': ${countBs()}`);
console.log(`Number of 'B' included on 'Hello': ${countBs('Hello')}`);
console.log(`Number of 'B' included on 'Bebe': ${countBs('Bebe')}`);
