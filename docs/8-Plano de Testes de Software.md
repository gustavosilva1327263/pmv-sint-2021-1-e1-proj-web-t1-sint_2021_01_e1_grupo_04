# Plano de Testes de Software


Apresente os cenários de testes utilizados na realização dos testes da sua aplicação. Escolha cenários de testes que demonstrem os requisitos sendo satisfeitos.

Enumere quais cenários de testes foram selecionados para teste. Neste tópico o grupo deve detalhar quais funcionalidades avaliadas, o grupo de usuários que foi escolhido para participar do teste e as ferramentas utilizadas.
 
## Ferramentas de Testes (Opcional)

Comente sobre as ferramentas de testes utilizadas.
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Práticas e Técnicas de Testes Ágeis](http://assiste.serpro.gov.br/serproagil/Apresenta/slides.pdf)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)


O processo de realização dos testes da solução desenvolvida está documentado na seção que se segue e traz os planos de testes de software e de usabilidade, na sequência, o registro dos testes realizados.

Requisitos para realização do teste:
	•	Site publicado na Internet
	•	Navegador da Internet - Chrome, Firefox ou Edge
	•	Conectividade de Internet para acesso às plataformas (APISs)

Os testes funcionais a serem realizados no aplicativo são descritos a seguir:

|CASO DE TESTE| CT-01 - Fazer o Login no sistema |
|--------------------|------------------------------------|
| Requisitos Associados | RF-001 - Vincular a leitura da corrente elétrica ao usuário logado |
| Objetivo do Teste | Verificar se o login é feito com sucesso, vinculando a leitura ao usuário |
| Passos | 1. Acessar a página index.html;
2. Informar o login "123456789" e a senha "123123";
3. 3. Clicar em "Entrar" |
| Critérios de êxito | ● O usuário deve acessar a página home.html, onde deve conter a saudação "Bem vindo, Victor"; ● A leitura deve mostrar os aparelhos e as horas em que foram ligados ou desligados. |



