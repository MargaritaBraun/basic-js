const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let arr = [...`${n}`];
  let higest = 0;
  
  for (let i = 0; i < arr.length; i++) {
  let copiedArray = arr.slice();
  copiedArray.splice(i, 1);
  let tyt = parseInt(copiedArray.map(Number).join(''));
  //console.log(tyt);
  if (higest < tyt) {
    higest = tyt;
    }
  }
  return higest;
}

module.exports = {
  deleteDigit
};
