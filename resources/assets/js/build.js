
$(".alert.flash").fadeTo(2000, 500).slideUp(500, function(){
    $(".alert.flash").slideUp(500);
});

$(document).ready(function(){
    $(".dayNight input").change(function() {
        if(this.checked) {
            $("body").addClass("night");
        }else{
            $("body").removeClass("night");
        }
    });
    $(".dayNight input").change(function(){
        if(this.checked){
            $("#sky-j").removeClass("display");
        }else{
            $("#sky-j").addClass("display");
        }
    });
});



