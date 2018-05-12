<html>
    @include('partials.head')
    <body>
        @include('partials.nav')
        @yield('content')
        <header class="masthead">
            <div class="landing">

               <h1>Slider Principal</h1>
                
            </div>
        </header>

        <section id="video">
            <div class="container">
                <h1>Video</h1>
                <div class="row">
                    <div class="col-md-12">

                    </div>
                </div>
            </div>
        </section>

        <section id="grid-app">
            <div class="container">
                <h1>Grid</h1>
                <div class="row">
                    <div class="col-md-12">

                    </div>
                </div>
            </div>
        </section>

        <section id="sobre">
            <div class="container">
                <h1>sobre</h1>
                <div class="row">
                    <div class="col-md-12">

                    </div>
                </div>
            </div>
        </section>
        @include('partials.footer')
    </body>
</html>
