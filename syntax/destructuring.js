//Destructuring via array
[a, b] = [1,2,3,4,5];
console.log(a, b);  //_> 1 2
//Rest pattern
[a, b, ...rest] = [1,2,3,4,5];
console.log(rest); //_> [3,4,5]

function getNumbers(){return [12,13,14,15]}
[first, second] = getNumbers();
console.log(second); //_> 13


//Destructuring via Objects (Since ES6)
({ a, b, ...rest } = { a: 1, b: 'two', c: 123, d: function(){return 6}})
console.log(a, b);  //_> 1 'two'
console.log(rest);  //_> { c: 123, d: [Function: d] }

const person = {
    name: 'John Doe',
    age: 66,
    city: 'Krime Cinty',
    gener: 'Male'
}

const {name, age} = person;
console.log(age); //_> 66