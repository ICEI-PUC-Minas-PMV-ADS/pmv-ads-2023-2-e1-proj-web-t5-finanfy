
let transacoesJs = window.localStorage.getItem("db_transacoes");
let transacoesObj = JSON.parse(transacoesJs);
const lista = document.getElementById("lista");

// Cria um array vazio para receber as transações do usuário logado
let filtroTransacoes = [];

// Pega o usuário logado no sessionStorage e transforma em objeto
let userCurrentObj = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
let usuarioLogado = userCurrentObj.id;

//fução para filtra transações do usuário logado
for(const transacao of transacoesObj) {
  if(transacao.idUsuario === usuarioLogado){
    filtroTransacoes.push(transacao);
  }
}

// Percorre o array de transações filtradas e cria os elementos HTML
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

   // Adiciona um ouvinte de eventos "click" a cada elemento "li"
   li.addEventListener("click", () => {
    // Recupera o ID da transação correspondente
    const idDaTransacao = objeto.idTransacao;
     // Redireciona o usuário para outra página para atualizar as informações
     window.location.href = `../modal-editar-transacoes/modal-editar-transacoes.html?id=${idDaTransacao}`;
  });

  lista.appendChild(li);
});
