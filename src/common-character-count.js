const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arr1 = s1.split('').sort();
    let arr2 = s2.split('').sort();
    let count = 0;

    arr1.filter(value => {
      if (arr2.includes(value)) {
        count += 1;
        arr2.splice(arr2.indexOf(value), 1);
        return true;
      }
        return false;
      });
      return count;
}

module.exports = {
  getCommonCharacterCount
};
