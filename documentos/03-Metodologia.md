
# Metodologia

Esta seção descreve a organização da equipe para a execução das tarefas do projeto e as ferramentas utilizadas para a manutenção dos códigos e demais artefatos.

## Gerenciamento de Projeto

A metodologia ágil escolhida para o desenvolvimento deste projeto foi o SCRUM, pois como citam Amaral, Fleury e Isoni (2019, p. 68), seus benefícios são

> “a visão clara dos resultados a entregar; ritmo e disciplina necessários à execução; definição de papéis e responsabilidades dos integrantes do projeto (Scrum Owner, Scrum Master e Team); empoderamento dos membros da equipe de projetos para atingir o desafio; conhecimento distribuído e compartilhado de forma colaborativa; ambiência favorável para crítica às ideias e não às pessoas.”

### Divisão de Papéis

- `Scrum Master` [Leandro Borth](https://github.com/leandroborth)
- `Product Owner` ~~Isabela Neto~~
- `Equipe de Desenvolvimento` ~~Adalberto Guimarães~~, ~~Isabela Neto~~, [Leandro Borth](https://github.com/leandroborth), [Pedro Louzada](https://github.com/PedroLouzadas), [Rodolfo Almeida](https://github.com/RodollfoAlmeida), [Welbert Soares](https://github.com/Welbert-Soares)
- `Equipe de Design` ~~Adalberto Guimarães~~, [Pedro Louzada](https://github.com/PedroLouzadas), [Rodolfo Almeida](https://github.com/RodollfoAlmeida), [Welbert Soares](https://github.com/Welbert-Soares)

### Processo

Para a realização deste projeto, nossa equipe optou por usar alguns elementos do SCRUM e do Kanban.
Adotamos reuniões curtas e períodicas a fim de alinharmos as tarefas que estão sendo realizadas, discutir eventuais bloqueios e apoiar os membros do time, caso necessitem. Não classificamos as reuniões como "Dailys" porque não são realizadas diariamente, mas possuem o mesmo objetivo. Também adotamos uma "Planning", que é uma reunião realizada logo após as orientações recebidas pela professora orientadora, com a finalidade de planejar as próximas tarefas a serem realizadas.

Para organização e distribuição das tarefas do projeto no modelo Kanban, a equipe está utilizando o GitHub Projects, estruturado com as seguintes divisões:

- `Product Backlog` Recebe as tarefas a serem trabalhadas e representa o Backlog do Produto. Todas as atividades identificadas no decorrer do projeto são incorporadas a esta lista.
- `To Do` Esta lista representa o Sprint Backlog que está sendo trabalhado, e contém as tarefas a serem trabalhadas.
- `Doing` Contém as tarefas iniciadas, nas quais estamos trabalhando.
- `Done` Nesta lista estão as tarefas concluídas, que passaram pelos testes e controle de qualidade e estão prontas para serem entregues aos usuários.

O quadro Kanban do grupo no GitHub Projects está disponível [neste link](https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/595/views/1) e é apresentado, no estado atual, na figura abaixo:

![Captura de tela 2023-09-28 222711](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t5-finanfy/assets/116202867/31df53da-421f-4042-924d-eb9914d37433)

Figura 1 - Tela do Kanban utilizada pelo grupo (GitHub Projects).

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

Figura 2 - Tela do esquema de etiquetas utilizada pelo grupo (GitHub Projects).

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
Para criação de diagramas e fluxo de usuário, a ferramenta Lucidchart foi selecionada por ser uma ferramenta robusta e muito utilizada no mercado para essa finalidade.
Por fim, para criação do design de interface e prototipagem, selecionamos o Figma por ser uma das ferramentas mais utilizadas no mercado atualmente, e por melhor atender as necessidades do nosso projeto.

Os artefatos do projeto são desenvolvidos a partir de diversas plataformas, e a relação dos ambientes com seu respectivo propósito é apresentada na tabela que se segue.

| AMBIENTE                               | PLATAFORMA                         | LINK DE ACESSO                         |
|----------------------------------------|------------------------------------|----------------------------------------|
| Repositório de código fonte            | GitHub                             | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t5-finanfy/tree/main/codigo-fonte |
| Documentos do projeto                  | GitHub                             | https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t5-finanfy/tree/main/documentos |
| Fluxo de usuário                       | Lucidchart                         | https://lucid.app/lucidchart/ef52eb77-5665-45a9-aca9-d6b2bd7eb325/edit?invitationId=inv_1edcfc31-fc3d-4896-bb2e-884b75b21930&page=0_0# |
| Projeto de Interface (design de telas) | Figma                              | https://www.figma.com/file/lgsNQ9gKcEb7RMU52G9YcX/Finanfy?type=design&node-id=0%3A1&mode=design&t=u7M9xsrm0DOovIIg-1 |
| Prototipagem                           | Figma                              | https://www.figma.com/proto/lgsNQ9gKcEb7RMU52G9YcX/Finanfy?page-id=498%3A877&type=design&node-id=519-733&viewport=422%2C281%2C0.2&t=FkkSr8RXuNm5JSAU-1&scaling=min-zoom&starting-point-node-id=519%3A733&mode=design |
| Gerenciamento do Projeto               | GitHub Projects                    | https://github.com/orgs/ICEI-PUC-Minas-PMV-ADS/projects/595 |
| Hospedagem                             | GitHub Pages                       | http://....                            |

### Estratégia de Organização de Codificação 

Todos os artefatos relacionados à implementação e visualização dos conteúdos do projeto serão inseridos na pasta [codigo-fonte](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e1-proj-web-t5-finanfy/tree/main/codigo-fonte).
