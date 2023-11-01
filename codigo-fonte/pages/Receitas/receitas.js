let receitasJs = localStorage.getItem("db_receitas");
let receitasObj = JSON.parse(receitasJs);

let poupancaOutJs = localStorage.getItem("db_poupancaOut");
let poupancaOutObj = JSON.parse(poupancaOutJs);


let userCurrentJs = sessionStorage.getItem("usuarioCorrente");
let userCurrentObj = JSON.parse(userCurrentJs);
let usuarioLogado = userCurrentObj.id;

let filtroReceitas = [];
let filtropoupancaOut = [];

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

function calcularTotal(x, y) {
  let total = 0;
  x.forEach((objeto) => {
    total += parseFloat(objeto.valor);
  });
  y.forEach((objeto) => {
    total += parseFloat(objeto.valor);
  });
  return total;
}
// função para calcular a subtração do total de poupança

const totalReceitas = calcularTotal(filtroReceitas, filtropoupancaOut);
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
