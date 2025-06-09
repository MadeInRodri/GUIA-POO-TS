export abstract class Persona{
    protected nombre:string
    protected apellido:string
    protected direccion:string
    protected telefono:number
    protected edad:number

    constructor(nombre:string,apellido:string,direccion:string,edad:number,telefono:number){
        this.nombre = nombre
        this.apellido = apellido
        this.direccion = direccion
        this.edad = edad
        this.telefono = telefono
    }

    saberEdad(){
        if(this.edad >= 18){
            return `Tiene ${this.edad} años y es mayor de edad`
        }
        else{
            return `Tiene ${this.edad} años y es menor de edad`
        }
    }

    abstract saberDatos():string
}