"use strict"

class Triangle {

  // construct with 3 sides
  // parameters are length
  // { sides: [1, 2, 3], angles: [] }
  constructor(opt) {
    this.attrs = {
      sides: [],
      angles: [],
      area: 0,
      height: 0
    }
    // merge this.attrs with opt
    Object.assign(this.attrs, opt)
  }

  // based on the angles, whether it is a valid triangle
  isCorrect() {
    if(this.attrs.angles[0] + this.attrs.angles[1] + this.attrs.angles[2] === 180) return true
    return false
  }

  // print the triangle sides & angles
  print() {
    console.log('ab = ', this.attrs.sides[0])
    console.log('bc = ', this.attrs.sides[1])
    console.log('ca = ', this.attrs.sides[2])
    console.log('∠cab = ', this.attrs.angles[0])
    console.log('∠cba = ', this.attrs.angles[1])
    console.log('∠bca = ', this.attrs.angles[2])
  }

  // checks if triangle is equilateral
  isEquilateral() {
    if(this.attrs.sides[0] == this.attrs.sides[1] == this.attrs.sides[2]) return true
    return false
  }

  // checks if triangle is isosceles
  isIsosceles() {
    if(
      (this.attrs.sides[0] === this.attrs.sides[1]) ||
      (this.attrs.sides[1] === this.attrs.sides[2]) ||
      (this.attrs.sides[2] === this.attrs.sides[0])
    ) return true
    return false
  }

  // checks if all sides & angles are different 
  isScalene() {
    if(!this.isEquilateral() && !this.isIsosceles()) return true
    return false
  }

  // checks if triangle is right-angled
  isRight() {
    if(
      (this.attrs.angles[0] === 90) ||
      (this.attrs.angles[1] === 90) ||
      (this.attrs.angles[2] === 90)
    ) return true
    return false
  }

  /* angles between the sides
    ___
    cab  = x
    ___
    abc  = y
    ___
    acb  = z
   */
  angles(x, y, z) {
    this.attrs.angles.push(x)
    this.attrs.angles.push(y)
    this.attrs.angles.push(z)
  }

  // compute the area of a triangle
  area() {
    if(!this.attrs.height) return false
    this.attrs.area = (0.5 * this.attrs.sides[1] * this.attrs.height)
    return this
  }

  // given the sides, compute the height
  // area = 1/2 * b * h
  // therefore, h = 2 * a / b 
  height() {
    if(!this.attrs.area) return false
    this.attrs.height = (2 * this.attrs.area) / this.attrs.sides[1]
    return this
  }

  // whether this triangle is similar to the provided triangle (t2)
  isSimilar(t2) {

  }
}

/**
     A
     /\
    /  \
   /    \
15/      \  15
 /        \   
/__________\
B    25     C

     A
     |\
     | \
     |  \
     |   \ 5
   4 |    \
     |     \
     |______\
     B   3   C
**/


let t1 = new Triangle({ sides: [5, 4, 3], height: 2.5 })
console.log(t1.isScalene())
console.log(t1)
console.log(t1.area().height())