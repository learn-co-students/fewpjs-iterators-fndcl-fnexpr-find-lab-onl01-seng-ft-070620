
function superbowlWin(record) {
  let result = record.find( function(yearHash) { return yearHash.result === "W" } )
  return !!result ? result.year : undefined
}
