// Find the shortest path through a maze consisting of 0s (walls) and 1s (paths)

function shortestPathInMaze(board, start, end) {
  const initial = {
    coord: start,
    dist: 0
  }
  const distances = [];
  const queue = [initial];

  while (queue.length > 0) {
    let current = queue.shift();
    const currentI = current.coord[0];
    const currentJ = current.coord[1];

    board[currentI][currentJ] = 2;

    if (currentI === end[0] && currentJ === end[1]) {
      return current.dist;
    }

    if (currentI > 0 && board[currentI - 1][currentJ] === 1) {
      const newMove = { coord: [currentI - 1, currentJ], dist: current.dist + 1 };
      queue.push(newMove);
    }

    if (currentI < board.length - 1 && board[currentI + 1][currentJ] === 1) {
      const newMove = { coord: [currentI + 1, currentJ], dist: current.dist + 1 };
      queue.push(newMove);
    }

    if (currentJ > 0 && board[currentI][currentJ - 1] === 1) {
      const newMove = { coord: [currentI, currentJ -1], dist: current.dist + 1 };
      queue.push(newMove);
    }

    if (currentI < board[0].length - 1 && board[currentI][currentJ + 1] === 1) {
      const newMove = { coord: [currentI, currentJ + 1], dist: current.dist + 1 };
      queue.push(newMove);
    }
  }

  return "No path found";
}

/* TEST CASES */ 

// TODO: implement maze and test case(s)