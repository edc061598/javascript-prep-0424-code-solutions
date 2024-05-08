/* exported reverseWord */
function reverseWord(word) {
  let reverseOrder = [];
  for (index = word.length - 1; index >= 0; index--) {
    reverseOrder += word[index];
  }
  return reverseOrder;
}
