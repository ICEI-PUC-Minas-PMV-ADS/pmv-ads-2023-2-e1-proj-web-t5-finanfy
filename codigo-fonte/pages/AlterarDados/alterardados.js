function putUser(nome, sobrenome, email, senha, urlPerfil, usuarioCorrente) {

  let usuariosInit = JSON.parse(localStorage.getItem("db_usuarios")) || {
    usuarios: [],
  };

  let usuarios = usuariosInit.usuarios;

  let index = -1;
  for (let i = 0; i < usuarios.length; i++) {
    if (JSON.stringify(usuarios[i].id) === JSON.stringify(usuarioCorrente)) {
      index = i;
      break;
    }
  }

  if (index !== -1) {

    if (nome !== undefined && nome !== "") {
      usuarios[index].nome = nome;
    }
    if (sobrenome !== undefined && sobrenome !== "") {
      usuarios[index].sobrenome = sobrenome;
    }
    if (email !== undefined && email !== "") {
      usuarios[index].email = email;
    }
    if (senha !== undefined && senha !== "") {
      usuarios[index].senha = senha;
    }
    if (urlPerfil !== undefined && urlPerfil !== "") {
      usuarios[index].urlPerfil = urlPerfil;
    }

    localStorage.setItem("db_usuarios", JSON.stringify(usuariosInit));
    alert("Usuário atualizado com sucesso!");
  } else {
    alert("Usuário não encontrado");
  }
}
