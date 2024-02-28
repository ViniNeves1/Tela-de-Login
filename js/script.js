const botaoCadastro = document.getElementById('register-btn');
const botaoEntrar = document.getElementById('login-btn');
const botaoRecovery = document.getElementById('password-recover');

// Aqui temos algumas constantes que não serão alteradas de forma alguma como o próprio nome sugere.
// Essas constantes criadas são para os 3 botões que temos na pagina de login.

function registro() {
    window.location.replace("registro.html");
}

function entrar() {
    window.location.replace("inicio.html");
}

function recovery() {
    window.location.replace("senha_esquecida.html");
}

// Aqui temos as funções que nos redirecionam para outras paginas do nosso site, dando funcionalidade para nossos botões

botaoCadastro.addEventListener('click', registro);
botaoEntrar.addEventListener('click', entrar);
botaoRecovery.addEventListener('click', recovery);

// Aqui temos os eventos, o que acontece ao clicar em cada botão que temos.

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

// Aqui nesta parte temos as constantes que deixa o botão de entrar desabilitado em quanto não for preenchido os campos de login e senha.

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

// Aqui temos uma função que exibi a senha ao clicar no respectivo botão