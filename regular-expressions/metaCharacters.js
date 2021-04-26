//define options and rules to the RE
const re = /^h/; //must start with h
re = /h$/; //must end with h
re = /h.llo/; // . is any character
re = /h*llo/; // * is any character 0 or more times
re = /gra?e?y/; // grey can be spelled with e or a
re = /^hello\?/; // this ? is a literal