export default class Nombre{
    constructor(nombre,apellidoPaterno,apellidoMaterno){
        this._nombre = nombre 
        this._apellidoPaterno  = apellidoPaterno
        this._apellidoMaterno = apellidoMaterno
    }
    getNombreCompleto(){
        return(`${this._nombre} ${this._apellidoPaterno} ${this._apellidoMaterno}`)
    }
    getApellidoNombre(){
        return(`${this._apellidoPaterno} ${this._apellidoMaterno} ${this.nombre}`)
    }
    getIniciales(){
        return (`${this._nombre.charAt(0)}${this._apellidoPaterno.charAt(0)}${this._apellidoMaterno.charAt(0)}`)
    }
    setApellidoMaterno(){
        this._apellidoMaterno = apellidoMaterno
    }
    setApellidoPaterno(){
        this._apellidoPaterno = apellidoPaterno
    }
}