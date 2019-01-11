/**
* @name index
* @description This script runs all exercises
*/
import displayChessBoard from './exercises/chapter-2-program-structure/chess-board';
import displayTriangle from './exercises/chapter-2-program-structure/triangle';
import fizzBuzz from './exercises/chapter-2-program-structure/fizz-buzz';
import min from './exercises/chapter-3-functions/minimum';
import isEven from './exercises/chapter-3-functions/recursion';
import { countBs } from './exercises/chapter-3-functions/bean-counting';

const getArgValue = argIndex => process.argv[argIndex].split('=')[1];
const chapter = getArgValue(2);
const exercise = getArgValue(3);
const exercises = {
  chapters: {
    2: {
      1: () => displayTriangle(),
      2: () => displayChessBoard(7, '$'),
      3: () => fizzBuzz(),
    },
    3: {
      1: () => {
        console.log(`Minimum number of 10 and 2 is: ${min(10, 2)}`);
      },
      2: () => {
        console.log(`Is ${0} even? ${isEven(0)}`);
        console.log(`Is ${1} even? ${isEven(1)}`);
        console.log(`Is ${5} even? ${isEven(5)}`);
        console.log(`Is ${-10} even? ${isEven(-10)}`);
      },
      3: () => {
        console.log(`Number of 'B' included on 'BB-8': ${countBs()}`);
        console.log(`Number of 'B' included on 'Hello': ${countBs('Hello')}`);
        console.log(`Number of 'B' included on 'Bebe': ${countBs('Bebe')}`);
      },
    },
  },
};

const exerciseToExec = exercises.chapters[`${chapter}`][`${exercise}`];

if (typeof exerciseToExec === 'function') {
  console.log(`Executing: chapter ${chapter}, exercise ${exercise}`);
  exerciseToExec();
} else {
  console.log(`ERROR
    The combination of chapter ${chapter}, exercise ${exercise} is not valid.
    Please enter a valids chapter and exercise numbers (see details on readme.md)
    in the following format 'yarn run start chapter=2 exercise=1'

  `);
}
