"use strict";

console.log("Debounce concepts start here");

const input = document.getElementById('debounceInput');

function debounce(func, delay) {
    let timer = null;

    return (...arg) => {
        if(timer) clearTimeout(timer);
        timer = setTimeout(() => {
            func(...arg);
            timer = null;
        }, delay);
    }
}

function log(msg) {
    console.log('Enterd Input is', msg);
}

const debouncer = debounce(log, 700);

input.addEventListener('input', (event) => {
    debouncer(event.target.value);
})

function fun() {
    console.log('This is a function')
}

console.log("Debounce concepts ends here");
