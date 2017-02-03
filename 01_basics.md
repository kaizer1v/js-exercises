# 01. BASICS

============

## Variables

```javascript
// Define a variable
var foo = 'bar';
```

Here you are not only defining, but also declaring the variable.
This instead will only declare the variable.
```javascript
var x;
```
Here, javascript will automatically assign the value `undefined` to x.

```javascript
// no var???
something = 'nothing';
``` javascript

Although, this is legal, later on, we will see that this might cause issues with variable scoping. So, avoid using this.


Similarly, you can define a function as well. which returns a value, in this case a string;

```javascript
function foo() {
  return 'bar';
}
```

Always remember to end a legal line with a `;` wherever necessary. It is a good practice.


## Default Functions

Javascript has some inbuilt functions for basic usage. Alert is one of them. You can use this to alert a message or a value.

```javascript
alert(123);
```

Similarly, you can also use `console.log("something")`. This will log your message in the browsers console. Like so...

```javascript
console.log(123);
```

`console` is actually an object within which the `log` is a method that takes a parameter. It has other methods like,

  - `memory`
  - `group`
  - `error`

to name a few.

`typeof` is another global function which displays the `type` of object it is. So, for example,

```javascript
typeof(x);  // You defined 'x' earlier in this file.
```

This will return `undefined`, which is the default assigned value to a non-declared variable.
You can also do some crazy stuff like.

```javascript
typeof(undefined);    // Yes, undefined is a legal keyword in Javascript
```

This, as you expected, will return `undefined`. There is also another keyword, called `null` - which is different from `undefined`

```javascript
typeof(null);
//  null is actually an object, :)
```


## Booleans

```javascript
var boo = true;
```

This is a boolean variable.

**NOTE: 0 = True & 1 = False**

```javascript
var bool = 4 < 5
```

will also assign `true`, since the statement assigned is a true statement.