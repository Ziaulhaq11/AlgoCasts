// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB);
}

function cleanString(string) {
  return string.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("");
}

console.log(anagrams("Hi there", "Bye there"));

module.exports = anagrams;

/**function anagrams(stringA, stringB) {
  const aCharMap = buildCharMap(stringA);
  const bCharMap = buildCharMap(stringB);

  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }

  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
} 

function buildCharMap(str) {
  const charMap = {};

  for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  return charMap;
}
*/

/**function anagrams(stringA, stringB) {
  let string1 = stringA.replace(/[^\w]/g, "").toLowerCase();
  let string2 = stringB.replace(/[^\w]/g, "").toLowerCase();
  let obj1 = {};
  let obj2 = {};
  for (let i of string1) {
    if (!obj1[i]) {
      obj1[i] = 1;
    } else {
      obj1[i]++;
    }
  }
  for (let i of string2) {
    if (!obj2[i]) {
      obj2[i] = 1;
    } else {
      obj2[i]++;
    }
  }
  let anagram;

  for (let i of Object.keys(obj1)) {
    for (let f of Object.keys(obj2)) {
      if (Object.keys(obj1).includes(f)) {
        if (i == f) {
          if (obj1[i] !== obj2[f]) {
            anagram = false;
            return anagram;
          } else {
            anagram = true;
          }
        }
      } else {
        anagram = false;
        return anagram;
      }
    }
  }
  return anagram;
}
 */
