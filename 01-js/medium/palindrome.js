/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  const lowerStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let left = 0;
  let right = lowerStr.length - 1;
  while (right >= left) {
    if (lowerStr[left] !== lowerStr[right]) return false;
    left += 1;
    right -= 1;
  }
  return true
}

module.exports = isPalindrome;
