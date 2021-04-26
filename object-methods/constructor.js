//constructor is a "normal" fuction with capital letter (convention)
function User(name, level, coins){
    this.name = name;
    this.level = level;
    this.coins = coins;
    this.setCoins = function(amount){this.coins = amount};
}
//the new object will now be created by the keyword "new", which uses the constructor-function to create the new object
const users = [];

function createNewUser(name, level, coins){
    users.push(new User(name, level, coins));
    console.log('done.');
}
users.forEach(user => {
    if(user.name === 'Uwe'){
        user.setCoins(5000);
    }
});
console.log(users);