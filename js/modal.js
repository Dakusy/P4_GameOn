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
const birthDate = document.querySelector("#birthdate");
const quantity = document.querySelector("#quantity");
const radio = document.querySelectorAll("input[name='location']");
const checkbox1 = document.querySelector("#checkbox1");
const modalSucces = document.querySelector(".content");
const modalSubmit = document.querySelector(".btn-submit");
const modal = document.querySelector(".form");

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

function checkBirthDate(birthDate) {
  const regDate = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/;
  if (regDate.test(birthDate.value)) {
    birthDate.parentNode.dataset.errorVisible = false;
    return true
  } else {
    birthDate.parentNode.dataset.error = "Veuillez saisir votre date de naissance";
    birthDate.parentNode.dataset.errorVisible = true;
    return false
  }
};

birthDate.addEventListener('blur', function () {
  checkBirthDate(birthDate);
});

function checkQuantity(quantity) {
  const regNumber = /^[0-9]$/;
  if (regNumber.test(quantity.value) && (quantity.value === "" || parseInt(quantity.value) <= 99)) {
    quantity.parentNode.dataset.errorVisible = false;
    return true
  } else {
    quantity.parentNode.dataset.error = "Veuillez saisir un nombre";
    quantity.parentNode.dataset.errorVisible = true;
    return false
  }
};

quantity.addEventListener('blur', function () {
  checkQuantity(quantity);
});

function validateModalSubmit() {
  // check of each function input of the form
  if (checkFirstName(firstName) && checkLastName(lastName) && checkEmail(email) &&
    checkBirthDate(birthDate) && checkQuantity(quantity)) {
    // display none the modal
    modal.style.display = "none";
    // launch new modal
    launchModalSuccess()
  } else {
    // else show all errorVisible of each else functions
    checkFirstName(firstName);
    checkLastName(lastName);
    checkEmail(email);
    checkBirthDate(birthDate);
    checkQuantity(quantity);
  }
};

modalSubmit.addEventListener('click', function (e) {
  e.preventDefault();
  validateModalSubmit();
});


function launchModalSuccess() {
  // create a new modal in a variable
  let newModal = document.createElement('p');
  newModal.style.height = '600px';
  newModal.style.fontSize = '30px';
  newModal.style.color = 'white';
  newModal.style.fontWeight = "100";
  newModal.style.display = 'block';
  newModal.style.textAlign = 'center';
  newModal.style.padding = "250px 136px 0 136px";
  // show the new modal
  modalSucces.appendChild(newModal)
  newModal.textContent = "Merci pour votre inscription"
  // button 
  let buttonBack = document.createElement('div');
  buttonBack.className = 'button btn-submit';
  buttonBack.textContent = "Fermer";
  buttonBack.style.width = "40%";
  buttonBack.style.fontWeight = "100";
  buttonBack.style.marginBottom = "20px";
  modalSucces.appendChild(buttonBack)
  buttonBack.addEventListener("click", function () {
    modalbg.style.display = "none";
  })
};