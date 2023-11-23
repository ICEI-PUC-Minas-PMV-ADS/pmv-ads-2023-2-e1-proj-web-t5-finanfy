// Pega as transacoes do localStorage e transforma em objeto ou cria um array vazio
let transacoesObj = JSON.parse(localStorage.getItem("db_transacoes")) || [];

// Pega o usuário logado no sessionStorage e transforma em objeto
let userCurrentObj = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
let usuarioLogado = userCurrentObj.id;

// insere o nome e sobrenome do usuário na tela principal
document.querySelector(
  "#personalNameHome"
).innerHTML = `${userCurrentObj.nome} ${userCurrentObj.sobrenome}`;

// Cria um array vazio para filtrar as transacoes do usuário logado
let filtroTransacoes = [];

// Condição para filtrar as transacoes do usuário logado
for (const transacao of transacoesObj) {
  if (transacao.idUsuario === usuarioLogado) {
    filtroTransacoes.push(transacao);
  }
}

// Condição para filtrar as transações de receitas do usuário logado
let filtroTransacoesReceitas = filtroTransacoes.filter(
  (transacao) => transacao.idCategoria === "receitas"
);

// Condição para filtrar as transações de despesas do usuário logado
let filtroTransacoesDespesas = filtroTransacoes.filter(
  (transacao) => transacao.idCategoria === "despesas"
);

// Condição para filtrar as transações de poupancaIn do usuário logado
let filtroTransacoesPoupancaIn = filtroTransacoes.filter(
  (transacao) =>
    transacao.idCategoria === "poupanca" && transacao.idTipo === "entrada"
);

// Condição para filtrar as transações de poupancaOut do usuário logado
let filtroTransacoesPoupancaOut = filtroTransacoes.filter(
  (transacao) =>
    transacao.idCategoria === "poupanca" && transacao.idTipo === "saida"
);

// função para calcular a subtração do total de Geral
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

//valor total de Geral
const totalGeral = calcularTotal(
  filtroTransacoesReceitas,
  filtroTransacoesPoupancaOut,
  filtroTransacoesDespesas,
  filtroTransacoesPoupancaIn
);

//valor total de Geral formatado
let totalGeralFormatado = totalGeral.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

// insere o valor total de Geral no html
document.querySelector("#valueTotalBalance").innerHTML = totalGeralFormatado;

// concatena os arrays de receitas, poupancaOut, despesas e poupancaIn
const filtroGeral = filtroTransacoesReceitas.concat(
  filtroTransacoesPoupancaOut,
  filtroTransacoesDespesas,
  filtroTransacoesPoupancaIn
);

// Criação da lista de Geral
const lista = document.getElementById("lista");

filtroTransacoes.forEach((objeto) => {
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
  if (
    (objeto.idCategoria === "despesas" && objeto.idTipo === "saida") ||
    (objeto.idCategoria === "poupanca" && objeto.idTipo === "entrada")
  ) {
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

  const horaP = document.createElement("p");
  horaP.classList.add("hourLabelList");
  horaP.textContent = objeto.hora;

  rightDiv.appendChild(valorP);
  rightDiv.appendChild(horaP);

  li.appendChild(leftDiv);
  li.appendChild(rightDiv);

  lista.appendChild(li);
});

// função para esconder o valor da lista de Geral
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
  // função para esconder o valor da lista de receitas

  const tottalRecipes = document.querySelector("#valueTotalBalance");
  if (tottalRecipes.style.display === "flex") {
    tottalRecipes.style.display = "block";
    tottalRecipes.textContent = tottalRecipes.dataset.value;
  } else {
    tottalRecipes.style.display = "flex";
    tottalRecipes.dataset.value = tottalRecipes.textContent;
    tottalRecipes.textContent = "R$ ";
  }
});

