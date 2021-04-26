// returns new string of mattern with replace option
const str = 'Ach du Scheiße..';
const re = /scheiße/i;
const newStr = str.replace(re, 'Kacke');

console.log(newStr);