let poupancaOutJs = localStorage.getItem("db_poupancaOut");
let poupancaOutObj = JSON.parse(poupancaOutJs);

let poupancaInJs = localStorage.getItem("db_poupancaIn");
let poupancaInObj = JSON.parse(poupancaInJs);

let userCurrentJs = sessionStorage.getItem("usuarioCorrente");
let userCurrentObj = JSON.parse(userCurrentJs);
let usuarioLogado = userCurrentObj.id;

let filtroPoupancaOut = []; 
let filtroPoupancaIn = [];

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

  function calcularTotal(x, y) {
    let total = 0;
    x.forEach((objeto) => {
      total += parseFloat(objeto.valor);
    });
    y.forEach((objeto) => {
      total -= parseFloat(objeto.valor);
    });
    return total;
  }
  // função para calcular a subtração do total de poupança

  let totalPoupanca = calcularTotal(filtroPoupancaIn, filtroPoupancaOut);
 //valor total de poupança
  
  let totalPoupancaFormatado = totalPoupanca.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  // formata o valor total de poupança para o padrão brasileiro
  
  document.querySelector("#valueTotalSavings").innerHTML = totalPoupancaFormatado;
  // insere o valor total de poupança no html


const filtroPoupanca = filtroPoupancaOut.concat(filtroPoupancaIn)
// concatena os arrays de poupancaIn e poupancaOut

const lista = document.getElementById("lista");

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
  dataP.textContent = new Date(objeto.data).toLocaleDateString("pt-BR")

  leftDiv.appendChild(tituloP);
  leftDiv.appendChild(dataP);

  const rightDiv = document.createElement("div");
  rightDiv.classList.add("rightList");

  const valorP = document.createElement("p");
  valorP.classList.add("valueLabelList");
    if (filtroPoupancaOut.includes(objeto)) {
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

  const horaP = document.createElement("p");
  horaP.classList.add("hourLabelList");
  horaP.textContent = objeto.hora;

  rightDiv.appendChild(valorP);
  rightDiv.appendChild(horaP);

  li.appendChild(leftDiv);
  li.appendChild(rightDiv);

  lista.appendChild(li);
});