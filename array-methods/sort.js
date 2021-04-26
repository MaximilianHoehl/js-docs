const arr = [4,6,2,3,5,1];
//sort      -> sorts elements ascending or descending; according the rule
const descOrder = arr.sort((a, b) => a > b ? -1 : 1); // if fits consititon: -1 sets element to the left, 1 to the right 
console.log (descOrder);
const ascendOrder = arr.sort((a, b) => a > b ? 1 : -1);
console.log(ascendOrder);

//examples
console.log('_____');
const array = [4,6,2,3,5,1];
const topDown = array.sort((a, b) => a > b ? -1 : 1);
const bottomUp = array.sort((a, b) => a > b ? 1 : -1);
//console.log(array);
console.log(topDown);
console.log(bottomUp);