const http = new EasyHTTP;

//GET
// http.get('https://jsonplaceholder.typicode.com/posts', (err, res) => {
//     if(!err){
//         console.log(res);
//     }else{
//         console.log(err);
//     }
// });

//Create data
const data = {
    title: 'Custom Post',
    body: 'Hey there!!'
}

//POST
// http.post('https://jsonplaceholder.typicode.com/posts', data)
//     .then((res) => {console.log(res);})
//     .catch((err) => {console.log(err)});

//PUT
http.put('https://jsonplaceholder.typicode.com/posts/1', data, (err, res) => {
    if(err){
        console.log(err);
    }else{
        console.log(res);
    }
});

//DELETE
http.delete('https://jsonplaceholder.typicode.com/posts/1', (err, res) => {
    if(!err){
        console.log(res);
    }else{
        console.log(err);
    }
});