const arr = [3,7,6,9,24,67,3];
//inserts and removes elements. Affects the read array! ; returns the removed elements as array
const spliced = arr.splice(2, 1); //splice(index, remove, insert);
console.log(arr);

// const arr2 = ['Hey', 'there', 'im', 'gay'];
// arr2.splice(2, 0, ', ')
// arr2.splice(4, 0, 'totally'); 
// console.log(arr2.join(' ')); // Hey there, im totally gay
// arr2.splice(4, 1, 'absolutely'); 
// console.log(arr2.join(' ')); // Hey there, im absolutely gay