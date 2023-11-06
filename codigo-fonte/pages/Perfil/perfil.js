let userCurrentObj = JSON.parse(sessionStorage.getItem("usuarioCorrente"));
let usuarioLogado = userCurrentObj.id;
// Pega o usuário logado no sessionStorage e transforma em objeto
console.log(userCurrentObj);

let userName = userCurrentObj.nome;
document.querySelector("#nameInfo").innerHTML = userName;
// insere o nome do usuário na tela de perfil

let lastName = userCurrentObj.sobrenome;
document.querySelector("#lastNameInfo").innerHTML = lastName;
// insere o sobrenome do usuário na tela de perfil

let email = userCurrentObj.email;
document.querySelector("#emailInfo").innerHTML = email;
// insere o email do usuário na tela de perfil






