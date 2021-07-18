

function reverse(str) {
    return str.split('').reduce((reversed,character) => {
        return  character + reversed;
    }, '');
}
let result = reverse('apple')

console.log(result)

//WE can use .reverse method which is built in array method not a string; "a.reverse()"

//1st approach
// function reverse(str) {
//     const arr = str.split('')
//     arr.reverse()
//     return arr.join('')
// }

// function reverse(str) {
//     return str.split('').reverse().join('');
// }

// //2nd approach
// function reverse(str) {
//     let reversed = '';
//     for (let character of str) { //for(let i=0; i<str.length; i++)
//         reversed = character + reversed;
//     }
//     return reversed;
// }

//3rd appraoch

// function reverse(str) {
//     return str.split('').reduce((reversed,character) => {
//         return  character + reversed;
//     }, '');
// }