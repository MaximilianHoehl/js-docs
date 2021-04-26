const arr = [1,2,3,4];
//Same as reduce but iterates from the right
const res = arr.reduceRight((a,c) => {return a-c}, 0);
console.log(res); //_> -10