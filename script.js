console.log('hello world!');

const logoDiv = document.querySelector('.logo');
const loginBtn = document.querySelector("#login-btn");
const btnLogin = document.querySelector('#btn-login');
const btnLogout = document.querySelector('#btn-logout');
const welcomeBox = document.querySelector(".welcome-box");
const mainWrapper = document.querySelector('.main-wrapper');
const loginUsername = document.querySelector('.login-username');
const loginPassword = document.querySelector('.login-password');
const welcomeMessage = document.querySelector('.welcome-message');
const showBalance = document.querySelector('.balance');
const showDeposits = document.querySelector('.deposits-total');
const showWithdrawals = document.querySelector('.withdrawals-total');
const accountDetailsBody = document.querySelector('.account-details-body');
const currentDate = document.querySelector('.current-date');

//Transfers
const inputTransferTo = document.getElementById('transfer-to');
const inputTransferAmount = document.getElementById('transfer-amount');
const transferBtn = document.getElementById('transfer-btn');

//Loans
const inputLoanAmount = document.getElementById('loan-amount');
const loanStatus = document.getElementById('loan-status');
const loanBtn = document.getElementById('loan-btn');

loginUsername.focus();

//DETERMINE AND DISPLAY CURRENT DATE AND TIME
let currDate = new Date();
let locale = navigator.language;

let formattedDate = currDate.toLocaleDateString(locale, {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
  year: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
});

currentDate.innerText = formattedDate;

let currAccount;

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

//EVENT LISTENERS

//CLICKING ON LOGO
logoDiv.addEventListener('click', () => {
  mainWrapper.style.opacity = 0;
});

//LOGGING IN
btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  const userName = loginUsername.value.trim().toLowerCase();
  const password = loginPassword.value.trim();

  //Locate correct user account

  currAccount = accounts.find((acc) => acc.username === userName);

  if(!userName || !password) {
    welcomeMessage.innerHTML = `<span class="denied small">Please enter correct username and password</span>`;
  } else if(currAccount.password === +password) {
    //display UI
    welcomeBox.style.display = "none";
    mainWrapper.style.opacity = 1;

    //display welcome message
    welcomeUser(currAccount);
 
    //display UI
    updateUI(currAccount);

  }
});

//LOGGING OUT
btnLogout.addEventListener('click', () => {
  mainWrapper.style.opacity = 0;
});

//LOGGING IN FROM WELCOME BOX

loginBtn.addEventListener("click", () => {
  loginUsername.focus();
})

//SERVICES: TRANSFERRING MONEY
transferBtn.addEventListener('click', (e) => {
  e.preventDefault();
  makeTransfer();
});

//SERVICES: REQUESTING A LOAN
loanBtn.addEventListener('click', (e) => {
  e.preventDefault();
  requestLoan();
});

// =======================================================================================================

//FUNCTIONS

//Update Numbers

function updateUI(currAccount) {
      //display balance
      calcBalance(currAccount);

      //display deposits and withdrawals totals
      calcDepositsWithdrawals(currAccount);
  
      //show transactions
      showTransactions(currAccount);
}


//Show welcome message
function welcomeUser(account) {
  const fName = account.owner.split(' ')[0];
  welcomeMessage.innerText = `Welcome, ${fName}!`;
  loginUsername.value = '';
  loginPassword.value = '';
  loginPassword.blur();
}

//Calc Balance
function calcBalance(account) {
  const sum = account.transactions.reduce((acc, trans) => {
    return acc + trans;
  });

  showBalance.innerText = `$${sum}`;
}

//Calculate deposits and withdrawals

function calcDepositsWithdrawals(account) {
  const deposits = account.transactions
    .filter((trans) => trans > 0)
    .reduce((acc, trans) => acc + trans);

  const withdrawals = account.transactions
    .filter((trans) => trans < 0)
    .reduce((acc, trans) => acc + trans);

  showDeposits.innerText = `$${deposits}`;

  showWithdrawals.innerText = `$${Math.abs(withdrawals)}`;
}

//Display Transactions

function showTransactions(account) {
  accountDetailsBody.innerHTML = '';

  account.transactions.forEach((trans) => {
    const type = trans > 0 ? 'deposit' : 'withdrawal';

    const transFormatted =
      trans < 0
        ? trans.toString().replaceAll('-', '-$')
        : '$' + trans.toString();

    const html = `
    <div class="transaction-single">
    <div class="transaction-type-${type}">${type}</div>
    <div class="transaction-amount">${transFormatted}</div>
    </div>    
    `;
    accountDetailsBody.insertAdjacentHTML('afterbegin', html);
  });
}


//SERVICES: TRANSFERRING MONEY
function makeTransfer() {
  const transferTo = inputTransferTo.value;
  const transferAmount = +inputTransferAmount.value;

  inputTransferTo.value = '';
  inputTransferAmount.value = '';

  //locate transfer recipient user object
  const transferRecipient = accounts.find(
    (owner) => owner.username === transferTo
  );
  transferRecipient.transactions.push(transferAmount);

  //update UI for current user
  currAccount.transactions.push(-transferAmount);

  updateUI(currAccount);
}

//SERVICES: REQUEST A LOAN
//Loan condition: approve loan only if at least one of the transactions is equal to 10% or more of the requested loan amount

function requestLoan() {
  const loanAmount = +inputLoanAmount.value;

  if (!loanAmount) {
    loanStatus.classList = '';
    loanStatus.classList.add('denied');
    loanStatus.value = "ENTER AMOUNT"
  } else if(
    loanAmount > 0 &&
    currAccount.transactions.some((trans) => trans >= loanAmount * 0.1)
  ) {
    loanStatus.classList = '';
    loanStatus.classList.add('approved');
    loanStatus.value = 'APPROVED';
    currAccount.transactions.push(loanAmount);
    //update UI for current user
    updateUI(currAccount);
  } else {
    loanStatus.classList = '';
    loanStatus.classList.add('denied');
    loanStatus.value = 'DENIED';
  }
}

