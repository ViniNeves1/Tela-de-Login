const botaoCadastro = document.getElementById('register-btn');
const botaoEntrar = document.getElementById('login-btn');
const botaoRecovery = document.getElementById('password-recovery');

function registro() {
    window.location.replace("registro.html");
}

function entrar() {
    window.location.replace("inicio.html");
}

function recovery() {
    window.location.replace("senha_esquecida.html");
}

botaoCadastro.addEventListener('click', registro);
botaoEntrar.addEventListener('click', entrar);
botaoRecovery.addEventListener('click', recovery);

const button = document.getElementById("login-btn");
button.style.opacity = 0.7; 
button.disabled = true;

const textField = document.getElementById('user');
const passwordField = document.getElementById('password');

const formFields = [textField, passwordField];

function checkFormFields(form) {
    fieldsFilled = true;

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

document.getElementById('olho').addEventListener('mousedown', function() {
    document.getElementById('password').type = 'text';
});
  
document.getElementById('olho').addEventListener('mouseup', function() {
    document.getElementById('password').type = 'password';
});
  
  // Para que o password não fique exposto apos mover a imagem.
document.getElementById('olho').addEventListener('mousemove', function() {
    document.getElementById('password').type = 'password';
});
