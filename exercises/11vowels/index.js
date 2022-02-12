// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi); //g means dont stop if found one continue till end :: i handle casing
    return matches ? matches.length : 0
}

console.log(vowels('Why do you ask?'))

module.exports = vowels;

/**function vowels(str) {
    let vowelNo = 0
    let checker = ['a','e','i','o','u']
    for (let i of str.toLowerCase()) {
        if (checker.includes(i)) {
            vowelNo++
        }
    }
    return vowelNo
} */

/**function vowels(str) {
    let vowelNo = 0
    for (let i of str.toLowerCase()) {
        if (i === 'i' || i === 'a' || i === 'e' || i === 'o' || i === 'u') {
            vowelNo++
        }
    }
    return vowelNo
} */