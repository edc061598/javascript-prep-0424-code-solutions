/* exported tail */
function tail(array) {
  let newArray = [];
  for (index = 1; index < array.length; index++) {
    newArray.push(array[index]);
  }
  return newArray;
}
const newArrayResult = tail(newArray);
console.log(newArrayResult);
