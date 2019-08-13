function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}
let whiteRabbit = { type: "white", speak: speak };
let hungryRabbit = { type: "hungry", speak: speak };


// whiteRabbit.speak("Oh my ears and whiskers, how late it's getting!");
// hungryRabbit.speak("I could use a carrot right now.");


let whiteSpeak = speak.bind(whiteRabbit)
let hungrySpeak = speak.bind(hungryRabbit)

// whiteSpeak("Burp!")
// hungrySpeak("Fart!")


function normalize() {
  console.log(this.coords.map(function(n) {
    return n / this.length;
  }));
}
normalize.call({coords: [0, 2, 3], length: 5});
// → [0, 0.4, 0.6]

/// ---------------------------
// Object.setPrototypeOf
// basically inherits properties from one object into another


function talk() {
  console.log(this.sound)
}

var animal = {
  talk
}

var cat = {
  sound: 'meeooww'
}

var dog = {
  sound: 'woofff!'
}


/// ---------------------------
/// --- Object creation


function Person(saying) {
  this.saying = saying
}

Person.prototype.talk = function() {
  console.log('I say:', this.saying)
}


var crockford = new Person('hello there...')
crockford.talk()    // I say: hello there...


function new(constr) {
  var obj = {}
  Object.setPrototypeOf(obj, constr.prototype)
}



















