/**

The `this` keyword

It is always contextual

**/


console.log(this)     // refers to the global object


var prop = 'abracadabra'
var obj = {
  prop: 'property',
  another_prop: 'another ' + this.prop,     // <-- this will not refer to the same object
  one_more_prop: function() {
    return 'one more ' + this.prop
  },
  iif_prop: (function() {
    return 'iif ' + this.prop               // will still be `iif undefined`
  }())
}
console.log(obj.another_prop)      // 'anotherundefined'
console.log(obj.one_more_prop())   // 'one more property'
console.log(obj.iif_prop)   // 'one more property'

// this is because, when you are referring to `this` inside `obj`, the object itself
//  isn't defined yet (in memory) - so it doesn't know what it is refering to
//  but when you call the `obj.one_more_prop()` on line 22, it will be able to refer to `this`
//  because, during the time of invocation, the object `obj` has been defined in memory.