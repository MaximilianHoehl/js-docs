/*
Alternative way to create an Object in JS
Object.create(PROTOTYPE, PROPERTIES)
*/
myPrototype = {
    getX: function(){
        return this.x;
    },
    getY(){
        return this.y;
    },
    setZ(z){
        this.z = z; 
    }
}

const obj = Object.create(myPrototype);
obj.x = 33;
console.log(obj.getX());
