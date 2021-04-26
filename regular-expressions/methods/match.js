//opposite of exec
const re = /there/i; //e - not case sensitive
const text = 'Hey there, this is text to analyse';

const res = text.match(re);
console.log(res);
