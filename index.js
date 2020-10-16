const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(array)
{
  let object = array.find(function(e){return e.result === "W" })
  if(object != undefined)
  {
    return object.year
  }
  else
  {
    return object
  }
}
