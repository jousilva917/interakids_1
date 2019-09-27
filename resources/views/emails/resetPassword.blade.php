<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Só um teste</title>
</head>

<body>
    <h1>Olá</h1>

    <p>Estamos enviando este e-mail porque recebemos uma solicitação
        de reset de senha
    </p>

    <a href="{{route('password.reset', $token)}}">Redefinir senha</a>
    
    <p>Obrigado por usar nosso sistema, continue programando e alcance as estrelas</p>

    <small>Grupo InteraKids</small>
</body>

</html>