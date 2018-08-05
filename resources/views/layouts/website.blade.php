<!DOCTYPE html>
<html lang="pt-br">
    <head>
    @yield('head')
    </head>
    <body id="page-principal">
        @include('partials.nav')
        @include('partials.modal')
        @yield('content')
        @include('partials.footer')
    </body>
</html>