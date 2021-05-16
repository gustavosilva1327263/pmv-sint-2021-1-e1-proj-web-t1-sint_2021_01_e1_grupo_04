# Especificações do Projeto

De maneira geral, a medição do consumo é insuficiente, no sentido de que não identifica o consumo individualizado por aparelho de maneira precisa.

Nesse sentido, o problema a ser resolvido neste projeto foi definido como sendo a imprecisão do consumo de energia elétrica indiviualizado, afim de permitir que os consumidores controlem o uso da energia que estão pagando.


## Personas

### Maria (Consumidora)
<table border="1" width="800px">    
 <tr> 
  <th colspan="3"> <img src="https://medicina.ucpel.edu.br/wp-content/uploads/2020/07/apacucpel_ucpel_image_319-1024x960.jpeg" height="200" width="200"> 
  <tr><th colspan="3"> Maria Silva</th> 
 </tr>
 <tr>
  <td><b>Idade:</b> 28 </td>
  <td><b>Ocupação:</b> Médica, responsável pela gestão financeira da casa.</td>
  <td><b>Aplicativos mais usados</b><br>
     ● Instagram<br>
     ● Twitter</td>
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

<table border="1" width="800px">
 <tr> 
  <th colspan="3"> <img src="https://uploads.metropoles.com/wp-content/uploads/2020/04/10094941/Nina-Silva_200519_Luciana-Prezia-1024x683-1-600x400.jpg" height="200" width="200"> 
  <tr><th colspan="3"> Fabiana Santos</th> 
 </tr>
 <tr>
  <td><b>Idade:</b> 33 </td>
  <td><b>Ocupação:</b> Gerente de uma fábrica de cosméticos</td>
  <td><b>Aplicativos mais usados</b><br>
     ● Instagram<br>
     ● Twitter<br>
     ● Pinterest</td>
 </tr>
  <tr>
    <td><b>Motivações</b><br>
      ● Diminuir os custos da sua empresa;<br>
      ● Aumentar a eficiência da empresa e expandir o próprio mercado.
    </td>
    <td><b>Frustrações</b><br>
      ● Equipamentos ruins ou com problemas<br>
      ●	Não alcançar as metas da empresa
    </td>
    <td><b>Hobbies, História</b><br>
      ● 	Cinema<br>
      ●  Praia</td>
 </tr>
</table>


### Evandro (Fornecedor)

<table border="1" width="800px">
 <tr> 
  <th colspan="3"> <img src="https://opetroleo.com.br/wp-content/uploads/2016/07/engenheiro-eletricista.jpg" height="200" width="200"> 
  <tr><th colspan="3"> Fabiana Santos</th> 
 </tr>
 <tr>
  <td><b>Idade:</b> 45 </td>
  <td><b>Ocupação:</b> Fiscal Técnico de uma concessionária</td>
  <td><b>Aplicativos mais usados</b><br>
     ● Facebook<br>
     ● YouTube<br>
     ● Clash of Clans (jogo de celular)</td>
 </tr>
  <tr>
    <td><b>Motivações</b><br>
      ● Acabar com perdas e desvios de energia elétrica;<br>
      ● Melhorar a qualidade da distribuição de energia elétrica.
    </td>
    <td><b>Frustrações</b><br>
      ● Desvios de energia (gatos)<br>
      ●	Inadimplência
    </td>
    <td><b>Hobbies, História</b><br>
      ● 	Sítio ou chácara<br>
      ●  Comer</td>
 </tr>
</table>

## Histórias de Usuários

Com base na análise das personas forma identificadas as histórias de usuários abaixo:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 
|--------------------|------------------------------------|----------------------------------------|
|Maria | Identificar o custo de cada aparelho eletrônico em tempo real | Economizar |
|Maria | Consultar o consumo por aparelho | Identificar os aparelhos que mais consomem |
|**Maria | Registrar os aparelhos eletrônicos | Identificar e controlar o custo de cada aparelho**|
|Fabiana | Consultar o histórico de consumo de energia total (kWh) | Controlar o consumo ao longo do tempo |
|Fabiana | Consultar o consumo diário, semanal e mensal | Identificar os períodos de maior consumo |
|**Fabiana | Agrupar equipamentos para controle por cômodo/setor | Identificar onde mais se consome**  |
|**Fabiana | Agrupar equipamentos para controle por tipo/natureza | Identificar onde mais se consome**  |
|Evandro | Identificar os casos de perda/desvio de energia elétrica | Reduzir o prejuízo |
|Evandro | Consultar a média de consumo por região | Identificar casos de consumo atípicos (mais altos ou mais baixos) |
|Evandro | Consultar os dados e o consumo de cada usuário | Identificar os consumidores |

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Consultar o consumo de energia por aparelho | ALTA |
|RF-002| Emitir relatório de consumo por período (dia, semana, mês, ano) | MÉDIA |
|RF-003| Identificar aparelhos com maior consumo | MÉDIA |

### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve fornecer as informações em tempo real | ALTA |
|RNF-002| O sistema deve ser responsivo para rodar em um dispositivo móvel | MÉDIA |

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
