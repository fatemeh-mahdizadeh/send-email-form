
const sendBtn = document.querySelector(".btnoff"),
  email = document.querySelector(".email"),
  subject = document.querySelector(".subject"),
  Mesage = document.querySelector(".Mesage"),
  resetBtn = document.querySelector(".RESET");
const form = document.querySelector("form");

function eventLiseners() {
  document.addEventListener("DOMContentLoaded", function () {
    sendBtn.disabled = true;
    if ((sendBtn.disabled = true)) {
      sendBtn.classList.remove("bg-red-700");
      sendBtn.classList.add("bg-gray-200");
    }
  });
  email.addEventListener("blur", valueBlur);
  subject.addEventListener("blur", valueBlur);
  Mesage.addEventListener("blur", valueBlur);

  //resetform
  resetBtn.addEventListener("click", resatform);

  form.addEventListener("submit", submitForm);
}
eventLiseners();

function resatform() {
  form.reset();
}

function valueBlur() {
  textinput(this);
  if (this.type === "email") {
    testemail(this);
  }

  const error = document.querySelectorAll(".error");
  if (email.value !== "" && subject.value !== "" && Mesage.value !== "") {
    if (error.length === 0) {
      sendBtn.disabled = false;
      sendBtn.classList.add("bg-red-700");
      sendBtn.classList.remove("bg-gray-200");
    }
  }
}
function textinput(text) {
  if (text.value.length > 0) {
    text.parentElement.classList.remove("border-gray-400");
    text.parentElement.classList.add("border-green-500");
    text.classList.remove("error");
  } else {
    text.parentElement.classList.remove("border-gray-400");
    text.parentElement.classList.add("border-red-800");
    text.classList.add("error");
  }
}

function testemail(text) {
  if (text.value.includes("@")) {
    text.classList.remove("error");
  } else {
    text.parentElement.classList.remove("border-green-500");
    text.parentElement.classList.add("border-red-800");
    text.classList.add("error");
  }
}

function submitForm(e) {
  e.preventDefault();

  const spinner = document.querySelector(".spinner");
  const divSubmit = document.querySelector(".divSubmit");
  spinner.classList.remove("hidden");
  divSubmit.classList.remove("mt-10");

  //add imagge email
  const sendEmailImg = document.createElement("img");
  sendEmailImg.src = "./img/mail.gif";
  sendEmailImg.classList = "w-2/12";

  setTimeout(function () {
    spinner.classList.add("hidden");

    divSubmit.classList.add("mt-1");

    spinner.parentElement.appendChild(sendEmailImg);

    setTimeout(function () {
      resatform();
      sendEmailImg.remove();
      margintap(divSubmit);
    }, 5000);
  }, 3000);

  function margintap(divSubmit) {
    if (divSubmit.classList.contains("mt-1")) {
      divSubmit.classList.remove("mt-1");
      divSubmit.classList.add("mt-10");
    }
  }
}
