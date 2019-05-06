$(document).ready(function (){

    $('#developmentimage').on('click',function(){
        $('#developmentimage').hide(200);
        $('#developmenttext').show(200);
    });
    $('#developmenttext').on('click',function(){
        $('#developmenttext').hide(200);
        $('#developmentimage').show(200);
    });
    $('#designimage').on('click',function(){
        $('#designimage').hide(200);
        $('#designtext').show(200);
    });
    $('#designtext').on('click',function(){
        $('#designtext').hide(200);
        $('#designimage').show(200);
    });
    $('#productimage').on('click',function(){
        $('#productimage').hide(200);
        $('#producttext').show(200);
    });
    $('#producttext').on('click',function(){
        $('#producttext').hide(200);
        $('#productimage').show(200);
    })

    $(function(){
        $('#workcard').mouseover(function(){
            $('#workcard').fadeTo("slow", 0.15);
            $('#work4text').show();
            
        });
        $('#workcard').mouseout(function(){
            $('#workcard').fadeTo("slow", 1);
            $('#work4text').hide();
        });
    });

    $("#theform").submit(function(e){
        e.preventDefault();
        var name= $('#yourname').val();
        var email = $('#youremail').val();
        var text = $('#yourcoment').val();
        alert(`name: ${name}, email: ${email}, text: ${text}.`);
      });

});