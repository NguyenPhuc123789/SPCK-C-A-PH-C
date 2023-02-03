$(document).ready(function(){
    $('#eye').click(function(){
        $(this).toggleClass('open');
        $(this).children('i').toggleClass('fa-eye-slash fa-eye');
        if($(this).hasClass('open')){
            $(this).prev().attr('type', 'text');
        }else{
            $(this).prev().attr('type', 'password');
        }
    });
});
function checkLoginUser(inputUsernameRegister){
    
}
// let btn = document.querySelector(".form button");
// btn.addEventListener("click", function () {
//   let getListUserLocalStorage = JSON.parse(localStorage.getItem("listUser"));
//   if (getListUserLocalStorage.length < 1) {
//     window.location.href = "index.html";
//   }
//   let usernameInput = document.getElementById("username").value;
//   let passwordInput = document.getElementById("password").value;

//   if (checkLoginUser(usernameInput) && checkLoginPassword(passwordInput)) {
//     alert("Login successful");
//   }

//   //   let list = JSON.parse(localStorage.getItem("listUser"));
// });

// function checkLoginUser(usernameInput) {
//   console.log(usernameInput);
//   if (usernameInput == "") {
//     alert("User empty");
//     return false;
//   }

//   let list = JSON.parse(localStorage.getItem("listUser")); // lấy dữ liệu từ localStorage
//   for (let i = 0; i < list.length; i++) {
//     if (usernameInput == list[i].username) {
//       return true;
//     }
//   }
//   alert("Wrong username");
//   return false;
// }

// function checkLoginPassword(passwordInput) {
//   console.log(passwordInput);
//   if (passwordInput == "") {
//     alert("Password Empty");
//     return false;
//   }

//   let list = JSON.parse(localStorage.getItem("listUser"));
//   for (let i = 0; i < list.length; i++) {
//     if (passwordInput == list[i].password) {
//       return true;
//     }
//   }

//   alert("Wrong password");

//   return false;
// }