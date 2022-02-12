// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// [0,1,1,2,3]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


//Memoization :

function memoize(fn) {
  const cache = {};
  return function (...args) {
    // console.log(args)
    if (cache[args]) {
      return cache[args]
    } 
    const result = fn.apply(this, args);
    cache[args] = result
    return result;
  }
}

function slowFib(n) { 
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2); //Not return slowfib(n-1) + slowFib(n-2) if we do this then momoization doesn't occur.
}

const fib = memoize(slowFib)
console.time()
console.log(fib(30))
console.timeEnd()

//Exponentail Run Time. Processing power required doubles.
/**function fib(n) { 
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
} */
  
/**function fib(n) { //This is a linear run time. Bc Everytime "n" increases loop also increase
  const result = [0,1]
  for (let i = 2; i <= n; i++) {
    let one = result[i - 1]
    let two = result[i - 2]
    result.push(two + one);
  }
  console.log(result[n])
  return result[n]
} */

module.exports = fib;
