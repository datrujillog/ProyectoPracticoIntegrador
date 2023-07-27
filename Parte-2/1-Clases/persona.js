

class Persona {
    constructor(nombre, apellido, cedula) {
      this._nombre = nombre;
      this._apellido = apellido;
      this._cedula = cedula;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    get apellido() {
      return this._apellido;
    }
  
    set apellido(nuevoApellido) {
      this._apellido = nuevoApellido;
    }
  
    get cedula() {
      return this._cedula;
    }
  
    set cedula(nuevaCedula) {
      this._cedula = nuevaCedula;
    }
  
    presentarse() {
      return `Hola, soy ${this._nombre} ${this._apellido}.`;
    }
  }

    
  module.exports = Persona;