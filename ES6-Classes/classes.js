//like in any other language
class Person {
    constructor(firstname, lastname){       //cunstructor gets defined with keyword
        this.firstname = firstname;         //-> it creates a constructor-function as if we were working with objects
        this.lastname = lastname;
        personNum++;
    }
    static personNum;
    greeting(){                             //Methods don't need a function-keyword
        console.log(`Hey there, I'm ${this.firstname}`);    //Methods we add here will automaticly be added into the prototype!
    }
    static getPersonNum(){                  //also static methods are possible
        return this.personNum;
    }
}
let peter = new Person('Peter', 'Lustig');
let diter = new Person('Diter', 'Dashboard');
let jenny = new Person('Jenny', 'Smith');
jenny.greeting();
console.log(Person.getPersonNum());
