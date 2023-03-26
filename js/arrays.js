'use strict'

var lenguajes = new Array('PHP', 'Java', 'CSS');

document.write("<h1>Lenguajes de programacion</h1>");
document.write("<ul>");

lenguajes.forEach((elemento, indice)=>{
    document.write("<li>"+indice+" - " + elemento+ "</li>");
});

document.write("</ul>");
//push: para añadir un elemento
lenguajes.push('Html');

console.log(lenguajes);
//Me elimina el ultimo elemento del array
lenguajes.pop();

console.log(lenguajes);
//Me busca el indice que le paso, en caso que no lo encuentre devuelve -1
var indice = lenguajes.indexOf('Java');

if(indice > -1){
    //En base de un indice me elimina cuantos espacios x delante
    lenguajes.splice(indice, 1);
}
console.log(lenguajes);
//Me devuelve el array en un string separando los elementos por comas
var len_cadena = lenguajes.join();

console.log(len_cadena);

var cadena = "edaurd, alexander, guevara";
//Me devuelve un array de un string para ello tengo que indicarle el separador
//de los elementos
var cadena_array = cadena.split(", ");

console.log(cadena_array);
//Me ordena un arreglo alfaveticamnete
cadena_array.sort();
console.log(cadena_array);
//me ordena el arreglo de manera inversa
cadena_array.reverse();
console.log(cadena_array);



document.write("<h1>Lenguajes de programacion 2</h1>");
document.write("<ul>");

for(let lenguaje in  lenguajes){
    document.write("<li>"+lenguajes[lenguaje]+ "</li>");
}

document.write("</ul>");
//para buscar un elemento dentro de un array, findIndex me devuelve el indice
var busqueda = lenguajes.find(lenguaje => lenguaje == 'PHP');
console.log(busqueda);
