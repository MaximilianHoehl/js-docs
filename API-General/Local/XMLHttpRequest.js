console.log('start script');
//Its a core JS Object to fetch data in XML, plane Text or JSON

//Create requestarray and fill with empfy requests
const requests = [];
let kittendata;
for(let i = 0; i<3; i++){
    requests.push(new XMLHttpRequest)
}
//Init the Requestdata for each element - What should I load and where should I do what?
requests.forEach((req, i) => {
    let type;
    switch(i){
        case 0:
        type = 'txt'
        break;
        case 1:
        type = 'json'
        break;
        case 2:
        type = 'xml'
        break;
    }
    req.open('GET', `data.${type}`, true);
    if(type === 'json'){
        req.onload = function () {
            if(this.status === 200){
                console.log(this.responseText);
                kittendata = JSON.parse(this.responseText);
                printData();
            }else{
                console.log(this.status)
            }
        }
    }else{
        req.onload = function () {
            if(this.status === 200){
                console.log(this.responseText);
            }else{
                console.log(this.status)
            }
        }
    }

});
//Send all the requests
requests.forEach((req) => {
    req.send();
});

function printData(){
    kittendata.Kitten.forEach((kitten) => {
        let id = kitten.id
        let weight = kitten.weight
        console.log(`${id}: ${weight}`)
    })
}
