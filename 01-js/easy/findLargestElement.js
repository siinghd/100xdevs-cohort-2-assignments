/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

// function findLargestElement(numbers) {
//   return Math.max(...numbers);
// }

function findLargestElement(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i += 1) {
    if (largest < numbers[i]) {
      largest = numbers[i];
    }
  }
  return largest;
}
module.exports = findLargestElement;
