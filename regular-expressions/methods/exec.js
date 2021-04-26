//executes a RE based on argument
const re = /e/; //e - not case sensitive
const text = 'Hey there, this is text to analyse';

const result = re.exec(text);
console.log(result);
