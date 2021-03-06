import Personas from "./persona.js";

export class Estudiante extends Personas{
    constructor({nombre, fechaNacimiento, genero, ncuenta, correo, escuela}){
        super(nombre, fechaNacimiento, genero)
        this._cuenta = ncuenta
        this._correo = correo
        this._escuela = escuela
    }
    getNumCuenta(){
        return this._cuenta
    }
    print(){
        console.log(`${this._cuenta}`)
        console.log(`${this._correo}`)
        console.log(`${this._escuela}`)
    }
    getPerfil(){
        return `${this._cuenta} ${this._nombre.getNombreCompleto()}`
    }
    esIgualA(estudiante){
        if(estudiante.getNumCuenta() === this._cuenta){
            return true
        }else{
            return false
        }
    }
}