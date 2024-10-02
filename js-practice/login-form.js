let loginbtn = document.getElementById("login-btn");
let registerbtn = document.getElementById("register-btn");
let loginForm = document.getElementById("login");
let registerForm = document.getElementById("register");


function changeLogin() {
    loginForm.style.marginLeft = "50px";
    registerForm.style.marginLeft = "400px";
 }

 function changeRegister() {
    loginForm.style.marginLeft = "-370px";
    registerForm.style.marginLeft = "60px";
 }