// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

function exist(board, word) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (searchRecurse(board, i, j, word, 0)) {
        return true;
      }
    }
  }
  return false;
}

function searchRecurse(board, row, col, word, index) {
  if (row < 0 || row > board.length - 1 || col < 0 || col > board[0].length - 1 || !board[row][col] || board[row][col] !== word[index]) {
    return false;
  }

  if (index === word.length - 1) {
    return true;
  }

  const letterCopy = board[row][col];
  board[row][col] = null;

  if (searchRecurse(board, row - 1, col, word, index + 1)) {
    return true;
  };

  if (searchRecurse(board, row + 1, col, word, index + 1)) {
    return true;
  };

  if (searchRecurse(board, row, col - 1, word, index + 1)) {
    return true;
  };

  if (searchRecurse(board, row, col + 1, word, index + 1)) {
    return true;
  };

  board[row][col] = letterCopy;
  return false;
}

/* TEST CASES */

const devBoard = [['A', 'B'],
                  ['C', 'D']];

const devTest = exist(devBoard, 'BD'); // --> true;

const testBoard0 = [['A', 'B', 'C', 'E'],
                   ['S', 'F', 'C', 'S'],                  
                   ['A', 'D', 'E', 'E']];

const test0 = exist(testBoard0, 'ABCCED'); // --> true

const testBoard1 = [['A', 'B', 'C', 'E'],
                   ['S', 'F', 'C', 'S'],                  
                   ['A', 'D', 'E', 'E']];

const test1 = exist(testBoard1, 'SEE'); // --> true

const testBoard2 = [['A', 'B', 'C', 'E'],
                   ['S', 'F', 'C', 'S'],                  
                   ['A', 'D', 'E', 'E']];

const test2 = exist(testBoard2, 'ABCB'); // --> false

console.log(devTest); // true
console.log(test0); // true
console.log(test1); // true
console.log(test2); // false
