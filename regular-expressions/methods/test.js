//executes a RE based on argument
const re = /hitler/i; //hitler - not case sensitive
const comment = 'Hitler did nothing wrong';

const result = re.test(comment);
console.log(result);

//Example
if(re.exec(comment) != null){
    //block comment
}