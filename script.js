console.log('hello world!');

const btnLogin = document.querySelector('#btn-login');
const mainWrapper = document.querySelector(".main-wrapper");
const loginUsername = document.querySelector(".login-username");
const loginPassword = document.querySelector(".login-password");
const welcomeMessage = document.querySelector(".welcome-message");


loginUsername.focus();


btnLogin.addEventListener('click', (e) => {
  e.preventDefault();
  const userName = loginUsername.value.trim();
  const password = loginPassword.value.trim();

  if(userName === "terry" && password === "123") {
    mainWrapper.style.visibility = "visible";
  
    const userNameUpper = userName[0].toUpperCase() + userName.slice(1);
    welcomeMessage.innerText = `Welcome, ${userNameUpper}!`;
    
    loginUsername.value = "";
    loginPassword.value = "";
    loginPassword.blur();

  } else {
    loginUsername.focus();

  }




});
