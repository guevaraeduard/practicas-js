'use strict'
/*Ejercicio 1: Progrma que pida 2 numeros y que nos diga cual es el mayor, el menor o si son iguales,
Si los datos introduciods no son un numero o son menores o iguales a 0 que nos vuelvan a pedir el numero*/
//isNaN: me devuelve true si la variable no es un numero

/*var cont = 0;


var num1 = parseInt(prompt("Introduce un numero positivo distinto de 0"));

var num2 = parseInt(prompt("Introduce otro numero positivo distinto de 0"));

while(num1 <=0  || num2 <=0 || isNaN(num1) || isNaN(num2)){
    console.log("Usted a introducido datos incorrectos por favor introduzca los datos de manera correcta");
    num1 = parseInt(prompt("Introduce un numero"));

    num2 = parseInt(prompt("Introduce otro numero"));

}


if (num1 > num2) {
    console.log("El numero: " + num1 + " es mayor que el numero: " + num2);
} else if (num2 > num1) {

    console.log("El numero: " + num2 + " es mayor que el numero: " + num1);
} else {

    console.log("El numero: " + num1 + " es igual que el numero: " + num2);
}    */

/*Ejercicio 2: Utilizando un bucle mostrar la suma y la media de los numeros introducidos hasta introducir
un numero negativo y ahi mostrar el resultado*/
/*
var suma = 0;
var cont = 0;

var num = parseInt(prompt('Introduce un numero'));

while(num > 0){
    suma = suma + num;
    cont++;
    num = parseInt(prompt('Introduce un numero'));
}

console.log("La media es: "+ suma/cont);*/

/*Ejercicio 3: Hacer un programa que muestre todos los numeros que hay entre dos numeros
introducios por el usuario y solo imprima los impares*/

/*var num1 = parseInt(prompt("Introduce un numero"));

var num2 = parseInt(prompt("Introduce un numero"));

var mayor = 0;
var menor = 0;

if (num1 > num2) {
    
    mayor = num1;
    menor = num2;

} else if (num2 > num1) {
    mayor = num2;
    menor = num1;
} else {

    console.log("El numero: " + num1 + " es igual que el numero: " + num2);
}

for(var i = menor; i <= mayor; i++ ){
    if(i%2 == 0){
        console.log("par:  "+i);
    }else{
        console.log("impar: "+i);
    }
    
}
*/


/*Ejercicio 4: Mostrar todos los numeros divisores que hay en un numero introducido
por el usuario*/

/*var num2 = parseInt(prompt("Introduce un numero"));

for(var i = num2; i >= 1; i-- ){
    if(num2%i == 0){
        console.log("divisor:  "+i);
    }
    
}

*/


/*Ejercicio 5: tabla de multiplicar de un numero introducido por pantalla*/

var num2 = parseInt(prompt("Introduce un numero"));

for(var i = 0; i <= 10; i++ ){
    
        console.log(num2+' x '+i + ' = '+ (num2*i));
    
    
}


/*Funciones propias de JS
Transformacion de textos
.toString() : Para convertir cualquier dato a un string
.toUpperCase(): Para convertir el texto a mayuscula
.toLowerCase(): para convertir el texto a minuscula
.length: para saber la longitud
.concat(): para concatenar
.indexOf(busqueda): para buscar algo
.search(buqueda): igual que el anterior
.replace(original, remplazo): para remplazar un tenxto


*/