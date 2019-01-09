/**
* @name min
* @description Write a function that takes two arguments and returns their Minimum
*/
const min = (numberOne, numberTwo) => {
  const { isNaN } = Number;

  if (isNaN(numberOne) || isNaN(numberTwo || numberOne === numberTwo)) {
    return `ERROR. Invalid operation: both numbers are the same or they're not numbers at all.
    Arguments:
    * numberOne: ${numberOne}
    * numberTwo: ${numberTwo}
    `;
  }
  return numberOne < numberTwo ? numberOne : numberTwo;
};

export default min;
