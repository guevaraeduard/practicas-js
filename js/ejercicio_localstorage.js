'use strict'

//window.addEventListener('load', function(){

    var formulario = document.querySelector('#formulariopeli');

    formulario.addEventListener('submit', function(){
        var titulo = document.querySelector('#addpeli').value;
        
        if(titulo.length >= 1){
            localStorage.setItem(titulo, titulo);
            
        }

    });

    var ul = document.querySelector('#lista');
    for( var i in localStorage){

        if(typeof this.localStorage[i] == 'string'){
            var li = document.createElement('li');
            li.append(localStorage[i]);
            ul.append(li);
        }
    }

    var formulario2 = document.querySelector('#borrarpeli');

    formulario2.addEventListener('submit', function(){
        var titulo = document.querySelector('#bopeli').value;
        
        if(titulo.length >= 1){
            localStorage.removeItem(titulo);
            
        }

    });


//});