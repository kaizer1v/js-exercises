// ==========
// 01. BASICS
// ==========

// Define a variable
var foo = 'bar';
// Here you are not only defining, but also declaring
//  the variable.

// This instead will only declare the variable.
var x;
// Here, javascript will automatically assign the value 'undefined'
//  to x.

something = 'nothing';
// Although, this is legal, later on, we will see that
//  this might cause issues with variable scoping. So, avoid using this.


// Similarly, you can define a function as well.
//  which returns a value, in this case a string;
function foo() {
  return 'bar';
}

// Always remember to end a legal line with a ';' wherever necessary.
//  It is a good practice.

// ------------------
// Default Functions
// ------------------

alert(123);
// Javascript has some inbuilt functions for basic usage. Alert is one of them.
//  You can use this to alert a message or a value.

// Similarly, you can also use console.console.log
// This will log your message in the browser's console. Like so...
console.log(123);
// 'console' is actually an object within which the 'log' is a method that takes a parameter
//    It has other methods like, 'memory', 'group', 'error' to name a few.

// 'typeof' is another global function which displays the 'type' of object it is. So, for example,
typeof(x);  // You defined 'x' earlier in this file.
// This will return 'undefined', which is the default assigned value to a non-declared variable.
// You can also do some crazy stuff like.
typeof(undefined);    // Yes, undefined is a legal keyword in Javascript
// This, as you expected, will return 'undefined'
// There is also another keyword, called 'null' - which is different from undefined
//  null is actually an object, :)
typeof(null);


// --------
// Booleans
// --------
var boo = true;
// This is a boolean variable.
// 0 = True & 1 = False
var bool = 4 < 5    
// will also assign True, since the statement assigned is a true statement.