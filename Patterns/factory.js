//Subclasses create instances of specific object-types of same "flavor" (example: different membership-types)

/*  
    1. Parentclass is the factory
    2. Factory contains create-method that takes a type-param (type of instance to create)
    3. This Method creates an instance based on the type-param
*/

function MemberFactory(){

    this.createMember = function(name, type){
        
        let member;
        if(type === 'Simple'){
            member = new SimpleMember(name);
        }else if(type === 'Standard'){
            member = new StandardMember(name);
        }else if(type === 'Super'){
            member = new SuperMember(name);
        }else{
            console.log(`${type} is no type`);
            return;
        }
        member.type = type;
        member.expose = function(){
            console.log(`${this.name} : ${this.cost}`);
        }
        return member;
    }
}

function SimpleMember(name){
    this.name = name;
    this.cost = '5$';
}
function StandardMember(name){
    this.name = name;
    this.cost = '15$';
}
function SuperMember(name){
    this.name = name;
    this.cost = '25$';
}

const memberfactory = new MemberFactory();
const members = [];
members.push(memberfactory.createMember('Jordan Peterson', 'Simple'));
members.push(memberfactory.createMember('Patrick Star', 'Standard'));
members.push(memberfactory.createMember('Gabby Goldfish', 'Super'));

members.forEach((member) => {
    member.expose();
});
