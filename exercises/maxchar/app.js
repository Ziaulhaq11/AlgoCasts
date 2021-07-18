/**let str = 'abcccccd'
let char = {}

function maxChar(str) {
    for(let i of str) {
        if (!char[i]) {
            char[i] = 1
        }else {
            char[i]++
        }
    }
}
maxChar(str) */

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

/**function maxChar(str) {
    let max = 1;
    let maxnumber = 1;
    for(let i of str) {
        char[i] = char[i] + 1 || 1;
        if (max < char[i]) {
            max= char[i]
            maxnumber = Object.keys(char).find(key => char[key] == char[i])
        }
    }
    console.log(max,maxnumber);
} */