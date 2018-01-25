// Given a 2D board and a word, find if the word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cell, where "adjacent" cells are those horizontally or vertically neighboring. The same letter cell may not be used more than once.

function exist(board, word) {
  let found = false;

  return found;
}

function searchRecurse() {

}

/* TEST CASES */

const testBoard = [['A', 'B', 'C', 'E'],
                   ['S', 'F', 'C', 'S'],                  
                   ['A', 'D', 'E', 'E']];

const test0 = exist(testBoard, 'ABCCED'); // --> true
const test1 = exist(testBoard, 'SEE'); // --> true
const test2 = exist(testBoard, 'ABCB'); // --> false

console.log(test0); //
// console.log(test1); //
// console.log(test2); //
