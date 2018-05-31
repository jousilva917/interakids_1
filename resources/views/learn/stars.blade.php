<script>
   function mostra(){
       $(window).on('load',function(){
    $.ajax({
        method:'get',
        url:'{{url('/stars')}}',
        success: function(data){
            $('#div1').html(data);
        }
    });
});
};
</script>