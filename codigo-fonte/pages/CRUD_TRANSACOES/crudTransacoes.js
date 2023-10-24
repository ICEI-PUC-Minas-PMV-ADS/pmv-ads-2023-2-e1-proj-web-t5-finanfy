function postReceitas(
  idReceitas,
  idCategoria,
  data,
  valor,
  idSubcategoria,
  descricao
) {
    /*if (!nome || nome === "") {

        return alert("É necessário preencher o nome");

      }

      if (!sobrenome || sobrenome === "") {

        return alert("É necessário preencher o sobrenome");

      }

      if (!email || email === "") {

        return alert("É necessário preencher o email");

      }

      if (!senha || senha === "") {

        return alert("É necessário preencher a senha");

      }

      if (!senha2 || senha2 === "") {

        return alert("É necessário preencher a confirmação de senha");

      }*/
  const receitas = {
    idReceitas: idReceitas,
    idCategoria: idCategoria,
    idSubcategoria: idSubcategoria,
    data: data,
    valor: valor,
    descricao: descricao,
  }; 

  let receitasJson = localStorage.getItem("db_receitas");
  if (!receitasJson) {
    alert("Receita cadastrada com sucessoooooo!");
    localStorage.setItem("db_receitas", JSON.stringify(receitas));
  } else { 
    let receitasObj =[];
    receitasObj = JSON.parse(receitasJson);
    receitasObj.push(receitas);
    
    localStorage.setItem("db_receitas", JSON.stringify(receitasObj));

    alert("Receita cadastrada com sucess!");
  }
}


