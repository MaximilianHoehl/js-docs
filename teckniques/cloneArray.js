//Write a JavaScript function to check whether an `input` is an array or not
const arr1 = [1,2,3, [4, 5]];

function cloneArr(arr){
    let clonedArr = [];
    arr.forEach(element => {
        clonedArr.push(element);
    });
    return clonedArr;
}
function cloneArr2(arr){
    return arr1.slice(0);
}

//Write a JavaScript function to get the first element of an array. Passing a parameter 'n' will return the first 'n' elements of the array.
function first(arr, n){
    if(!n){
        n = 1;
    }
    let functArr = [];
    for (let i=0; i<n; i++){
        functArr.push(arr[i]);
    }
    return functArr;
}

function joinit(arr, str){
    return arr.join(str);
}
//EXE
const arrE = [];
//console.log(cloneArr(arr1));
//console.log(first(arrE));
console.log(joinit(arr1, ', '));