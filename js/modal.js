function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelector(".close");
const firstName = document.querySelector("#first");
const lastName = document.querySelector("#last");
const email = document.querySelector("#email");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close Modal Form
modalClose.addEventListener("click", closeModal => {
  modalbg.style.display ="none";
})

// Check First Name

function checkFirstName(firstName) {
  const regText = /[a-zA-ZÀ-ÿ]{2,}/;
  if (regText.test(firstName.value)) {
    firstName.parentNode.dataset.errorVisible = false;
    return true
  } else {
    firstName.parentNode.dataset.error = "Le prénom doit avoir 2 caractères ou plus";
    firstName.parentNode.dataset.errorVisible = true;
    return false
  }
};

firstName.addEventListener('blur', function () {
  checkFirstName(firstName);
});


function checkLastName(lastName) {
  const regText = /[a-zA-ZÀ-ÿ]{2,}/;
  if (regText.test(lastName.value)) {
    lastName.parentNode.dataset.errorVisible = false;
    return true
  } else {
    lastName.parentNode.dataset.error = "Le nom doit avoir 2 caractères ou plus";
    lastName.parentNode.dataset.errorVisible = true;
    return false
  }
};

lastName.addEventListener('blur', function () {
  checkLastName(lastName);
});

function checkEmail(email) {
  const regEmail = /^[\w\-\+]+(\.[\w\-]+)*@[\w\-]+(\.[\w\-]+)*\.[\w\-]{2,4}$/;
  if (regEmail.test(email.value)) {
    email.parentNode.dataset.errorVisible = false;
    return true
  } else {
    email.parentNode.dataset.error = "Veuillez entrer un mail valide";
    email.parentNode.dataset.errorVisible = true;
    return false
  }
};

email.addEventListener('blur', function () {
  checkEmail(email);
});

