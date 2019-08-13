const test = require('./run_tests.js').test

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
console.log('01 -------------------- range --->')
console.log(assert.deepEqual(range(3, 10), [3, 4, 5, 6, 7, 8, 9, 10], 'some mesg'))
// console.log(range(3, 10))
// console.log(range(-5, 5))






/** 02

Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the example program and see whether it does indeed return 55.

**/
function sum(arr) {
  return arr.reduce(function(a, b) {
    return a + b
  })
}
console.log('02 -------------------- sum --->')
test('sum(1, 10)', sum(range(1, 10)), 55)
test('sum(1, 10)', sum(range(-5, 5)), 0)




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
console.log('03 -------------------- reverseArray --->')
console.log(reverseArray([]))
console.log(reverseArray(['a']))
console.log(reverseArray(['a', 'b', 'c']))
console.log(reverseArray([1, 2, 3, 4, 5]))




/** 04

The second, reverseArrayInPlace, does what the reverse method does: it modifies the
array given as argument by reversing its elements. Neither may use the standard reverse method.

**/
function reverseArrayInPlace(arr) {

}
console.log('03 -------------------- reverseArrayInPlace --->')





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
console.log('05 -------------------- arrayToList --->')
console.log(arrayToList([]))          // {}
console.log(arrayToList([1]))         // { value: 1, rest: null }
console.log(arrayToList([1, 2, 3]))   // { value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }








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
console.log('05.1 -------------------- arrayToList --->')
console.log(listToArray({}))                                                                // []
console.log(listToArray({ value: 1, rest: null }))                                          // [1]
console.log(listToArray({ value: 1, rest: { value: 2, rest: { value: 3, rest: null } } }))  // [1, 2, 3]        // [1]





/** 06

Write a function deepEqual that takes two values and returns true only if they are the same 
value or are objects with the same properties, where the values of the properties are equal
when compared with a recursive call to deepEqual.

**/
function deepEqual(obj1, obj2) {
  if(obj1.constructor === obj2.constructor) {
    if(obj1.constructor === Array) {
      // check if both arrays are equal
      // ...
    } else if(obj1.constructor === Object) {
      // check if both objects are equal
      // ...
    } else {
      // anything apart from an `Array` or `Object`
      return obj1 === obj2
    }
  } else {
    // if the constructors of both arguments are different
    return false
  }
}
test(
  'deepEqual({"a": {"aa": 123}, "b": false}, {"a": {"aa": 123}, "b": false})',
  deepEqual({"a": {"aa": 123}, "b": false}, {"a": {"aa": 123}, "b": false}),
  true
)
test(
  'deepEqual({}, {})',
  sum(range(-5, 5)),
  0
)
































