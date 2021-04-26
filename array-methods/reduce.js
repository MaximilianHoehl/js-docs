const arr = [1,2,3,4]

const sum = arr.reduce((a, c) => { // a = accumulator, c = current Value
    return a + c;   //rule
}, 0);  //accumulator = 0 initial
console.log (sum);

//examples