const array = [1,2,3,4,5,6,7,8,9];
//AFFECTS THE ORIGINAL ARRAY 
//Shifts the array to the left; removes and retruns the first array element
const removed = array.shift();
console.log(array); //_> [ 2, 3, 4, 5, 6, 7, 8, 9 ]
console.log(removed); //_> 1
//unshift   -> shifts the array to the right. Takes as argunment the element that should be places on index 0
array.unshift(1);
console.log(array); //_> [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

let counter = 0;
let process = setInterval(() => {
    let shifted = array.shift();
    array.push(shifted);
    console.log(array);
    counter++;
    if(counter > 50){
        clearInterval(process);
    }
}, 100);