// Keys can be any type
const map1 = new Map(); //Constructor has to be used

//decleratoe come keys
const key1 = 'some string',
      key2 = {},
      key3 = function(){};

// Set map values by key
map1.set(key1, 'value of key1');
map1.set(key2, 'value of key2');
map1.set(key3, 'value of key3');

//GET
console.log(map1.get(key1)); //_> 'value of key1'
//Count
console.log(map1.size); //_> 3
//Loop through
for(let [key, val] of map1){
    console.log(`${key} : ${val}`);
}
//Loop Values only
for(let val of map1.values()){
    console.log(`${val}`);
}

//For Each works different on a map. Here forst 2 params are Key and val
map1.forEach((key, val) => {
    console.log(`${key} : ${val}`);
});

//Cenverted to an array it will return a nested array with key-val pairs as seperate arrays
const array = Array.from(map1);
console.log(array);