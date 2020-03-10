import fechaNacimiento from "./fecha.js"
import Nombre from "./nombre.js"
import { Estudiante } from "./estudiante.js";
import { Maestro } from "./maestro.js";
import Grupo from "./grupo.js";
class Main{
    constructor(){
        this.fecha2= new fechaNacimiento (3,3,2005);
        this.nombre3 = new Nombre("Morales", "Gonzalez", "Gabino");
        
    }
    testFechaNacimiento(){
        this.fecha= new fechaNacimiento (3,3,2005);
        //lectura de atributo fecha 
        console.log(this.fecha.setFecha());

        //escritura del atributo fecha
        console.log(this.fecha.setFecha(new Date(2007,5,2)));
        console.log(this.fecha.setFecha(new Date(2050,5,2)));

        //acceso a los metodos
        console.log(this.fecha.getFormatoCorto());
        console.log (this.fecha.getFormatoExtendido());
        console.log (this.fecha.getEdad());
    }
    testeNombre(){
        this.nombre1 = new Nombre("Morales", "Gonzalez", "Gabino");
        this.nombre1.setApellidoMaterno("Abbsu");
        console.log(this.nombre1.getCompleto())
        console.log(this.nombre1.getCompleto())
       
    }
    testEstudiante(){
        let e = new Estudiante(new Nombre("Gabino", "Morales", "Gonzalez"),new fechaNacimiento(30,10,2020)
        ,"Masculino",20164899, "jmorales18@ucol.mx", "Facultad de telematica")
        e.print()
    }
    testMaestro(){
        let m = new Maestro(
            new Nombre("Alfredo", "Gonzalez", "Leyva"),
            new fechaNacimiento(20,10,2020),
            "Masculino",
            2000,
            20164748,
            "Tiempo Completo"
        )

        m.print()
    }
    testGrupo(){
        let datosEstudiante = {
            nombre: new Nombre("Gabino", "Morales", "Gonzalez"), 
            fechaNacimiento: new fechaNacimiento(30,10,2020),
            genero: "Masculino",
            nCuenta: 20164899,
            correo: "jmorales18@ucol.mx",
            escuela: "Facultad de telematica"

        }
        let e = new Estudiante(datosEstudiante)

        let datosEstudiante1 = {
            nombre: new Nombre("Jose", "Gonzalo", "Leyva"),
            fechaNacimiento: new fechaNacimiento(12,10,1999),
            genero: "Masculino",
            nCuenta: 20164555, 
            correo: "gleyva12@ucol.mx", 
            escuela: "Facultad de telematica"
        }

        let e1 = new Estudiante(datosEstudiante1)

        let g = new Grupo(2,"G")
    
       console.log(g.registrar(e))
       console.log(g.registrar(e1))

       console.log(g._encontrarEstudiante(e1))
       console.log(g._encontrarEstudiante(e))
       console.log(g._encontrarIndiceEstudiante(e))

       g.listarAlumnos()
    //    console.log(g.elimanr(e))
       console.log(g.actualizar(e, e1))
       g.listarAlumnos()
    }

}
let app = new Main();
app.testGrupo();
