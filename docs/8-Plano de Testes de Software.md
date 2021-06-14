# Plano de Testes de Software

O processo de realização dos testes da solução desenvolvida está documentado na seção que se segue e traz os planos de testes de software e de usabilidade, na sequência, o registro dos testes realizados.

Requisitos para realização do teste:
• Navegador da Internet - Chrome, Firefox ou Edge;
• Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir:

|CASO DE TESTE| CT-01 - Fazer o Login no sistema |
|--------------------|------------------------------------|
| Requisitos Associados | RF-001 - Vincular a leitura da corrente elétrica ao usuário logado; RF-002 - Consultar o consumo de energia por aparelho |
| Objetivo do Teste | Verificar se o login é feito com sucesso, vinculando a leitura ao usuário |
| Passos | 1. Acessar a página index.html; 2. Informar o login "victorPuc" e a senha "123"; 3. Clicar em "Entrar" |
| Critérios de êxito | ● O usuário deve acessar a página home.html, onde deve conter a saudação "Bem vindo, Victor"; ● A leitura deve mostrar os aparelhos e as horas em que foram ligados ou desligados. |

|CASO DE TESTE| CT-02 - Consultar os aparelhos |
|--------------------|------------------------------------|
| Requisitos Associados | RF-003 - Emitir relatório de consumo por período; RF-004 - Identificar aparelhos com maior consumo |
| Objetivo do Teste | Verificar se os equipamentos são listados para o usuário e quais os equipamentos com maior consumo |
| Passos | 1. Acessar a página equipaments.html. |
| Critérios de êxito | ● O usuário deve visualizar os equipamentos cadastrados com suas respectivas potências. |

