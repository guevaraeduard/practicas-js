$(document).ready(function () {
    
    //hide oculta
    //show muestra

    $('#mostrar').hide();

    $('#mostrar').click(function (e) { 
        $(this).hide();
        $('#ocultar').show('normal');
        //$('#caja').show();
        
       $('#caja').fadeTo('slow', 1);
    });

    $('#ocultar').click(function (e) { 
        $(this).hide();
        $('#mostrar').show();
       // $('#caja').hide('normal');
       $('#caja').fadeTo('slow', 0);
    });

    reloadLinks();
    
    $('#enviar').click(function (e) { 
        $('#menu').prepend('<li><a href="'+$("#add_link").val()+'"></a></li>');
        $("#add_link").val('');
        reloadLinks();
    });
    
    
});

function reloadLinks(){
    $('a').each( function (indext) { 
        var that = $(this);
        var enlace = that.attr('href');
        that.text(enlace);
    });
}