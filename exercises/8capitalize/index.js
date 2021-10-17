// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] == " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

console.log(capitalize("a lazy fox"));

module.exports = capitalize;

/**function capitalize(str) {
  let result;
  for (let i = 0; i < str.length; i++) {
    if (i == 0) {
      result = str[i].toUpperCase();
    } else if (str[i - 1] == " ") {
      result = result + str[i].toUpperCase();
    } else {
      result = result + str[i];
    }
  }
  return result;
} */

/**function capitalize(str) {
  let wordsArr = [];
  for (let word of str.split(" ")) {
    wordsArr.push(word[0].toUpperCase() + word.slice(1));
  }
  return wordsArr.join(" ");
} */

/**function capitalize(str) {
  let strArr = [];
  let finalArr = [];
  strArr = str.split(" ");
  for (i of strArr) {
    finalArr.push(i[0].toUpperCase() + i.slice(1));
  }
  let finalresult = finalArr.join(" ");
  return finalresult;
} */
