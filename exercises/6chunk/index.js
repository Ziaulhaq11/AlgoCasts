// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;
//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size))
//     index += size;
//   }
//   console.log(index)
//   return chunked;
// }

// let array = [1,2,3]
// let last = [array[1]]
// last.push(4)
// console.log(last)
// console.log(array)

function chunk(array, size) {
  let chunked = []
  for (let element of array) {
    let last = chunked[chunked.length - 1] //false at first time
    // Chunked values will also change if last value changes because its a reference
    // And last value is chunked[last element] So it is changing whenever new array in chunk creates 
    if(!last || last.length === size) {
      chunked.push([element])
    }else {
      last.push(element)
    }
  }
  return chunked
}

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3))

module.exports = chunk;