<!DOCTYPE html>
<html>
<head>
    <title>Welcome Email</title>
</head>
 
<body>
<h2>Bem vindo, {{$user['name']}}!</h2>
<br/>
Seu endereço de email registrado é {{$user['email']}} , clique no link abaixo para verificar sua conta. 
<br/>
<a href="{{url('user/verify', $user->token)}}">Vericar email</a>
</body>
 
</html>