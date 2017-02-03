# FUNCTIONS
[Ref link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)

You can define a function many ways, one of which is (most commonly used)

```javascript
function square(side) {
  return side * side;
}
```

Another way of doing it is like so.

```javascript
var square = function(side) {
  return side * side;
}
```

These are called function expressions. In this case, the function is actually anonymous, you can still provide a name to the function like so.

```javascript
var square = function sq(side) {
  return side * side;
}
```

Function expressions can be mainly useful when passing the function name as a parameter to another function.

Let us write an example

```javascript
function map(f, a) {
  var result = [], i = 0;
  for(; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}
```

Now let us call it.

```javascript
map(function(x) { return x*x }, [0, 2, 5, 11]);
```

This will basically map every element of the array to its square and return it.

Pass by reference or pass by value?
When you pass in primitive types such as a number or a string or even a `boolean`, it is passed by value. Eg:

```javascript
function square(number) {
  return number * number;
}
number = 123;
```

Here, the number value remains the same within the function i.e. the scope of the
 parameter remains within the function, but not for non-primitive types such as
 an array or even an object


```javascript
function something(obj) {
  obj.something = 'something';    // this change is visible globally
}

var myObj = { 'something': 'nothing' };
console.log(myObj.something);      // 'nothing'

something(myObj);
console.log(myObj.something);      // 'something'
```


## Function Stack & Recursion

```javascript
function foo(i) {
  if(i < 0) return;
  console.log('begin ' +i);
  foo(i - 1);
  console.log('end ' +i);
}

// this is a recursive function
// let's call it

foo(3);
// the following will be its output
/*
  begin 3
  begin 2
  begin 1
  begin 0
  end 0
  end 1
  end 2
  end 3
*/
```
