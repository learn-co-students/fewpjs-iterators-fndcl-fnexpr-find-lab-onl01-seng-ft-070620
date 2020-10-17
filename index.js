const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record) {
  let ans = record.find(obj => obj.result === "W")
  return ans ? ans.year : undefined
}
