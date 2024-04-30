// create your loops here.
function whileLoop1() {
  let index = 0;
  const numbersArray = [];
  while (index < 10) {
    numbersArray.push(index);
    index++;
  }
  return numbersArray;
}
const whileLoop1Result = whileLoop1();
console.log(whileLoop1Result);

function whileLoop2() {
  let index = 0;
  const newArray = [];
  while (index < 20) {
    newArray.push(index);
    index = index + 2;
  }
  return newArray;
}
const whileLoop2Result = whileLoop2();
console.log(whileLoop2Result);

function forLoop1() {
  const forArray = [];
  for (let index = 0; index < 10; index++) {
    forArray.push(index);
  }
  return forArray;
}
const forLoop1Result = forLoop1();
console.log(forLoop1Result);

function forLoop2() {
  for (let index = 100; index > 0; index--) {
    console.log('Time til explosion ' + index + '!');
  }
}
forLoop2();

const person = {
  name: 'Ada LoveLace',
  age: 'classic',
  hobby: 'computation',
  invention: 'analytical engine',
};

function forInLoop1(object) {
  const newArray = [];
  for (const key in person) {
    newArray.push(key);
  }
  return newArray;
}
const forinLoop1Result = forInLoop1(person);
console.log(forinLoop1Result);

function forInLoop2(object) {
  const newArray = [];
  for (const key in person) {
    newArray.push(person[key]);
  }
  return newArray;
}
forInLoop2Result = forInLoop2(person);
console.log(forInLoop2Result);
