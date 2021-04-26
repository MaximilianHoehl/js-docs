let primitive = 0;
let complex = [0];

function incrementPrimitive(primitive){
    return primitive++;
}
function incrementComplex(complex){
    return complex[0]++;
}

incrementPrimitive(primitive);  
incrementComplex(complex);
console.log(primitive); //still 0 -> passed by value
console.log(complex[0]);    //incremented -> passed by reference