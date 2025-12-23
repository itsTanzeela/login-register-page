const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");
const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");
const loginMessage = document.getElementById("loginMessage");
const registerMessage = document.getElementById("registerMessage");

// switch register
showRegister.addEventListener("click", function () {
  loginForm.style.display = "none";
  registerForm.style.display = "block";
  loginMessage.innerText = "";
});

// switch login
showLogin.addEventListener("click", function () {
  registerForm.style.display = "none";
  loginForm.style.display = "block";
  registerMessage.innerText = "";
});

// register logic
registerForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("registerName").value;
  const email = document.getElementById("registerEmail").value;
  const password = document.getElementById("registerPassword").value;
  const cPassword = document.getElementById("registerCPassword").value;

  if (name === "" || email === "" || password === "" || cPassword === "") {
    registerMessage.innerText = "All fields are required!";
    registerMessage.style.color = "red";
    return;
  }

  if (password !== cPassword) {
    registerMessage.innerText = "Passwords do not match!";
    registerMessage.style.color = "red";
    return;
  }

  registerMessage.innerText = "Registration successful!";
  registerMessage.style.color = "green";

  registerForm.reset();
});