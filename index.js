const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array) {
  let winner = array.find(obj => obj.result === "W")
  if (winner) {
    return winner.year;
  } else {
    return undefined;
  }
}