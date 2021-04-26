//Standard module Pattern
const xyzController = (function () {    //whole module is inside of an IIFE function so it gets executed first (before setup)
    let data1 = 23;
    let data2 = 54;

    const calcData = function(){
        console.log(data1+data2);
    }

    return {                            //this IIFE returns functions to interact with the module
        calc: function(){
            calcData();
            console.log('Done.');
        }
    }
})();

xyzController.calc();   //_> 77 Done.