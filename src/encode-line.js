const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) {
    return '';
  }

  let resurs = '';
  let count = 1;

  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      count++;
    } else {
      if (count > 1) {
        resurs += count + str[i - 1];
      } else {
        resurs += str[i - 1];
      }
      count = 1;
    }
  }

  if (count > 1) {
    resurs += count + str[str.length - 1];
  } else {
    resurs += str[str.length - 1];
  }

  console.log(resurs);
  return resurs;
}

module.exports = {
  encodeLine
};
