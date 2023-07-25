'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
  ],
  currency: "EUR",
  locale: "pt-PT", // de-D
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    "2019-11-08T13:15:33.035Z",
    "2019-11-29T09:48:16.867Z",
    "2019-12-23T06:04:23.907Z",
    "2020-01-21T14:18:46.235Z",
    "2020-02-01T16:33:06.386Z",
    "2020-04-12T14:43:26.374Z",
    "2020-06-23T18:49:59.371Z",
    "2020-07-28T12:01:20.894Z",
  ],
  currency: "USD",
  locale: "en-US",
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  currency: "EUR",
  locale: "pt-PT",
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

const rupeeToDollar = 74.36 // As of 17 November 2021

//////////////////////////////////////////////////////////////////////
// Functions

containerApp.style.opacity = 100;

const formatCurrency = (value, currency, locale) => new Intl.NumberFormat(locale, {style: 'currency', currency: currency}).format(value);

const formatMovementDate = function(date, locale){
  const calcDaysPassed = (date1, date2) => Math.round(Math.abs(date2 - date1) / (24*60*60*1000));
  const daysPassed = calcDaysPassed(date, new Date());
  if( daysPassed === 0) { return 'Today';}
  else if( daysPassed === 1) { return 'Yesterday';}
  else if ( daysPassed <= 7) { return `${daysPassed} days ago`;}
  else { return new Intl.DateTimeFormat(locale).format(date)}
};


const displayMovements = function(accs, sort = false){
  containerMovements.innerHTML = '';
  
  const sorting = sort ? accs.movements.slice().sort((a, b) => a-b): accs.movements;
  console.log(sorting);
  
  sorting.forEach( function(movs, i) {
    const type = movs > 0 ? 'deposit' : 'withdrawal';

    const date = new Date(accs.movementsDates[i]);
    const displayDate = formatMovementDate(date, accs.locale);

    const formattedMov = formatCurrency(movs, accs.currency, accs.locale);

    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i+1} ${type}</div>
    <div class="movements__date">${displayDate}</div>
    <div class="movements__value">${formattedMov}</div>
    </div>`
    containerMovements.insertAdjacentHTML('afterbegin',html);
  });
}

// Calculate the balance

const displayCalcBalance = function(acc){
  acc.balance =acc.movements.reduce((acc,ele)=> acc + ele,0);
  labelBalance.textContent = `${formatCurrency(acc.balance, acc.currency, acc.locale)}`;
}

//  Calculate the summary

const displaySummary = function(accs) {
  const income = accs.movements.filter(acc => acc>0 ).reduce((acc,ele) => acc+ele,0);
  labelSumIn.textContent = `${formatCurrency(income, accs.currency, accs.locale)}`;
  const outcome = accs.movements.filter(acc => acc<0 ).reduce((acc,ele) => acc+ele,0);
  labelSumOut.textContent = `${formatCurrency(Math.abs(outcome), accs.currency, accs.locale)}`;
  const interest = accs.movements.filter(acc => acc>0 ).map(deposit => (deposit * accs.interestRate)/100).filter(acc => acc>=1).reduce((acc, ele) => acc+ele,0);
  labelSumInterest.textContent = `${formatCurrency(interest, accs.currency, accs.locale)} `;
}

// Update UI

const updateUI = function(accounts) {
  displayMovements(accounts); // Display Movements
  displaySummary(accounts);// Display Summary
  displayCalcBalance(accounts);// Display Balance
}

// Timer

const logoutTimer = function(){
  let time = 20; // Time = 5 Min => 5*60 = 300sec.
  const tick = function() {
    const min = String(Math.trunc(time / 60)). padStart(2, 0);
    const sec = String(time % 60). padStart(2, 0);

    labelTimer.textContent = `${min}:${sec}`; // Printing the reamining time to ui.

    // Setting to logout when the time is over.
    if(time === 0) {
      clearInterval(timer);
      containerApp.style.opacity = 0;
      labelWelcome.textContent = 'Login to Get Started';
    }

    time--;// Decrease time.
  } 
  tick(); // Calling timer every second.
  const timer = setInterval(tick, 1000);
  return timer;
}

// Create a username and add in object. Ex: Jonas Schmedtmann
const createUsername = function(mov) {
 mov.forEach(mov => mov.user = mov.owner.toLowerCase().split(" ").map(name => name[0]).join(''));
}
createUsername(accounts);

// Creating Login(Event Handler)
let currentAccount, timer;

btnLogin.addEventListener('click',function(e){
  e.preventDefault(); // Prevent form from submitting or reloading
  let userIn;
  const userInput = function(mov) {const value = mov.toLowerCase().split(" ").map((name) => name[0]).join(''); userIn = value;};
   userInput(inputLoginUsername.value);
  currentAccount = accounts.find(acc => acc.user === inputLoginUsername.value || acc.user === userIn);
  if(currentAccount?.pin === Number(inputLoginPin.value)) {
    labelWelcome.textContent = `Welcome ${currentAccount.owner.split(' ')[0]}`
    inputLoginUsername.value=inputLoginPin.value='';
    inputLoginPin.blur();
    containerApp.style.opacity = 100;
    // Create current date and time
    const now = new Date();
    const options = {
      hour: "numeric",
      minute: "numeric",
      day: "numeric",
      month: "numeric",
      year: "numeric",
      weekday: "long"
    }
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);
    if(timer) clearInterval(timer);
    timer = logoutTimer();
    updateUI(currentAccount);
  } else {alert('Wrong User ID or Password')}
});

// Transfer Logic

btnTransfer.addEventListener('click', function(e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(acc => acc.user === inputTransferTo.value);
  
  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.user !== currentAccount.user ) {
    console.log('transferring')
    currentAccount.movements.push(-amount);
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movements.push(amount);
    receiverAcc.movementsDates.push(new Date().toISOString());
    updateUI(currentAccount);
    clearInterval(timer);
    timer = logoutTimer();
    // console.log(accounts);
  } else{alert('InCorrect Details Entered or Balance not Sufficient')};
  inputTransferAmount.value = inputLoginUsername.value = '';
});

// Loan

btnLoan.addEventListener('click',function(e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount*0.1) ) {

    setTimeout(function(){
      currentAccount.movements.push(amount);
      currentAccount.movementsDates.push(new Date().toISOString());
      updateUI(currentAccount);
      clearInterval(timer);
      timer = logoutTimer();
    }, 2500);

  }else{alert("Can't Give Loan")};
  inputLoanAmount.value = '';
});
 
// Delete Account

btnClose.addEventListener('click', function(e) {
  e.preventDefault();

  if(inputCloseUsername.value === currentAccount.user && Number(inputClosePin.value) === currentAccount.pin) {
    const index = accounts.findIndex(acc => acc.user === currentAccount.user);
    accounts.splice(index,1);
    containerApp.style.opacity = 0; // Hide UI
    clearInterval(timer);
    timer = logoutTimer();
  }
  inputCloseUsername.value = inputClosePin.value = '';
});

// sorting
let sorted = false;
btnSort.addEventListener('click', function(e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});