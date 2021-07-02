let ls = window.localStorage;
//Busca o JSON identificado na localstorage
let equipamentosStr = ls.getItem("equipamentos");
//converte Json em objeto JavaScript
let listaEquipamentos = JSON.parse(equipamentosStr);
let tensao = 220;

function registerNewItem() {
    // declara variáveis  que armazena o nome e potência do produto fornecido pelo usuário
    var inputnome = document.getElementById("equipamento").value;
    var inputpotencia = document.getElementById("potencia").value;
    //adiciona novo produto com dados fornecido pelo usuário
    if (inputnome != "" && inputpotencia != "") {
        alert("Produto Cadastrado com Sucesso");
        listaEquipamentos["equipamentos"].push({
            nome: inputnome,
            potencia: inputpotencia,
        });
        window.location.href = "itemsListAdmin.html";

        // Alerta caso o usuario não tenha preenchido dados de cadastro
    } else {
        alert("Preencha todos os dados");
    }
    equipamentosStr = JSON.stringify(listaEquipamentos);
    ls.setItem("equipamentos", equipamentosStr);
}
