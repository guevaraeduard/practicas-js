$(document).ready(function() {

    //Slider
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200,
            responsive: true
        });



        //Posts
        var posts = [{
                title: 'Prueba de titulo 1',
                date: 'Publicado el dia ' + moment().format('Do') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro de muestras tipográficas. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker, que incluía versiones de Lorem Ipsum'
            },
            {
                title: 'Prueba de titulo 2',
                date: 'Publicado el dia ' + moment().format('Do') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro de muestras tipográficas. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker, que incluía versiones de Lorem Ipsum'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el dia ' + moment().format('Do') + ' de ' + moment().format('MMMM') + ' del ' + moment().format('YYYY'),
                content: 'Lorem Ipsum es simplemente un texto ficticio de la industria de la impresión y la composición tipográfica. Lorem Ipsum ha sido el texto ficticio estándar de la industria desde el año 1500, cuando un impresor desconocido tomó una galera de tipos y la codificó para hacer un libro de muestras tipográficas. Ha sobrevivido no solo cinco siglos, sino también el salto a la composición tipográfica electrónica, permaneciendo esencialmente sin cambios. Se popularizó en la década de 1960 con el lanzamiento de hojas de Letraset que contenían pasajes de Lorem Ipsum y, más recientemente, con software de autoedición como Aldus PageMaker, que incluía versiones de Lorem Ipsum'
            },
        ];

        posts.forEach((item, index) => {
            var post = `
            <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer mas</a>
            </article>
        `;

            $('#posts').append(post);
        });
    }
    var theme = $('#theme');

    $('#to-green').click(function(e) {
        theme.attr('href', 'css/green.css')
    });

    $('#to-blue').click(function(e) {
        theme.attr('href', 'css/blue.css')
    });

    $('#to-red').click(function(e) {
        theme.attr('href', 'css/red.css')
    });

    //Scroll arriba de la wed

    $('.subir').click(function(e) {
        //para que el link no haga su funcion de llevarnos a otro sitio 
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    //login falso
    $('#login form').submit(function(e) {
        var for_name = $('#form_name').val();
        localStorage.setItem('form_name', for_name);
    });

    var form_name = localStorage.getItem('form_name');
    if (form_name != null && form_name != 'undefined') {
        var about_p = $('#about p');
        about_p.html('<br><strong>Bienvenido, ' + form_name + ' </strong>');
        about_p.append("<a href='#' id='logout'>Cerrar seccion</a>");
        $('#login').hide();
        $('#logout').click(function(e) {
            localStorage.clear();
            location.reload();
        });
    }

    //acordeon
    if (window.location.href.indexOf('abaut') > -1) {
        $('#acordeon').accordion();
    }
    //reloj
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function() {
            var reloj = moment().format('hh:mm:ss');
            $('#reloj').html(reloj);
        }, 1000)

    }
    //contacto
    if (window.location.href.indexOf('contacto') > -1) {
        $("form input[name='date']").datepicker({
            dateFormat: 'dd-mm-yy'
        });
        $.validate();
    }

    var parrafo = $('#cambiar');
    $(parrafo).click(function(e) {

        var width = $("#container").width();
        var row = $("#contenedor-row").width();
        alert("el tamaño del contenedor es : " + width + "El tamaño del row es: " + row);


        var that = $('#caracol');

        // $("#caracol").css('width' , row+'px').css('height', '50%')
        //me dice si el elemento tiene esta clase

        if (!that.hasClass('grande')) {
            that.addClass('grande').css('width', row + 'px');
        } else {
            that.removeClass('grande');
            that.removeAttr('style');
        }


    });


});