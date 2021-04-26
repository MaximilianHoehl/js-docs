//++ is a Function and IT AFFECTS THE ORIGINAL variable
let a = 1;
a++;    //++ is the sams as
a += 1;   //+=1

// ++i returns the incremented value; i++ returns the value BEFORE it gets incremented
const array = [1,2,3,4,5];
let i = 0;
function getAfter(arr){
    return arr[++i];    //returns the incremented value (-> same as arr[i+1])
}
function getBefore(arr){
    return arr[i++];     //returns i BEFORE it gets incremented
}

console.log(i);         //i=0
console.log(getAfter(array));     // >2 ++i returns the incremented value and we geht the first index (2)
console.log(getBefore(array));    // >2 i++ returns the orininal value and we geht still the first index(2)
console.log(array[i]);                    //now we geht the second index(3)