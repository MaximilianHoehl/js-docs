const array = [1,2,3,4,5,6,7];
let val;

//map creates a new array based on a rule
const mult_with_2 = array.map(num => num * 2); //rule = every element * 2
val = mult_with_2;
//console.log(val);

//further expamples
const objects = [
    {id: 123, name: 'John'},
    {id: 456, name: 'Debby'},
    {id: 789, name: 'Diter'}
]
let ids = objects.map(function(user){return user.id;}); //map returns an array based on a rule BUT don't has to be applied to an array
ids = objects.map(user => user.id);
ids = objects.map((user) => user.id);
ids = objects.map((user) => {return user.id});
ids = objects.map(user => {return user.id});
val = ids;

console.log(val);