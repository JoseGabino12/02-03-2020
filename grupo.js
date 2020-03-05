import { Estudiante } from "./estudiante.js"

export default class Grupo{
    /**
     * 
     * @param {number} semestre 
     * @param {string} grupo 
     */
    constructor(semestre, grupo){
        this._semestre = semestre
        this._grupo = grupo
        this._estudiante = Array()
    }
    registrar(estudiante){
        if(this._encontrarEstudiante(estudiante) != null){
            return false
        }else{
        this._estudiante.push(estudiante)
        return true}
    }
    _encontrarEstudiante(estudiante){
        let resul = null
        this._estudiante.forEach((estudiante2,i) => {
            if( estudiante2 === estudiante){
                resul = estudiante2
            }
        })
        return `${resul}`
    }
    listarAlumnos(){
        this._estudiante.forEach((estudiante, i) =>{
            console.log(`${i+1}: ${estudiante.getPerfil()}`)
        })
    }
}