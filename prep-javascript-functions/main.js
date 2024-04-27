function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
const sum = addTwoNumbers(10, 10);
console.log(sum);

function convertHoursToMinutes(hours) {
  const minutes = hours * 60;
  return minutes;
}
const convertHoursToMinutesResult = convertHoursToMinutes(2);
console.log(convertHoursToMinutesResult);

function getGreeting(name) {
  const greetings = 'Hello' + ' ' + name;
  return greetings;
}
const getGreetingResult = getGreeting('World!');
console.log(getGreetingResult);

function addAndMultiplyBy5(num1, num2) {
  sumTimesFive = (num1 + num2) * 5;
  return sumTimesFive;
}
const sumTimesFiveResult = addAndMultiplyBy5(3, 2);
console.log(sumTimesFiveResult);

function multiplyAndDivideBy5(num1, num2) {
  productDividedByFive = (num1 * num2) / 5;
  return productDividedByFive;
}
const productDividedByFiveResult = multiplyAndDivideBy5(20, 20);
console.log(productDividedByFiveResult);

function subtractTwoNumbers(num1, num2) {
  productDifference = num1 - num2;
  return productDifference;
}
const productDifferenceResult = subtractTwoNumbers(22, 7);
console.log(productDifferenceResult);

function getCircleCircumference(radius) {
  radiusEquation = 2 * 3.14 * radius;
  return radiusEquation;
}
const circumference = getCircleCircumference(2);
console.log(circumference);

function getFullName(firstName, lastName) {
  name = firstName + ' ' + lastName;
  return name;
}
const fullName = getFullName('Johnny', 'Depp');
console.log(fullName);

function cube(number) {
  cubeValue = number * number * number;
  return cubeValue;
}
const cubed = cube(5);
console.log(cubed);
