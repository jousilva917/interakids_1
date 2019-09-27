$(window).on("scroll",function () {
  if($(window).scrollTop() > 400){
    $("nav").addClass("bg-ct");
    $("logo").addClass("tamanho");
   }else {
    $("nav").removeClass("bg-ct");
  }
});

