/** 01

Write a class Vec that represents a vector in two-dimensional space. It takes x and y
parameters (numbers), which it should save to properties of the same name.

Give the Vec prototype two methods, plus and minus, that take another vector as a
parameter and return a new vector that has the sum or difference of the two vectors’
(this and the parameter) x and y values.

**/
function Vec(x, y) {
  this.x = x
  this.y = y
}

Vec.prototype.plus = function(vec) {
  let x = this.x + vec.x
  let y = this.y + vec.y
  return { x, y }
}

Vec.prototype.minus = function(vec) {
  let x = this.x - vec.x
  let y = this.y - vec.y
  return { x, y }
}

Vec.prototype.length = function() {
  let x_sq = (this.x + 0) * (this.x + 0)
  let y_sq = (this.y + 0) * (this.y + 0)
  return Math.sqrt(x_sq + y_sq)
}






/** 02

Write a class called Group (since Set is already taken). Like Set, it has `add`,
`delete`, and `has` methods.

Its constructor creates an empty group,
`add`     - adds a value to the group (but only if it isn’t already a member),
`delete`  - removes its argument from the group (if it was a member),
`has`     - returns a Boolean value indicating whether its argument is a member of the group.

**/
function Group(arr) {
  this.arr = arr
}

Group.prototype.add = function(val) {
  this.arr.push(val)
  return this
}

Group.prototype.delete = function(val) {
  let ind = this.arr.indexOf(val)
  if(ind !== -1) {
    this.arr.splice(ind, 1)
    return this.delete(val)
  }
  return this
}

Group.prototype.has = function(val) {
  return (this.arr.indexOf(val) !== -1) ? true : false
}








