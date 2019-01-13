/**
* @name range
* @description range takes a start and end and returns all the numbers
* from start up to (and including) end.
* @param {number} start
* @param {number} end
* @return {number[]}
*/
export const range = (start = 1, end = 10, step = 1) => {
  if (isNaN(start) || isNaN(end)) {
    throw new Error(`
      One of the arguments is not a number.
        start: ${start}
        end: ${end}`);
  }

  const array = [];
  let iterator = start;

  while (iterator <= end) {
    array.push(iterator);
    iterator += step;
  }

  return array;
};

/**
* @name sum
* @param {number[]} listOfNumbers
* @return number
*/
export const sum = listOfNumbers => listOfNumbers.reduce((prev, current) => prev + current, 0);
