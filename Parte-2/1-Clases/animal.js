
const Persona = require("./persona");


class Animal extends Persona {
    constructor(nombre, genero, raza) {
        super(nombre, genero);
        this.nombre = nombre;
        this.genero = genero;
        this.raza = raza;

    }

    emitirSonido() {
        return "Haciendo ruido...";
    }

    mostrarInformacion() {
        return `Nombre: ${this.nombre}, Género: ${this.genero}, Raza: ${this.raza}`;
    }

    datosDelDueño() {
        return this.presentarse();
    }

}




module.exports = Animal;