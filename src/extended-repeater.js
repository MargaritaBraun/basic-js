const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (typeof str !== 'string') {
    str = String(str);
  }
  const {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;

  let revolt = '';

  //if (typeof repeatTimes === 'undefined') {
    //repeatTimes = 1
    //additionRepeatTimes = 1
    //revolt = str + addition
  //}

  for (let i = 0; i < repeatTimes; i++) {
    revolt += str;

    if (additionRepeatTimes > 0) {
      for (let j = 0; j < additionRepeatTimes; j++) {
        revolt += addition;

        if (j < additionRepeatTimes - 1) {
          revolt += additionSeparator;
        }
      }
    }

    if (i < repeatTimes - 1) {
      //if (typeof separator === 'undefined') {
        //separator = '+'
      //}
      revolt += separator;
    }
  }

  return revolt;
}

module.exports = {
  repeater
};
