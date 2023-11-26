# Plano de Testes de Software

Os requisitos para realização dos testes de software são:

- Site publicado na internet;
- Navegador da internet - Chrome, Firefox ou Edge;
- Conectividade de internet para acesso à aplicação.

Os testes funcionais a serem realizados no aplicativo são descritos a seguir.

| CASO DE TESTE | `CT-01 – CADASTRAR CONTA` |
| :----------: | :---------- |
| Requisitos Associados | RF-01 - A aplicação deve permitir ao usuário cadastrar uma nova conta de acesso ao sistema. |
| Objetivo do Teste   | Verificar se o usuário consegue fazer cadastro no site. |
| Passos | 1) Acessar o navegador <br> 2) Informar a URL https://icei-puc-minas-pmv-ads.github.io/finanfy/ <br> 3) Visualizar a página principal <br> 4) Clicar em "Registre-se aqui" |
|  Critérios de Êxito | Após envio do formulário preenchido com as informações solicitadas, a conta é criada. |
|  Responsável | Integrante X |

---

| CASO DE TESTE | `CT-02 – LOGIN / LOGOUT` |
| :----------: | :---------- |
| Requisitos Associados | RF-02 - A aplicação deve permitir ao usuário entrar e sair de sua conta (login e logout). |
| Objetivo do Teste   | Verificar se o usuário consegue fazer login / logout em sua conta. |
| Passos | **LOGIN** <br> 1) Acessar o navegador <br> 2) Informar a URL https://icei-puc-minas-pmv-ads.github.io/finanfy/ <br> 3) Visualizar a página principal <br> 4) Clicar em "Entrar na conta" <br> **LOGOUT** <br> 1) Clicar no ícone de "Perfil" <br> 2) Clicar em "Sair da conta" |
|  Critérios de Êxito | **LOGIN** <br> Após envio do formulário preenchido com as informações solicitadas, o login é efetuado. <br> **LOGOUT** <br> Após clicar em "Sair da conta" o logout é efetuado. |
|  Responsável | Integrante X |

---

| CASO DE TESTE | `CT-03 – ALTERAR SENHA` |
| :----------: | :---------- |
| Requisitos Associados | RF-03 - A aplicação deve permitir ao usuário alterar sua senha cadastrada. |
| Objetivo do Teste   | Verificar se o usuário consegue alterar a senha de seu cadastro. |
| Passos | 1) ... <br> 2) ... <br> 3) ... <br> 4) ... |
|  Critérios de Êxito | ... |
|  Responsável | Integrante X |

---

| CASO DE TESTE | `CT-04 – RECUPERAR SENHA` |
| :----------: | :---------- |
| Requisitos Associados | RF-04 - A aplicação deve permitir ao usuário recuperar sua senha de acesso ao sistema. |
| Objetivo do Teste   | Verificar se o usuário consegue recuperar a senha de seu cadastro. |
| Passos | 1) ... <br> 2) ... <br> 3) ... <br> 4) ... |
|  Critérios de Êxito | ... |
|  Responsável | Integrante X |

---

| CASO DE TESTE | `CT-05 – CADASTRAR / EDITAR / VISUALIZAR / EXCLUIR TRANSAÇÃO` |
| :----------: | :---------- |
| Requisitos Associados | RF-05 - A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir receitas com data, hora, valor e descrição. <br> RF-07 - A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir despesas com data, hora, valor e descrição. <br> RF-16 - A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir valores em sua seção de poupança. |
| Objetivo do Teste   | Verificar se o usuário consegue cadastrar, editar, visualizar e excluir uma transação. |
| Passos | **CADASTRAR** <br> 1) Acesse o navegador <br> 2) Informe a URL <br> 3) Visualizar a página principal <br> 4) Clique no ícone "+" <br> **EDITAR** <br> 1) Clicar no ícone "Ver tudo" <br> 2) Clicar no ícone com forma de "Lápis" <br> **VISUALIZAR** <br> 1) Clicar nos ícones "RECEITAS", "DESPESAS", "POUPANÇA", as respecticas visualizações de cada página estará presente <br> **EXCLUIR TRANSAÇÃO** <br> 1) Clicar no ícone "Ver tudo" <br> 2) Clicar no ícone com forma de "Lápis" <br> 3) Clicar em "Excluir transação" <br> 4) Confirmar a exclusão |
|  Critérios de Êxito | **CADASTRAR** <br> Após envio do formulário preenchido com as informações solicitadas, o cadastro é realizado. <br> **EDITAR** <br> Após envio do formulário com as informações atualizadas, a transação é atualizada. <br> **VISUALIZAR** <br> Transações cadastradas nas respectivas páginas de visualização. <br> **EXCLUIR TRANSAÇÃO** <br> Confirmar a exclusão da formação. |
|  Responsável | Welbert Soares |

---

| CASO DE TESTE | `CT-06 – VISUALIZAR TOTAIS` |
| :----------: | :---------- |
| Requisitos Associados | RF-09 - A aplicação deve permitir ao usuário visualizar seu saldo atual. <br> RF-10 - A aplicação deve permitir ao usuário visualizar o valor total de suas receitas. <br> RF-11 - A aplicação deve permitir ao usuário visualizar o valor total de suas despesas. <br> RF-17 - A aplicação deve permitir ao usuário visualizar seu saldo acumulado em poupança. |
| Objetivo do Teste   | Verificar se o usuário consegue visualizar seu saldo atual (tela principal), seu total de receitas (tela receitas), seu total de despesas (tela despesas) e seu saldo acumulado (tela poupança). |
| Passos | **TOTAL GERAL** <br> 1) Acesse o navegador <br> 2) Informe o URL <br> 3) Visualizar a página incial <br> **TOTAL RECEITAS** <br> 1) Visualizar a página incial <br> 2) Clicar no ícone "receitas" <br> 3) Visualizar a página receitas <br> **TOTAL DE DESPESAS** <br> 1) Visualizar a página inicial <br> 2) Clicar no ícone "despesas" <br> 3) Visualizar a página despesas <br> **TOTAL DE POUPANÇA** <br> 1) Visualizar a página inicial <br> 2) Clicar no ícone "poupanças" <br> 3) Visualizar a página "poupança" |
|  Critérios de Êxito | **TOTAL GERAL** <br> Após as transações cadastradas o total geral será atualizado. <br> **TOTAL RECEITAS** <br> Após as transações de categoria receitas ser cadastradas, o total receitas será atualizado. <br> **TOTAL DESPESAS** <br> Após as transações de categoria despesas ser cadastradas, o total despesas será atualizado. <br> **TOTAL POUPANÇA** <br> Após as transações de categoria poupança do tipo entrada e saída serem cadastradas, o total receitas será atualizado. |
|  Responsável | Welbert Soares |

---

| CASO DE TESTE | `CT-07 – FILTRAR VISUALIZAÇÃO DE TRANSAÇÕES` |
| :----------: | :---------- |
| Requisitos Associados | RF-12 - A aplicação deve permitir ao usuário visualizar todas as transações cadastradas. <br> RF-13 - A aplicação deve permitir ao usuário filtrar a visualização de todas as transações por categoria e sub-categoria. |
| Objetivo do Teste   | Verificar se o usuário consegue visualizar uma lista de todas as transações cadastradas, bem como filtrar a visualização por categoria e sub-categoria. |
| Passos | 1) ... <br> 2) ... <br> 3) ... <br> 4) ... |
|  Critérios de Êxito | ... |
|  Responsável | Integrante X |

---

| CASO DE TESTE | `CT-08 – OCUlTAR E EXIBIR TODAS AS TRANSAÇÕES E TOTAIS` |
| :----------: | :---------- |
| Requisitos Associados | RF-18  A aplicação deve permitir ao usuário ocultar e exibir novamente todas os valores das transações. <br> RF-19  A aplicação deve permitir ao usuário ocultar e exibir novamente todas os totais das transações.|
| Objetivo do Teste   | Verificar se o usuário consegue ocultar e exibir novamente todos valores de totais e transações. |
| Passos | **TELA PRINCIPAL** <br> 1) Acesse o navegador <br> 2) Informe a URL <br> 3) Visualizar a página inicail <br> 4) Clicar no ícone em forma de "olho" <br> **RECEITAS** <br> 1) Visualizar a página principal <br> 2) Clicar no ícone "receitas" <br> 3) Clicar no ícone em forma de "olho" <br> **DESPESAS** <br> 1) Visualizar a página principal <br> 2) Clicar no ícone "despesas" <br> 3) Clicar no ícone em forma de "olho" <br> **POUPANÇA** <br> 1) Visualizar a página principal <br> 2) Clicar no ícone "poupança" <br> 3) Clicar no ícone em forma de "olho" <br> **CADASTRO TRANSAÇÕES** <br> 1) Visualizar a página principal <br> 2) Clicar no ícone "+" <br> 3) Clicar no ícone em forma de "olho" |
|  Critérios de Êxito | Ao clicar com os valores exibidos, eles se ocultam, enquanto ocultos, os mesmos exibem. |
|  Responsável | Welbert Soares |

---

| CASO DE TESTE | `CT-09 – FECHAR PAGINA APÓS CADASTRAR TRANSAÇÕES` |
| :----------: | :---------- |
| Requisitos Associados | RF-05  A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir receitas com dados, hora, valor e descrição <br> RF-07  A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir despesas com dados, hora, valor e descrição. <br> RF-16 A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir valores em sua seção de poupança.|
| Objetivo do Teste   | Confirmar que ao ser cadastrada uma transação de receita, despesa ou poupança com sucesso, o usúario seja redirecionado para a tela principal da aplicação. |
| Passos | 1) Acesse o navegador <br> 2) Informe a URL da aplicação Finanfy <br> 3) logue na plataforma com seu usuário e senha previamente cadastrados <br> 4) Visualizar a página inicial <br> 5) Clicar no ícone "+" <br> 6) Cadastrar 3 transações distintas com êxito (receita, despesa e poupança). |
|  Critérios de Êxito | Ao cadastrar os três tipos de movimentações possíveis com êxito, a aplicação deverá retornar automaticamente para a tela principal. |
|  Responsável | Rodolfo Almeida |

---

| CASO DE TESTE | `CT-10 – NÃO ACEITAR VALORES NEGATIVOS OU ZERADOS AO CADASTRAR TRANSAÇÕES` |
| :----------: | :---------- |
| Requisitos Associados | RF-05  A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir receitas com dados, hora, valor e descrição <br> RF-07  A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir despesas com dados, hora, valor e descrição. <br> RF-16 A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir valores em sua seção de poupança.|
| Objetivo do Teste   | Confirmar que ao ser cadastrada uma transação de receita, despesa ou poupança com êxito, não seja permitido cadastrar movimentações de receita, despesa ou poupança com valores iguais a zero ou valores negativos. |
| Passos | 1) Acesse o navegador <br> 2) Informe a URL da aplicação Finanfy <br> 3) logue na plataforma com seu usuário e senha previamente cadastrados <br> 4) Visualizar a página inicial <br> 5) Clicar no ícone "+" <br> 6) tentar cadastrar 6 transações distintas, sendo duas do tipo receita, duas do tipo despesa e duas do tipo poupança, informando em cada transação algum valor numérico negativo e tambem o valor igual a zero. |
|  Critérios de Êxito | Ao tentar cadastrar todos os tipos de movimentações citados anteriormente, a aplicação deverá exibir uma mensagem de alerta com o seguinte dizer "Não é possivel inserir um valor igual a zero ou negativo". |
|  Responsável | Rodolfo Almeida |
