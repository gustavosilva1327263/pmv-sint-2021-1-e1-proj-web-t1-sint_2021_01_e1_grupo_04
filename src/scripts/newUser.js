<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./styles/newUser.css">
    <script src="./scripts/script.js"></script>
</head>

<body>
    <main>
        <div class="container">

            <div class="logo">
                <h1 class="tittle">MeuMedidor</h1>
            </div>

            <form class="cadastrarForm">

                <p>Preencha os campos a seguir:</p>

                <div class="cadastrarForm-Camp">
                    <span>Nome</span>
                    <label for="nome">
                        <input type="text" id="name" name="nome">
                    </label>
                </div>

                <div class="cadastrarForm-Camp">
                    <span>E-mail</span>
                    <label for="e-mail">
                        <input type="email" id="email" name="email">
                    </label>
                </div>

                <div class="cadastrarForm-Camp">
                    <span>Telefone</span>
                    <label for="telefone">
                        <input type="text" id="phone" name="telefone">
                    </label>
                </div>

                <div class="cadastrarForm-Camp">
                    <span>login</span>
                    <label for="login">
                        <input type="text" id="login" name="login">
                    </label>
                </div>


                <div class="cadastrarForm-Camp">
                    <span>Senha</span>
                    <label for="password">
                        <input type="password" id="password" name="password">
                    </label>
                </div>

                <button onclick="registerNewUser()" type="button">Cadastrar</button>

            </form>

        </div>
    </main>
</body>

</html>