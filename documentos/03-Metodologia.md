
# Metodologia

Esta seção descreve a organização da equipe para a execução das tarefas do projeto e as ferramentas utilizadas para a manutenção dos códigos e demais artefatos.

## Gerenciamento de Projeto

A metodologia ágil escolhida para o desenvolvimento deste projeto foi o SCRUM, pois como citam Amaral, Fleury e Isoni (2019, p. 68), seus benefícios são a

> “visão clara dos resultados a entregar; ritmo e disciplina necessários à execução; definição de papéis e responsabilidades dos integrantes do projeto (Scrum Owner, Scrum Master e Team); empoderamento dos membros da equipe de projetos para atingir o desafio; conhecimento distribuído e compartilhado de forma colaborativa; ambiência favorável para crítica às ideias e não às pessoas.”

### Divisão de Papéis

- `Scrum Master` [Leandro Borth](https://github.com/leandroborth)
- `Product Owner` [Isabela Neto](https://github.com/isabelaCalcavara)
- `Equipe de Desenvolvimento` [Adalberto Guimarães](https://github.com/BetoErick), [Isabela Neto](https://github.com/isabelaCalcavara), [Leandro Borth](https://github.com/leandroborth), [Pedro Louzada](https://github.com/PedroLouzadas), [Rodolfo Almeida](https://github.com/RodollfoAlmeida), [Welbert Soares](https://github.com/Welbert-Soares)
- `Equipe de Design` [Adalberto Guimarães](https://github.com/BetoErick), [Pedro Louzada](https://github.com/PedroLouzadas), [Rodolfo Almeida](https://github.com/RodollfoAlmeida), [Welbert Soares](https://github.com/Welbert-Soares)

### Processo

Para organização e distribuição das tarefas do projeto, a equipe está utilizando o GitHub, estruturado com as seguintes listas:

- `Product Backlog` Recebe as tarefas a serem trabalhadas e representa o Backlog do Produto. Todas as atividades identificadas no decorrer do projeto são incorporadas a esta lista.
- `To Do` Esta lista representa o Sprint Backlog que está sendo trabalhado, e contém as tarefas a serem trabalhadas.
- `Doing` Contém as tarefas iniciadas, nas quais estamos trabalhando.
- `Done` Nesta lista estão as tarefas concluídas, que passaram pelos testes e controle de qualidade e estão prontas para serem entregues aos usuários.

O quadro kanban do grupo no GitHub está disponível [neste link](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/595/views/1) e é apresentado, no estado atual, na figura abaixo:

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t5-finanfy/assets/116202867/d1f69969-102d-40f9-b586-845136ff60fb)

Figura 2 - Tela do kanban no GitHub utilizada pelo grupo.

### Etiquetas

As tarefas são, ainda, etiquetadas em função da natureza da atividade e seguem o seguinte esquema de cores/categorias:

- `Bug` Algo não está funcionando / Erro no código
- `Development` Trabalhando em algo / Em desenvolvimento
- `Documentation` Melhorias ou acréscimos à documentação
- `Enhancement` Novo recurso ou solicitação
- `Infrastructure` Infraestrutura do projeto
- `Management` Gerência de projetos
- `Test` Testando funcionalidades da aplicação

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t5-finanfy/assets/116202867/ef72505c-7465-4b03-8489-97ee1c70d51a)

Figura 3 - Tela do esquema de etiquetas no GitHub utilizada pelo grupo.

### Ferramentas

As ferramentas empregadas no projeto são:

- Ferramentas para versionamento de código: `Git, GitHub`
- Editor de código: `Microsoft Visual Studio Code`
- Ferramentas para comunicação: `Microsoft Teams` + `WhatsApp`
- Ferramenta para criação de fluxo de usuário: `Lucidchart`
- Ferramenta para projeto de interface (design de telas): `Figma`
- Ferramenta para prototipagem: `Figma`
- Ferramenta para gerenciamento do projeto: `GitHub Projects`
- Ferramenta de hospedagem: `GitHub Pages`

O editor de código Microsoft Visual Studio Code foi escolhido por possuir boa integração com o sistema de versionamento (git), além de plugins e extensões específicos para as linguagens que serão utilizadas no desenvolvimento da aplicação.
As ferramentas de comunicação Microsoft Teams e Whatsapp foram selecionadas por serem acessíveis a todos os integrantes da equipe e permitirem maior agilidade na comunicação.
Para criar diagramas e fluxo de usuário, a ferramenta Lucidchart foi selecionada por ser uma ferramenta robusta para essa finalidade.
Por fim, para criação do design da interface e prototipagem, selecionamos o Figma por ser uma das ferramentas mais utilizadas no mercado atualmente, e por melhor atender as necessidades do nosso projeto.

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| AMBIENTE                               | PLATAFORMA                         | LINK DE ACESSO                         |
|----------------------------------------|------------------------------------|----------------------------------------|
| Repositório de código fonte            | GitHub                             | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t5-finanfy/tree/main/codigo-fonte |
| Documentos do projeto                  | GitHub                             | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t5-finanfy/tree/main/documentos |
| Fluxo de usuário                       | Lucidchart                         | https://lucid.app/users/registerOrLogin/free?showLogin=false&invitationId=inv_1edcfc31-fc3d-4896-bb2e-884b75b21930&productOpt=chart&invitationType=documentAcceptance&returnUrlOverride=%2Flucidchart%2Fef52eb77-5665-45a9-aca9-d6b2bd7eb325%2Fedit%3Fviewport_loc%3D-554%252C266%252C2220%252C946%252C0_0%26invitationId%3Dinv_1edcfc31-fc3d-4896-bb2e-884b75b21930 |
| Projeto de Interface (design de telas) | Figma                              | https://www.figma.com/file/lgsNQ9gKcEb7RMU52G9YcX/Finanfy-1.0?type=design&node-id=0%3A1&mode=design&t=8diBQruEABMgkD48-1 |
| Prototipagem                           | Figma                              | https://www.figma.com/proto/lgsNQ9gKcEb7RMU52G9YcX/Finanfy-1.0?page-id=209%3A637&node-id=209-668&starting-point-node-id=209%3A668&t=768D22IdcF6IemvV-1 |
| Gerenciamento do Projeto               | GitHub Projects                    | https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/595 |
| Hospedagem                             | GitHub Pages                       | http://....                            |

### Estratégia de Organização de Codificação 

Todos os artefatos relacionados à implementação e visualização dos conteúdos do projeto foram inseridos na pasta [codigo-fonte](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t5-finanfy/tree/main/codigo-fonte).
