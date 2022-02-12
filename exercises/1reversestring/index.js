// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'elppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
   return str.split('').reduce((rev, char) => {
        return char + rev;
   }, '')
} 

console.log(reverse('apple'))
module.exports = reverse;
//npm run test 
// npm run test reversestring/test.js --watch  --FOR Single file