<!DOCTYPE html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="./styles/resetPassword.css">
    <script src="./scripts/script.js"></script>
</head>

<body>
    <main>
        <div class="container">

            <div class="logo">
                <h1 class="tittle">MeuMedidor</h1>
            </div>

            <form class="redefinirForm">

                <div class="redefinirForm-Camp">
                    <label for="novaSenha">
                        <input type="password" id="novaSenha" name="novaSenha" placeholder="Nova Senha">
                    </label>
                </div>

                <div class="redefinirForm-Camp">
                    <label for="confirmarSenha">
                        <input type="password" id="confirmarSenha" name="confirmarSenha" placeholder="Confirmar Senha">
                    </label>
                </div>

                <button onclick="resetPassword()" type="button">Redefinir</button>

            </form>

        </div>
    </main>
</body>

</html>