function postReceitas(
  idReceitas,

  idCategoria,

  data,

  valor,

  idSubcategoria,

  descricao
) {
  const receita = {
    idReceitas: idReceitas,

    idCategoria: idCategoria,

    idSubcategoria: idSubcategoria,

    data: data,

    valor: valor,

    descricao: descricao,
  };

  let receitasJson = localStorage.getItem("db_receitas");

  let receitasObj = [];

  if (!receitasJson) {
    receitasObj.push(receita);

    localStorage.setItem("db_receitas", JSON.stringify(receitasObj));

    alert("Receita cadastrada com sucesso!");
  } else {
    receitasObj = JSON.parse(receitasJson);

    receitasObj.push(receita);

    localStorage.setItem("db_receitas", JSON.stringify(receitasObj));

    alert("Receita cadastrada com sucesso!");
  }
}
