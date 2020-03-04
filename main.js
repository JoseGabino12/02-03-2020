import fechaNacimiento from "./fecha.js"
import Nombre from "./nombre.js"
class Main{
    constructor(){
        this.fecha= new fechaNacimiento (3,3,2005);
        this.nombre1.setApellidoMaterno("Abbsu");
        this.nombre1 = new Nombre("Morales", "Gonzalez", "Gabino");
    }
    testFechaNacimiento(){
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
        console.log(this.nombre1.getCompleto())
        console.log(this.nombre1.getCompleto())
    }
}
let app = new Main();
app.testFechaNacimiento();