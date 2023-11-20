var dbTransacoes = localStorage.getItem("db_transacoes");
var dbTransacoesObj = JSON.parse(dbTransacoes);

// ****************** FILTRO DE TRANSAÇÕES ****************** //

function ListaTransacoes() {
  // ler o valor selecionado no filtro
  let filtroSelecionado = document.getElementById("filtro_categoria").value;

  // mostrar somente transacoes cujo idCategoria seja == valor selecionado no filtro
  if (filtroSelecionado != "") {
    function retornaTransacaoFiltrada(value) {
      if (value.idCategoria == filtroSelecionado) return value;
    }

    let transacoesFiltradas = dbTransacoesObj.filter(retornaTransacaoFiltrada);
    transacoesFiltradas.forEach((transacoes) => {
      console.log(transacoes);
    });
  }
}

// ********************************************************** //
