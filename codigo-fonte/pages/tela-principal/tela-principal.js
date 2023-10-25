
const arrayDeObjetos = [
  {
    titulo: "Dribble",
    valor: "- R$ 102,24",
    data: "13 jan 22",
    hora: "3:24 PM",
  },
  {
    titulo: "Amazon",
    valor: "- R$ 32,24",
    data: "9 jan 22",
    hora: "2:35 PM",
  },
  {
    titulo: "YouTube TV",
    valor: "- R$ 10,17",
    data: "7 jan 22",
    hora: "6:10 PM",
  },
  {
    titulo: "Dribble",
    valor: "- R$ 102,24",
    data: "13 jan 22",
    hora: "3:24 PM",
  },
  {
    titulo: "Amazon",
    valor: "- R$ 32,24",
    data: "9 jan 22",
    hora: "2:35 PM",
  },
  {
    titulo: "YouTube TV",
    valor: "- R$ 10,17",
    data: "7 jan 22",
    hora: "6:10 PM",
  },
  {
    titulo: "Dribble",
    valor: "- R$ 102,24",
    data: "13 jan 22",
    hora: "3:24 PM",
  },
  {
    titulo: "Amazon",
    valor: "- R$ 32,24",
    data: "9 jan 22",
    hora: "2:35 PM",
  },
  {
    titulo: "YouTube TV",
    valor: "- R$ 10,17",
    data: "7 jan 22",
    hora: "6:10 PM",
  },
];

const lista = document.getElementById("lista");

arrayDeObjetos.forEach((objeto) => {
  const li = document.createElement("li");
  li.classList.add("itemList");

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("leftList");

  const tituloP = document.createElement("p");
  tituloP.classList.add("titleLabelList");
  tituloP.textContent = objeto.titulo;

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