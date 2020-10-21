const testVar = {}

function superbowlWin(arr) {
 let result = arr.find(obj => obj.result === "W")
 if (result) {
   return result.year
 }
}

function testFunc() {
  return "hi"
}
