"use strict";






// add whatever parameters you deem necessary & write doc comment
/** Given two strings return true if the word string can be built using the letters string
 * Only lowercase letters don't have to worry about case or special chars etc
 * input: two strings      word, letters
 * output: Boolean
 * 'aa' 'abc' => false because I need another a from letters
 * 'abc' 'dcba' => true all chars in word exist in letters without using char in letter twice
 * need to have same chars and cannot reuse char in letters
 * put letters in frequency counter {a: 1, b: 1, c: 1}
 * loop through word
 *  if char in word does not exist in letter counter
 *    return false
 * if char in word does exist in letter counter
 *    subtract 1 from value of counter at key
 * if i reach the end of word
 *  return true
 * else return false
 *
 */

//Helper function take a string and return a frequency counter
function countLetters(letters) {
  const lettersCounter = {};

  for (let letter of letters) {

    const count = lettersCounter[letter] || 0;
    lettersCounter[letter] = count + 1;

  }

  return lettersCounter;
}


//Takes a word and letter string and returns true if all word chars are in letter without reusing
function canConstructWord(word, letters) {
  const letterCounter = countLetters(letters);

  for (let char of word) {

    if (letterCounter[char]) {
      letterCounter[char]--;
    } else {
      return false;
    }

  }

  return true;
}



