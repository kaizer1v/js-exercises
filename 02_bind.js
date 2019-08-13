/**

The bind

`// ---->`  should be removed

**/

// let's say you have an object

var dog = {
  'says': 'wooffff'
}

// and you have a function
function say() {
  console.log(this.says)
}

// if I run the function
// ----> say()                   // undefined
// because, `this` doesn't refer to anything - it doesn't have any context


// so in order to set the context to the function `say`, you can do it by
var dog_says = say.bind(dog)      // will return a contextualised `say` function with `dog` object
// ----> dog_says()                        // run the contextualised function -> woofff


// Similarly
var cat = {
  'says': 'meoowww'
}
var cat_says = say.bind(cat)
// ----> cat_says()                        // meoowww



var module = {
  x: 42,
  getX: function() {
    return this.x;
  }
}












