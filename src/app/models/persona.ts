export class Persona{
    nombres: string = "";
    apellidos: string = "";
    dni: string = "";
    id: number = 0;

    constructor(nombres: string, apellidos: string, dni: string){
        this.nombres = nombres;
        this.apellidos = apellidos;
        this.dni = dni;
        this.id = new Date().getTime();
    }

    limpiar(){
        this.nombres = "";
        this.apellidos = "";
        this.dni = "";
    }
}