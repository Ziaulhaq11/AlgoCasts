// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    arr = str.split('');
    return arr.every((x,i,a) => x == a[a.length - i - 1] )
}

module.exports = palindrome;

/**function palindrome(str) {
    result = '';
    for (let i = 0; i < str.length; i++) {
        result = str[i] + result;        
    }
    if (result == str) {
        return true;
    }else {
        return false;
    }
} */

//2nd approach
/**function palindrome(str) {
    result = str.split('').reverse().join('')
    return str == result;
} */