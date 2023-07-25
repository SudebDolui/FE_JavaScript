'use strict';

const createBooking = function ( flightNum, numPassenger, price ) {
    flightNum = 'A37',
    numPassenger = 10
}

const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting}, ${name}.`);
    }
}

const greeterFunction = greet('Hello');
greeterFunction('Sohan')

// console.log(greet('Hi')('Sudeb')); returns undefined.

greet('Hi')('Sudeb');

function sudeb (name) {
    console.log(`Hello ${name}`);
}

sudeb('sudeb');