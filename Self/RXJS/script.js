'use strict';

const h3 = document.getElementById('h3');
const content = document.getElementById('content');
const button1 = document.getElementById('button1');

h3.innerText = 'Welcome to RXJS';

button1.addEventListener('click', () => {content.innerText='Button was Clicked.'})