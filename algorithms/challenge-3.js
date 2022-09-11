function missingNumber(numArr) {
     let missingArr = [];    
  if (numArr.length === 9) {
      return false;
    }  
    for (let i = 1; i <= 9; i++) {
      if (!numArr.includes(i)) {
        missingArr.push(i);
      }
    }
    if (missingArr.length === 1) {
      return missingArr[0];
    }
    return missingArr;
}
module.exports = missingNumber
