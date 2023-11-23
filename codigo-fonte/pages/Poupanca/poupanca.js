



let userCurrentObj = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
let usuarioLogado = userCurrentObj.id;
// Pega o usuário logado no sessionStorage e transforma em objeto ou cria um array vazio

let transacoesObj = JSON.parse(localStorage.getItem("db_transacoes")) || [];
//Pega as transações do localStorage e transforma em objeto ou cria um array vazio

let filtroTransacoes = [];
// Cria um array vazio para receber as transações do usuário logado

for (const transacao of transacoesObj) {
  if (transacao.idUsuario === usuarioLogado) {
    filtroTransacoes.push(transacao);
  }
}
// Condição para filtrar as transações do usuário logado

let filtroTransacoesPoupancaIn = filtroTransacoes.filter(transacao => transacao.idCategoria === "poupanca" && transacao.idTipo === "entrada")
// Condição para filtrar as transações de poupancaIn do usuário logado

let filtroTransacoesPoupancaOut = filtroTransacoes.filter(transacao => transacao.idCategoria === "poupanca" && transacao.idTipo === "saida")
// Condição para filtrar as transações de poupancaOut do usuário logado

function calcularTotal(a, b) {
  let total = 0;
  a.forEach((objeto) => {
    total += parseFloat(objeto.valor);
  });
  b.forEach((objeto) => {
    total -= parseFloat(objeto.valor);
  });
  return total;
}
// função para calcular a subtração do total de poupança

let totalPoupanca = calcularTotal(filtroTransacoesPoupancaIn, filtroTransacoesPoupancaOut);
//valor total de poupança

let totalPoupancaFormatado = totalPoupanca.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
// formata o valor total de poupança para o padrão brasileiro

document.querySelector("#valueTotalSavings").innerHTML = totalPoupancaFormatado;
// insere o valor total de poupança no html

const filtroPoupanca = filtroTransacoesPoupancaOut.concat(filtroTransacoesPoupancaIn);
// concatena os arrays de poupancaIn e poupancaOut

const lista = document.getElementById("lista");
// cria uma constante para receber a lista do html

filtroPoupanca.forEach((objeto) => {
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
  // formata a data para o padrão brasileiro

  leftDiv.appendChild(tituloP);
  leftDiv.appendChild(dataP);

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("rightList");

  const valorP = document.createElement("p");
  valorP.classList.add("valueLabelList");
  if (filtroTransacoesPoupancaOut.includes(objeto)) {
    valorP.textContent = parseFloat(-objeto.valor).toLocaleString("pt-br", {
      style: "currency",
      currency: "BRL",
    });
  } else {
    valorP.textContent = parseFloat(objeto.valor).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });
  }
  // Condição para formatar o valor de poupancaOut e poupancaIn

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
  // função para esconder o valor da lista de poupanca
  const tottalRecipes = document.querySelector("#valueTotalSavings");
  if (tottalRecipes.style.display === "flex") {
    tottalRecipes.style.display = "block";
    tottalRecipes.textContent = tottalRecipes.dataset.value;
  } else {
    tottalRecipes.style.display = "flex";
    tottalRecipes.dataset.value = tottalRecipes.textContent;
    tottalRecipes.textContent = "R$ ";
  }
});
// função para esconder o valor total de poupanca
