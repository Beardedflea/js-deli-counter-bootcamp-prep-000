
function takeANumber(line){
  line.push();
  return 'You are number ' +  + '.';
}
// [56, 57, 58, 59, 60]
function nowServing(line){
  if (line.length === 0){
  return "There is nobody waiting to be served!";
  }
  else{
    return "Currently serving " + line.shift() + ".";
  }
}

function currentLine(line){
  if(line.length === 0){
    return "The line is currently empty.";
  }
  else{
    let i;
    let j = 1;
    var lineList = "The line is currently: ";
    for(i = 0; i < line.length; i++){
      lineList += j + ". " + line[i] + ", ";
        j++;
      }
  }
    return lineList.slice(0, -2);
}