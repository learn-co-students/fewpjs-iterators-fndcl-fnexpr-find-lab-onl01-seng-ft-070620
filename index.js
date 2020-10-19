// const record = [
//   {year: "2018", result: "L"},
//   {year: "2017", result: "W"},
//   {year: "2016", result: "N/A"}
//   //...
// ]

function superbowlWin(record) {
  let outcome = record.find(element => element.result === "W")
debugger  
return !!outcome ? outcome.year : undefined
}

// OR
// superbowlWin = (record) => {
//   let result = record.find( record => record.result === "W" )
//   return !!result ? result.year : undefined
// }
