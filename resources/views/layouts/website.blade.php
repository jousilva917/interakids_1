<!DOCTYPE html>
<html lang="pt-br">
    <head>
    @yield('head')
    </head>
    <body>
        @include('partials.nav')
        @yield('content')
        @include('partials.footer')
    </body>
</html>