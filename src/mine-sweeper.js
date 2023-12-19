const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const fara = [];

  for (let i = 0; i < rows; i++) {
    fara.push([]);
    for (let j = 0; j < columns; j++) {
      let cellValue = 0;

      if (matrix[i][j]) {
        fara[i].push(1);
        continue;
      }

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          const newRow = i + x;
          const newColumn = j + y;

          if (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns && matrix[newRow][newColumn]) {
            cellValue++;
          }
        }
      }
      fara[i].push(cellValue);
    }
  }

  const mineIndexes = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (fara[i][j] === 1) {
        mineIndexes.push([i, j]);
      }
    }
  }

  for (const [row, col] of mineIndexes) {
    for (let x = -1; x <= 1; x++) {
      for (let y = -1; y <= 1; y++) {
        const newRow = row + x;
        const newColumn = col + y;

        if (newRow >= 0 && newRow < rows && newColumn >= 0 && newColumn < columns && fara[newRow][newColumn] !== 1) {
          fara[newRow][newColumn] = 2;
        }
      }
    }
  }

  return fara;

}

module.exports = {
  minesweeper
};
