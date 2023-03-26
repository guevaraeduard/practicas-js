'use strict'

//Para cargar las funciones despues que se cargue la pagina
window.addEventListener('load', () => {

    //Eventos del raton 

    var boton = document.querySelector('#boton');

    function cambiarcolor() {
        var bg = boton.style.background;
        if (bg == 'green') {
            boton.style.background = 'red';
        } else {
            boton.style.background = 'green';
        }
        return true;
    }
    //click
    boton.addEventListener('click', function () {
        cambiarcolor();
    })

    //mouse over: cuando paso el raton
    boton.addEventListener('mouseover', function () {
        boton.style.background = 'blue';
    })

    //mouseout: cuando quito el raton
    boton.addEventListener('mouseout', function () {
        boton.style.background = '#ccc';
    })

    //focus: cuando estoy en el campo
    var input = document.querySelector('#campo_nombre');
    input.addEventListener('focus', function () {
        console.log('focus');
    })


    //blur: cuando estoy fuera del campo
    input.addEventListener('blur', function () {
        console.log('blur');
    })

    //keydown: me dectecta si estoy pulsando una tecal
    input.addEventListener('keydown', function (event) {
        console.log('tecla pulsada: ', String.fromCharCode(event.keyCode));
    })


    function intervalo(){
        var encabezado = document.querySelector('h1');
        //Se ejectuta cada cierto tiempo, el tiempo esta dado en milisegundos
        var tiempo = setInterval(function(){
            console.log('SetInverval ejecutando');
            if(encabezado.style.fontSize == '50px'){
                encabezado.style.fontSize = '30px';
            }else{
                encabezado.style.fontSize = '50px';
            }
        }, 2000);
        return tiempo;

    }


    var tiempo = intervalo();

    var stop = document.querySelector('#stop');

    stop.addEventListener('click', function(){
        alert('El intervalo se ha detenido');
        clearInterval(tiempo);
    });

    var start = document.querySelector('#start');

    start.addEventListener('click', function(){
        alert('Se ha iniciado el intervalo');
        intervalo();
    });
    
})

