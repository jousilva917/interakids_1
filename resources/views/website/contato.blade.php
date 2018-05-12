<html>
@include('partials.head')
<body>
    @include('partials.nav')
    <div class="about">
    <form action="" method="post">
        @csrf
        <label class="bg-dark" for="name">Seu nome</label>
        <input type="text" name="name" id="">
        <label class="bg-dark"  for="email">Seu email</label>
        <input type="text" name="email" id="">
        <label class="bg-dark" for="message">deixe sua mensagem</label>
        <textarea name="message" id="" cols="30" rows="10"></textarea>
        <input class="btn btn-primary" type="submit" value="Enviar">
    </form>
</div>
@include('partials.footer')
</body>
</html>