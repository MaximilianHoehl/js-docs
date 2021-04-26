function xxx(){
    let print1 = function(){
        console.log(1);
    }
    print1();
}
xxx();  //_> 1

function yyy(){
    let print2 = function(){
        console.log(2);
    }
}
try{
    print2();   //_> ERROR print2 is outside of scope
}catch(e){
    console.log('print 2 was only declarated on the stack and isnt available anymore (out of scope)');
}