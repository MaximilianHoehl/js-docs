//Array.from    -> turns array-like elements into arrays
const name = 'Diter';
const nameArray = Array.from(name);
console.log(nameArray);

//expamples
const num = [1,2,3,4];
const numArrFrom = Array.from(num, x => x*2);
const numArrMap = num.map(x => x*2);
console.log(numArrFrom);
console.log(numArrMap);
