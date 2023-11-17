// se nenhum filtro selecionado => mostrar todas as transações

// se filtro selecionado => mostrar apenas as transações que atendem ao filtro

var getTransacoes = localStorage.getItem("db_transacoes");
var getTtransacoesObj = JSON.parse(getTransacoes);
function getReceitas(value) {
  if (value.idCategoria == "receitas") return value;
}
let onlyReceitas = getTtransacoesObj.filter(getReceitas);
console.log(onlyReceitas);
