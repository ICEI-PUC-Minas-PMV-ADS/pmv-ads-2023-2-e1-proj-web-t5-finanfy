function postReceitas(
  idUsuario,
  idCategoria,
  idTipo,
  data,
  hora,
  valor,
  idSubcategoria,
  descricao
) 

{
 
  if (!idUsuario || idUsuario === "") {
    return alert("Login expirado. Logue novamente!"),
    window.location.href = "../Login/login.html"; 
  }
  if (!idCategoria || idCategoria === "") {
     return alert("É necessário definir uma categoria");
  }   
  if (!idTipo || idTipo === "") {
    return alert("É necessário definir um tipo");
  } 
  if (!valor || valor === "" ) {
  return alert("É  necessário preencher um valor");
  }
  if (!valor || valor <= 0 ) {
   return alert("Não é possivel inserir um valor igual a zero ou negativo");
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
    window.location.href = "../tela-principal/tela-principal.html";   

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
    location.href = "../tela-principal/tela-principal.html";  

  } else if (idCategoria === "poupanca") {
    if (idTipo === "entrada") {
      let poupancaInJson = localStorage.getItem("db_poupancaIn");
      let poupancaInObj = [];

      if (poupancaInJson) {
        poupancaInObj = JSON.parse(poupancaInJson);
      }

      let maiorIdPoupancaIn = 0;
      for (const poupancaIn of poupancaInObj) {
        if (poupancaIn.idPoupancaIn > maiorIdPoupancaIn) {
          maiorIdPoupancaIn = poupancaIn.idPoupancaIn;
        }
      }

      const maiorIdPoupancaInIncrementado = maiorIdPoupancaIn + 1;

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

      poupancaInObj.push(poupancaIn);

      localStorage.setItem("db_poupancaIn", JSON.stringify(poupancaInObj));

      transacoesObj.push(poupancaIn);

      localStorage.setItem("db_transacoes", JSON.stringify(transacoesObj));

      alert("Poupança de entrada cadastrada com sucesso!");
      location.href = "../tela-principal/tela-principal.html";  

    } else if (idTipo === "saida") {
      let poupancaOutJson = localStorage.getItem("db_poupancaOut");
      let poupancaOutObj = [];

      if (poupancaOutJson) {
        poupancaOutObj = JSON.parse(poupancaOutJson);
      }

      let maiorIdPoupancaOut = 0;
      for (const poupancaOut of poupancaOutObj) {
        if (poupancaOut.idPoupancaOut > maiorIdPoupancaOut) {
          maiorIdPoupancaOut = poupancaOut.idPoupancaOut;
        }
      }

      const maiorIdPoupancaOutIncrementado = maiorIdPoupancaOut + 1;

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

      poupancaOutObj.push(poupancaOut);

      localStorage.setItem("db_poupancaOut", JSON.stringify(poupancaOutObj));

      transacoesObj.push(poupancaOut);

      localStorage.setItem("db_transacoes", JSON.stringify(transacoesObj));

      alert("Poupança de saída cadastrada com sucesso!");
      location.href = "../tela-principal/tela-principal.html"; 
    }
  }
  calcularTotais(idUsuario);
}

function calcularTotais(idUsuario) {
  let totalJson = localStorage.getItem("db_total");
  let totalObj = totalJson ? JSON.parse(totalJson) : {};

  let receitasJson = localStorage.getItem("db_receitas");
  let despesasJson = localStorage.getItem("db_despesas");
  let poupancaInJson = localStorage.getItem("db_poupancaIn");
  let poupancaOutJson = localStorage.getItem("db_poupancaOut");

  let totalReceitas = 0;
  let totalDespesas = 0;
  let totalPoupancaIn = 0;
  let totalPoupancaOut = 0;

  if (receitasJson) {
    const receitasObj = JSON.parse(receitasJson);
    for (const receita of receitasObj) {
      if (receita.idUsuario === idUsuario) {
        totalReceitas += parseFloat(receita.valor);
      }
    }
  }

  if (despesasJson) {
    const despesasObj = JSON.parse(despesasJson);
    for (const despesa of despesasObj) {
      if (despesa.idUsuario === idUsuario) {
        totalDespesas += parseFloat(despesa.valor);
      }
    }
  }

  if (poupancaInJson) {
    const poupancaInObj = JSON.parse(poupancaInJson);
    for (const poupancaIn of poupancaInObj) {
      if (poupancaIn.idUsuario === idUsuario) {
        totalPoupancaIn += parseFloat(poupancaIn.valor);
      }
    }
  }

  if (poupancaOutJson) {
    const poupancaOutObj = JSON.parse(poupancaOutJson);
    for (const poupancaOut of poupancaOutObj) {
      if (poupancaOut.idUsuario === idUsuario) {
        totalPoupancaOut += parseFloat(poupancaOut.valor);
      }
    }
  }

  const saldoGeral =
    totalReceitas - totalDespesas - totalPoupancaIn + totalPoupancaOut;

  totalObj[idUsuario] = {
    totalReceitas,
    totalDespesas,
    totalPoupancaIn,
    totalPoupancaOut,
    saldoGeral,
  };

  localStorage.setItem("db_total", JSON.stringify(totalObj));
}
