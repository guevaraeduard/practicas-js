'use strict'
/*
1: Pida 6 numeros por pantalla y los meta en un array
2: Mostrar el array en el cuerpo de la pagina
3: Ordenarlo y mostrarlo
4: Invertir su orden y mostrarlo
5: Mostrar cuantos elementos tiene el array
6: Buscar un valor introducido por el usuario que nos diga si lo encuentra y su indice
7: Usar funciones en donde considere necesario 
*/

var numero = parseInt(prompt('Introduce un numero'));
var coleccion = new Array();
var cont=0;
while (cont < 6) {
    if(numero <=0 || isNaN(numero)){
        numero = parseInt(prompt('Introduce un numero'));
    }else{
        coleccion.push(numero);
        numero = parseInt(prompt('Introduce un numero'));
        cont++;
    }
}

var cantidad = coleccion.length;

mostrar(coleccion, 'Original');

coleccion.sort(function(a, b){return a-b});

mostrar(coleccion, 'Ordenado');

coleccion.reverse();

mostrar(coleccion, 'Invertido');


document.write("<h2> El arreglo tiene: "+cantidad+" elementos </h2>");

var buscar = parseInt(prompt('Introduce el elemento a buscar:'));

var busqueda = coleccion.find(elemento => elemento == buscar);
if(busqueda){
    
    var indice = coleccion.findIndex(elemento => elemento == buscar);

    alert("El elemento "+buscar+ " Se encuentra en el arreglo, en la posicion: "+indice);

}else{
    alert("Este elemento "+buscar+" No se encuentra en este arreglo");
}


function mostrar(colecciones, cadena){
    
    document.write("<h1>Numeros en el arreglo "+cadena+":"+"</h1>");
    document.write("<ul>");

    for(let coleccion in  colecciones){
        document.write("<li>"+colecciones[coleccion]+ "</li>");
    }

    document.write("</ul>");

}
