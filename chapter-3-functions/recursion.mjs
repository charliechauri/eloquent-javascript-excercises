/**
* @name isEven
* @description Define a recursive function isEven corresponding to the follow description:
* Zero is even.
* One is odd.
* For any other number N, its evenness is the same as N - 2.
* The function should accept a single parameter (a positive, whole number) and return a Boolean
*/

const isEven = (number) => {
  if (number === 0) {
    return true;
  }

  if (number === 1) {
    return false;
  }

  return number < 0 ? isEven(number + 2) : isEven(number - 2);
};

export default isEven;
