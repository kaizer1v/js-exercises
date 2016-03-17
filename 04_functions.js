// ====================================
// FUNCTIONS
//  Ref link: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions
// ====================================

// You can define a function many ways, one of which is (most commonly used)
function square(side) {
  return side * side;
}
// Another way of doing it is like so.
var square = function(side) {
  return side * side;
}
// These are called function expressions. In this case, the function is actually
//  anonymous, you can still provide a name to the function like so.
var square = function sq(side) {
  return side * side;
}
// Function expressions can be mainly useful when passing the function name as a 
//  parameter to another function.

// Let us write an example
function map(f, a) {
  var result = [], i = 0;
  for(; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
// Now let us call it.
map(function(x) { return x*x }, [0, 2, 5, 11]);
// This will basically map every element of the array to it's square and return it.
