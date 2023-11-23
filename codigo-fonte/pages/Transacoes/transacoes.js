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


filtroTransacoes.forEach((objeto) => {
  const li = document.createElement("li");
  li.classList.add("itemList");

  const newDiv = document.createElement("div");
  newDiv.classList.add("iconDiv");

  const icon = document.createElement("i");
  icon.classList.add("fa");
  icon.classList.add("fa-pencil");

  newDiv.appendChild(icon);

  const leftDiv = document.createElement("div");
  leftDiv.classList.add("leftList");


// ****************** EXIBIR TRANSAÇÕES FILTRADAS ****************** //


  const dataP = document.createElement("p");
  dataP.classList.add("dateLabelList");
  const data = new Date(objeto.data);
  data.setDate(data.getDate() + 1);
  dataP.textContent = data.toLocaleDateString("pt-BR");
  // formata a data para o padrão brasileiro e adiciona um dia


    const leftDiv = document.createElement("div");
    leftDiv.classList.add("leftList");

    const tituloP = document.createElement("p");
    tituloP.classList.add("titleLabelList");
    tituloP.textContent = transacoes.descricao;

  const valorP = document.createElement("p");
  valorP.classList.add("valueLabelList");
  if ((objeto.idCategoria === "despesas" && objeto.idTipo === "saida") || (objeto.idCategoria === "poupanca" && objeto.idTipo === "entrada")) {
    valorP.textContent = parseFloat(-objeto.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  } else {
    valorP.textContent = parseFloat(objeto.valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }


    leftDiv.appendChild(tituloP);
    leftDiv.appendChild(dataP);

    const rightDiv = document.createElement("div");
    rightDiv.classList.add("rightList");


  li.appendChild(newDiv);
  li.appendChild(leftDiv);
  li.appendChild(rightDiv);

  // Adiciona um ouvinte de eventos "click" ao ícone
  newDiv.addEventListener("click", () => {
    // Recupera o ID da transação correspondente
    const idDaTransacao = objeto.idTransacao;
    // Redireciona o usuário para outra página para atualizar as informações
    window.location.href = `../editar-transacoes/editar-transacoes.html?id=${idDaTransacao}`;
  });


    rightDiv.appendChild(valorP);
    rightDiv.appendChild(horaP);

    li.appendChild(leftDiv);
    li.appendChild(rightDiv);




