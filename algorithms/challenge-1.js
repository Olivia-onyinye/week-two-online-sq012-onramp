function isAnagram(str1, str2) {
 // return str1.split("").sort().join("") === str2.split("").sort().join("");
   if (str1.length !== str2.length) {
    return false;
  }
  //Sort the two strings
  var s1 = str1.split("").sort().join("");
  var s2 = str2.split("").sort().join("");
  //Compare the two sorted strings
  return s1 === s2;
}
module.exports = isAnagram
