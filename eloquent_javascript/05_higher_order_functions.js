const assert = require('assert')

/** 01

Use the reduce method in combination with the concat method to “flatten”
an array of arrays into a single array that has all the elements of the original arrays.

**/
function arrayFlatten(arr) {
  if (arr && arr.constructor !== Array) throw TypeError('Type should be an array only')
  return arr.reduce(function(acc, x) {
    return acc.concat(x && x.constructor === Array ? arrayFlatten(x) : x)
  }, [])
}
assert.deepEqual(arrayFlatten([[[]]]), [])
assert.deepEqual(arrayFlatten([[1, [2, 3]], [4, 5], [6]]), [1, 2, 3, 4, 5, 6])
assert.deepEqual(arrayFlatten([[1, 2, 3], 4, [5, [6]]]), [1, 2, 3, 4, 5, 6])
console.log('arrayFlatten ---> PASSED');




/** 02

Write a higher-order function loop that provides something like a for loop statement.
It takes a value, a test function, an update function, and a body function.
Each iteration, it first runs the test function on the current loop value and stops if
that returns false. Then it calls the body function, giving it the current value.
Finally, it calls the update function to create a new value and starts from the beginning.

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

**/
function loop() {
  // ...
}





/** 03

Implement every as a function that takes an array and a predicate function as parameters.
Write two versions, one using a loop and one using the some method.

**/
function every(arr, cond) {
  if(arr.length === 0) return true
  return arr.map(elem => cond(elem)).reduce((a, b) => a === b)
}
assert.equal(every([1, 3, 5], n => n % 2 == 1), true)
assert.equal(every([1, 3, 5], n => n > 10), false)
assert.equal(every([], n => n > 10), true)
console.log('every ---> PASSED');























