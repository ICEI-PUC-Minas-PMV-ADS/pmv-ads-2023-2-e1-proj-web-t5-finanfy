let despesasJs = localStorage.getItem("db_despesas");
let depesasObj = JSON.parse(despesasJs) || [];
// Pega as despesas do localStorage e transforma em objeto ou cria um array vazio

let userCurrentJs = sessionStorage.getItem("usuarioCorrente");
let userCurrentObj = JSON.parse(userCurrentJs);
let usuarioLogado = userCurrentObj.id;
// Pega o usuário logado no sessionStorage e transforma em objeto

let filtroDespesas = [];
// Cria um array vazio para receber as despesas do usuário logado

for (const despesa of despesasObj) {
  if (despesa.idUsuario === usuarioLogado) {
    filtroDespesas.push(despesa);
  }
}
// Condição para filtrar as despesas do usuário logado

const totalDespesas = calcularTotal(filtroDespesas);

//valor total de despesas

let totalDespesasFormatado = totalDespesas.toLocaleString("pt-br", {
  style: "currency",
  currency: "BRL",
});
// formata o valor total de Despesas para o padrão brasileiro

document.querySelector("#valueTotalDespesas").innerHTML = totalDespesasFormatado;
// insere o valor total de receitas no html

const lista = document.getElementById("lista");
// cria uma constante para receber a lista do html

filtroDesoesas.forEach((objeto) => {
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
  valorP.textContent = parseFloat(objeto.valor).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
  // formata o valor de receitas para o padrão brasileiro

  const horaP = document.createElement("p");
  horaP.classList.add("hourLabelList");
  horaP.textContent = objeto.hora;

  rightDiv.appendChild(valorP);
  rightDiv.appendChild(horaP);

  li.appendChild(leftDiv);
  li.appendChild(rightDiv);

  lista.appendChild(li);
});
// função para criar a lista de receitas no html































let despesasJson = localStorage.getItem("db_despesas");
 let despesasObj = [];

 if (despesasJson) {
   despesasObj = JSON.parse(despesasJson);
 }
 console.log(despesasObj);



