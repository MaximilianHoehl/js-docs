// unique
const set1 = new Set();

//add values
set1.add(100);
set1.add('string');
set1.add({name: 'John'});

console.log(set1);

//Init faster
const set2 = new Set([1, 'two', {val: 3}]); //pass an array
console.log(set2); //_> Set { 1, 'two', { val: 3 } }

//Get count
console.log(set2.size); //_> 3

//Check values
console.log(set2.has(1));   //_> true

//Delete
set2.delete(1);
console.log(set2); //_> Set { 'two', { val: 3 } }
