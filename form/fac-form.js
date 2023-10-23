const title = document.getElementById("title");
const p = document.getElementById("p");
const nameField = document.getElementById("nameField");
const signinBtn = document.getElementById("signinBtn");
const signupBtn = document.getElementById("signupBtn");
const signup = document.getElementsByClassName("signup");

// nameField.addEventListener("input", function () {
//   this.style.color = "#000";
// });

signupBtn.onclick = function () {
  title.innerHTML = "Sign Up";
  p.innerHTML = "Have Account? <a href='./fac-form.html' >Login</a>";
  nameField.style.display = "block";
};

signinBtn.onclick = function () {
  title.innerHTML = "Login";
  nameField.style.display = "none";
};
