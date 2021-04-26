for(i in arr){}         -> i represents the index
for(i of arr){}         -> i represents the element
Strings are iteratable  -> string[i]
parseInt(string)
String(num)
const clonedArr = originArr.slice(0);   -> smooth workaround to generate a clone of array

const numArrFrom = Array.from(num, x => x*2);   -> Array.from can be used like .map()
const numArrMap = num.map(x => x*2);            -> Makes no difference

string.slice(n) -> slice can be applied on strings
sting.split(x)  -> split can be applied on strings

.foreach((element, index, array) => {});

Über Funktionen erstellte Klassen müssen immer mit this.var = val;.. initialisiert werden 