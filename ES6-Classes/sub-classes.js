class Person {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    greeting(){
        return `Hello there, I'm ${this.firstName}`;
    }
}

class Customer extends Person {
    constructor(firstName, lastName, phone, membership){
        super(firstName, lastName);                         //calls the parent constructor

        this.phone = phone;
        this.membership = membership;
    }
}

const john = new Customer('John', 'Doe', '555-444-333', true);
console.log(john.greeting());