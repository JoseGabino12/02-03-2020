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
        let indice = this._estudiante.find(e => e.esIgualA(estudiante))
        return indice
    }
    listarAlumnos(){
        this._estudiante.forEach((estudiante, i) =>{
            console.log(`${i+1}: ${estudiante.getPerfil()}`)
        })
    }
    _encontrarIndiceEstudiante(estudiante){
        let indice = this._estudiante.findIndex((e => e.esIgualA(estudiante)))
        return indice
    }
    elimanr(estudiante){
        let indice = this._encontrarIndiceEstudiante(estudiante)

        if(indice < 0){
            return false
        }

        this._estudiante.splice(indice, 1)
        return true
    }

    actualizar(estudiante, nuevoEstudiante){
        let indice = this._encontrarIndiceEstudiante(estudiante)

        if(indice < 0){
            return false
        }

        this._estudiante.splice(indice, 1, nuevoEstudiante)
        return true
    }
}