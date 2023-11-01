let receitasJs = localStorage.getItem("db_receitas");
let receitasObj = JSON.parse(receitasJs);
// Pega as receitas do localStorage e transforma em objeto

let poupancaOutJs = localStorage.getItem("db_poupancaOut");
let poupancaOutObj = JSON.parse(poupancaOutJs);
// Pega as poupancaOut do localStorage e transforma em objeto

let poupancaInJs = localStorage.getItem("db_poupancaIn");
let poupancaInObj = JSON.parse(poupancaInJs);
// Pega as poupancaIn do localStorage e transforma em objeto

let userCurrentJs = sessionStorage.getItem("usuarioCorrente");
let userCurrentObj = JSON.parse(userCurrentJs);
let usuarioLogado = userCurrentObj.id;
// Pega o usuário logado no sessionStorage e transforma em objeto

let filtroReceitas = []; 
let filtropoupancaOut = [];
let filtropoupancaIn = [];

for (const poupancaOut of poupancaOutObj) {
  if (poupancaOut.idUsuario === usuarioLogado) {
    filtropoupancaOut.push(poupancaOut);
  }
}
// Condição para filtrar a poupancaOut do usuário logado

for (const receita of receitasObj) {
  if (receita.idUsuario === usuarioLogado) {
    filtroReceitas.push(receita);
  }
}
// Condição para filtrar as receitas do usuário logado

for (const poupancaIn of poupancaInObj) {
  if (poupancaIn.idUsuario === usuarioLogado) {
    filtropoupancaIn.push(poupancaIn);
  }
}
// Condição para filtrar a poupancaIn do usuário logado

function calcularTotal(a, b, c) {
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
  return total;

}
// função para calcular a subtração do total de poupança

const totalReceitas = calcularTotal(filtroReceitas, filtropoupancaOut, filtropoupancaIn);
//valor total de receitas

let totalReceitasFormatado = totalReceitas.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
// formata o valor total de receitas para o padrão brasileiro

document.querySelector("#valueTotalRecipes").innerHTML = totalReceitasFormatado;
// insere o valor total de receitas no html

const filtroReceitasGeral = filtroReceitas.concat(filtropoupancaOut);
// concatena os arrays de receitas e poupancaOut

const lista = document.getElementById("lista");

filtroReceitasGeral.forEach((objeto) => {
  const li = document.createElement("li");
  li.classList.add("itemList");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("leftList");

  const tituloP = document.createElement("p");
  tituloP.classList.add("titleLabelList");
  tituloP.textContent = objeto.descricao;

  const dataP = document.createElement("p");
  dataP.classList.add("dateLabelList");
  dataP.textContent = new Date(objeto.data).toLocaleDateString("pt-BR");

  leftDiv.appendChild(tituloP);
  leftDiv.appendChild(dataP);

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("rightList");

  const valorP = document.createElement("p");
  valorP.classList.add("valueLabelList");
  valorP.textContent = parseFloat(objeto.valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  const horaP = document.createElement("p");
  horaP.classList.add("hourLabelList");
  horaP.textContent = objeto.hora;

  rightDiv.appendChild(valorP);
  rightDiv.appendChild(horaP);

  li.appendChild(leftDiv);
  li.appendChild(rightDiv);

  lista.appendChild(li);
});
