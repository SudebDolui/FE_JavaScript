'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


const lotteryPromise = new Promise(function (resolve, reject) {
    console.log('Lottery draw is happening 🔮');
    setTimeout(function () {
      if (Math.random() >= 0.5) {
        resolve('You WIN 💰');
      } else {
        reject(new Error('You lost your money 💩'));
      }
    }, 2000);
  });
  
  lotteryPromise.then(res => console.log(res)).catch(err => console.error(err));
  