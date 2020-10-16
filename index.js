function superbowlWin(arr) {
  let season = arr.find(element => element["result"] === "W")
  return (season ? season["year"] : undefined)
}
