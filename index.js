// code your solution here

function superbowlWin(record) {
    let result1=record.find(elem=>elem.result==="W");
    return result1?result1.year:undefined;
  }
  