let functions = [];
for(i in [4,4,4,4]){
   
    functions.push(function(){
        console.log('Hey, Im index ' + i);
    });
    functions[functions.length - 1].call();
}
console.log('---');
functions.forEach((func) => {
    func.call();
});