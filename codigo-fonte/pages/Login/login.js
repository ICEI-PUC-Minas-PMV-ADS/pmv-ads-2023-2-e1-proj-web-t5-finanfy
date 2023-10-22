// Página inicial de Login
const LOGIN_URL = "login.html";

// Objeto para o banco de dados de usuários baseado em JSON
let db_usuarios = {};

// Objeto para o usuário corrente
let usuarioCorrente = {};

// função para gerar códigos randômicos a serem utilizados como código de usuário
// Fonte: https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
function generateUUID() {
  // Public Domain/MIT
  let d = new Date().getTime(); //Timestamp
  let d2 = (performance && performance.now && performance.now() * 1000) || 0; //Time in microseconds since page-load or 0 if unsupported
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = Math.random() * 16; //random number between 0 and 16
    if (d > 0) {
      //Use timestamp until depleted
      r = (d + r) % 16 | 0;
      d = Math.floor(d / 16);
    } else {
      //Use microseconds since page-load if supported
      r = (d2 + r) % 16 | 0;
      d2 = Math.floor(d2 / 16);
    }
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
}

// Dados de usuários para serem utilizados como carga inicial
const dadosIniciais = {
  usuarios: [
    {
      id: generateUUID(),
      senha: "123",
      nome: "Administrador do Sistema",
      sobrenome: "Teste",
      email: "admin@abc.com",
      respSecurity: "123",
    },
    {
      id: generateUUID(),
      senha: "123",
      nome: "Usuario Comum",
      sobrenome: "Teste",
      email: "user@abc.com",
      respSecurity: "123",
    },
  ],
};

// Inicializa o usuarioCorrente e banco de dados de usuários da aplicação de Login
function initLoginApp() {
  // PARTE 1 - INICIALIZA USUARIOCORRENTE A PARTIR DE DADOS NO LOCAL STORAGE, CASO EXISTA
  let usuarioCorrenteJSON = sessionStorage.getItem("usuarioCorrente");
  if (usuarioCorrenteJSON) {
    usuarioCorrente = JSON.parse(usuarioCorrenteJSON);
  }

  // PARTE 2 - INICIALIZA BANCO DE DADOS DE USUÁRIOS
  // Obtem a string JSON com os dados de usuários a partir do localStorage
  let usuariosJSON = localStorage.getItem("db_usuarios");

  // Verifica se existem dados já armazenados no localStorage
  if (!usuariosJSON) {
    // Se NÃO há dados no localStorage

    // Informa sobre localStorage vazio e e que serão carregados os dados iniciais
    alert(
      "Dados de usuários não encontrados no localStorage. \n -----> Fazendo carga inicial."
    );

    // Copia os dados iniciais para o banco de dados
    db_usuarios = dadosIniciais;

    // Salva os dados iniciais no local Storage convertendo-os para string antes
    localStorage.setItem("db_usuarios", JSON.stringify(dadosIniciais));
  } else {
    // Se há dados no localStorage

    // Converte a string JSON em objeto colocando no banco de dados baseado em JSON
    db_usuarios = JSON.parse(usuariosJSON);
  }
}

// Verifica se o login do usuário está ok e, se positivo, direciona para a página inicial
function loginUser(email, senha) {
  // Verifica todos os itens do banco de dados de usuarios
  // para localizar o usuário informado no formulario de login
  for (const element of db_usuarios.usuarios) {
    let usuario = element;

    // Se encontrou login, carrega usuário corrente e salva no Session Storage
    if (email == usuario.email && senha == usuario.senha) {
      usuarioCorrente.id = usuario.id;
      usuarioCorrente.email = usuario.email;
      usuarioCorrente.nome = usuario.nome;
      usuarioCorrente.sobrenome = usuario.sobrenome;
      usuarioCorrente.respSecurity = usuario.respSecurity;
      // Salva os dados do usuário corrente no Session Storage, mas antes converte para string
      sessionStorage.setItem(
        "usuarioCorrente",
        JSON.stringify(usuarioCorrente)
      );

      // Retorna true para usuário encontrado
      return true;
    }
  }

  // Se chegou até aqui é por que não encontrou o usuário e retorna falso
  return false;
}

// Apaga os dados do usuário corrente no sessionStorage
function logoutUser() {
  console.log("ENTROU AQUI");
  usuarioCorrente = {};
  sessionStorage.setItem("usuarioCorrente", JSON.stringify(usuarioCorrente));

  window.location.href = "../Login/login.html";
}

function addUser(nome, sobrenome, email, senha, respSecurity) {
  console.log("Entrou addUser");
  // Cria um objeto de usuario para o novo usuario
  let newId = generateUUID();
  let usuario = {
    id: newId,
    nome: nome,
    sobrenome: sobrenome,
    email: email,
    senha: senha,
    respSecurity: respSecurity,
  };

  // Inclui o novo usuario no banco de dados baseado em JSON
  db_usuarios.usuarios.push(usuario);

  // Salva o novo banco de dados com o novo usuário no localStorage
  localStorage.setItem("db_usuarios", JSON.stringify(db_usuarios));
}

// Inicializa as estruturas utilizadas pelo LoginApp
initLoginApp();
