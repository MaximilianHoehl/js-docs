function arrayIterator(array){
    let nextIndex = 0;

    return {
        next: function(){
            return nextIndex < array.length ? 
            { value: array[nextIndex++], done: false } :
            { done: true }
        }
    }
}

const array = ['Hey ', 'there, ', 'Im ', 'totally ', 'gay!'];
const elements = arrayIterator(array);  //Iterator has to be passed into a variable before iterating 
console.log(elements.next());
console.log(elements.next());
console.log(elements.next());
console.log(elements.next());
console.log(elements.next());
console.log(elements.next());

//The variable nextIndex is local but saved into the heap becourse of the initialization of "elements" 
