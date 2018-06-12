<script>
   function submitform(obj){
        var picture = $('#picture').val();
        $(obj).ajaxSubmit({
            url:,
            method:'post'
        })
        }
</script>