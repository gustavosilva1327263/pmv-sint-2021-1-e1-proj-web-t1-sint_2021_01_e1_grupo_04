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
    let senha = document.getElementById("senha").value;
    let user = { id: 0, nome: "" };
    for (let i = 0; i < usuarios.length; i++) {
        if (login == usuarios[i].login) {
            user.id = usuarios[i].id;
            user.nome = usuarios[i].name;
            if (senha == usuarios[i].senha) {
                setUser(user);
                console.log(getUser());
                window.location.href = "home.html";
            } else {
                alert("Senha incorreta!");
            }
            break;
        }
    }
    if (user === undefined) {
        alert("Usuario não cadastrado!");
    }
}

function showUser() {
    let userElement = document.createElement("p");
    let user = getUser().nome;
    userElement.innerHTML = "Bem vindo/a, " + user;
    document.getElementById("home-user").appendChild(userElement);
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

function registerUser() {
    window.location.href = "registerUser.html";
}

function newUser() {
    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
}

function registerItem() {
    window.location.href = "newEquipament.html";
}

function listarEquipamentos() {
    let listaEquipamentos = JSON.parse(
        localStorage.getItem("equipamentos")
    ).equipamentos;
    for (let i = 0; i < listaEquipamentos.length; i++) {
        document.getElementById("listaEquipamentos").innerHTML +=
            "<tr><td>" +
            listaEquipamentos[i].nome +
            "</td><td>" +
            listaEquipamentos[i].potencia +
            "</td></tr>";
    }
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
        let horario = leitura[i].horario;
        let corrente = leitura[i].corrente;
        let potenciaAtual = tensao * corrente;
        let diferencaPotencia = potenciaAtual - potenciaAnterior;

        for (let j = 0; j < listaEquipamentos.length; j++) {
            if (diferencaPotencia == listaEquipamentos[j].potencia) {
                document.getElementById("listaLeituras").innerHTML +=
                    "<tr><td>" +
                    listaEquipamentos[j].nome +
                    " foi ligado as " +
                    horario +
                    "</td>" +
                    "<td>" +
                    potenciaAtual +
                    " W/h </td></tr>";
            } else {
                if (-diferencaPotencia == listaEquipamentos[j].potencia) {
                    document.getElementById("listaLeituras").innerHTML +=
                        "<tr><td>" +
                        listaEquipamentos[j].nome +
                        " foi desligado as " +
                        horario +
                        "</td>" +
                        "<td>" +
                        potenciaAtual +
                        " W/h </td></tr>";
                }
            }
        }
        potenciaAnterior = potenciaAtual;
    }
}

function newItem() {
    alert("Cadastrado com sucesso!");
    window.location.href = "equipaments.html";
}

function teste() {
    console.log("Tudo Certo");
}
