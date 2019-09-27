<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{config('app.name' , 'InteraKids')}}</title>
    {!! Minify::stylesheet(['/css/app.css'])->withFullUrl()!!}
    {!! Minify::javascript(['/js/app.js','/js/site/temp.js','/js/site/ProfileFunctions.js'])->withFullUrl()!!}
</head>

<body id="by-play">

    @include('partials.perfilNav')
    @include('profile.ProfileEditModal')
    @include('profile.NotificationModal')
    @include('profile.historicModal')
    @include('profile.bugModal')
    @include('profile.logoutModal')

</body>

</html>