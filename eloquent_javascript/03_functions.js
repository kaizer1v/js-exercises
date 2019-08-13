const test = require('./run_tests').test

/** 01

Write a function min that takes two arguments and returns their minimum.

**/
function min(a, b) {
  return (a < b) ? a : b
}
console.log('-------------------- min --->')
test('(0, 10)', min(0, 10), 0)
test('(0, -10)', min(0, -10), -10)





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
test('50', isEven(50), 'EVEN')
test('75', isEven(75), 'ODD')
test('-1', isEven(-1), 'ODD')




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
test('BBC',   countBs("BBC"), 2)
test('ACEDZ', countBs("ACEDZ"), 0)
test('bABab', countBs("bABab"), 1)





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
test('kakkerlak, k',   countChars("kakkerlak", "k"), 4)
test('ACsssDGAsdASGAZRT, s, ', countChars("ACsssDGAsdASGAZRT", "s"), 4)
test('bABab, b', countChars("bABab", "b"), 2)
