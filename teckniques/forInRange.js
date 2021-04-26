function Diter(){
    this.name = 'Diter'
}
test = [];
for (let i in [4,4,4,4]){   //loops 4 times
    test.push(new Diter());
}
console.log(test);