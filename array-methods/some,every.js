const arr = [1,2,3,4,5,6,7];

//some      -> checks if at least one item of array fulfills the condition
const atLeastOneLargeNum = arr.some(num => num > 10);
console.log(atLeastOneLargeNum); //_> false

//every     -> checks if every element of array matches condition
const everyElementSmall = arr.every(num => num < 10);
console.log(everyElementSmall); //_> true