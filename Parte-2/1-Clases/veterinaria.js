const Animal = require("./animal");

class Veterinario extends Animal {
    constructor(nombre, direccion, telefono, animal) {
        super(animal.nombre, animal.genero, animal.raza);
        this.nombre = nombre;
        this.direccion = direccion;
        this.telefono = telefono;
    }

    consultas() {
        return `${this.nombre} atiende consultas para ${this.nombre} en la dirección ${this.direccion}. Puedes contactarlo al teléfono ${this.telefono}.`;
    }

    datosDelAnimal() {
        return this.mostrarInformacion();
    }

    

}

const miAnimal = new Animal("Toby", "macho", "Labrador Retriever");
const miVeterinario = new Veterinario("Dr. López", "Calle Principal 123", "555-1234", miAnimal);

console.log(miVeterinario.consultas()); 
console.log(miVeterinario.datosDelAnimal()); 
console.log(miVeterinario.datosDelDueño());
