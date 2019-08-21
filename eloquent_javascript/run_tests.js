const assert = require('assert')

/** ------------------------------------------------------- **/
let sum = (a, b) => a + b

assert.equal(sum(1, 3), 4, 'message......')

// assert.deepEqual({ tea: 'green' }, { tea: 'red' }, 'should be equal');
test([1, 2, 3, 4], 'notDeepEqual', [4, 3, 2, 1])

function test(x, fn, y) {
  try {
    assert[fn](x, y)
    console.log('PASSED')
  } catch(e) {
    console.log(`Expected ${y}, but got ${x}`)
  }
}

// assert.strictEqual(1, '1', 'message......')

// module.exports = {
//   test: function(msg, input, output) {
//     if(input === output) {
//       console.log(msg, output, "CORRECT")
//     } else {
//       console.log("Expected output is", output)
//       console.log("Current output is", input)
//       console.log("INCORRECT")
//     }
//   }
// }