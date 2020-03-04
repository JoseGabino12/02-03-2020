export default class Personas{
    /**
     * @param {Nombre} nombres
     * 
     */
    constructor(){
        this._nombre = nombres
        this._fechaNacimiento = fecha
        this._genero = generos
    }
    getPerfil(){
        return `${this._genero} ${this._fechaNacimiento.getFormatoCorto()} ${this._nombre.getCompleto()}`
    }
}