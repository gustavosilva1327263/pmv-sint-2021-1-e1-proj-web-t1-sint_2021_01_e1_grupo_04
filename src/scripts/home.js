let ls = window.localStorage;
//Busca o JSON identificado na localstorage
let equipamentosStr = ls.getItem("equipamentos");
//converte Json em objeto JavaScript
let listaEquipamentos = JSON.parse(equipamentosStr);
let tensao = 220;

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
    if (user.id === undefined) {
        alert("Usuario não cadastrado!");
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
    let consumidorToken;
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

        for (let j = 0; j < listaEquipamentos.length; j++) {
            console.log(diferencaPotencia);
            if (diferencaPotencia == listaEquipamentos[j].potencia) {
                equipamento = listaEquipamentos[j].nome;
                coluna = document.createElement("td");
                coluna.innerHTML +=
                    listaEquipamentos[j].nome + " foi ligado as " + horario;
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
        document.getElementById("listaConsumo").appendChild(linha);
    }
}
