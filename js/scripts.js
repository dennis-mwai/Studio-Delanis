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

    $(function(){
        $('#work3').mouseover(function(){
            $('#work3').fadeTo("slow", 0.15);
            $('#work3text').show();
            
        });
        $('#work3').mouseout(function(){
            $('#work3').fadeTo("slow", 1);
            $('#work3text').hide();
        });
    });

    $(function(){
        $('#work2').mouseover(function(){
            $('#work2').fadeTo("slow", 0.15);
            $('#work2text').show();
            
        });
        $('#work2').mouseout(function(){
            $('#work2').fadeTo("slow", 1);
            $('#work2text').hide();
        });
    });

    $(function(){
        $('#work1').mouseover(function(){
            $('#work1').fadeTo("slow", 0.15);
            $('#work1text').show();
            
        });
        $('#work1').mouseout(function(){
            $('#work1').fadeTo("slow", 1);
            $('#work1text').hide();
        });
    });

    $(function(){
        $('#work5').mouseover(function(){
            $('#work5').fadeTo("slow", 0.15);
            $('#work5text').show();
            
        });
        $('#work5').mouseout(function(){
            $('#work5').fadeTo("slow", 1);
            $('#work5text').hide();
        });
    });

    $(function(){
        $('#work6').mouseover(function(){
            $('#work6').fadeTo("slow", 0.15);
            $('#work6text').show();
            
        });
        $('#work6').mouseout(function(){
            $('#work6').fadeTo("slow", 1);
            $('#work6text').hide();
        });
    });

    $(function(){
        $('#work7').mouseover(function(){
            $('#work7').fadeTo("slow", 0.15);
            $('#work7text').show();
            
        });
        $('#work7').mouseout(function(){
            $('#work7').fadeTo("slow", 1);
            $('#work7text').hide();
        });
    });

    $(function(){
        $('#work8').mouseover(function(){
            $('#work8').fadeTo("slow", 0.15);
            $('#work8text').show();
            
        });
        $('#work8').mouseout(function(){
            $('#work8').fadeTo("slow", 1);
            $('#work8text').hide();
        });
    });

    $("#theform").submit(function(e){
        e.preventDefault();
        var name= $('#yourname').val();
        var email = $('#youremail').val();
        var text = $('#yourcoment').val();
        alert(`${name},  we have received your message. Thank you for reaching out to us.`);
      });

});