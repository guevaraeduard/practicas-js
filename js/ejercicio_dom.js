'use strict'

window.addEventListener('load', ()=>{

    var formulario = document.querySelector('#formulario');

    var box_dashed = document.querySelector('.dashed');
    box_dashed.style.display = 'none';

    formulario.addEventListener('submit', function(){
        console.log('Evento capturado');

        var nombre = document.querySelector('#nombre').value;
        
        var apellido = document.querySelector('#apellido').value;

        var edad = parseInt(document.querySelector('#edad').value);

        //otra manera

        var p_nombre = document.querySelector('#p_nombre span');
        
        var p_apellido = document.querySelector('#p_apellido span');
        
        var p_edad = document.querySelector('#p_edad span');

        if(nombre.trim() == null || nombre.trim().length == 0){
            alert('El nombre no es valido');
            return false;
        }
        if(apellido.trim() == null || apellido.trim().length == 0){
            alert('El apellido no es valido');
            return false;
        }
        if(edad == null || edad <= 0 || isNaN(edad)){
            alert('La edad no es valida');
            return false;
        }

        p_nombre.innerHTML = nombre;
        p_apellido.innerHTML = apellido;
        p_edad.innerHTML = edad;
        box_dashed.style.display = 'block';

        /*
        var datos = [nombre, apellido, edad];

        for(var i in datos){
            var parrafo = document.createElement('p');
            parrafo.append(datos[i]);
            box_dashed.append(parrafo);
        }*/
    });

});