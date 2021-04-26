const itemCtrl = (function () {
    let data = [];

    function add(item){
        data.push(item);
        console.log('added..');
    }

    function get(id){
        return data.find(item => {
            return item.id === id;
        });
    }

    return{
        add: add,
        get: get
    }

})();

itemCtrl.add({ id: 123, name: 'Johnny' });
console.log(itemCtrl.get(123)); //_> added.. { id: 123, name: 'Johnny' }