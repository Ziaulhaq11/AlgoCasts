
function chunk(array, size) {
    const chunked = []
    for (let element of array) {
        const last = chunked[chunked.length - 1]
        console.log(chunked[chunked.length -1])
        console.log('CHUNKED : LAST : ')
        console.log(chunked, last)
        if (!last || last.length === size) {
            chunked.push([element])
        } else {
            last.push(element)
        }
    }
    
    return chunked
}
var array = [1,2,3,4,5]
var result = chunk(array, 2)
console.log(result)

// since we assigned value from other array so modifying one will affect another as shown above and clear example below here

// let testArr = [['foo']];
// let last = testArr[testArr.length -1];  // reference to testArr[0]
// last.push('bar');
// console.log(testArr);  // [["foo", "bar"]]

/**Kevin H
Kevin
3 years ago
18
18 upvotes
Einstein, I think you are partially correct, at least as far as the reference goes, but the assignment of the last array is assigned by reference to an existing array within the main chunked array (except for the first time when it is undefined ).

Here's an example that may explicate how this works:

let testArr = [['foo']];
let last = testArr[testArr.length -1];  // reference to testArr[0]
last.push('bar');
console.log(testArr);  // [["foo", "bar"]]
Referring back to the problem:

- upon first iteration through array , last is undefined  (chunked[-1] = undefined), which meets the first condition, and a new array containing just the first element is pushed into the main chunked array.

- the second time through, last is assigned by reference to the last array within the chunked array (at this point it is the only array). Because the first condition is not met, the current element is added to the last array, which, because it is a reference, is reflected within chunked . (this repeats until last meets the size condition)

- when the size param is met (first condition met), a new chunk array (containing the current element) is pushed to the chunked array. 

- during the next iteration, last is reassigned to the chunk array that had just been pushed into chunked because it is now the last array (and hence becomes the new array reference).

- this process repeats until iteration has completed.

So in summary, when elements are pushed to the lastarray, they are being pushed into an existing chunk array contained within the main chunked array (specifically, the last one).

if needed - check out an article that goes into assignment by value/reference

Hope this helps :) */