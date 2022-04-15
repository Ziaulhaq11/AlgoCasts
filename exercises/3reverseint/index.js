// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
 console.log(reverseInt(-90))  
//   reverseInt(-90) === -9

function reverseInt(n) {
    a = n.toString().split('').reverse().join('');
    console.log(a)
    if (n < 0) {
        return (-1 * parseInt(a))
    }else {
        return parseInt(a)  
    }
}


module.exports = reverseInt;
