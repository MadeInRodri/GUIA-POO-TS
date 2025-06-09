import {Persona} from './persona'

export class Empleado extends Persona{
    private sueldo:number

    constructor(nombre:string,apellido:string,direccion:string,edad:number,telefono:number,sueldo:number){
        super(nombre,apellido,direccion,edad,telefono)
        this.sueldo = sueldo
    }

    saberDatos(): string {
        return `Nombre: ${this.nombre}
        Apellido: ${this.apellido}
        Direccion: ${this.direccion}
        Edad: ${this.edad}
        Teléfono: ${this.telefono}
        Sueldo: $${this.sueldo}`
    }
}