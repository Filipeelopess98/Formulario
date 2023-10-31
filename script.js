const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("username")
const password = document.getElementById("username")
const passwordConfirmation = document.getElementById("username")

form.addEventListener("submit", (e) => {
e.preventDefault();

checkInputs();
});


function checkInputs () {
const usernameValue = username.value;
const emailValue = email.value;
const passwordValue = password.value;
const passwordConfirmationValue = passwordConfirmationValue.value;

if (usernameValue === "") {
setErrorFor(username, 'Nome de usuario é obrigatório')
} else {
    setSuccessFor(username);
  }
  if (passwordValue === "") {
    setErrorFor(password, "A senha é obrigatória.");
  } else if (passwordValue.length < 7) {
    setErrorFor(password, "A senha precisa ter no mínimo 7 caracteres.");
  } else {
    setSuccessFor(password);
  }
  if (passwordConfirmationValue === "") {
    setErrorFor(passwordConfirmation, "A confirmação de senha é obrigatória.");
  } else if (passwordConfirmationValue !== passwordValue) {
    setErrorFor(passwordConfirmation, "As senhas não conferem.");
  } else {
    setSuccessFor(passwordConfirmation);
  }


}

function setErrorFor(input, message){
const formControl = input.parentElement;
const small = formControl.querySelector("small")

small.innerText = message;
formControl.className = "form-control error";

}

function setSuccessFor (input) {
 const formControl = input.parentElement;   
 formControl.className = "form-control success"; 
}


