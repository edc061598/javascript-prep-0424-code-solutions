/* exported reverse */
function reverse(array) {
  let newArray = [];
  for (index = array.length - 1; index >= 0; index--) {
    newArray.push(array[index]);
  }
  return newArray;
}
