let ls = window.localStorage;
//Busca o JSON identificado na localstorage
let equipamentosStr = ls.getItem("equipamentos");
//converte Json em objeto JavaScript
let listaEquipamentos = JSON.parse(equipamentosStr);
let tensao = 220;

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

function goHome() {
    window.location.href = "index.html";
}
