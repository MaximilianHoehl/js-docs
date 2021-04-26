/**
 * Mediator is some kind of interface that works with instances that want to interact in some way
 * Example could be a Chatroom where the chatroom itself is the Mediator and the Users are the Instances that want to interact
 */

const User = function(name) {
    this.name = name;
    this.chatroom = null;
}
User.prototype = {
    send: function(msg, to){
        this.chatroom.send(msg, this, to);
    },
    recieve: function(msg, from){
        console.log(`${from.name} to ${this.name}: ${msg}`);
    }
}
const Chatroom = function(){
    let users = {};

    return {
        register: function(user){
            users[user.name] = user;
            user.chatroom = this;
            console.log(`${user.name} is now registered.`);
        },
        send: function(msg, from, to){
            users[to.name].recieve(msg, from);
        }
    }
}
const room = new Chatroom();
const userIterator = function(){
    let i = 0;
    let names = ['maxitonic', 'CyberTiger', 'GeilerGomez69'];
    return{
        createUser: function(){
            if(i>=names.length){
                i = 0;
            }
            return new User(names[i++]);
        }
    }
}
const usersArr = [];
const userGenerator = userIterator();
for(i in [4,4,4,4]){
    usersArr.push(userGenerator.createUser());
}
usersArr.forEach((user) => {
    room.register(user);
});
usersArr[0].send('Hi, ich bin neu hier..', usersArr[1]);
usersArr[1].send('Wilkommen im Lager!', usersArr[0]);