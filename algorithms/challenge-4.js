function replaceDivisible(x, y) {
 let newArr = []

      for (let i = 0; i < x.length; i++){
        if (x[i] % y === 0){
            x[i] = "isDivisible";
        }
        newArr.push(x[i]);
      } 
     return newArr;   
}
module.exports = replaceDivisible
