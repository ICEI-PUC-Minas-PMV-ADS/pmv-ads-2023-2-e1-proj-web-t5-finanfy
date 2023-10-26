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
  let transacoesJson = localStorage.getItem("db_transacoes");
  let transacoesObj = [];

  if (transacoesJson) {
    transacoesObj = JSON.parse(transacoesJson);
  }

  let maiorIdTransacoes = 0;
  for (const transacao of transacoesObj) {
    if (transacao.idTransacao > maiorIdTransacoes) {
      maiorIdTransacoes = transacao.idTransacao;
    }
  }

  const maiorIdTransacoesIncrementado = maiorIdTransacoes + 1;

  if (idCategoria === "receitas") {
    let receitasJson = localStorage.getItem("db_receitas");
    let receitasObj = [];

    if (receitasJson) {
      receitasObj = JSON.parse(receitasJson);
    }

    let maiorIdReceita = 0;
    for (const receita of receitasObj) {
      if (receita.idReceita > maiorIdReceita) {
        maiorIdReceita = receita.idReceita;
      }
    }

    const maiorIdReceitaIncrementado = maiorIdReceita + 1;

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

    receitasObj.push(receita);

    localStorage.setItem("db_receitas", JSON.stringify(receitasObj));

    transacoesObj.push(receita);

    localStorage.setItem("db_transacoes", JSON.stringify(transacoesObj));

    alert("Receita cadastrada com sucesso!");
  } else if (idCategoria === "despesas") {
    let despesasJson = localStorage.getItem("db_despesas");
    let despesasObj = [];

    if (despesasJson) {
      despesasObj = JSON.parse(despesasJson);
    }

    let maiorIdDespesa = 0;
    for (const despesa of despesasObj) {
      if (despesa.idDespesa > maiorIdDespesa) {
        maiorIdDespesa = despesa.idDespesa;
      }
    }

    const maiorIdDespesaIncrementado = maiorIdDespesa + 1;

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

    despesasObj.push(despesa);

    localStorage.setItem("db_despesas", JSON.stringify(despesasObj));

    transacoesObj.push(despesa);

    localStorage.setItem("db_transacoes", JSON.stringify(transacoesObj));

    alert("Despesa cadastrada com sucesso!");
  } else if (idCategoria === "poupanca") {
    let poupancaJson = localStorage.getItem("db_poupanca");
    let poupancaObj = [];

    if (poupancaJson) {
      poupancaObj = JSON.parse(poupancaJson);
    }

    let maiorIdPoupanca = 0;
    for (const poupanca of poupancaObj) {
      if (poupanca.idPoupanca > maiorIdPoupanca) {
        maiorIdPoupanca = poupanca.idPoupanca;
      }
    }

    const maiorIdPoupancaIncrementado = maiorIdPoupanca + 1;

    const poupanca = {
      idTransacao: maiorIdTransacoesIncrementado,
      idUsuario,
      idPoupanca: maiorIdPoupancaIncrementado,
      idTipo,
      idCategoria,
      idSubcategoria,
      data,
      hora,
      valor,
      descricao,
    };

    poupancaObj.push(poupanca);

    localStorage.setItem("db_poupanca", JSON.stringify(poupancaObj));

    transacoesObj.push(poupanca);

    localStorage.setItem("db_transacoes", JSON.stringify(transacoesObj));

    alert("Poupança cadastrada com sucesso!");
  }
}
