'use strict'

//Conseguir elementos con un ID en concreto
//#ID, .Clase, etiqueta
var caja = document.querySelector('#micaja');

//Conseguir elementos por su etiqueta
var todosLosDiv = document.getElementsByTagName('div');
console.log(todosLosDiv);

var seccion = document.querySelector('#miseccion');
var hr = document.createElement('hr');
var valor;
for(valor in todosLosDiv){
    //valido que lo q voy a añadir en el parrafo sea un string 
    if(typeof todosLosDiv[valor].textContent == 'string'){
        //creo la etiqueta p
        var parrafo = document.createElement('p');
        //extraigo el texto que esta en las etiquetas div
        var texto = document.createTextNode(todosLosDiv[valor].textContent);
        //añado el valor del texto a las etiquetas p
        parrafo.append(texto);
        //añado las etiquetas p al contenedor que tenga el id miseccion
        seccion.append(parrafo);
    }
}
seccion.append(hr);
//Conseguir elementos por su clase

var divrojos = document.getElementsByClassName('rojo');
var div;
for(div in divrojos){
    if(divrojos[div].className == 'rojo'){
        divrojos[div].style.background = 'red';
    }
}