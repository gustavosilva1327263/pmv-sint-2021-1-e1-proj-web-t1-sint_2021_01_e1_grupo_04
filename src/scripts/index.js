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
            window.location.href = "admin.html";
        }
        if (login == usuarios[i].login) {
            user.id = usuarios[i].id;
            user.nome = usuarios[i].name;
            if (senha == usuarios[i].password) {
                setUser(user);
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

function newUser() {
    window.location.href = "newUser.html";
}

function showUser() {
    let userElement = document.createElement("p");
    let user = getUser().nome;
    userElement.innerHTML = "Bem vindo/a, " + user;
    document.getElementById("home-user").appendChild(userElement);
}
