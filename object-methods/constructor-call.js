function Person(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
}
//Die call() methode ermöglicht das Aufrufen eines anderen contructors
function Customer(firstname, lastname, id, phone){
    Person.call(this, firstname, lastname);         
    this.id = id;
    this.phone = phone;
}
customer1 = new Customer('Peter', 'Arbeitsloser', '335-876-45', '03237 5459030');
console.log(customer1);