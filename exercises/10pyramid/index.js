// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n, row = 0,level = "") {
//     if (row === n) {
//         return;
//     }
//     if (level.length === 2 * n - 1) {
//         console.log(level)
//         return pyramid(n,row + 1)
//     }
//     const midpoint = Math.floor((2 * n - 1) / 2)
//     let add;
//     if (midpoint - row <= level.length && midpoint + row >= level.length) {
//         add = "#"
//     } else {
//         add = " "
//     }
//     return pyramid(n,row,level+add)
// }

// pyramid(4)

// module.exports = pyramid;

function pyramid(n) {
    const midpoint = Math.floor((2 * n - 1) / 2)
    console.log('Midpoint = ' + midpoint)
    for (let row = 0; row < n; row++) {
        let level = "";
        for (let column = 0; column < 2 * n - 1; column++) {
            console.log(midpoint,row,column)
            if (midpoint - row <= column && midpoint + row >= column) {
                level+= '#'
            } else {
                level += "="
            }
        }
        console.log(level)
    }
} 
pyramid(4);



// const columns = [0, 1, 2, 3, 4]
// const rows = 0

// Math.floor(5 / 2) //2
// Math.floor(5 / 2) + 1 // 3
// Math.floor(5 / 2) - 1 // 1