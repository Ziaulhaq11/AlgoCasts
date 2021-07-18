// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
let str = 'apple 1231111'
let char = {}

function maxChar(str) {
    let max = 1;
    let maxnumber = 1;
    for(let i of str) {
        char[i] = char[i] + 1 || 1;
        if (maxnumber < char[i]) {
            maxnumber = char[i]
            max = Object.keys(char).find(key => char[key] == char[i])
        }
    }
    return max;
}
console.log(maxChar(str))

//console.log(char)

module.exports = maxChar;
