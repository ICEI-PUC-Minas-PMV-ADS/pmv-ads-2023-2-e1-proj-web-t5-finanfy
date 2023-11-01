let poupancaOutJs = localStorage.getItem("db_poupancaOut");
let poupancaOutObj = JSON.parse(poupancaOutJs);
console.log(`teste poupa:`, poupancaOutObj);

let userCurrentJs = sessionStorage.getItem("usuarioCorrente");
let userCurrentObj = JSON.parse(userCurrentJs);
let usuarioLogado = userCurrentObj.id;

let filtroPoupançaOut = [];

  for (const poupancaOut of poupancaOutObj) {
    // Condição para filtrar as receitas do usuário logado
    if (poupancaOut.idUsuario === usuarioLogado) {
      filtroPoupançaOut.push(poupancaOut);
    }
  }





const lista = document.getElementById("lista");

filtroPoupançaOut.forEach((objeto) => {
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