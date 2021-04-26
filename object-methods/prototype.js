//Every JS Object holds a protorype property that contains the constructor-method by default
//Object-methods that do not change per instance should be assigned to the Object.prototype
//-> The Object interits by its prototype
function User(name, level){
    this.name = name;
    this.level = level;
}
User.prototype.getLevel = function(){       //You can only get the prototype over the constructor function! Not over the instance user1 
    return this.level;
}
const user1 = new User('Horst', 23);
console.log(user1.getLevel());  //log-> 23