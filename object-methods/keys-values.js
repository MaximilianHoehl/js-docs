const user = {
    name: 'Horst',
    lastname: 'Kohn',
    age: 45,
    length: 15//cm
}
console.log(Object.keys(user));  //_> Array with all Keys
console.log(Object.values(user));    //_> Array with all Values
console.log(user.hasOwnProperty('age')); //_> True
console.log(user.hasOwnProperty('x')); //_> False

console.log(user['name']);
console.log(user.name);