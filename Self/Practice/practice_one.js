"use strict";

/* 
------> Console log statements starts here <------ 
*/

debugger; // ----> It is used to debug the code from the line where it was declared.

console.log("This is a generic console message and variables can be check after placing , after the double quotes");
console.clear() // ----> This clears the consoles that were given till here.
console.assert(null === '' | 'The condition is false'); // ----> It checks for condition.
console.group('Console Group Starts here'); // ----> Console group statement starts here.
console.log('Console Group one Starts here');
console.groupCollapsed('Console Group Collapsed here'); // ----> Console group statement starts here.
console.log('Console Group Two Starts here');
console.groupEnd(); // ----> Console group statement Ends here.
console.log('Console Group One Resumes here');
console.groupEnd(); // ----> Console group statement Ends here.
console.table([
    {'Name': 'Name One', 'Id': 0},
    {'Name': 'Name Two', 'Id': 1},
    {'Name': 'Name Three', 'Id': 2},
    {'Name': 'Name Four', 'Id': 3},
]);

/* 
------> Console log statements ends here <------ 
*/

/* 
------> Closures concept starts here <------ 
*/

let externalClosureVar = 5;

function testClosure() {
    let internalClosureVar = 0;
    function check() {return internalClosureVar++};
    return check();
}

console.log("-----> Testing function[testClosure] Starts Here <-----");
console.log("It Returns function", testClosure);
console.log("It Returns function and calls it", testClosure());
console.log("It Returns function and calls it", testClosure());
console.log("-----> Testing function[testClosure] Ends Here <-----");

function testClosureOne() {
    let internalClosureVar = 0;
    return function() {return internalClosureVar++};
}

console.log("-----> Testing function[testClosureOne] Starts Here <-----");
console.log('It returns the function', testClosureOne);
console.log('It calls the function for the first time', testClosureOne());
console.log('It calls the function with anonymous', testClosureOne()());
console.log('It calls the function with anonymous 2nd Time', testClosureOne()());
console.log("-----> Testing function[testClosureOne] Ends Here <-----");

const testClosureTwo = (function () {
    let internalClosureVar = 0;
    return function (){return internalClosureVar++};
}());

console.log("-----> Testing function[testClosureTwo] Starts Here <-----");
console.log("It Returns function", testClosureTwo);
console.log("It Returns function and calls it", testClosureTwo());
console.log("It Returns function and calls it 2nd Time", testClosureTwo());
console.log("It Returns function and calls it 3rd Time", testClosureTwo());
console.log("-----> Testing function[testClosureTwo] Ends Here <-----");


function customLoop(number = 0) {
    console.log('Loop Number', number);
    return number ? customLoop(--number) : console.log('Loop Ended');
    //@ if(number) {return customLoop(number--)} //! It returns an infinite loop.
};

console.log("-----> Testing Recursion Starts Here <-----");
console.log('Call loop 3 times', customLoop(3));
console.log('Call loop 0 times', customLoop());
console.log("-----> Testing Recursions Ends Here <-----");

/* 
------> Closures concept ends here <------ 
*/

/* 
------> IIFE(Immediately Invoke Function Expression also known as self executing anonymous function) concept starts here <------ 
*/



/* 
------> IIFE(Immediately Invoke Function Expression) concept ends here <------ 
*/


// console.log("-----> Starts Here <-----");
// console.log("-----> Ends Here <-----");
