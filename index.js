let closeBtn = document.querySelector(".close-btn");
let loginPopUp = document.querySelector(".login-display");
let login = document.querySelectorAll(".login");
let signupSection = document.querySelector(".signup-wrapper-container");
let loginSection = document.querySelector(".login-wrapper-container");
let loginBtn = document.querySelector(".sw-btn1");
let signupBtn = document.querySelector(".sw-btn2");
let loginSginupDisplay = document.querySelector("#login-sign-display");

let isLogin = false;
let isLoginOpen = false;
let isSignupOpen = false;
login.forEach((eleme)=>{
  eleme.addEventListener("click", ()=>{

    isLogin = true;
    if (isLogin) {
      loginPopUp.style.display = "block";
    }
  })
})

closeBtn.addEventListener("click", () => {
  if (isLogin) {
    loginPopUp.style.display = "none";
    // loginSginupDisplay.style.display = "none"
  }
});

signupBtn.addEventListener("click", () => {
  isSignupOpen = true;
  isLoginOpen = false;
  if (isLogin && isSignupOpen) {
    loginSection.style.display = "none";
    signupSection.style.display = "block";
  }
});
loginBtn.addEventListener("click", () => {
  isLoginOpen = true;
  isSignupOpen = false;
  if (isLogin && isLoginOpen) {
    signupSection.style.display = "none";
    loginSection.style.display = "block";
  }
});

// dark mode

const darkMode = document.querySelector(".dark-light-element");
darkMode.addEventListener("click", () => {
  const isDarkMode = document
    .querySelector(".dark-light-element")
    .classList.contains("dark");
  if (isDarkMode) {
    darkMode.classList.remove("dark");
  } else {
    darkMode.classList.add("dark");
  }
});

const dark_mode = document.querySelector(".dark-light-element1");
dark_mode.addEventListener("click", () => {
  const isDarkMode1 = document
    .querySelector(".dark-light-element1")
    .classList.contains("dark");
  if (isDarkMode1) {
    dark_mode.classList.remove("dark");
  } else {
    dark_mode.classList.add("dark");
  }
});

const navBars = document.querySelector(".phone-ipad-nav");
const menuBar = document.getElementById("menuBar");
window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 820) {
    navBars.style.display = "none";
  }
});
var isMenuClicked = false;
menuBar.addEventListener("click", () => {
  if (isMenuClicked) {
    menuBar.innerHTML = `<path d="M666-440 440-666l226-226 226 226-226 226Zm-546-80v-320h320v320H120Zm400 400v-320h320v320H520Zm-400 0v-320h320v320H120Zm80-480h160v-160H200v160Zm467 48 113-113-113-113-113 113 113 113Zm-67 352h160v-160H600v160Zm-400 0h160v-160H200v160Zm160-400Zm194-65ZM360-360Zm240 0Z" />`;
    isMenuClicked = false;
    navBars.style.display = "none";
    menuBar.style.fill = "white";
  } else {
    menuBar.style.fill = "red";
    menuBar.innerHTML = `<path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />`;
    isMenuClicked = true;
    navBars.style.display = "block";
  }
});
