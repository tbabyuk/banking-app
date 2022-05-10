console.log('hello world!');

const btnLogin = document.querySelector('#btn-login');
const mainWrapper = document.querySelector('.main-wrapper');
const loginUsername = document.querySelector('.login-username');
const loginPassword = document.querySelector('.login-password');
const welcomeMessage = document.querySelector('.welcome-message');
const showBalance = document.querySelector('.balance'); //account balance field


loginUsername.focus();

btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  const userName = loginUsername.value.trim().toLowerCase();
  const password = loginPassword.value.trim();


  //ACCOUNT 1
  if (userName === 'hlecter' && password === '111') {
    mainWrapper.style.visibility = 'visible';

    //display welcome message
    welcomeUser(account1)

    //display balance
    calcBalance(account1);

    //ACCOUNT 2
  } else if (userName === 'lorgana' && password === '222') {
    mainWrapper.style.visibility = 'visible';

    //display welcome message
    welcomeUser(account2)

    //display balance
    calcBalance(account2);

    //ACCOUNT 3
  } else if (userName === 'gorwell' && password === '333') {
    mainWrapper.style.visibility = 'visible';

    //display welcome message
    welcomeUser(account3)

    //display balance
    calcBalance(account3);

  } else {
    loginUsername.focus();
  }
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

// =======================================================================================================



//ACCOUNT DETAILS OPERATIONS


//FUNCTIONS

//Calc Current Balance
function calcBalance(account) {
  const sum = account.transactions.reduce((acc, trans) => {
    return acc + trans;
  });

  showBalance.innerText = sum;
}

//Show welcome message
function welcomeUser(account) {
  const fName = account.owner.split(" ")[0];
  welcomeMessage.innerText = `Welcome, ${fName}!`;
  loginUsername.value = '';
  loginPassword.value = '';
  loginPassword.blur();
}