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

    let maiorIdReceita = 0;
    for (const receita of receitasObj) {
      if (receita.idReceita > maiorIdReceita) {
        maiorIdReceita = receita.idReceita;
      }
    }
    //Percorre o array de receitas e verifica qual o maior id

    const maiorIdReceitaIncrementado = maiorIdReceita + 1;
    //Incrementa o maior id de receitas para que não haja conflito de ids

    const receita = {
      idTransacao: maiorIdTransacoesIncrementado,
      idUsuario,
      idReceita: maiorIdReceitaIncrementado,
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

    let maiorIdDespesa = 0;
    for (const despesa of despesasObj) {
      if (despesa.idDespesa > maiorIdDespesa) {
        maiorIdDespesa = despesa.idDespesa;
      }
    }
    //Percorre o array de despesas e verifica qual o maior id

    const maiorIdDespesaIncrementado = maiorIdDespesa + 1;
    //Incrementa o maior id de despesas para que não haja conflito de ids

    const despesa = {
      idTransacao: maiorIdTransacoesIncrementado,
      idUsuario,
      idDespesa: maiorIdDespesaIncrementado,
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

      let maiorIdPoupancaIn = 0;
      for (const poupancaIn of poupancaInObj) {
        if (poupancaIn.idPoupancaIn > maiorIdPoupancaIn) {
          maiorIdPoupancaIn = poupancaIn.idPoupancaIn;
        }
      }
      //Percorre o array de poupancaIn e verifica qual o maior id

      const maiorIdPoupancaInIncrementado = maiorIdPoupancaIn + 1;
      //Incrementa o maior id de poupancaIn para que não haja conflito de ids

      const poupancaIn = {
        idTransacao: maiorIdTransacoesIncrementado,
        idUsuario,
        idPoupancaIn: maiorIdPoupancaInIncrementado,
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

      let maiorIdPoupancaOut = 0;
      for (const poupancaOut of poupancaOutObj) {
        if (poupancaOut.idPoupancaOut > maiorIdPoupancaOut) {
          maiorIdPoupancaOut = poupancaOut.idPoupancaOut;
        }
      }
      //Percorre o array de poupancaOut e verifica qual o maior id

      const maiorIdPoupancaOutIncrementado = maiorIdPoupancaOut + 1;
      //Incrementa o maior id de poupancaOut para que não haja conflito de ids

      const poupancaOut = {
        idTransacao: maiorIdTransacoesIncrementado,
        idUsuario,
        idPoupancaOut: maiorIdPoupancaOutIncrementado,
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
}
