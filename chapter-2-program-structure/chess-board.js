/**
* @name createChessBoard
* @description Write a program that creates a string that represents an 8×8 grid,
  using newline characters to separate lines. At each position of the grid
  there is either a space or a "#" character. The characters should form a chessboard.

  Passing this string to console.log should show something like this:

   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #
   # # # #
  # # # #

  When you have a program that generates this pattern, define a binding size = 8
  and change the program so that it works for any size,
  outputting a grid of the given width and height.
*/
const createChessBoard = (size = 8, symbol = '#') => {
  let rowCounter = 1;
  let board = '';

  while (rowCounter <= size) {
    let columnCounter = 1;

    while (columnCounter <= size) {
      board += (columnCounter % 2) === 0 ? ' ' : symbol;
      columnCounter += 1;
    }

    board += '\n';
    rowCounter += 1;
  }

  console.log(board);
};

createChessBoard(7, '$');
