const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
let coundValue = 0;
function countCats(matrix) {
  throw new NotImplementedError('Not implemented');
  for(i = 0; i < matrix.length; i++){
     for(j = 0; j < matrix[i].length; j++){
      let valueofarray = `${matrix[i][j]}`;
      let newvaluearray = valueofarray.replaceAll(' ', '');
      if (newvaluearray.includes('^^')){
        coundValue++
      }
     }
     return coundValue
  }
 

}

module.exports = {
  countCats
};
