export default class Nombre{
    constructor(nombre,apellidoPaterno,apellidoMaterno){
        this._nomrbe = nombre 
        this_apellidoPaterno  = apellidoPaterno
        this._apellidoMaterno = apellidoMaterno
    }
    getNombreCompleto(){
        return(`${this.nombre} ${this.apellidoPaterno} ${this.apellidoMaterno}`)
    }
    getApellidoNombre(){
        return(`${this.apellidoPaterno} ${this.apellidoMaterno} ${this.nombre}`)
    }
    getIniciales(){
        return (`${this.nombre.charAt(0)}${this.apellidoPaterno.charAt(0)}${this.apellidoMaterno.charAt(0)}`)
    }

}