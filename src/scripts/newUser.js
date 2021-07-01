let ls = window.localStorage;
//Busca o JSON identificado na localstorage
let equipamentosStr = ls.getItem("equipamentos");
//converte Json em objeto JavaScript
let listaEquipamentos = JSON.parse(equipamentosStr);
let tensao = 220;

function registerNewUser() {
    //Busca o JSON identificado como 'usuarios' na localstorage
    var usuariosStr = ls.getItem("usuarios");

    //converte Json em objeto JavaScript listaUsuarios
    var listaUsuarios = JSON.parse(usuariosStr);
    var nome = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var telefone = document.getElementById("phone").value;
    var login = document.getElementById("login").value;
    var password = document.getElementById("password").value;

    // Checar se os campos estão vazios
    if (
        login != "" &&
        password != "" &&
        nome != "" &&
        email != "" &&
        telefone != ""
    ) {
        var index = parseInt(listaUsuarios.usuarios.length); // transforma o numero do index do array em uma variavel do tipo inteiro
        var id = index++; //soma o index + 1 para obter o ID
        alert("Usuario cadastrado com sucesso"); // envia uma alerta de cadastro concluido
        listaUsuarios["usuarios"].push({
            id: id,
            name: nome,
            email: email,
            phone: telefone,
            login: login,
            password: password,
        }); // adiciona novo usuario
        usuariosStr = JSON.stringify(listaUsuarios); //converte para o formato String
        ls.setItem("usuarios", usuariosStr); // adiciona na local storage
        window.location.href = "index.html";
    } else {
        alert("Preencha todo os dados");
    }
}
