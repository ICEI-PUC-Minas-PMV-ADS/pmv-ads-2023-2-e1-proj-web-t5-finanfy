let transacoes = localStorage.getItem("db_transacoes");
let transacoesObj = JSON.parse(transacoes);

// ****************** FILTRO DE USUÁRIO LOGADO ****************** //

let userCurrentObj = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
let usuarioLogado = userCurrentObj.id;
let filtroTransacoes = [];

for (const transacao of transacoesObj) {
  if (transacao.idUsuario === usuarioLogado) {
    filtroTransacoes.push(transacao);
  }
}

exibirTransacoes();

// ****************** FILTRO DE TRANSAÇÕES ****************** //

function ListaTransacoesCat() {
  let filtroSelecionado = document.getElementById("filtro_categoria").value;

  if (filtroSelecionado == "-") {
    lista.innerHTML = "";
    exibirTransacoes();
  }

  if (filtroSelecionado != "-") {
    function retornaTransacaoFiltrada(value) {
      if (value.idCategoria == filtroSelecionado) return value;
      lista.innerHTML = "";
    }

    transacoesFiltradas = filtroTransacoes.filter(retornaTransacaoFiltrada);
    exibirTransacoesFiltradas();
  }
}

function ListaTransacoesSubCat() {
  let filtroSelecionado = document.getElementById("filtro_subCategoria").value;

  if (filtroSelecionado == "-") {
    lista.innerHTML = "";
    exibirTransacoes();
  }

  if (filtroSelecionado != "-") {
    function retornaTransacaoFiltrada(value) {
      if (value.idSubcategoria == filtroSelecionado) return value;
      lista.innerHTML = "";
    }

    transacoesFiltradas = filtroTransacoes.filter(retornaTransacaoFiltrada);
    exibirTransacoesFiltradas();
  }
}

// ****************** EXIBIR TRANSAÇÕES ****************** //

function exibirTransacoes() {
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
}

// ****************** EXIBIR TRANSAÇÕES FILTRADAS ****************** //

function exibirTransacoesFiltradas() {
  transacoesFiltradas.forEach((transacoes) => {
    const li = document.createElement("li");
    li.classList.add("itemList");

    const leftDiv = document.createElement("div");
    leftDiv.classList.add("leftList");

    const tituloP = document.createElement("p");
    tituloP.classList.add("titleLabelList");
    tituloP.textContent = transacoes.descricao;

    const dataP = document.createElement("p");
    dataP.classList.add("dateLabelList");
    dataP.textContent = transacoes.data;

    leftDiv.appendChild(tituloP);
    leftDiv.appendChild(dataP);

    const rightDiv = document.createElement("div");
    rightDiv.classList.add("rightList");

    const valorP = document.createElement("p");
    valorP.classList.add("valueLabelList");
    valorP.textContent = transacoes.valor;

    const horaP = document.createElement("p");
    horaP.classList.add("hourLabelList");
    horaP.textContent = transacoes.hora;

    rightDiv.appendChild(valorP);
    rightDiv.appendChild(horaP);

    li.appendChild(leftDiv);
    li.appendChild(rightDiv);

    lista.appendChild(li);
  });
}
