const diaSemana = [
    "DOMINGO",
    "LUNES",
    "MARTES",
    "MIERCOLES",
    "JUEVES",
    "VIERNES",
    "SABADO"
  ];
  const mesAño = [
    "ENERO",
    "FEBRERO",
    "MARZO",
    "ABRIL",
    "MAYO",
    "JUNIO",
    "JULIO",
    "AGOSTO",
    "SEPTIEMBRE",
    "OCTUBRE",
    "NOVIEMBRE",
    "DICIEMBRE"
  ];
export default class fechaNacimiento {
    /**
     *
     * @param {date} dia dia de nacimiento
     * @param {number} mes valor entre el 1 y el 12
     * @param {number} año año de la fecha de nacimiento
     */
    constructor(dia, mes, año) {
      this._fecha = new Date(año, mes - 1, dia);
      
    }
    getFormatoCorto() {
      return`${this._fecha.getDate()}/${this._fecha.getMonth() +
          1}/${this._fecha.getFullYear()}`;
    }
    getFormatoExtendido() {
      let dia = diaSemana[this._fecha.getDay()];
      let mes = mesAño[this._fecha.getMonth()];
      return`${dia}, ${this._fecha.getDate()}, de ${mes}, del ${this._fecha.getFullYear()} `;
    }
    getEdad(){
        let difMseg = Date.now() -this._fecha;
        let mSegAño = 1000*60*60*24*365;
        let edad = Math.trunc(difMseg / mSegAño);
        return(`Edad: ${edad}`);
   }
   //Metodo de solo lectura
   getfecha(){
     return this._fecha
   }
   /**
    * Metodo de acceso escritura para el atributo fecha. 
    * @param {date} Fecha 
    */
   setFecha (fecha){
     if (fecha <= Date.now()){
      this.fecha = fecha;
      return true 
     }
     return false 
   }
  }