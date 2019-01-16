/**
* @name reversingAnArray
* @param {Array} array
* @description Take an array as argument and produces
* a new array that has the same elements in the inverse order
* @return {Array}
*/
export const reverseArray = (array = []) => {
  const newArray = [];

  for (let index = array.length; index >= 0; index -= 1) {
    newArray.push(array[index - 1]);
  }

  newArray.pop(); // @todo Try another way to do it in order to delete this line.

  return newArray;
};

/**
* @name reverseArrayInPlace
* @param {Array} array
* @description Modifiy the array given as argument by reversing its elements. Produce "side effects"
*/
export const reverseArrayInPlace = (array) => {
  const { length } = array;
  const repetitions = length / 2;
  let index = 0;

  while (index < repetitions) {
    const prevItem = array[length - index];
    const nextItem = array[index];
    array[index] = prevItem; // eslint-disable-line
    array[length - index] = nextItem; // eslint-disable-line
    index += 1;
  }
  array.shift(); // @todo Try another way to do it in order to delete this line.
};
