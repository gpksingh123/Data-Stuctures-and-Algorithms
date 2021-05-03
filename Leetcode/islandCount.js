function getNumberOfIslands (binaryMatrix) {
  // your code goes here
  islandCount = 0
  rowLength = binaryMatrix.length - 1
  colLength = binaryMatrix[0].length - 1

  for (let row = 0; row <= rowLength; row++) {
    for (let col = 0; col <= colLength; col++) {
      console.log('row:', row)
      if (binaryMatrix[row][col] === 1) {
        flip(row, col)
        islandCount++
      }
    }
  }

  function flip (r, c) {
    binaryMatrix[r][c] = 0

    // check left
    if ((c > 0) && binaryMatrix[r] !== undefined && (binaryMatrix[r][c - 1] === 1)) {
      flip(r, c - 1)
    }
    // check right
    if ((binaryMatrix[r][c + 1] === 1)) {
      flip(r, c + 1)
    }
    // check down
    if ((binaryMatrix[r + 1]) && (binaryMatrix[r + 1][c] === 1)) {
      flip(r + 1, c)
    }
    // check up
    if ((r < 0) && binaryMatrix[r - 1] && (binaryMatrix[r - 1][c] === 1)) {
      flip(r, c - 1)
    }
  }
  return islandCount
}

const binaryMatrix = [[0, 1, 0, 1, 0],
  [0, 0, 1, 1, 1],
  [1, 0, 0, 1, 0],
  [0, 1, 1, 0, 0],
  [1, 0, 1, 0, 1]]
const t3 = [[1, 0, 1, 0]]
console.log(getNumberOfIslands(binaryMatrix))
