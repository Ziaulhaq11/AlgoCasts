console.log(reverseInt(-520))
//His solution
function reverseInt(n) {
    a = n.toString().split('').reverse().join('');
    return Math.sign(n) * parseInt(a)
} 


//MY SOLUTION

// function reverseInt(n) {
//     a = n.toString().split('').reverse().join('');
//     console.log(a)
//     if (a.search('-') !== -1) { or if (n < 0)
//         return (-1 * parseInt(a))
//     }else {
//         return parseInt(a)  
//     }
// }

// function reverseInt(n) {
//     res = '';
//     a = n.toString().split('');
//     for (let i = 0; i < a.length; i++) {
//         res = a[i] + res;
//     }
//     console.log(res)
//     if (res.search('-') !== -1) {
//         return (-1 * parseInt(res))
//     }else {
//         return parseInt(res)  
//     }
// }
