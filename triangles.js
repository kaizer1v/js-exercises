class Triangle {

  // construct with 3 sides
  // parameters are length
  constructor(a, b, c) {
    this.a = a
    this.b = b
    this.c = c
  }

  // based on the angles, whether it is a valid triangle
  isCorrect() {
    if(this.x + this.y + this.z === 180) return true
    return false
  }

  // print the triangle sides & angles
  print() {
    console.log('ab = ', this.a)
    console.log('bc = ', this.b)
    console.log('ca = ', this.c)
    console.log('∠cab = ', this.x)
    console.log('∠cba = ', this.y)
    console.log('∠bca = ', this.z)
  }

  // checks if triangle is equilateral
  isEquilateral() {
    if(this.a == this.b == this.c) return true
    return false
  }

  // checks if triangle is isosceles
  isIsosceles() {
    if(
      (this.a === this.b) ||
      (this.b === this.c) ||
      (this.c === this.a) ||
    ) return true
    return false
  }

  // checks if all sides & angles are different 
  isScalene() {
    if(!isEquilateral() && !isIsosceles()) return true
    return false
  }

  // checks if triangle is right-angled
  isRight() {
    if(
      (this.x === 90) ||
      (this.y === 90) ||
      (this.z === 90) ||
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
    this.x = x
    this.y = y
    this.z = z
  }

  // compute the area of a triangle
  area() {

  }

  // pythagoras theorm
  pythagoras() {
    if(!isRight()) return false
    
  }

  // given the sides, compute the height
  // area = 1/2 * b * h
  // therefore, h = 2 * a / b 
  height() {

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