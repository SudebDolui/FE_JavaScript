// ! Strict is must.
'use strict';

// *Guess The Number Game HTML File.
/*
 <body>
    <header>
      <h1>Guess My Number!</h1>
      <p class="between">(Between 1 and 20)</p>
      <button class="btn again">Again!</button>
      <div class="number">?</div>
    </header>
    <main>
      <section class="left">
        <input type="number" class="guess" />
        <button class="btn check">Check!</button>
      </section>
      <section class="right">
        <p class="message">Start guessing...</p>
        <p class="label-score">💯 Score: <span class="score">20</span></p>
        <p class="label-highscore">
          🥇 Highscore: <span class="highscore">0</span>
        </p>
      </section>
    </main>
    <script src="script.js"></script>
  </body>
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;

let message = (message) => document.querySelector('.message').textContent = message ;

function displayScore(score) {
    document.querySelector('.score').textContent = score;
}
// document.querySelector('.number').textContent = secretNumber; // Just a test.
// console.log(secretNumber); // Just a test.

document.querySelector('.check').addEventListener('click', function() {
        const guess = Number(document.querySelector('.guess').value);

        if(score >= 1) {
          if(!guess){
              displayScore(score--);
              message('No Number is Entered ⚠️') ;
          } else if( guess === secretNumber) {
              displayScore(score);
              message('Hurray Correct Number 🥳') ;
              document.querySelector('body').style.backgroundColor = '#60b347';
              document.querySelector('.number').textContent = secretNumber ;
              document.querySelector('.number').style.width = "30rem"
              if(score > highscore) {
                highscore = score;
                  document.querySelector('.highscore').textContent = highscore ;
              }
          } else if(guess) {
              displayScore(score--);
              message( guess > secretNumber ? 'Number Too High 📉' : 'Number Too low 📈' )
          }
        } else if ( score <= 0) {
          displayScore(score);
          message('You lost the game 🤦‍♂️');
        }
        // console.log(secretNumber,guess, typeof(guess), typeof(secretNumber)) ; // Just a check
})

document.querySelector('.again').addEventListener('click', function() {
  secretNumber = Math.trunc(Math.random() * 20 + 1);
  score = 20;
  message('Start guessing ....');
  displayScore(score);
  document.querySelector('.number').textContent = '?' ;
  document.querySelector('body').style.backgroundColor = '#222' ;
  document.querySelector('.number').style.width = '15rem';
})