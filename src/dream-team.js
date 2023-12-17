const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let shortDreamTeamArray = [];
  //let rezult = false;
  if (!Array.isArray(members)) {
    return false;
  }
  members.forEach(fullName => {
    if (typeof fullName !== 'string') {
      return false;
    }
    if (typeof fullName === 'string') {
      if (typeof fullName !== 'string') {
        return false;
      }
      fullName = fullName.trim();
      fullName = fullName.toUpperCase();
      shortDreamTeamArray.push(fullName[0]);
    }
  });
  return  shortDreamTeamArray.sort().join('');
}

module.exports = {
  createDreamTeam
};
