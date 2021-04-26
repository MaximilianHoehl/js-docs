function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
Person.prototype.greeting = function(){
    console.log(`Hey there, I'm ${this.firstname}`);
}
function Customer(firstname, lastname, id, phone){
    Person.call(this, firstname, lastname);         
    this.id = id;
    this.phone = phone;
}
//Since we haven't interit the prototype of Person yet, Customer can't call Person-Methods
//Let's change that!..
Customer.prototype = Object.create(Person.prototype); //Creating a copy of Person.prototype and set it as Customer.prototype
Customer.prototype.constructor = Customer;              //Setting the Customer-constructor as Customer-Prototype-Constructor

new Person('Frank', 'Müller').greeting();
new Customer('Hans-Peter', 'Bäcker', '34-76-2', '02151 435693').greeting(); //works