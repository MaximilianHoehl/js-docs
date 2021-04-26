console.time('Duration');
setTimeout(() => {
    console.log('Hello! :)');
}, 1);
console.log('Start');
let i = 0;
while(i<1000000){
    i++;
}
console.log('FirstDone');
i = 0;
while(i<1000000){
    i++;
}
console.log('SecondDone');
console.timeEnd('Duration');

//-> The eventloop has to wait untill the stack is completely empty