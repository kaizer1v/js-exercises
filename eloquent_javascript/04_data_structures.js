// const test = require('./run_tests.js').test
const assert = require('assert')

/** 01

Write a range function that takes two arguments, start and end, and returns an array
containing all the numbers from start up to (and including) end.

**/
function range(start, end, step = 1) {
  let i = start, to_return = [];
  for(; i <= end; i += step) {
    to_return.push(i)
  }
  return to_return
}
assert.deepEqual(range(3, 10), [3, 4, 5, 6, 7, 8, 9, 10])
assert.deepEqual(range(-5, 5), [-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5])
console.log('01 -------------------- range ---> PASSED')






/** 02

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

**/
function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b
  })
}
assert.strictEqual(sum(range(1, 10)), 55)
assert.strictEqual(sum(range(-5, 5)), 0)
console.log('02 -------------------- sum ---> PASSED')




/** 03

The first, reverseArray, takes an array as argument and produces a new array that has
the same elements in the inverse order.

**/
function reverseArray(arr) {
  if(arr.length === 0 || arr.length === 1) return arr
  let i = arr.length - 1, to_return = []
  for(; i >= 0; i--) {
    to_return.push(arr[i])
  }
  return to_return
}
assert.deepEqual(reverseArray([]), [])
assert.deepEqual(reverseArray(['a']), ['a'])
assert.deepEqual(reverseArray(['a', 'b', 'c']), ['c', 'b', 'a'])
assert.deepEqual(reverseArray([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1])
console.log('03 -------------------- reverseArray ---> PASSED')




/** 04

The second, reverseArrayInPlace, does what the reverse method does: it modifies the
array given as argument by reversing its elements. Neither may use the standard reverse method.

**/
function reverseArrayInPlace(arr) {

}
console.log('04 -------------------- reverseArrayInPlace ---> PASSED')





/** 05

A common data structure is the list (not to be confused with array). A list is a nested
set of objects, with the first object holding a reference to the second, the second to
the third, and so on.

  let list = {
    value: 1,
    rest: {
      value: 2,
      rest: {
        value: 3,
        rest: null
      }
    }
  };

Write a function arrayToList that builds up a list structure like the one shown above when
given [1, 2, 3] as argument.

**/
function arrayToList(arr) {
  if(arr.length === 0) return {}
  if(arr.length === 1) return { value: arr[0], rest: null }
  var obj = { value: arr[0] }
  arr.shift()
  obj['rest'] = arrayToList(arr)
  return obj
}
assert.deepEqual(arrayToList([]), {})
assert.deepStrictEqual(arrayToList([1]), { value: 1, rest: null })
assert.deepStrictEqual(arrayToList([1, 2, 3]), { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } })
console.log('05 -------------------- arrayToList ---> PASSED')








/** 05.1

Now write a function that produces an array from a list

**/
function listToArray(list) {
  function arrayFlatten(arr) {
    if (arr && arr.constructor !== Array) throw TypeError('Type should be an array only')
    return arr.reduce(function(acc, x) {
      return acc.concat(x && x.constructor === Array ? arrayFlatten(x) : x)
    }, [])
  }

  var to_return = []
  return arrayFlatten((function ___(l) {
    if(Object.keys(l).length === 0) return []
    if(l['rest'] === null) return [l['value']]
    return to_return.concat([l['value'], ___(l['rest'])])
  }(list)))
}
assert.deepStrictEqual(listToArray({}), [])
assert.deepStrictEqual(listToArray({ value: 1, rest: null }), [1])
assert.deepStrictEqual(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }), [1, 2, 3])
console.log('05.1 -------------------- arrayToList ---> PASSED')
































