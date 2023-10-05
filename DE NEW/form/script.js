const title = document.getElementById("title");
const p = document.getElementById("p");
const nameField = document.getElementById("nameField");
const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");
const signup = document.getElementsByClassName("signup");

signupBtn.onclick = function () {
  title.innerHTML = "Sign Up";
  p.innerHTML = "Have Account? <a href='./index.html' >Login</a>";
    nameField.style.display = "block";
};
signinBtn.onclick = function () {
  title.innerHTML = "Login";
  nameField.style.display = "none";
};
