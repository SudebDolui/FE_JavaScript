"use strict";

console.log("Looping concepts start here");

// ---> Basic Loops

/*
    * While Loop:
    * Syntax:
    * while(condition) {
    *   code (Some action)
    * }
*/

    console.log('While Loop');
    
    let i = 0;
    while(i<3) {
        console.log(i++);
    }

    i = 3;
    while(i) console.log(i--);

/*
    * do while Loop:
    * Syntax:
    * do {
    *   loop body
    * } while (condition); 
*/

    console.log('Do While Loop');

    i = 0;
    do {
        console.log(i++);
    } while (i<3);

/*
    * for Loop
    * Syntax:
    * for (begin; condition; step) {
    * ... loop body ...
    * }
*/

    console.log('For Loop');

    for(let i = 0; i<3; i++) {
        console.log(i);
    }

    for(let i = 0; i<3; i++) console.log(i);

    // -> When declaration and step is skipped

    i=0;
    for(; i<3;) {
        console.log(i++);
    }

    /*
    * Infinite Loop
    * for(;;)
    */

// ---> Breaking Loops

    i = 0;
    while (true) {
        if (i>3) break;
        console.log(i++);
    }

// ---> Continue to the next iteration

    for (let i = 0; i < 10; i++) {
        // if true, skip the remaining part of the body
        if (i % 2 == 0) continue;
        console.log(i); // 1, then 3, 5, 7, 9
    }

/*
    Note: No break/continue to the right side of ‘?’
    -> Please note that syntax constructs that are not expressions cannot be used with the ternary operator ?. In particular, directives such as break/continue aren’t allowed there.

    ---> (i > 5) ? alert(i) : continue; // continue isn't allowed here
*/

// ---> Labels for break/continue

    /*
    * Syntax:
    * labelName: 
    * for (...) {
    *    ...
    *  }
    */

    outer: for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            let input = prompt(`Value at coords (${i},${j})`, '');
            // if an empty string or canceled, then break out of both loops
            if (!input) break outer;
            // do something with the value...
        }
    }

// ---> Advanced Loops

    /*
    * for of loop
    * It is used to Loop Arrays
    */

    for(const loop of ['for', 'while', 'do while']) {
        console.log(loop);
    }

    /*
    * for in loop
    * It is used to Loop Object
    */

    for(const obj in {'loops': ['for', 'while', 'do while'], 'conditional': ['if', 'else if', 'else']}) {
        console.log(obj); // -> It returns the keys
    }

console.log("Looping concepts ends here");
