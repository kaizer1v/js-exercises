# THIS

Firstly, let me tell you that this chapter is going to be completely experimental and magical.
I am writing this chapter for my own joy and writing down a self-discovery **so to speak**.
`this` is about playing around with scope and what you can do with it.

So, here is a pattern of function I wrote on *every* program I wrote. 

```javascript

function whole_square(config) {
  var a = config.x;
  var b = config.y;

  return (a*a) + (b*b) + 2*a*b;
}

var coords = { "x": 3, "y": 4 };

whole_square(coords);   // returns: 49

```

Pretty simple.

But, I learned, I can actually write the same function without requiring to pass in an argument - which
is much neater,

using the `this` keyword


```javascript

function whole_square() {
  var a = this.x;
  var b = this.y;

  return (a*a) + (b*b) + 2*a*b;
}

var coords = { "x": 3, "y": 4 };

whole_square.call(coords);    // returns: 49

```

There is actually no difference between both the approaches, apart from **being different**

But let us take the second approach a bit further. Assume that you now have x, y and (z*z) where
x and y are going to be constant, you don't want it to change, but you only want to keep
z as a variable.

```javascript

/* TRADITIONAL */
function whole_sq(z) {
  var x = 3;
  var y = 4;
  return (x*x) + (y*y) + (z*z);
}
var zvalue = 5
whole_sq(zvalue);    // 50


/* NEW APPROACH */
function whole_sq2(z) {
  var x = this.x || 3;
  var y = this.y || 4;
  var z = this.z;
  return (x*x) + (y*y) + (z*z);
}
var coords1 = { z: 5 };
var coords2 = { x: 10, z: 5 };

whole_sq2.call(coords1);   // 50
whole_sq2.call(coords2);   // 141
```

Notice, that in the `whole_sq2` method, you have the flexibility to pass in the optional `x` and the `y`, where
as in the `whole_sq` function, you will only be able to pass in the `z` value at any point in time. Thus, making
the 2nd approach more flexible.


## Mixing a little closure in it

Now that I have made myself clear with the advantages of using the `this` method of writing functions, I will
take it a step further and try to play around this concept along with the concept of closure. 

**If you are reading this and aren't sure what scope or closure is, highly recommend to view [YDKJS series](https://github.com/getify/You-Dont-Know-JS/blob/master/scope%20&%20closures/README.md#you-dont-know-js-scope--closures), it is 
really awesome.**


Ok, moving on.

First, let us see what a basic scope & closure function looks like

```javascript

function parent(num) {
  var x = 10;
  function child() {
    return x*num;
  }
  return child();
}

var value = 5;
parent(value);  // 50

```

Simple, parent takes a number as an argument and returns 10 times that number. Here, no matter what, you will
not be able to change the value of `x` i.e. the multiplier from outside the function - that is what colsure 
helps you do, it scopes in the value and makes it private.

Now, what if I use the previous methods we discussed and mix it with the closure function ?

```javascript

function parent2() {
  var x = 10;
  
  function child2() {
    return x*this.value;
  }
  return child2();
}

var num1 = { value: 5 };

parent2.call(num1);   // NaN ?!?!?
```

WHAT??

What happened there? why didn't `this.value` multiply with 10 and simply return 50?

The reason is, when you are invoking `parent2.call(num1)`, you are limiting the scope of it's argument i.e. `num1`
only with the function `parent2` and will not flow through inside of `child2`, as the value of `x` is, automatically.
In such a case, the `this` inside the `child2` function will directly refer to your `window` or the global 
most scope.

Then what is the workaround?

Well, in this case, we will have to use a messenger to send the message inside, like so.


```javascript

function parent2() {
  var x = 10;
  
  // we will have to use a messenger here
  var messenger = this.value;
  function child2() {
    return x*messenger;
  }
  return child2();
}

var num1 = { value: 5 };

parent2.call(num1);   // 50

```

Interesting ?

What you are doing here is take the scope in context into `this` and saving it inside a variable that 
will have the capability to flow inside `child2` - and then use that inside `child2`. :) - We simply 
detached colsure from inside `parent2` function.

So, how can this be advantegous?

For this we will have to take this concept one step even further.

Imagine you wanted to create values dynamically, which cannot be overwritten at all. In other words,
you created a value using some calculation on the fly and no-one can ever change it - EVER!


## A bit deeper

```javascript

function parent2() {
  var x = 10;
  
  // we will have to use a messenger here
  var messenger = this.value;
  function child2() {
    return x*messenger;
  }
  return child2;
}

var num1 = parent2.call({ value: 7 });
var num2 = parent2.call({ value: 2 });

```

If you look closely, there is a tiny difference between this function and the previous one.
Here, I am not returning the calculated value but am returning the entire function that 
uses the scope within which it has been invoked and save it as `num1` and `num2`.

What this means is, when you invoke parent2 using a context, like 

```javascript

var num1 = parent2.call({ value: 7 })
```

you are passing in `{ value: 7 }` into the `this` inside `parent2`; using it as a `messenger` to get
inside of `child2` which uses `x` which is a constant value i.e. `10` and now you have returned
the whole `child2` function which now contains `messenger` as well - which is frozen with the value `7`.

DAMN!

So, when you run

```javascript

num1()    // 70
```

you will get `70` - which cannot be changed at any cost. You can check it like so,

```javascript

num1.call( { value: 12354 } );    // 70
```

Which means, you are strictly avoiding this object to be extended / inherited any further !
What you did is nothing but created an instance of a context. You can create multiple such
instances of such contexts.

```javascript

var num2 = parent2.call({ value: 12 })
num2()     // will always be 120


var num3 = parent2.call({ value: 9 })
num3()     // will always be 90
```
