const arr = ['hey', 'there', ':)'];
// join() joins array to single string and seperates is with argument. If no argument passed, its seperated by komma 
const res1 = arr.join(); //, by default if no argument gets passed
console.log(res1); //_> hey,there,:)
const res2 = arr.join(' ');
console.log(res2); //_> hey there :)
const nums = [1,2,3,4];
console.log(nums.join('..')); //_> 1..2..3..4