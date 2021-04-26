const util = require('util');

module.exports = {
    print: function(obj, depth, msg){
        if(msg){
            console.log(msg + ': ' + util.inspect(obj, {showHidden: false, depth: depth?depth:10}));
        }else{
            console.log(util.inspect(obj, {showHidden: false, depth: depth?depth:10}));
        }
    }
}