// email and password log in handler

let mySubmit = document.getElementById("submit");
mySubmit.addEventListener("click", function () {
  let myInput = document.getElementById("email");
  let input = myInput.value;

  let myPassword = document.getElementById("password");
  let password = myPassword.value;
  if (input == "ami@gorib.com" && password == "gorib") {
    window.location.href = "bank.html";
  } else {
    alert("invalid email or Password");
  }
});
