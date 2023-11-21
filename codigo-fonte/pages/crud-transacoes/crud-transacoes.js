function postReceitas(
  idUsuario,
  idCategoria,
  idTipo,
  data,
  hora,
  valor,
  idSubcategoria,
  descricao
) {
  if (!idUsuario || idUsuario === "") {
    return alert("Login expirado. Logue novamente!");
  }
  if (!valor || valor === "") {
    return alert("É necessário preencher um valor");
  }
  if (!descricao || descricao === "") {
    return alert("É necessário preencher uma descrição");
  }
  if (!data || data === "") {
    return alert("É necessário preencher uma data");
  }
  if (!hora || hora === "") {
    return alert("É necessário preencher uma hora");
  }

  let transacoesJson = localStorage.getItem("db_transacoes");
  let transacoesObj = [];
  //Verifica se existe transacoes no localStorage, se não existir, cria um array vazio

  if (transacoesJson) {
    transacoesObj = JSON.parse(transacoesJson);
  }
  //Se existir, transforma o JSON em objeto

  let maiorIdTransacoes = 0;
  for (const transacao of transacoesObj) {
    if (transacao.idTransacao > maiorIdTransacoes) {
      maiorIdTransacoes = transacao.idTransacao;
    }
  }
  //Compara o maior id da transação com o maior id de receitas e despesas

  const maiorIdTransacoesIncrementado = maiorIdTransacoes + 1;
  //Incrementa o maior id da transação para que não haja conflito de ids

  if (idCategoria === "receitas") {
    let receitasJson = localStorage.getItem("db_receitas");
    let receitasObj = [];
    //Verifica se existe receitas no localStorage, se não existir, cria um array vazio

    if (receitasJson) {
      receitasObj = JSON.parse(receitasJson);
    }
    //Se existir, transforma o JSON em objeto

    const receita = {
      idTransacao: maiorIdTransacoesIncrementado,
      idUsuario,
      idTipo,
      idCategoria,
      idSubcategoria,
      data,
      hora,
      valor,
      descricao,
    };
    //Cria um objeto receita com os dados recebidos

    receitasObj.push(receita);

    localStorage.setItem("db_receitas", JSON.stringify(receitasObj));
    //Adiciona o objeto receita no array de receitas e salva no localStorage

    transacoesObj.push(receita);

    localStorage.setItem("db_transacoes", JSON.stringify(transacoesObj));
    //Salva o array de transações no localStorage

    alert("Receita cadastrada com sucesso!");
    //Exibe mensagem de sucesso
  } else if (idCategoria === "despesas") {
    let despesasJson = localStorage.getItem("db_despesas");
    let despesasObj = [];
    //Verifica se existe despesas no localStorage, se não existir, cria um array vazio

    if (despesasJson) {
      despesasObj = JSON.parse(despesasJson);
    }
    //Se existir, transforma o JSON em objeto

    const despesa = {
      idTransacao: maiorIdTransacoesIncrementado,
      idUsuario,
      idTipo,
      idCategoria,
      idSubcategoria,
      data,
      hora,
      valor,
      descricao,
    };
    //Cria um objeto despesa com os dados recebidos

    despesasObj.push(despesa);

    localStorage.setItem("db_despesas", JSON.stringify(despesasObj));
    //Adiciona o objeto despesa no array de despesas e salva no localStorage

    transacoesObj.push(despesa);

    localStorage.setItem("db_transacoes", JSON.stringify(transacoesObj));
    //Salva o array de transações no localStorage

    alert("Despesa cadastrada com sucesso!");
    //Exibe mensagem de sucesso
  } else if (idCategoria === "poupanca") {
    if (idTipo === "entrada") {
      let poupancaInJson = localStorage.getItem("db_poupancaIn");
      let poupancaInObj = [];
      //Verifica se existe poupancaIn no localStorage, se não existir, cria um array vazio

      if (poupancaInJson) {
        poupancaInObj = JSON.parse(poupancaInJson);
      }
      //Se existir, transforma o JSON em objeto

      const poupancaIn = {
        idTransacao: maiorIdTransacoesIncrementado,
        idUsuario,
        idTipo,
        idCategoria,
        idSubcategoria,
        data,
        hora,
        valor,
        descricao,
      };
      //Cria um objeto poupancaIn com os dados recebidos

      poupancaInObj.push(poupancaIn);

      localStorage.setItem("db_poupancaIn", JSON.stringify(poupancaInObj));
      //Adiciona o objeto poupancaIn no array de poupancaIn e salva no localStorage

      transacoesObj.push(poupancaIn);

      localStorage.setItem("db_transacoes", JSON.stringify(transacoesObj));
      //Salva o array de transações no localStorage

      alert("Poupança de entrada cadastrada com sucesso!");
      //Exibe mensagem de sucesso
    } else if (idTipo === "saida") {
      let poupancaOutJson = localStorage.getItem("db_poupancaOut");
      let poupancaOutObj = [];
      //Verifica se existe poupancaOut no localStorage, se não existir, cria um array vazio

      if (poupancaOutJson) {
        poupancaOutObj = JSON.parse(poupancaOutJson);
      }
      //Se existir, transforma o JSON em objeto

      const poupancaOut = {
        idTransacao: maiorIdTransacoesIncrementado,
        idUsuario,
        idTipo,
        idCategoria,
        idSubcategoria,
        data,
        hora,
        valor,
        descricao,
      };
      //Cria um objeto poupancaOut com os dados recebidos

      poupancaOutObj.push(poupancaOut);

      localStorage.setItem("db_poupancaOut", JSON.stringify(poupancaOutObj));
      //Adiciona o objeto poupancaOut no array de poupancaOut e salva no localStorage

      transacoesObj.push(poupancaOut);

      localStorage.setItem("db_transacoes", JSON.stringify(transacoesObj));
      //Salva o array de transações no localStorage

      alert("Poupança de saída cadastrada com sucesso!");
      //Exibe mensagem de sucesso
    }
  }
  calcularTotais(idUsuario);
}

function calcularTotais(idUsuario) {
  let totalJson = localStorage.getItem("db_total");
  let totalObj = totalJson ? JSON.parse(totalJson) : {};
  //Verifica se existe total no localStorage, se não existir, cria um objeto vazio

  let receitasJson = localStorage.getItem("db_receitas");
  let despesasJson = localStorage.getItem("db_despesas");
  let poupancaInJson = localStorage.getItem("db_poupancaIn");
  let poupancaOutJson = localStorage.getItem("db_poupancaOut");
  //Verifica se existe receitas, despesas, poupancaIn e poupancaOut no localStorage, se não existir, cria um array vazio

  let totalReceitas = 0;
  let totalDespesas = 0;
  let totalPoupancaIn = 0;
  let totalPoupancaOut = 0;
  //Cria variáveis para armazenar os totais

  if (receitasJson) {
    const receitasObj = JSON.parse(receitasJson);
    for (const receita of receitasObj) {
      if (receita.idUsuario === idUsuario) {
        totalReceitas += parseFloat(receita.valor);
      }
    }
  }
  //Percorre o array de receitas e soma os valores das receitas do usuário logado

  if (despesasJson) {
    const despesasObj = JSON.parse(despesasJson);
    for (const despesa of despesasObj) {
      if (despesa.idUsuario === idUsuario) {
        totalDespesas += parseFloat(despesa.valor);
      }
    }
  }
  //Percorre o array de despesas e soma os valores das despesas do usuário logado

  if (poupancaInJson) {
    const poupancaInObj = JSON.parse(poupancaInJson);
    for (const poupancaIn of poupancaInObj) {
      if (poupancaIn.idUsuario === idUsuario) {
        totalPoupancaIn += parseFloat(poupancaIn.valor);
      }
    }
  }
  //Percorre o array de poupancaIn e soma os valores das poupancaIn do usuário logado

  if (poupancaOutJson) {
    const poupancaOutObj = JSON.parse(poupancaOutJson);
    for (const poupancaOut of poupancaOutObj) {
      if (poupancaOut.idUsuario === idUsuario) {
        totalPoupancaOut += parseFloat(poupancaOut.valor);
      }
    }
  }
  //Percorre o array de poupancaOut e soma os valores das poupancaOut do usuário logado

  const saldoGeral =
    totalReceitas - totalDespesas - totalPoupancaIn + totalPoupancaOut;

  totalObj[idUsuario] = {
    totalReceitas,
    totalDespesas,
    totalPoupancaIn,
    totalPoupancaOut,
    saldoGeral,
  };
  //Cria um objeto com os totais e salva no localStorage

  localStorage.setItem("db_total", JSON.stringify(totalObj));
  //Salva o objeto no localStorage
}



function LerTransacoes () {
  return JSON.parse(localStorage.getItem("db_transacoes")) || [];
}
//Função para ler as transações do localStorage

function LerReceitas () {
  return JSON.parse(localStorage.getItem("db_receitas")) || [];
}
//Função para ler as receitas do localStorage

function LerDespesas () {
  return JSON.parse(localStorage.getItem("db_despesas")) || [];
}
//Função para ler as despesas do localStorage

function LerPoupancaIn () {
  return JSON.parse(localStorage.getItem("db_poupancaIn")) || [];
}
//Função para ler as poupancaIn do localStorage

function LerPoupancaOut () {
  return JSON.parse(localStorage.getItem("db_poupancaOut")) || [];
}
//Função para ler as poupancaOut do localStorage

function LerTransacao(idTransacao) {
  let transacoes = LerTransacoes();
  return transacoes.find((transacao) => transacao.idTransacao == idTransacao);
}
//Função para ler uma transação específica do localStorage

function UpdateTransacao(transacao) {
  let transacoes = LerTransacoes();
  let index = transacoes.findIndex((obj) => obj.idTransacao == transacao.idTransacao);
  transacoes[index] = transacao;
  localStorage.setItem("db_transacoes", JSON.stringify(transacoes));

  if (transacao.idCategoria == "receitas" && transacao.idTipo == "entrada") {
    let receitas = LerReceitas();
    transacao.idTransacao = parseInt(transacao.idTransacao);
    receitas.push(transacao);
    localStorage.setItem("db_receitas", JSON.stringify(receitas));
    RemoveTransacaoAnterior(transacao, ["db_despesas", "db_poupancaOut", "db_poupancaIn"]);
  } else if (transacao.idCategoria == "despesas" && transacao.idTipo == "saida") {
    let despesas = LerDespesas();
    transacao.idTransacao = parseInt(transacao.idTransacao);
    despesas.push(transacao);
    localStorage.setItem("db_despesas", JSON.stringify(despesas));
    RemoveTransacaoAnterior(transacao, ["db_receitas", "db_poupancaOut", "db_poupancaIn"]);
  } else if (transacao.idCategoria == "poupanca" && transacao.idTipo == "entrada") {
    let poupancaIn = LerPoupancaIn();
    transacao.idTransacao = parseInt(transacao.idTransacao);
    poupancaIn.push(transacao);
    localStorage.setItem("db_poupancaIn", JSON.stringify(poupancaIn));
    RemoveTransacaoAnterior(transacao, ["db_receitas", "db_despesas", "db_poupancaOut"]);
  } else if (transacao.idCategoria == "poupanca" && transacao.idTipo == "saida") {
    let poupancaOut = LerPoupancaOut();
    transacao.idTransacao = parseInt(transacao.idTransacao);
    poupancaOut.push(transacao);
    localStorage.setItem("db_poupancaOut", JSON.stringify(poupancaOut));
    RemoveTransacaoAnterior(transacao, ["db_receitas", "db_despesas", "db_poupancaIn"]);
  }
}

function RemoveTransacaoAnterior(transacao, bancosDeDados) {
  for (let i = 0; i < bancosDeDados.length; i++) {
    let transacoes = JSON.parse(localStorage.getItem(bancosDeDados[i]));
    let index = transacoes.findIndex((obj) => obj.idTransacao == transacao.idTransacao);
    if (index != -1) {
      transacoes.splice(index, 1);
      localStorage.setItem(bancosDeDados[i], JSON.stringify(transacoes));
    }
  }
}
