let str = 'assfsdddddbccd'

function maxChar(str) {
    let char = {}
    let max = 1
    let maxchar = ''
    for (let i of str) {
        char[i] = char[i] + 1 || 1; 
        if (max < char[i]) {
            max = char[i]
            maxchar = i
        }
    }
    console.log(char)
    console.log(max)
    return maxchar
    
}
console.log(maxChar(str))

/**function maxChar(str) {
    for(let i of str) {
        char[i] = char[i] + 1 || 1;
    }
} */

/** This is not working because max here is storing the string not a number so we cant compare once the condition gets true means if number > 2 then it assigns that value and it never changes bc previously it was a number but after that it became the str.
 * function maxChar(str) {
    let max = 1;
    for(let i of str) {
        char[i] = char[i] + 1 || 1;
        if (max < char[i]) {
            max = Object.keys(char).find(key => char[key] == char[i])
        }
    }
    console.log(max);
}
maxChar(str)
 */

/**let str = 'apple 1231111'
let char = {}

function maxChar(str) {
    let max = 1;
    let maxnumber = 1;
    for(let i of str) {
        char[i] = char[i] + 1 || 1;
        if (maxnumber < char[i]) {
            console.log(char[i]) //2,3,4,5
            maxnumber = char[i]
            max = Object.keys(char).find(key => char[key] == char[i])
        }
    }
    return max;
}
console.log(maxChar(str))*/


// let arr = [1,10,3] //[2,4,6,8,10]
// let result = []

// for(i=arr[0]; i<=arr[1]; i=i+arr[2]) {
//     result.push(i)
// }
// console.log(result);
// console.log('he')