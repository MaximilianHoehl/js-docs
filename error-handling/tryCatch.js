val = false;
name = false;
try{
     if(!val){
         throw 'variable does not exist';   //this will be passed as the e in catch
     }
}catch (e){
    console.log(e);
}finally{
    console.log('this runs finally');
}

try{
    if(!name){
        throw new SyntaxError('This name does not exist');   //you can also create custom Errors (->docs)
    }
}catch (e){
   //console.log(e);
   console.log(e.name);     //SyntaxError
   console.log(e.message);  //This name does not exist
}finally{
    console.log('this runs finally');
}