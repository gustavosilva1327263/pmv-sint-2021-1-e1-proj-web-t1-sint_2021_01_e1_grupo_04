let ls = window.localStorage;
//Busca o JSON identificado na localstorage
let equipamentosStr = ls.getItem("equipamentos");
//converte Json em objeto JavaScript
let listaEquipamentos = JSON.parse(equipamentosStr);
let tensao = 220;
var index = 0;

function getUser() {
    let user = JSON.parse(localStorage.getItem("user"));
    return user;
}

function setUser(obj) {
    // Recebe um objeto
    let user = JSON.stringify(obj); // Transforma o objeto em string
    localStorage.setItem("user", user); // Usa a string como parâmetro para setar o JSON
}
function validateUser() {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")).usuarios;
    let login = document.getElementById("login").value;
    let senha = document.getElementById("password").value;
    let user = { id: undefined, nome: "" };
    for (let i = 0; i < usuarios.length; i++) {
        if (login == "admin" && senha == "admin") {
            window.location.href = "newItem.html";
        }
        if (login == usuarios[i].login) {
            user.id = usuarios[i].id;
            user.nome = usuarios[i].name;
            if (senha == usuarios[i].password) {
                setUser(user);
                console.log(getUser());
                window.location.href = "home.html";
            } else {
                alert("Senha incorreta!");
            }
            break;
        }
    }
    if (user.id === undefined && login !== "admin") {
        alert("Usuario não cadastrado!");
    }
}

function sendLink() {
    alert(
        "Instruções de redefinição de senha enviado para " +
        document.getElementById("email").value
    );
    window.location.href = "resetPassword.html";
}

function resetPassword() {
    alert("Senha alterada com sucesso!");
    window.location.href = "index.html";
}

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

    if (
        login != "" &&
        password != "" &&
        nome != "" &&
        email != "" &&
        telefone != ""
    ) {
        //checa se o usuario preencheu os dados de login e senha

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

function newUser() {
    window.location.href = "newUser.html";
}

var inputnome = document.getElementById("equipamento").value;
var inputpotencia = document.getElementById("potencia").value;
function registerNewItem() {
    // declara variáveis  que armazena o nome e potência do produto fornecido pelo usuário

    //adiciona novo produto com dados fornecido pelo usuário
    if (inputnome != "" && inputpotencia != "") {
        alert("Produto Cadastrado com Sucesso");
        listaEquipamentos["equipamentos"].push({
            nome: inputnome,
            potencia: inputpotencia,
        });


        // Alerta caso o usuario não tenha preenchido dados de cadastro
    } else {
        alert("Preencha todos os dados");
    }
    equipamentosStr = JSON.stringify(listaEquipamentos);
    ls.setItem("equipamentos", equipamentosStr);
}

function clearUserInput() {
    //limpa os dados fornecidos pelo usuário
    document.getElementById("login").value = "";
    document.getElementById("password").value = "";
}

function clearItemInput() {
    document.getElementById("equipamento").value = "";
    document.getElementById("potencia").value = "";
}

function displayProducts() {
    document.getElementById("tHead").firstChild;
    for (let i = 0; i < listaEquipamentos.equipamentos.length; i++) {
        //Percorre o vetor de chaves e para cada chave encontrada, executa o código abaixo

        let linha = document.createElement("tr"); //Cria um novo elemento TR (linha)
        let coluna = document.createElement("td"); //Cria um novo elemento TD (celula de dados)
        coluna.innerHTML = listaEquipamentos.equipamentos[i].nome; //Define o nome como texto da célula (TD)
        linha.appendChild(coluna); //Adiciona a célula (TD) de nome à linha (TR)
        coluna = document.createElement("td"); //Cria um novo elemento TD para armazenar o email
        coluna.innerHTML = listaEquipamentos.equipamentos[i].potencia; //Define o email como texto da célula (TD)
        linha.appendChild(coluna); //Adiciona a célula (TD) à linha (TR)
        document.getElementById("listaConsumo").appendChild(linha); //Adiciona a linha (TR) ao corpo da tabela
    }
}

function showUser() {
    let userElement = document.createElement("p");
    let user = getUser().nome;
    userElement.innerHTML = "Bem vindo/a, " + user;
    document.getElementById("home-user").appendChild(userElement);
}

function showLeitura() {
    showUser();

    // Primeiro definir a posição na array leituras, p/ vincular ao usuario
    let consumidorToken; //
    var user = getUser();
    let leituras = JSON.parse(localStorage.getItem("leituras")).leituras;

    for (let i = 0; i < leituras.length; i++) {
        if (user.id == leituras[i].consumidorId) {
            consumidorToken = i;
            break;
        }
    }

    // Segundo listar os equipamentos referente ao usuario usando o 'consumidorToken'
    let leitura = leituras[consumidorToken].leituras; // Lista a leitura do usuario
    let listaEquipamentos = JSON.parse(
        localStorage.getItem("equipamentos")
    ).equipamentos; // Lista os equipamentos
    let tensao = 220;
    let potenciaAnterior = 0;

    for (let i = 0; i < leitura.length; i++) {
        //Percorre o vetor de chaves e para cada chave encontrada, executa o código abaixo
        let horario = leitura[i].horario;
        let corrente = leitura[i].corrente;
        let potenciaAtual = tensao * corrente;
        let diferencaPotencia = potenciaAtual - potenciaAnterior;
        let linha = document.createElement("tr"); //Cria um novo elemento TR (linha)
        let coluna = document.createElement("td"); //Cria um novo elemento TD (celula de dados)
        console.log(
            horario +
            "   " +
            diferencaPotencia +
            " pa:" +
            potenciaAtual +
            "potant" +
            potenciaAnterior
        );

        for (let j = 0; j < listaEquipamentos.length; j++) {
            // console.log(index);
            if (diferencaPotencia == listaEquipamentos[j].potencia) {
                equipamento = listaEquipamentos[j].nome;

                coluna = document.createElement("td");
                coluna.innerHTML +=
                    listaEquipamentos[j].nome + " foi ligado as " + horario;
                // console.log(listaEquipamentos[index].nome + " foi ligado as " + horario)
                linha.appendChild(coluna);
                coluna = document.createElement("td");
                coluna.innerHTML += potenciaAtual + " W/h";
                linha.appendChild(coluna);
            } else if (-diferencaPotencia == listaEquipamentos[j].potencia) {
                coluna = document.createElement("td"); //Cria um novo elemento TD
                coluna.innerHTML +=
                    listaEquipamentos[j].nome + " foi desligado as " + horario;
                linha.appendChild(coluna);
                coluna = document.createElement("td");
                coluna.innerHTML += potenciaAtual + " W/h";
                linha.appendChild(coluna);
            }

            potenciaAnterior = potenciaAtual;
        }

        console.log(potenciaAtual);
        console.log(potenciaAnterior);
        document.getElementById("listaConsumo").appendChild(linha);
    }
}

function goHome() {
    window.location.href = "index.html";
}
var i = -1;
var potenciaAnterior = 0;

function clearTable() {
    if (document.getElementById("listaConsumo").rows.length > 1) {
        document.getElementById("listaConsumo").deleteRow(1);
    }
}
function proximaLeitura() {
    // clearTable();
    //showUser();
    i++;
    // Primeiro definir a posição na array leituras, p/ vincular ao usuario
    let consumidorToken; //
    var user = getUser();
    let leituras = JSON.parse(localStorage.getItem("leituras")).leituras;
    let linha = document.createElement("tr"); //Cria um novo elemento TR (linha)
    let coluna = document.createElement("td");

    for (let i = 0; i < leituras.length; i++) {
        if (user.id == leituras[i].consumidorId) {
            consumidorToken = i;
            break;
        }
    }

    // Segundo listar os equipamentos referente ao usuario usandhorao o 'consumidorToken'
    let leitura = leituras[consumidorToken].leituras; // Lista a leitura do usuario
    let listaEquipamentos = JSON.parse(
        localStorage.getItem("equipamentos")
    ).equipamentos; // Lista os equipamentos
    let tensao = 220;

    if (i == leitura.length) {
        alert("Todo o histórico ja foi exibido");
        return;
    }
    //Percorre o vetor de chaves e para cada chave encontrada, executa o código abaixo

    let horario = leitura[i].horario;
    let corrente = leitura[i].corrente;
    let potenciaAtual = tensao * corrente;
    let diferencaPotencia = potenciaAtual - potenciaAnterior;

    for (let j = 0; j < listaEquipamentos.length; j++) {
        if (diferencaPotencia == listaEquipamentos[j].potencia) {
            equipamento = listaEquipamentos[j].nome;

            coluna = document.createElement("td");
            coluna.innerHTML =
                listaEquipamentos[j].nome + " foi ligado as " + horario;
            // console.log(listaEquipamentos[index].nome + " foi ligado as " + horario)
            linha.appendChild(coluna);
            coluna = document.createElement("td");
            coluna.innerHTML = potenciaAtual + " W/h";
            linha.appendChild(coluna);
        } else if (-diferencaPotencia == listaEquipamentos[j].potencia) {
            coluna = document.createElement("td"); //Cria um novo elemento TD
            coluna.innerHTML =
                listaEquipamentos[j].nome + " foi desligado as " + horario;
            linha.appendChild(coluna);
            coluna = document.createElement("td");
            coluna.innerHTML = potenciaAtual + " W/h";
            linha.appendChild(coluna);
        }

        potenciaAnterior = potenciaAtual;
    }

    console.log("potencia atual : " + potenciaAtual);
    console.log(" potencia anterior" + potenciaAnterior);
    document.getElementById("listaConsumo").appendChild(linha);
}
