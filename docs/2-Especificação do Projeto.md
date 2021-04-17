# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

De maneira geral, a medição do consumo é insuficiente, no sentido de que não identifica o consumo individualizado por aparelho de maneira precisa.

Nesse sentido, o problema a ser resolvido neste projeto foi definido como sendo a imprecisão do consumo de energia elétrica indiviualizado, afim de permitir que os consumidores controlem o uso da energia que estão pagando.


## Personas

### Maria (Consumidora)
<table border="1">    
 <tr> 
  <th colspan="3"> <img src="https://medicina.ucpel.edu.br/wp-content/uploads/2020/07/apacucpel_ucpel_image_319-1024x960.jpeg" height="200" width="200"> 
  <tr><th colspan="3"> Maria Silva</th> 
 </tr>
 <tr>
  <td><b>Idade:</b> 28 </td>
  <td><b>Ocupação:</b> Médica, responsável pela gestão financeira da casa.</td>
  <td><b>Aparelhos mais usados</b><br>
     ● Geladeira<br>
     ● Máquina de Lavar<br>
     ● Chuveiro</td>
 </tr>
  <tr>
    <td><b>Motivações</b><br>
      ● Poder entender o tanto que cada aparelho utiliza de energia.<br>
      ● Saber quais horários o consumo de energia deve ser reduzido.
    </td>
    <td><b>Frustrações</b><br>
      ● preocupada com as economias<br>
      ●	em constante discussões com os outros membros da família em relação ao consumo de energia
    </td>
    <td><b>Hobbies, História</b><br>
     ● 	Assistir filmes com a família<br>
      ●  Viajar </td>
 </tr>
</table>


### Fabiana (Consumidora)

Fabiana, 45, Gerente Empresarial. Gerencia uma fábrica de cosméticos, pretende reduzir todos os custos da fábrica. Por utilizar muitos equipamentos, decide verificar o custo-benefício exato de cada equipamento, a fim de substituir os itens que mais consomem por outros mais eficientes.

### Evandro (Fornecedor)

Evandro, 39, Engenheiro Elétrico. Fiscal Técnico na Companhia Elétrica Brazuca, empresa distribuídora de energia elétrica no interior de Minas Gerais. Responsável pela fiscalização de perda e desvios de energia elétrica na rede da companhia. Preocupada com o desvio de energia, precisa monitorar o consumo individualizado.

## Histórias de Usuários

Com base na análise das personas forma identificadas as histórias de usuários abaixo:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 
|--------------------|------------------------------------|----------------------------------------|
|Consumidor | Identificar o custo de cada aparelho eletrônico | Economizar |
|Fornecedor | Identificar os casos de perda/desvio de energia elétrica | Reduzir o prejuízo |
|---|---|---|
|Consumidor | Registrar os aparelhos eletrônicos | Identificar e controlar o custo de cada aparelho |
|Consumidor | Consultar o histórico de consumo de energia total (kWh) | Controlar o consumo ao longo do tempo |
|Consumidor | Consultar o consumo diário, semanal e mensal | Identificar os períodos de maior consumo |
|Consumidor | Consultar o consumo por aparelho | Identificar os aparelhos que mais consomem |
|Consumidor | Agrupar equipamentos para controle por cômodo/setor | Identificar onde mais se consome  |
|Consumidor | Agrupar equipamentos para controle por tipo/natureza | Identificar onde mais se consome  |
|Fornecedor | Consultar a média de consumo por região | Identificar casos de consumo atípicos (mais altos ou mais baixos) |
|Fornecedor | Consultar os dados e o consumo de cada usuário | Identificar os consumidores |
|Fornecedor | Consultar a média de consumo por região | Identificar casos de consumo atípicos (mais altos ou mais baixos) |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Permitir que o usuário cadastre tarefas | ALTA | 
|RF-002| Emitir um relatório de tarefas no mês   | MÉDIA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 

Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá ser entregue até o final do semestre |
|02| Não pode ser desenvolvido um módulo de backend        |


Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
