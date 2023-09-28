# Especificação do Projeto

## Perfis de Usuários

<table>
<tbody>
<tr align=center>
<th colspan="2">Jovens</th>
</tr>
<tr>
<td width="150px"><b>Descrição</b></td>
<td width="600px">Estudantes e Jovens Profissionais, de 15 a 24 anos, recém-ingressados no mercado de trabalho.</td>
</tr>
<tr>
<td><b>Necessidades</b></td>
<td>1. Controlar valores recebidos com salário, mesada e/ou outras fontes;
<br>
2. Controlar valores de gastos fixos e variáveis;
<br>
3. Criar uma poupança de valores, poder inserir e excluir valores, e poder visualizar saldo acumulado;
<br>
4. Visualizar valores recebidos, valores gastos e saldo.</td>
</tr>
</tbody>
</table>

## Histórias de Usuários

|EU COMO... `QUEM`   | QUERO/PRECISO... `O QUE` |PARA... `PORQUE`                 |
|--------------------|---------------------------|----------------------------------|
| Como jovem aprendiz | preciso poder lançar o valor do meu salário | para saber quanto dinheiro tenho disponível para gastar. |
| Como jovem aprendiz | preciso poder lançar meus gastos | para controlar minhas despesas fixas e variáveis. |
| Como estagiário | preciso poupar parte do meu dinheiro e conseguir visualizar quanto tenho guardado | para planejar o meu futuro. |
| Como estudante | preciso poder visualizar minhas receitas totais e por categoria | para saber quanto tenho disponível para gastar. |
| Como estagiário | preciso poder visualizar meus gastos totais e por categoria | para poder melhorar minha gestão financeira. |
| Como estudante | preciso ter uma visão geral das minhas finanças | para poder visualizar o total de receitas, o total de gastos e meu saldo atual. |

## Requisitos do Projeto

### Requisitos Funcionais

|ID    | Descrição                | Prioridade |
|-------|---------------------------------|----|
| RF-01 | A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir receitas com data, descrição e forma de recebimento. | ALTA | 
| RF-02 | A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir sub-categorias de receitas. | ALTA | 
| RF-03 | A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir despesas com data, descrição e forma de pagamento. | ALTA | 
| RF-04 | A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir sub-categorias de despesas. | ALTA | 
| RF-05 | A aplicação deve permitir ao usuário visualizar o valor total de suas receitas. | ALTA | 
| RF-06 | A aplicação deve permitir ao usuário visualizar o valor total de suas receitas por sub-categoria. | MÉDIA | 
| RF-07 | A aplicação deve permitir ao usuário visualizar o valor total de suas receitas por data. | MÉDIA | 
| RF-08 | A aplicação deve permitir ao usuário visualizar o valor total de suas receitas por forma de recebimento. | BAIXA | 
| RF-09 | A aplicação deve permitir ao usuário visualizar o valor total de suas despesas. | ALTA | 
| RF-10 | A aplicação deve permitir ao usuário visualizar o valor total de suas despesas por sub-categoria. | MÉDIA | 
| RF-11 | A aplicação deve permitir ao usuário visualizar o valor total de suas despesas por data. | MÉDIA | 
| RF-12 | A aplicação deve permitir ao usuário visualizar o valor total de suas despesas por forma de pagamento. | BAIXA | 
| RF-13 | A aplicação deve permitir ao usuário visualizar seu saldo atual. | ALTA | 
| RF-14 | A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir limites para gastos totais. | BAIXA | 
| RF-15 | A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir limites para gastos por categoria. | BAIXA | 
| RF-16 | A aplicação deve permitir ao usuário cadastrar, editar, visualizar e excluir valores em sua seção de poupança. | ALTA | 
| RF-17 | A aplicação deve permitir ao usuário visualizar seu saldo acumulado em poupança. | BAIXA | 
| RF-18 | A aplicação deve permitir ao usuário visualizar estimativa de saldo futuro de sua poupança, para um determinado período. | BAIXA | 

** Prioridade: Alta / Média / Baixa. 

### Requisitos não Funcionais

|ID      | Descrição               |Prioridade |
|--------|-------------------------|----|
| RNF-01 | A aplicação deve ser publicada em um ambiente acessível público na Internet. | ALTA | 
| RNF-02 | A aplicação deve estar disponível na web de forma gratuita. | ALTA | 
| RNF-03 | A aplicação deve ser implementada usando HTML, CSS e JavaScript. | ALTA | 
| RNF-04 | A aplicação deve ser atualizada a cada nova informação inserida pelo usuário. | ALTA | 
| RNF-05 | Todas as informações inseridas pelo usuário devem ser armazenadas no sistema. | ALTA | 
| RNF-06 | A aplicação deve ter bom nível de contraste entre os elementos da tela. | ALTA | 
| RNF-07 | A aplicação deve ser compatível com os principais navegadores do mercado: Google Chrome, Safari, Firefox, Opera e Microsoft Edge. | MÉDIA | 
| RNF-08 | A aplicação deve ser responsiva, permitindo a visualização em dispositivos diversos de forma adequada. | MÉDIA | 

** Prioridade: Alta / Média / Baixa.

