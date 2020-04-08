// hagan simulación de piedra papel tijeras
// No necesitamos de for
// Unicamente necesitamos if

// strings
var j1 = prompt("introduce opcion J1")
var j2 = prompt("introduce opción J2")

j1 = j1.toLocaleLowerCase();
j2 = j2.toLocaleLowerCase();

alert("drumroll sound effect");


if (j1 === "piedra" && j2 === "papel") {
    console.log("j2 wins");
    alert("gana j2");
} else {
    if (j1 === "papel" && j2 === "papel") {
        console.log("Empate");
        alert("Empate");
    } else {
        if (j1 === "tijera" && j2 === "papel") {
            console.log("j1 wins");
            alert("gana j1");
        }
    }
}

if (j1 === "piedra" && j2 === "piedra") {
    console.log("Empate");
    alert(Empate);
} else {
    if (j1 === "papel" && j2 === "piedra") {
        console.log("j1 wins");
        alert("gana j1");
    } else {
        if (j1 === "tijera" && j2 === "piedra") {
            console.log("j2 wins");
            alert("gana j2");

        }
    }
}

if (j1 === "piedra" && j2 === "tijera") {
    console.log("j1 wins");
    alert("gana j1");
} else {
    if (j1 === "papel" && j2 === "tijera") {
        console.log("j2 wins");
        alert("gana j1");
    } else {
        if (j1 === "tijera" && j2 === "tijera") {
            console.log("Empate");
            alert("gana j1");

        }
    }

}

// manejo de errores







