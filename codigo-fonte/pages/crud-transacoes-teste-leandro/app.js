/*
Esse módulo realiza as operações de CRUD a partir de uma API baseada no JSONServer
O servidor JSONServer fica hospedado na seguinte URL
https://jsonserver.rommelpuc.repl.co/contatos

Para fazer o seu servidor, acesse o projeto do JSONServer no Replit, faça o fork do projeto e altere o arquivo db.json para incluir os dados do seu projeto.
URL Projeto JSONServer: https://replit.com/@rommelpuc/JSONServer
*/

const apiUrl = "https://jsonserver.leandroborth.repl.co/transacoes";

function displayMessage(mensagem) {
  msg = document.getElementById("msg");
  msg.innerHTML = '<div class="alert alert-warning">' + mensagem + "</div>";
}

function readTransacao(processaDados) {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      processaDados(data);
    })
    .catch((error) => {
      console.error("Erro ao ler transações via API JSONServer:", error);
      displayMessage("Erro ao ler transações");
    });
}

function createTransacao(transacoes, refreshFunction) {
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transacoes),
  })
    .then((response) => response.json())
    .then((data) => {
      displayMessage("Transações inserida com sucesso");
      if (refreshFunction) refreshFunction();
    })
    .catch((error) => {
      console.error("Erro ao inserir transação via API JSONServer:", error);
      displayMessage("Erro ao inserir transação");
    });
}

function updateTransacao(id, transacoes, refreshFunction) {
  fetch(`${apiUrl}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(transacoes),
  })
    .then((response) => response.json())
    .then((data) => {
      displayMessage("Transação alterada com sucesso");
      if (refreshFunction) refreshFunction();
    })
    .catch((error) => {
      console.error("Erro ao atualizar transação via API JSONServer:", error);
      displayMessage("Erro ao atualizar transação");
    });
}

function deleteTransacao(id, refreshFunction) {
  fetch(`${apiUrl}/${id}`, {
    method: "DELETE",
  })
    .then((response) => response.json())
    .then((data) => {
      displayMessage("Transação removida com sucesso");
      if (refreshFunction) refreshFunction();
    })
    .catch((error) => {
      console.error("Erro ao remover transação via API JSONServer:", error);
      displayMessage("Erro ao remover transação");
    });
}
