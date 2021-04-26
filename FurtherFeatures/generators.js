//Are similar to iterators

function* idGenerator(){
    let id = 0;

    while(true){
        yield id++;
    }
}

const createIDs = idGenerator();

console.log(createIDs.next());  
console.log(createIDs.next());
console.log(createIDs.next());
console.log(createIDs.next());
