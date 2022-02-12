// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     if (n == 0) return 1
//     console.log('#')
//     steps(n-1) 
// }

// console.log(steps(5));

// module.exports = steps;

function steps(n, row = 0, stair = '') {
  console.log(row)
  if (n === row) { //Function ends
    return;
  }
  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1) //Next Row
  }

  if (stair.length <= row) {
    stair+= "#"
  } else {
    stair+= " "
  }
  steps(n,row,stair) //Next Column
} 

steps(5)

// function steps(n) {
//   for (let i = 0; i < n; i++) {
//     let stair = "";
//     for (let j = 0; j < n; j++) {
//       if (j <= i) {
//         stair += "#";
//       } else {
//         stair += "*";
//       }
//     }
//     console.log(stair);
//   }
// } 