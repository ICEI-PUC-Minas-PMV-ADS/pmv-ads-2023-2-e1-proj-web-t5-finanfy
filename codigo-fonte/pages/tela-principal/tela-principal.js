let receitasJs = localStorage.getItem("db_receitas");
let receitasObj = JSON.parse(receitasJs) || [];
// Pega as receitas do localStorage e transforma em objeto ou cria um array vazio

let despesasJs = localStorage.getItem("db_despesas");
let despesasObj = JSON.parse(despesasJs) || [];
// Pega as despesas do localStorage e transforma em objeto ou cria um array vazio

let poupancaOutJs = localStorage.getItem("db_poupancaOut");
let poupancaOutObj = JSON.parse(poupancaOutJs) || [];
// Pega as poupancaOut do localStorage e transforma em objeto ou cria um array vazio

let poupancaInJs = localStorage.getItem("db_poupancaIn");
let poupancaInObj = JSON.parse(poupancaInJs) || [];
// Pega as poupancaIn do localStorage e transforma em objeto ou cria um array vazio

let userCurrentJs = sessionStorage.getItem("usuarioCorrente");
let userCurrentObj = JSON.parse(userCurrentJs);
let usuarioLogado = userCurrentObj.id;
// Pega o usuário logado no sessionStorage e transforma em objeto

filtroReceitas = []; 
filtroDespesas = [];
filtroPoupancaOut = [];
filtroPoupancaIn = [];
// Cria um array vazio para receber as receitas, despesas, poupancaOut e poupancaIn do usuário logado

for (const receita of receitasObj) {
  if (receita.idUsuario === usuarioLogado) {
    filtroReceitas.push(receita);
  }
}
// Condição para filtrar as receitas do usuário logado

for (const despesa of despesasObj) {
  if (despesa.idUsuario === usuarioLogado) {
    filtroDespesas.push(despesa);
  }
}
// Condição para filtrar as despesas do usuário logado

for (const poupancaOut of poupancaOutObj) {
  if (poupancaOut.idUsuario === usuarioLogado) {
    filtroPoupancaOut.push(poupancaOut);
  }
}
// Condição para filtrar a poupancaOut do usuário logado

for (const poupancaIn of poupancaInObj) {
  if (poupancaIn.idUsuario === usuarioLogado) {
    filtroPoupancaIn.push(poupancaIn);
  }
}
// Condição para filtrar a poupancaIn do usuário logado

function calcularTotal(a, b, c, d) {
  let total = 0;
  a.forEach((objeto) => {
    total += parseFloat(objeto.valor);
  });
  b.forEach((objeto) => {
    total += parseFloat(objeto.valor);
  });
  c.forEach((objeto) => {
    total -= parseFloat(objeto.valor);
  });
  d.forEach((objeto) => {
    total -= parseFloat(objeto.valor);
  });
  return total;
}
// função para calcular a subtração do total de Geral

const totalGeral = calcularTotal(
  filtroReceitas,
  filtroPoupancaOut,
  filtroDespesas,
  filtroPoupancaIn
);
//valor total de Geral

let totalGeralFormatado = totalGeral.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});
//valor total de Geral formatado

document.querySelector("#valueTotalBalance").innerHTML = totalGeralFormatado;
// insere o valor total de Geral no html

const filtroGeral = filtroReceitas.concat(filtroPoupancaOut, filtroDespesas, filtroPoupancaIn);
// concatena os arrays de receitas, poupancaOut, despesas e poupancaIn

const lista = document.getElementById("lista");

filtroGeral.forEach((objeto) => {
  const li = document.createElement("li");
  li.classList.add("itemList");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("leftList");

  const tituloP = document.createElement("p");
  tituloP.classList.add("titleLabelList");
  tituloP.textContent = objeto.descricao;

  const dataP = document.createElement("p");
  dataP.classList.add("dateLabelList");
  const data = new Date(objeto.data);
  data.setDate(data.getDate() + 1);
  dataP.textContent = data.toLocaleDateString("pt-BR");
  // formata a data para o padrão brasileiro e adiciona um dia

  leftDiv.appendChild(tituloP);
  leftDiv.appendChild(dataP);

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("rightList");

  const valorP = document.createElement("p");
  valorP.classList.add("valueLabelList");
  if (filtroDespesas.includes(objeto)) {
    valorP.textContent = parseFloat(-objeto.valor).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  } else if (filtroPoupancaIn.includes(objeto)){
    valorP.textContent = parseFloat(-objeto.valor).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  
  } else {
      valorP.textContent = parseFloat(objeto.valor).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
      });
  }
  // formata o valor de Geral para o padrão brasileiro

  const horaP = document.createElement("p");
  horaP.classList.add("hourLabelList");
  horaP.textContent = objeto.hora;

  rightDiv.appendChild(valorP);
  rightDiv.appendChild(horaP);

  li.appendChild(leftDiv);
  li.appendChild(rightDiv);

  lista.appendChild(li);
});
// Criação da lista de Geral

const button = document.querySelector(".iconVisibilityWhite");
button.addEventListener("click", function () {
  const valueLabels = document.querySelectorAll(".valueLabelList");
  valueLabels.forEach(function (label) {
    if (label.style.display === "flex") {
      label.style.display = "block";
      label.textContent = label.dataset.value;
    } else {
      label.style.display = "flex";
      label.dataset.value = label.textContent;
      label.textContent = "*****";
    }
  });
});
