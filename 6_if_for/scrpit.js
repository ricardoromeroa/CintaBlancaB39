alert("Funciona!");

// Número
//Booleano
//String

var edad = 33;


// false
if (edad >= 18) {
    console.log("Eres mayor de edad")
    console.log("Puedes votar")
    console.log("ID")
} else {
    console.log("Eres menor de edad");
    console.log("No puedes votar");
    console.log("❌");
}


var dia = "soleado"
var hora = "5:00"
if (dia === "nublado") {
    console.log('No salgas')
} else {
    if (hora === "5:00") {
        console.log("Estás a tiempo para la función 🎥");
    } else {
        console.log("¡Corre! Vas tarde 🏃‍♀️");
    }
}

// operación módulo %
// Imprimir Fizz si un número es multiplo de 3
// Imprimir Buzz si un número es múltiplo de 5
// Imprimir FizzBuzz si el número es multiplo de 3 y 5
// Imprimir número

var numero = 15;

//if(numero % 3 === 0) {
//    if(numero % 5 === 0) {
//        console.log("FizzBuzz");
//    } else {
//        console.log("Fizz")
//    }
// } else if(numero % 5 === 0) {
//    console.log("Buzz");
// } else {
//    console.log(numero);
// }

if (numero % 3 === 0 && numero % 5 === 0) {
    console.log("FizzBuzz");
} else if (numero % 5) {
    console.log("Buzz");
} else {
    console.log(numero);
}

// indice ; condición ; pasos          iteración
// i = 0; 0 <= 10; i = 0 + 1;          vuelta 0
// i = 1; 1 <= 10; i = 1 + 1;          vuelta 1
// i = 2; 2 <= 10; i = 2 + 1;          vuelta 2 
// i = 3; 3 <= 10; i = 3 + 1;          vuelta 3
// i = 4; 4 <= 10; i = 4 + 1;          vuelta 4

for (var i = 0; i <= 10; i = i + 1) {
    console.log("Vuelta " + i);
}

for (var i = 0; i <= 10; i++) {
    console.log("Vuelta " + i);
}

// INFINITO !!!
// for(var i = 10; i <= 10; i--) {
//    console.log(i);
//

console.log("Del 5 al 20")
for (var i = 5; i <= 20; i++) {
    console.log(i);
}

console.log("Del 10 al 3")
for (var i = 10; i >= 3; i--) {
    console.log(i);
}

console.log("Del 1 al 100")
for (var i = 1; i <= 100; i++) {
    console.log(i);
}

// while