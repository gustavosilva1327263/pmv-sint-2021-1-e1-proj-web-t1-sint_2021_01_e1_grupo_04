# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

## Diagrama de componentes

Diagrama que permite a modelagem física de um sistema, através da visão dos seus componentes e relacionamentos entre os mesmos.

Os componentes que fazem parte da solução são apresentados na Figura XX.

![Diagrama de Componentes](img/componentes.png)
<center>Figura XX - Arquitetura da Solução</center>

A solução implementada conta com os seguintes módulos:
- **Navegador** - Interface básica do sistema  
  - **Páginas Web** - Conjunto de arquivos HTML, CSS, JavaScript e imagens que implementam as funcionalidades do sistema.
   - **Local Storage** - armazenamento mantido no Navegador, onde são implementados bancos de dados baseados em JSON. São eles: 
     - **Canais** - seções de notícias apresentadas 
     - **Comentários** - registro de opiniões dos usuários sobre as notícias
     - **Preferidas** - lista de notícias mantidas para leitura e acesso posterior
 - **Hospedagem** - local na Internet onde as páginas são mantidas e acessadas pelo navegador. 

> **Links Úteis**:
>
> - [Whimsical](https://whimsical.com/)

Inclua um diagrama da solução e descreva os módulos e as tecnologias que fazem parte da solução. Discorra sobre o diagrama.

A imagem a seguir ilustra o fluxo do usuário em nossa solução. Assim
que o usuário entra na plataforma, ele é apresentado à tela inicial
(Tela 1) onde ele é confrontado com as opões de fazer login, cadastrar-se, acessar como admin ou
então recuperar sua senha.

Caso ele opte por seguir pelo primeiro caminho (login), ele é
redirecionado para a tela principal (Tela 2), onde pode verificar o consumo de
energia elétrica dos seus aparelhos. Nessa tela, o usuário também pode
utilizar o menu para ir para a tela de histórico de consumo (Tela 3) ou fazer o logout.

Caso o usuário opte seguir pelo segundo caminho (cadastrar-se) ele
é redirecionado para a Tela 4, onde encontrará um formulário de cadastro a ser preenchido.

Caso opte pelo terceiro caminho, o usuário pode acessar a página de admin e adicionar um produto ao sistema e sua potência.

Por último, o usuário pode optar pelo quarto caminho (redefinir senha) e acessar a página de redefinição de senha, 
onde deverá informar o e-mail para redefinir a mesma. 

![Exemplo de UserFlow](img/UserFlow.png)


## Tecnologias Utilizadas

As tecnologias usadas no projeto serão:

<ul>
  <li> HTML5
  <li> CSS3
  <li> Javascript
  <li> JSON
</ul>

<li> IDE: VSCode
<li> Versionamento: GIT
<li> Hospedagem: Heroku

## Hospedagem

A hospedagem será feita utilizando a plataforma gratuita heroku. 

> **Links Úteis**:
>
> - [Website com GitHub Pages](https://pages.github.com/)
> - [Programação colaborativa com Repl.it](https://repl.it/)
> - [Getting Started with Heroku](https://devcenter.heroku.com/start)
> - [Publicando Seu Site No Heroku](http://pythonclub.com.br/publicando-seu-hello-world-no-heroku.html)
