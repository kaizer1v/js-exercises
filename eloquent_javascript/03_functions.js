const assert = require('assert') // node's inbuilt assert module
/**
function available in node's assert module are

fail: [Function: fail],
AssertionError: [Function: AssertionError],
ok: [Circular],
equal: [Function: equal],
notEqual: [Function: notEqual],
deepEqual: [Function: deepEqual],
deepStrictEqual: [Function: deepStrictEqual],
notDeepEqual: [Function: notDeepEqual],
notDeepStrictEqual: [Function: notDeepStrictEqual],
strictEqual: [Function: strictEqual],
notStrictEqual: [Function: notStrictEqual],
throws: [Function: throws],
doesNotThrow: [Function: doesNotThrow],
ifError: [Function: ifError] }

ref_link: https://www.w3schools.com/nodejs/ref_assert.asp

**/


/** 01

Write a function min that takes two arguments and returns their minimum.

**/
function min(a, b) {
  return (a < b) ? a : b
}
console.log('-------------------- min --->')
assert.strictEqual(min(0, 10), 0)
assert.strictEqual(min(0, -10), -10)





/** 02

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd
by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a
positive whole number is even or odd: 

- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2.

Define a recursive function isEven corresponding to this description. The function should accept
a single parameter (a positive, whole number) and return a Boolean.
Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

**/
function isEven(num) {
  if(num == 0) return 'EVEN'
  if(num == 1) return 'ODD'
  if(num < 0) return isEven(Math.abs(num))
  return isEven(num - 2)
}
console.log('-------------------- isEven --->')
assert.strictEqual(isEven(50), 'EVEN')
assert.strictEqual(isEven(75), 'ODD')
assert.strictEqual(isEven(-1), 'ODD')




/** 03

Write a function countBs that takes a string as its only argument and returns a number that
indicates how many uppercase “B” characters there are in the string.

**/
function countBs(str) {
  return str.split("").filter(function(c) {
    return c === "B"
  }).length
}
console.log('-------------------- countBs --->')
assert.strictEqual(countBs("BBC"), 2)
assert.strictEqual(countBs("ACEDZ"), 0)
assert.strictEqual(countBs("bABab"), 1)





/** 04

write a function called countChar that behaves like countBs, except it takes a second argument
that indicates the character that is to be counted (rather than counting only uppercase “B”
characters). Rewrite countBs to make use of this new function.

**/
function countChars(str, char) {
  return str.split("").filter(function(c) {
    return c === char
  }).length
}
console.log('-------------------- countChars --->')
assert.strictEqual(countChars("kakkerlak", "k"), 4)
assert.strictEqual(countChars("ACsssDGAsdASGAZRT", "s"), 4)
assert.strictEqual(countChars("bABab", "b"), 2)
