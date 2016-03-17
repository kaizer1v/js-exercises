// ====================================
// SCOPES
// ref: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/var
// ====================================

// First, let us understand the difference between declared and undeclared variables.
// Declared Variables: They are defined within the context in which they are initialized.
// Undeclared Variables: They are automatically declared within the global scope.
// Also note that, declared variables are created before any code is executed, whereas undeclared variables do not exist until the code assigning to them is executed.

var one = 1;
function abc() {
  var two = 2;
  three = 3;
}

console.log(one, two, three);
// Here, 'one' and 'three' are defined in the global scopes. It will throw an error for 'two'.


// ------------------------------------
// Hoisting
// ------------------------------------
// Declaring a variable anywhere is equivalent to declaring it at the top, because Javascipt automatically
//  takes all the declared variables and puts it at the top. This behaviour is called 'hoisting'.
// So, for example
function temp() {
  console.log(a);
}
var a = 1;
temp();
// will log out 1 - thanks to hoisting. Although, this will work only in case of the global scope. which means,
function temp() {
  console.log(a);
  var a = 1;
}
temp();
// will log out 'undefined', so -
function temp() {
  console.log(a);
  a = 1;
}
temp();   // will work , because, you haven't put the 'var' before declaring 'a'. Thus, it is assigned to the global scope. Funny 'eh! :D


// Let us see some more examples of these,
console.log(z);
// will give you undefined, because, even if you have declared a global variable, but haven't called b() that is why.
function a() {
  var x = 1;
  function b() {
    x = 5;      // changes the already defined 'x' variable.
    z = 12;     // creates a global variable and assigns 12 to it.
    console.log(y);     // this will log out 'undefined', as we saw earlier, Javascript does not hoist variables within the functions i.e. local scopes.
    console.log(x);     // logs out: 5, since it changes the already defined 'x' to 5.
  }
  console.log(x);       // will still print out '1', because b() hasn't been called yet, so the value of 'x' will still remain the same.
  b();                  // but once b() is invoked.
  var y = 44;           // declared a local variable for a(), but not hoisted - cannot be used prior to this statement.
  console.log(x);       // Now, the value of the already defined variable 'x' has actually changed to 5.
}


// ------------------------------------
// Assignments
// ------------------------------------
// You can assign stuff like this too:
var x = y = 3;
// or
var m, n = 'a', l = false;
// Simple.


