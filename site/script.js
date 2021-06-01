function validateUser() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if (login == "alunopuc" & senha == "123") {
        window.location.href = 'home.html';
    } else {
        alert('Login ou senha incorreto')
    }
}

function sendLink(){
    alert('Instruções de redefinição de senha enviado para '+ document.getElementById('email').value);
    window.location.href = 'resetPassword.html';
}

function resetPassword(){
    alert('Senha alterada com sucesso!');
    window.location.href = 'index.html';
}

function registerUser() {
    window.location.href = 'registerUser.html';
}

function newUser() {
    alert('Cadastrado com sucesso!');
    window.location.href = 'index.html';
}

function registerItem() {
    window.location.href = 'newEquipament.html';
}

function newItem() {
    alert('Cadastrado com sucesso!');
    window.location.href = 'equipaments.html';
}