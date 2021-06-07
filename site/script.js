function validateUser() {
  var login = document.getElementById("login").value;
  var senha = document.getElementById("senha").value;
  if ((login == "alunopuc") & (senha == "123")) {
    window.location.href = "home.html";
  } else {
    alert("Login ou senha incorreto");
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
  let leitura = JSON.parse(localStorage.getItem("leituras"));
  console.log(leitura);
  let tensao = 220;
  let listaEquipamentos = JSON.parse(
    localStorage.getItem("equipamentos")
  ).equipamentos;
  let potenciaAnterior = 0;

  for (let i = 0; i < leitura.leituras.length; i++) {
    let horario = leitura.leituras[i].horario;
    let corrente = leitura.leituras[i].corrente;
    let potenciaAtual = tensao * corrente;
    let diferencaPotencia = potenciaAtual - potenciaAnterior;
    console.log(
      horario,
      corrente,
      potenciaAtual,
      potenciaAnterior,
      diferencaPotencia
    );
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
          " kW/h </td></tr>";
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
            " kW/h </td></tr>";
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

function processo() {
  var localStorage = window.localStorage;
  var leitura = localStorage.getItem("123456");
  var tensao = 220;
  var objLeitura = JSON.parse(leitura);
  var jsonEquipamentos = localStorage.getItem("equipamentos");
  var objEquipamentos = JSON.parse(jsonEquipamentos);
  alert("Quantidade de equipamentos: " + objEquipamentos.equipamentos.length);
  var potenciaAnterior = 0;
  for (let i = 0; i < objLeitura.leituras.length; i++) {
    let horario = objLeitura.leituras[i].horario;
    let corrente = objLeitura.leituras[i].corrente;
    let potenciaAtual = tensao * corrente;
    let diferencaPotencia = potenciaAtual - potenciaAnterior;
    for (let j = 0; j < objEquipamentos.equipamentos.length; j++) {
      if (diferencaPotencia == objEquipamentos.equipamentos[j].potencia) {
        alert(
          "O equipamento " +
            objEquipamentos.equipamentos[j].nome +
            " foi ligado as " +
            horario
        );
      } else {
        if (-diferencaPotencia == objEquipamentos.equipamentos[j].potencia) {
          alert(
            "O equipamento " +
              objEquipamentos.equipamentos[j].nome +
              " foi desligado as " +
              horario
          );
        }
      }
    }
    potenciaAnterior = potenciaAtual;
  }
}
