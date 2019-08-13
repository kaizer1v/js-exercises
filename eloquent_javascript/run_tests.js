chai = require('chai')

/** ------------------------------------------------------- **/

module.exports = {
  test: function(msg, input, output) {
    if(input === output) {
      console.log(msg, output, "CORRECT")
    } else {
      console.log("Expected output is", output)
      console.log("Current output is", input)
      console.log("INCORRECT")
    }
  }
}