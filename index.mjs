/**
* @name index
* @description This script runs all exercises
* @todo Add command line parameters 'chapter' and 'exercise' to select a specific exercise to run.
*/

import displayChessBoard from './exercises/chapter-2-program-structure/chess-board';
import displayTriangle from './exercises/chapter-2-program-structure/triangle';
import fizzBuzz from './exercises/chapter-2-program-structure/fizz-buzz';
import min from './exercises/chapter-3-functions/minimum';
import isEven from './exercises/chapter-3-functions/recursion';
import { countBs } from './exercises/chapter-3-functions/bean-counting';

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
