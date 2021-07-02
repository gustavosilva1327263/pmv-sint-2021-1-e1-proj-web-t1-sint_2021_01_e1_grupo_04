let ls = window.localStorage;
//Busca o JSON identificado na localstorage
let usersStr = ls.getItem("usuarios");
//converte Json em objeto JavaScript
let listaUsuarios = JSON.parse(usersStr);
let tensao = 220;

function displayUsers() {
    document.getElementById("tHead").firstChild;
    for (let i = 0; i < listaUsuarios.usuarios.length; i++) {
        //Percorre o vetor de chaves e para cada chave encontrada, executa o código abaixo
        let linha = document.createElement("tr");
        let coluna = document.createElement("td");
        coluna.innerHTML = listaUsuarios.usuarios[i].name;
        linha.appendChild(coluna); //Adiciona a célula (TD) de nome à linha (TR)
        coluna = document.createElement("td");
        coluna.innerHTML = listaUsuarios.usuarios[i].email;
        linha.appendChild(coluna); //Adiciona a célula (TD) de nome à linha (TR)
        coluna = document.createElement("td");
        coluna.innerHTML = listaUsuarios.usuarios[i].login;
        linha.appendChild(coluna); //Adiciona a célula (TD) de nome à linha (TR)
        coluna = document.createElement("td");
        coluna.innerHTML = listaUsuarios.usuarios[i].password;
        linha.appendChild(coluna); //Adiciona a célula (TD) de nome à linha (TR)
        coluna = document.createElement("td");
        coluna.innerHTML = listaUsuarios.usuarios[i].phone;
        linha.appendChild(coluna); //Adiciona a célula (TD) de nome à linha (TR)


        document.getElementById("listaConsumo").appendChild(linha); //Adiciona a linha (TR) ao corpo da tabela
    }
}

function goHome() {
    window.location.href = "index.html";
}
