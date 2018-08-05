<!DOCTYPE html>
<html lang="pt-br">
<head>
  @yield('head')
</head>
<body>
  @include('partials.perfilNavSide') 
  @include('partials.perfilNav')
  @include('partials.modal')
  @yield('perfil')
</body>
</html>