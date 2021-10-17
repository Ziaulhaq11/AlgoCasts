// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"
let str = 'aapppppplepp 1231111'

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
    console.log(charMap)
    for(let char in charMap) {
        if(max < charMap[char]) {
            max = charMap[char]
            maxChar = char;
        }
    }
    console.log(maxChar)
}
maxChar(str)

//console.log(char)

module.exports = maxChar;


// function maxChar(stringA) {
//     let charobj = {}
//     for(let i of stringA) {
//         if(Object.keys(charobj).includes(i)) {
//             charobj[i]++
//         }else {
//             charobj[i] = 0
//         }
//     }
//     let maxChar = '';
//     let max = 0;
//     for (const [key,value] of Object.entries(charobj)) {
//         if(max < value) {
//             max = value
//             maxChar = key
//         }
//     }
//     console.log(maxChar)
// }

// maxChar('aaaaaaaaabccccd')