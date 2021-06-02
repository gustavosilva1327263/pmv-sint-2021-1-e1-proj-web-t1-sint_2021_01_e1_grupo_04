//texto no formato Json
//var equipamentosStr = '{ "equipamentos":[{"nome":"Geladeira","potencia":"2000"},{"nome":"Chuveiro","potencia":"1800"},{"nome":"Televisão","potencia":"800"}]}';
// usuarios{"usuarios":[{"nome":"gustavo","senha":"123"},{"nome":"victor","senha":"456"},{"nome":"ana","senha":"789"},{"nome":"allan","senha":"987"}]}
//Define a variavel ls como objeto que representa a local storage
var ls = window.localStorage;
//Busca o JSON identificado como 'equipamentos' na localstorage
var equipamentosStr = ls.getItem("equipamentos");
//converte Json em objeto JavaScript listaProdutos
var listaEquipamentos = JSON.parse(equipamentosStr);
var listaHtml = "";
function validateUser() {
    var usuariosStr = ls.getItem("usuarios");//Busca o JSON identificado como 'usuarios' na localstorage
    var listaUsuarios = JSON.parse(usuariosStr);//converte Json em objeto JavaScript listaUsuarios
    var login = document.getElementById('login').value;//converte o input login em uma variavel
    var password = document.getElementById('password').value;//conver o input password em uma variavel

    for (var x = 0; x < listaUsuarios.usuarios.length; x++) {
       
       if(login=="admin"&& password=="admin"){
        window.location.href="newItem.html";
       }else if (login == listaUsuarios.usuarios[x].login && password == listaUsuarios.usuarios[x].password) {

            window.location.href = 'home.html';
            clearUserInput();


        } else if (login == "") {
            alert('Insira login e senha');
            clearUserInput();
            break;
        }
        /*else{
           alert("Login ou senha inválido");
            clearUserInput();
            break;
        }*/
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

function registerNewUser() {
    //Busca o JSON identificado como 'usuarios' na localstorage
    var usuariosStr = ls.getItem("usuarios");
    //converte Json em objeto JavaScript listaUsuarios
    var listaUsuarios = JSON.parse(usuariosStr);
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var telefone = document.getElementById('telefone').value;
    var login = document.getElementById('login').value;
    var password = document.getElementById('password').value;

    if (login != "" && password != "" && nome != "" && email != "" && telefone!= "") {//checa se o usuario preencheu os dados de login e senha
        var listaHtml = "";
        var index = parseInt(listaUsuarios.usuarios.length);// transforma o numero do index do array em uma variavel do tipo inteiro
        var id = index++;//soma o index + 1 para obter o ID
        alert("Usuario cadastrado com sucesso");// envia uma alerta de cadastro concluido
        listaUsuarios['usuarios'].push({ "id": id, "nome": nome, "email":email,"telefone":telefone, "login":login, "password": password});// adiciona novo usuario
        usuariosStr = JSON.stringify(listaUsuarios);//converte para o formato String
        ls.setItem("usuarios", usuariosStr);// adiciona na local storage
        window.location.href="index.html";
    }else{
        alert("Preencha todo os dados");
    }
}

function newUser() {
    window.location.href = 'newUser.html';
}

function registerNewItem() {
     // declara variáveis  que armazena o nome e potência do produto fornecido pelo usuário
     var inputnome = document.getElementById('equipamento').value;
     var inputpotencia = document.getElementById('potencia').value;
 
     //adiciona novo produto com dados fornecido pelo usuário
     if (inputnome != "" && inputpotencia != "") {
 
         alert("Produto Cadastrado com Sucesso");
         listaEquipamentos['equipamentos'].push({ "nome": inputnome, "potencia": inputpotencia });
         window.location.href="itemsList.html";
 
         // Alerta caso o usuario não tenha preenchido dados de cadastro 
     } else {
         alert("Preencha todos os dados")
     }
     equipamentosStr = JSON.stringify(listaEquipamentos);
     ls.setItem("equipamentos", equipamentosStr);
}

function clearUserInput() {
    //limpa os dados fornecidos pelo usuário 
    document.getElementById('login').value = "";
    document.getElementById('password').value = "";
}

function clearItemInput(){
    document.getElementById('equipamento').value="";
    document.getElementById('potencia').value="";
}

function displayProducts() {
    //Mostra lista de equipamentos
    for (let x = 0; x < listaEquipamentos.equipamentos.length; x++) {
        listaHtml += " <li>" + listaEquipamentos.equipamentos[x].nome + " - " + listaEquipamentos.equipamentos[x].potencia + "</li>";

        document.getElementById('divEquipamentos').innerHTML = "<br><h2>Lista de equipamentos cadastrados</h2>" + listaHtml + "<br>"


    }
    

}

function newItem() {
    window.location.href = "newItem.html";
}
