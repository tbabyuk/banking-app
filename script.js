console.log('hello world!');

const btnLogin = document.querySelector('#btn-login');
const btnLogout = document.querySelector('#btn-logout');
const mainWrapper = document.querySelector('.main-wrapper');
const loginUsername = document.querySelector('.login-username');
const loginPassword = document.querySelector('.login-password');
const welcomeMessage = document.querySelector('.welcome-message');
const showBalance = document.querySelector('.balance'); //account balance field
const accountDetailsBody = document.querySelector('.account-details-body');
const currentDate = document.querySelector(".current-date");

loginUsername.focus();

//DETERMINE AND DISPLAY CURRENT DATE AND TIME
let currDate = new Date();
let locale = navigator.language;

let formattedDate = currDate.toLocaleDateString(locale, {weekday: "long", month: "long", day: "numeric", year: "numeric", hour: "numeric", minute: "numeric"})

currentDate.innerText = formattedDate;



let currAccount;

//USER LOGGING IN
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  const userName = loginUsername.value.trim().toLowerCase();
  const password = loginPassword.value.trim();

//Locate correct user account

  currAccount = accounts.find(acc => acc.username === userName);

  if(currAccount.password === +password) {

    //display UI
    mainWrapper.style.opacity = 1;

    //display welcome message
    welcomeUser(currAccount);

    //display balance
    calcBalance(currAccount);

    //show transactions
    showTransactions(currAccount);
  }
});


//USER LOGGING OUT

btnLogout.addEventListener('click', () => {
  mainWrapper.style.opacity = 0;
});

//ACCOUNT DETAILS

// =======================================================================================================

//ALL ACCOUNTS
const account1 = {
  owner: 'Hannibal Lecter',
  username: 'hlecter',
  transactions: [300, 250, -350, 200, -220, 70],
  interestRate: 1.2,
  password: 111,
};

const account2 = {
  owner: 'Leah Organa',
  username: 'lorgana',
  transactions: [200, -150, 250, -80, 350, 50],
  interestRate: 1.5,
  password: 222,
};

const account3 = {
  owner: 'George Orwell',
  username: 'gorwell',
  transactions: [150, 200, 40, -350, 50, -20],
  interestRate: 1.2,
  password: 333,
};


const accounts = [account1, account2, account3];

// =======================================================================================================

//ACCOUNT DETAILS OPERATIONS

//FUNCTIONS

//Show welcome message
function welcomeUser(account) {
  const fName = account.owner.split(' ')[0];
  welcomeMessage.innerText = `Welcome, ${fName}!`;
  loginUsername.value = '';
  loginPassword.value = '';
  loginPassword.blur();
}

//Calc Current Balance
function calcBalance(account) {
  const sum = account.transactions.reduce((acc, trans) => {
    return acc + trans;
  });

  showBalance.innerText = `$${sum}`;
}

//Display Transactions

function showTransactions(account) {

  accountDetailsBody.innerHTML = "";

  account.transactions.forEach((trans) => {
    const type = trans > 0 ? 'deposit' : 'withdrawal';

    const transFormatted = trans < 0 ? trans.toString().replaceAll("-", "-$") : "$" + trans.toString();

    const html = `
    <div class="transaction-single">
    <div class="transaction-type-${type}">${type}</div>
    <div class="transaction-amount">${transFormatted}</div>
    </div>    
    `;
    accountDetailsBody.insertAdjacentHTML('afterbegin', html);
  });
}

// showTransactions(account1)
