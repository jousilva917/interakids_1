<!DOCTYPE html>
<html lang="pt-br">
    <head>
    @yield('head')
    </head>
    <body id="page-principal">
        @include('partials.nav')
     
        @yield('content')
        @include('partials.footer')
    </body>
</html>