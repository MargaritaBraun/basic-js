const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let oggr = {};
  domains.forEach(email => {
    let tyt = email.match(/(\.?[\w-]+)(\.[\w-]+)+/g);
    tyt.forEach(domen => {
      let subdomens = domen.split('.').reverse();
      let key = '';
      subdomens.forEach(subdomen => {
        key += `.${subdomen}`;
        if (oggr[key]) {
          oggr[key]++;
        } else {
          oggr[key] = 1;
        }
      });
    });
  });
  return oggr;
}

module.exports = {
  getDNSStats
};
