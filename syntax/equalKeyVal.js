function getsObj(){
    const key1 = 100;
    const key2 = 200;
    const key3 = '300';
    return {
        key1,
        key2,
        key3       //In ES6 you can just write key and value as one word if they have the same name
    }
}
function alsoGetsObj(){
    const key1 = 100;
    const key2 = 200;
    const key3 = '300';
    return {
        key1: key1,
        key2: key2,
        key3: key3  //makes no difference to the common way
    }
}
console.log(getsObj());
console.log(alsoGetsObj());

console.log(getsObj().key2); //>_ 200