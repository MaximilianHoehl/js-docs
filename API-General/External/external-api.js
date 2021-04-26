console.log('start script')

let res;
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://api.icndb.com/jokes/random/5');

xhr.onload = function () {
    res = JSON.parse(this.responseText);
    printJokes();
}

xhr.send();

function printJokes(){
    res.value.forEach((joke) => {
        console.log(joke.joke)
    })
}