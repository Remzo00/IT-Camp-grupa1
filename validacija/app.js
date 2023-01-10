let email = document.forms["form"]["email"];
let password = document.forms["form"]["password"];
let confirmPassword = document.forms["form"]["confirmPassword"];

const validated = () => {
  if (email.value.length < 9) {
    email.style.border = "1px solid red";
    email.focus();
    return false;
  }
  if (password.value.length < 6) {
    password.style.border = "1px solid red";
    password.focus();
    return false;
  }
  if (confirmPassword.value.length !== password.value.length) {
    confirmPassword.style.border = "1px solid red";
    confirmPassword.focus();
    return false;
  }
};

const email_Verify = () => {
  if (email.value.length >= 8) {
    email.style.border = "1px solid silver";
    return true;
  }
};

const password_Verify = () => {
  if (password.value.length >= 5) {
    password.style.border = "1px solid silver";
    return true;
  }
};

email.addEventListener("textInput", email_Verify);
password.addEventListener("textInput", password_Verify);
