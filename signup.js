
const inputUsernameRegister = document.querySelector(".input-signup-username");
const inputPasswordRegister = document.querySelector(".input-signup-password");
const btnRegister = document.querySelector(".signup__signInButton");



btnRegister.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    inputUsernameRegister.value === "" ||
    inputPasswordRegister.value === ""
  ) {
    alert("vui lòng không để trống");
  } else {
    
    const user = {
      username: inputUsernameRegister.value,
      password: inputPasswordRegister.value,
    };
    let json = JSON.stringify(user);
    localStorage.setItem(inputUsernameRegister.value, json);
    alert("Đăng Ký Thành Công");
    window.location.href = "spck.html";
  }
});

// let list_person_object = [];
// let t = JSON.parse(localStorage.getItem("listUser"));
// if (t == null) {
//   localStorage.setItem("listUser", JSON.stringify(list_person_object));
//   location.reload();
// } else {
//   let list = JSON.parse(localStorage.getItem("listUser"));

//   let btn = document.querySelector(".form button");
//   btn.addEventListener("click", function () {
//     let newUser = {};
//     let usernameInput = document.getElementById("username").value;
//     let passwordInput = document.getElementById("password").value;

//     // Check user and password
//     let checkUsername = checkValidateUser(usernameInput);
//     let checkPassword = checkPassword1(passwordInput);

//     if (checkUsername == true && checkPassword == true) {
//       console.log("Dkjsdfkn");
//       newUser = {
//         username: usernameInput,
//         password: passwordInput,
//       };

//       list.push(newUser);
//       localStorage.setItem("listUser", JSON.stringify(list));

//       document.getElementById("username").value = "";
//       document.getElementById("password").value = "";
//       alert("Create successfully");
//     }
//   });
// }

// // checkUsername
// function checkValidateUser(userAccount) {
//   if (userAccount == "") {
//     alert("User empty");
//     return false;
//   }
//   // userAccount tên user ng dùng nhập => string

//   let listUser = JSON.parse(localStorage.getItem("listUser"));
//   for (let i = 0; i < listUser.length; i++) {
//     if (userAccount == listUser[i].username) {
//       alert("User existed");
//       return false;
//     }
//   }

//   return true;
// }

// // checkPassword
// function checkPassword1(userPassword) {
//   if (userPassword == "") {
//     alert("password empty");
//     return false;
//   }

//   return true;
// }
