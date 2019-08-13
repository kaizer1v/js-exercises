/**

Given an `Eventer` class, which allows you to register an event on a variable

**/
const eventer = new Eventer()

// register first event on "foo"
eventer.on('foo', function(param) {
  console.log('foo', param)
})
// dispatch the event on foo
eventer.emit('foo 1', 1)    // foo 1

// register second event on "foo"
const foo2 = eventer.on('foo', function(param) {
  console.log('foo', param)
})
// dispatch all the events registered under foo
eventer.emit('foo 2', 2)



/*
  SOLUTION
*/

function Eventer() {
  this.cache = {}
}

Eventer.prototype.on = function(name, fn) {
  if(!this.cache[name]) this.cache[name] = []
  this.cache[name].push(fn)
}

Eventer.prototype.emit = function(name, obj) {
  if(this.cache[name]) {
    this.cache[name].map(function(fn) {
      return fn(obj)
    })
  }
}