var arreglo = [1, 3, 5, 8];



// No tienen un orden
// Llave: valor

// JSON

// JavaScript
// Object
// Notation

var objeto = {
    // Atributos
    nombre: "La noche estrellada ",
    autor: "Van Gogh",
    tecnica: "Óleo sobre lienzo",
    colores: ["#FFFFFF", "#000000"],
    anio: 1889,
    lugar: "Ámsterdam",
    mensaje: "Obra muy interesante",
    museo: "Museo de Van Gogh",

    //Métodos
    calcularedad: function () {
        return 2020 - this.anio
    },
    numeroColores: function () {
        if (this.colores.length === 1) {
            return " La pintura " + this.nombre + "tiene" + this.colores.length + "color."
        } else {
            return "la pintura" + this.nombre + " tiene " + this.colores.length + " colores ."
        }
    },

    obtenerinfo: function () {
        return "La obra " + this.nombre + "fue pintado por " + this.autor + "en el año " + this.anio;
    }
}
console.log(objeto);
console.log(objeto.nombre);

console.log(objeto.calcularedad());
console.log(objeto.numeroColores());
console.log(objeto.obtenerinfo());


