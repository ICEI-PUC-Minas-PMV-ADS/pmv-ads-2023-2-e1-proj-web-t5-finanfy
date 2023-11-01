let receitasJs = localStorage.getItem("db_receitas");
let receitasObj = JSON.parse(receitasJs);

let userCurrentJs = sessionStorage.getItem("usuarioCorrente");
let userCurrentObj = JSON.parse(userCurrentJs);
let usuarioLogado = userCurrentObj.id;

let filtroReceitas = [];

for (const receita of receitasObj) {
  if (receita.idUsuario === usuarioLogado) {
    filtroReceitas.push(receita);
  }
}

function calcularTotal(lancamentos) {
  let total = 0;
  for (let i = 0; i < lancamentos.length; i++) {
    total += parseFloat(lancamentos[i].valor);
  }
  return total;
}
let totalReceitas = calcularTotal(filtroReceitas);
document.getElementById("valueTotalRecipes").innerHTML = totalReceitas;

const lista = document.getElementById("lista");

filtroReceitas.forEach((objeto) => {
  const li = document.createElement("li");
  li.classList.add("itemList");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("leftList");

  const tituloP = document.createElement("p");
  tituloP.classList.add("titleLabelList");
  tituloP.textContent = objeto.descricao;

  const dataP = document.createElement("p");
  dataP.classList.add("dateLabelList");
  dataP.textContent = objeto.data;

  leftDiv.appendChild(tituloP);
  leftDiv.appendChild(dataP);

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("rightList");

  const valorP = document.createElement("p");
  valorP.classList.add("valueLabelList");
  valorP.textContent = objeto.valor;

  const horaP = document.createElement("p");
  horaP.classList.add("hourLabelList");
  horaP.textContent = objeto.hora;

  rightDiv.appendChild(valorP);
  rightDiv.appendChild(horaP);

  li.appendChild(leftDiv);
  li.appendChild(rightDiv);

  lista.appendChild(li);
});
