const testVar = {}

function superbowlWin(chiefsHistory) {
  let win = chiefsHistory.find(y => y.result === 'W')
  if (win) {return win.year}
}
