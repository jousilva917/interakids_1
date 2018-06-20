$(document).ready(function(){
    $('#contato_submit').on('submit', function (e) {
        e.preventDefault();
        $.ajax({
            url: "/submit",
            method: "POST",
            data: new FormData(this),
            contentType: false,
            cache: false,
            processData: false,
            dataType: 'json',
            success: function (data) {
                $("#enviado").html(data.enviado);
                $("#enviado").attr("class", "alert alert-success");
                
            }
        });
    });
    $('#characterLeft').text('140 caracteres restantes');
    $('#message').keydown(function () {
        var max = 140;
        var len = $(this).val().length;
        if (len >= max) {
            $('#characterLeft').text('Você alcançou o limite de caracteres');
            $('#characterLeft').addClass('red');
            $('#btnSubmit').addClass('disabled');            
        } 
        else {
            var ch = max - len;
            $('#characterLeft').text(ch + ' caracteres restantes');
            $('#btnSubmit').removeClass('disabled');
            $('#characterLeft').removeClass('red');            
        }
    });    
});

//action="{{action('HomeController@submit')}}"