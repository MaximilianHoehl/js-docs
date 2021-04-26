const user = {
    firstname: 'Hannes',
    lastname: 'Peterson',
    level: 16
}

for (let key in user){  //user[key] to get the value
    console.log(`Key: ${key}, Value: ${user[key]}`);
}

function Artikel(id, name, cost, price){
    this.id = id;
    this.name = name;
    this.cost = cost;
    this.price = price;
}
const articles = [];
for(let iteration in [3,3,3]){
    articles.push(new Artikel(123, 'testarticle', 10, 30));
}
articles.push(new Artikel(101010, 'Glasses', 5, 50));

articles.forEach(e => {
    console.log('----');
    for(let key in e){
        console.log(`myKey: ${key}\nmyVal: ${e[key]}`);
    }
    console.log('----');
});