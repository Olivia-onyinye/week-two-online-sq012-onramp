function isPalindrome(line) {
let str = line.toString();
    let reverseString = str.split("").reverse().join("");
    if (str === reverseString) {
      return true;
    } else {
      return false;
    }
}
module.exports = isPalindrome
