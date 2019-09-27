<script>
    $(document).ready(function () {
        //formulário para informações do perfil
        $('#profile_edit').on('submit', function (e) {
            e.preventDefault();
            $.ajax({
                url: "{{route('updateProfile')}}",
                method: "POST",
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,
                dataType: 'json',
                success: function (data) {
                  showData(data);  
                }
            });
        });
        //remove imagem de perfil
        $("#remove_pic").click(function () {
            var confirmation = confirm("Tem certeza que deseja remover sua foto de perfil");
            if(confirmation == true){
            $.get("{{url('picture/remove')}}");
            $("#profile_pic").attr("src", "storage/profile_image/noimage.png");
            $("#imageAlert").html('Foto de perfil removida com sucesso').css('display', '');
        }else{
            return;
        }
        });
        //Formulário para reportar um bug
        $('#bugReportForm').on('submit', function (e) {
            e.preventDefault();
            $.ajax({
                url: "{{url('report')}}",
                method: "POST",
                data: new FormData(this),
                contentType: false,
                cache: false,
                processData: false,
                dataType: 'json',
                success: function (data) {
                    $("#bugReport").html(data.status).css('display', '');
                }
            });
        });

    });

// exibe as mensagens de sucesso e/ou erro
function showData(data){
    for (var i = 0; i < data.length; i++) {
        if(data[i].name != undefined){
        $("#nameAlert").html(data[i].name).css('display', '');
    }
    if(data[i].status != false && data[i].email != undefined){
        $("#emailAlert").html(data[i].email).css('display', '');
    }else if(data[i].email != undefined){
        $("#emailAlertDanger").html(data[i].email).css('display', '');
    }
    if(data[i].status != false && data[i].password != undefined){
        $("#PasswordAlert").html(data[i].password).css('display', '');
    }else if(data[i].password != undefined){
        $("#PasswordAlertDanger").html(data[i].password).css('display', '');
    }
    if(data[i].message != undefined && data[i].profile_image != undefined){
        $("#imageAlert").html(data[i].message).css('display', '');
        $("#profile_pic").attr("src", "storage/profile_image/" + data[i].profile_image);
    }
        
    }
}

//marca todas as notificações como lido
function markNotificationAsRead() {
    $.get("{{url('markAsRead')}}", function () {
        var not = $(".notification-box");
        not.hide("slow");
        $("#NotificationI").html("0");
        $("#NotificationSpan").html("Sem notificações");
    });
}

</script>