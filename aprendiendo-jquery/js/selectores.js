$(document).ready(function(){


    //Selector ID

    $('#rojo').css('background', 'red').css('color', 'white');

    $('#amarillo').css('background', 'yellow').css('color', 'green');

    $('#verde').css('background', 'green').css('color', 'white');

    $('#rojo').click(function () { 
        $(this).css('background', 'blue').css('color', 'black')
    });

    //Cuando uno pase el cursor por el parrafo este muestra la manito
    var parrafo = $('p').css('cursor', 'pointer');
    $(parrafo).click(function (e) { 
        var  that = $(this);
        //me dice si el elemento tiene esta clase
        if(!that.hasClass('grande')){
            that.addClass('grande')    
        }else{
            that.removeClass('grande');
        }
        
    });

    var nombre = $('#nombre');

    nombre.focus(function(){
        $(this).css('border', '2px solid green');
    });

    nombre.blur(function (e) { 
        $(this).css('border', '1px solid #ccc');
        //show me muestra el selector que le estoy pasando
        //val me agarra el valor
        //text escribe dentro de la caja
        $('#datos').text($(this).val()).show();
        
    });
});

