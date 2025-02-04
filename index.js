var emailInput = document.getElementById("email");
var passwordInput = document.getElementById("password");
var signIn = document.getElementById("SignIn");



  signIn.addEventListener('click',function(){
    if (emailInput.value == "" || passwordInput.value == ""){
      alert("please complete the inputs");
      return;
      }
    window.location.href= 'main.html';
  });



