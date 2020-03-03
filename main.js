class Main{
    constructor(){
        this.fecha= new fechaNacimiento (3,3,2005);
    }
    testFechaNacimiento(){
        //lectura de atributo fecha 
        console.log(this.fecha.getfecha());

        //escritura del atributo fecha
        console.log(this.fecha.setfecha(new Date(2007,5,2)));
        console.log(this.fecha.setfecha(new Date(2050,5,2)));

        //acceso a los metodos
        console.log(this.fecha.getFormatoCorto());
        console.log (this.fecha.getFormatoExtendido());
        console.log (this.fecha.getEdad());
    }
}
let app = new Main();
app.testFechaNacimiento();