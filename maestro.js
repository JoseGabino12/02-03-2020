import Personas from "./persona.js";

export class Maestro extends Personas{
    constructor(nombre, fechaNacimiento, genero, sueldo, ncuenta, tipo){
        super(nombre, fechaNacimiento, genero)
        this._sueldo = sueldo
        this._ncuenta = ncuenta
        this._tipo = tipo
    }
    print(){
        console.log(this.getPerfil())
        console.log(this._sueldo)
        console.log(this._ncuenta)
        console.log(this._tipo)
    }
}