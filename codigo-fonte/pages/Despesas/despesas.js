

let userCurrentJs = sessionStorage.getItem("usuarioCorrente");
let userCurrentObj = JSON.parse(userCurrentJs);
let usuarioLogado = userCurrentObj.id;
// Pega o usuário logado no sessionStorage e transforma em objeto

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

filtroTransacoesDespesas = filtroTransacoes.filter(
  (transacao) => transacao.idCategoria === "despesas"
);
// Condição para filtrar as transações de receitas do usuário logado

console.log(filtroTransacoes);

function calcularTotal(a) {
  let total = 0;
  a.forEach((objeto) => {
    total = total + parseFloat(-objeto.valor);
  });
  return total;
}
// função para calcular a subtração do total de poupança

const totalDespesas = calcularTotal(filtroTransacoesDespesas);

//valor total de despesas

let totalDespesasFormatado = totalDespesas.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
// formata o valor total de Despesas para o padrão brasileiro

document.querySelector("#valueTotalExpense").innerHTML = totalDespesasFormatado;
// insere o valor total de despesas no html

const listas = document.getElementById("listas");
// cria uma constante para receber a lista do html

filtroTransacoesDespesas.forEach((objeto) => {
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
  dataP.textContent = data.toLocaleDateString("pt-br");
  // formata a data para o padrão brasileiro

  leftDiv.appendChild(tituloP);
  leftDiv.appendChild(dataP);

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("rightList");

  const valorP = document.createElement("p");
  valorP.classList.add("valueLabelList");
  valorP.textContent = parseFloat(-objeto.valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  // formata o valor de despesas para o padrão brasileiro

  const horaP = document.createElement("p");
  horaP.classList.add("hourLabelList");
  horaP.textContent = objeto.hora;

  rightDiv.appendChild(valorP);
  rightDiv.appendChild(horaP);

  li.appendChild(leftDiv);
  li.appendChild(rightDiv);

  lista.appendChild(li);
});
// função para criar a lista de dspesas no html

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
  // função para esconder o valor da lista de despesas

  const tottalRecipes = document.querySelector("#valueTotalExpense");
  if (tottalRecipes.style.display === "flex") {
    tottalRecipes.style.display = "block";
    tottalRecipes.textContent = tottalRecipes.dataset.value;
  } else {
    tottalRecipes.style.display = "flex";
    tottalRecipes.dataset.value = tottalRecipes.textContent;
    tottalRecipes.textContent = "R$ ";
  }
});
