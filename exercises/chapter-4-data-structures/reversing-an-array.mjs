/**
* @name reversingAnArray
* @param {Array} array
* @description Take an array as argument and produces
* a new array that has the same elements in the inverse order
* @return {Array}
*/
export const reverseArray = (array = []) => {
  const newArray = [];

  for (let index = array.length; index > 0; index -= 1) {
    newArray.push(array[index - 1]);
  }

  return newArray;
};

/**
* @name reverseArrayInPlace
* @param {Array} array
* @description Modifiy the array given as argument by reversing its elements. Produce "side effects"
*/
export const reverseArrayInPlace = (array) => {
  const { length } = array;
  const hasMedian = (length % 2) !== 0;
  const repetitions = hasMedian ? (length / 2) - 1 : length / 2;
  let index = 0;

  while (index < repetitions) {
    const rightIndex = length - index - 1;
    const left = array[index];
    const right = array[rightIndex];

    array[index] = right; // eslint-disable-line
    array[rightIndex] = left; // eslint-disable-line
    index += 1;
  }
};
