const tel = document.getElementById("tel"); // Seletor do campo de telefone

tel.addEventListener("keypress", (e) => mascaraTelefone(e.target.value)); // Dispara quando digitado no campo

tel.addEventListener("change", (e) => mascaraTelefone(e.target.value)); // Dispara quando autocompletado o campo

const mascaraTelefone = (valor) => {
    valor = valor.replace(/\D/g, "");
    valor = valor.replace(/^(\d{2})(\d)/g, "($1) $2");
    valor = valor.replace(/(\d)(\d{4})$/, "$1-$2");
    tel.value = valor; // Insere o(s) valor(es) no campo
};

const button = document.getElementById("sendBtn");
button.style.opacity = 0.7;
button.disabled = true;

const textField = document.getElementById("user");
const passwordField = document.getElementById("password");
const rptField = document.getElementById("rptPassword");
const emailField = document.getElementById("email");
const telField = document.getElementById("tel");
const checkField = document.getElementById("check1");

const formFields = [textField, passwordField, rptField, emailField, telField, checkField];

function checkFormFields() {
    let fieldsFilled = true;

    formFields.forEach(field => {
        if (field.value === "") {
            fieldsFilled = false;
        }
    });
    if (fieldsFilled) {
        button.removeAttribute("disabled");
        button.style.opacity = 1;
        button.style.cursor = "pointer";
    } else {
        button.disabled = true;
    }
};

formFields.forEach(field => {
    field.addEventListener("input", checkFormFields);
});

const sendBtn = document.getElementById("sendBtn");

function enviar() {
    window.location.replace("index.html");
}

sendBtn.addEventListener("click", enviar);