//Pega as transacoes do localStorage e transforma em objeto ou cria um array vazio
let getTotal = JSON.parse(localStorage.getItem("db_transacoes")) || [];

//Pega o usuário logado no sessionStorage e transforma em objeto
let userCurrentObj = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
let usuarioLogado = userCurrentObj.id;

let filtroTotal = [];

// Condição para filtrar as transacoes do usuário logado
for (const transacao of getTotal) {
  if (transacao.idUsuario === usuarioLogado) {
    filtroTotal.push(transacao);
  }
}

// Condição para filtrar as transações de receitas do usuário logado
let filtroTotalReceitas = filtroTotal.filter(
  (transacao) => transacao.idCategoria === "receitas"
);

// Condição para filtrar as transações de despesas do usuário logado
let filtroTotalDespesas = filtroTotal.filter(
  (transacao) => transacao.idCategoria === "despesas"
);

// Condição para filtrar as transações de poupancaIn do usuário logado
let filtroTotalPoupancaIn = filtroTotal.filter(
  (transacao) =>
    transacao.idCategoria === "poupanca" && transacao.idTipo === "entrada"
);

// Condição para filtrar as transações de poupancaOut do usuário logado
let filtroTotalPoupancaOut = filtroTotal.filter(
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
  filtroTotalReceitas,
  filtroTotalPoupancaOut,
  filtroTotalDespesas,
  filtroTotalPoupancaIn
);

//valor total de Geral formatado
let totalGeralFormatado = totalGeral.toLocaleString("pt-BR", {
  style: "currency",
  currency: "BRL",
});

// insere o valor total de Geral no html
document.querySelector("#saldoAtual").innerHTML = totalGeralFormatado;


const button = document.querySelector("#iconVisibility");
button.addEventListener("click", function () {
const tottalRecipes = document.querySelector("#saldoAtual");
  if (tottalRecipes.style.display === "flex") {
    tottalRecipes.style.display = "block";
    tottalRecipes.textContent = tottalRecipes.dataset.value;
  } else {
    tottalRecipes.style.display = "flex";
    tottalRecipes.dataset.value = tottalRecipes.textContent;
    tottalRecipes.textContent = "R$ ";
  }
});

