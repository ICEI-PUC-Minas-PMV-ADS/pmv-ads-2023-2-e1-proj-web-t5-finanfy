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

    let usuarioCorrente =
      JSON.parse(sessionStorage.getItem("usuarioCorrente")) || {};
    if (nome !== undefined && nome !== "") {
      usuarioCorrente.nome = nome;
    }
    if (sobrenome !== undefined && sobrenome !== "") {
      usuarioCorrente.sobrenome = sobrenome;
    }
    if (email !== undefined && email !== "") {
      usuarioCorrente.email = email;
    }
    console.log("URL PERFIL: ", urlPerfil)
    if (urlPerfil !== undefined && urlPerfil !== "") {
      usuarioCorrente.urlPerfil = urlPerfil;
    }

    console.log("conta corrrente ss", usuarioCorrente)
    sessionStorage.setItem(
      "usuarioCorrente",
      JSON.stringify(usuarioCorrente)
    );

    alert("Usuário atualizado com sucesso!");
    window.location.href = "../Perfil/perfil.html";

    //Redireciona para a tela principal

  } else {
    alert("Usuário não encontrado");
  }
}
