/**
 * EventObservers represent an Event and are "fired" when this event happened
 * They contain at least: 1. a fire-method; 2. a subscribe-method; 3. an unsubscribe-method
 * They also contain an array of all Listeners (Handler-functions OR Instances that contain the Handler-function)
 * (Un)Subscribe methods add/remove Handlers from the Handler-array
 * The Fire-Method loops through the array and calls each Handler
 */

function ThreeSecEvent() {
    this.handlers = [];   //contains the handler-functions or observer-instances (that contain the handler-functions)
}
ThreeSecEvent.prototype = {
    subscribe: function(handler){
        this.handlers.push(handler);
    },
    unsubscribe: function(handler){
        this.handlers = this.handlers.filter((item) => {
            if(item !== handler){
                return item;
            }
        });
    },
    fire: function(){
        this.handlers.forEach((item) => {
            item.call();
        });
    }
}
const threeSeconds = new ThreeSecEvent();
const cum = function(){
    console.log('Ooooooooh, bin gekommen');
}
const alsoCum = function() {
    console.log('Oooooh, ich auch');
}   
threeSeconds.subscribe(cum);
threeSeconds.subscribe(alsoCum);
threeSeconds.unsubscribe(alsoCum);
setTimeout(() => {
    threeSeconds.fire();
}, 3000);

//With Classes and Objects that contain the handlers
class FiveSecondsEvent{
    constructor(){
        this.observers = [];
    }
    subscribe(observer){
        this.observers.push(observer);
    }
    unsubscribe(observer){
        this.observers = this.observers.filter((item) => {
            if(this.item !== observer){
                return observer;
            }
        });
    }
    fire(){
        if(this.observers.length > 0){
            this.observers.forEach((item) => {
                item.handler();
            });
        }
    }
}
class Cock{
    constructor(length){
        this.length = length;
    }
    handler(){
        //Shows the cock length
        console.log(`My Cock has a length of ${this.length} inches!`);
    }
}
const cocks = [];
for(i in [5,5,5,5,5]){
    cocks.push(new Cock(i+5));
}
const fiveSecEv = new FiveSecondsEvent();
cocks.forEach((cock) => {
    fiveSecEv.subscribe(cock);  //Each cock gets subscribed as an event-observer
});
fiveSecEv.fire();