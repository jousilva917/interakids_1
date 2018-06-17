<script>  
    $(document).ready(function(){  
         $('#submit_form').on('submit', function(e){  
              e.preventDefault();  
              $.ajax({  
                   url:"{{url('/picture')}}",  
                   method:"POST",  
                   data:new FormData(this),  
                   contentType:false,  
                   cache:false,  
                   processData:false,
                   dataType: 'json',  
                   success:function(response)  
                   {   
                        $("#image_preview").attr("src","storage/profile_image/" + response);
                   }  
              });  
         });  
    });  
    </script> 