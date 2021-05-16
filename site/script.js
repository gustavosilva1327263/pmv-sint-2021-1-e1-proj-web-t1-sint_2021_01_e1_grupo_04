function cadastro() {
    var login = document.getElementById('login').value;
    var senha = document.getElementById('senha').value;
    if (login == "alunopuc" & senha == "123") {
        window.location.href = 'home.html';
    } else {
        alert('Login ou senha incorreto')
    }
}

function redefinicao(){
    alert('Instruções de redefinição de senha enviado para '+ document.getElementById('iEmail').value);
}