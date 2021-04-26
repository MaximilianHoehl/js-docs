//the keyword "async" lets a function return a promise. So every function return will be returned as the resolve-argument
async function dosth(){
    return 'did something';
}
console.log(dosth());   //will return a Promise

//AWAIT is only another syntax for .then:   await data == data.then()
//the keyword await will tell to wait untill a specific PROMISE is resolved
//await will only work INSIDE of an async function

async function fetchSomeData(){ //will return a Promise with return-data as resolve-data
    let data = new Promise((res, rej) => {  //a Promise with fetched data
        setTimeout(() => {
            res('Hello');
        }, 1000);
    });
    
    return await data;  //will wait until the Promise with fetched data is resolved, then return the resolve-data of async-Promise
}

fetchSomeData()
    .then(res => console.log(res));