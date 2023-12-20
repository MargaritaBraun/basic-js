const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(machine = true) {
    this.reverse = machine;
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }
    message = message.toUpperCase();
    key = key.toUpperCase();
    let doneStr = '';
    for (let i = 0, j = 0; i < message.length; i++) {
      const item = message[i];
      if (this.alphabet.includes(item)) {
        const itemId = this.alphabet.indexOf(item);
        const keyId = this.alphabet.indexOf(key[j % key.length]);
        const encryptId = (itemId + keyId) % this.alphabet.length;
        const codingSymbol = this.alphabet[encryptId];
        doneStr += codingSymbol;
        j++;
      } else {
        doneStr += item;
      }
    }
    return this.reverse  ? doneStr :  doneStr.split('').reverse().join('');
  }

  decrypt(accordStr,  key) {
    if (!accordStr || !key) {
      throw new Error('Incorrect arguments!');
    }
    accordStr = accordStr.toUpperCase();
    key = key.toUpperCase();
    let doneStr  =  '';
    for (let i = 0, j = 0; i < accordStr.length; i++) {
      const item = accordStr[i];
      if (this.alphabet.includes(item)) {
        const itemId = this.alphabet.indexOf(item);
        const keyId = this.alphabet.indexOf(key[j % key.length]);
        let decryptId;
        if (itemId >= keyId) {
          decryptId = (itemId - keyId) % this.alphabet.length;
        } else {
          decryptId = ((itemId - keyId + this.alphabet.length) % this.alphabet.length);
        }
        const codingSymbol = this.alphabet[decryptId];
        doneStr += codingSymbol;
        j++;
      } else {
        doneStr += item;
      }
    }
    return this.reverse ? doneStr : doneStr.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
