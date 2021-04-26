/**
 * Immediately-invoked Function Expressions
 * ----------------------------------------
 * 
 * Get called immediatly when they are created.
 * You dont charge the clobal object and you can separate variables
 * Good pactise to invoke main functionallity after setting up your
 * global stuff
 */

(function(){
    /**
     * Do stuff here
     * You also coud pass parameters from global object
     */
})()

(() => {
    //arrowfunctions are also possible
})()

(async () => {
    /**
     * Could also be useful to invoke async code at the beginning
     */
})()

