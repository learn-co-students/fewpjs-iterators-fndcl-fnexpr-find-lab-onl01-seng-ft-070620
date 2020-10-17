// pry = require('pryjs');

const testVar = {}

function testFunc() {
  return "hi"
}


function superbowlWin(array) {
    const winner = array.find(obj => {
    return obj['result'] === "W"
  });

  if (winner) {
    return winner['year']
  }
}

// superbowlWin([
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
// ])