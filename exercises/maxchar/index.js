// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
let str = 'appppppple 1231111'

function maxChar(str) {
    let charMap = {}
    let max = 0;
    let maxChar = ''
    for(let char of str) {
        if(!charMap[char]) {
            charMap[char] = 1;
        }else {
            charMap[char]++
        }
    }
    for(let char in charMap) {
        if(max < charMap[char]) {
            max = charMap[char]
            maxChar = char;
        }
    }
    return maxChar;
}
maxChar(str)

//console.log(char)

module.exports = maxChar;
