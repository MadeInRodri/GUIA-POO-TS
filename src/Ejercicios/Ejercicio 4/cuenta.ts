type TipoCuenta = 'Ahorros' | 'Corriente' | 'Inversion' | 'Plazo Fijo'

export class Cuenta{
    private nombre:string
    private cantidad:number
    private tipoCuenta:TipoCuenta
    private numeroCuenta:string

    //Usualmente al abrir una cuenta se deben dejar como minimo 25 dólares, así que lo dejo como default
    constructor(nombre:string,tipoCuenta:TipoCuenta,numeroCuenta:string,cantidad:number = 25){
        this.nombre = nombre
        this.tipoCuenta = tipoCuenta
        this.numeroCuenta = numeroCuenta
        this.cantidad = cantidad
    }

    depositar(cantidad:number){
        if(cantidad < 5){
            return 'Debe ingresar una cantidad mayor a $5'
        }
        else{
            this.cantidad += cantidad
            return `Se ha depositado un total de $${cantidad} correctamente | Saldo actual: $${this.cantidad}`
        }
    }

    retirar(cantidad:number){
        if(cantidad < 5){
            return 'Se deben retirar al menos $5'
        }
        if(this.cantidad < cantidad){
            return 'Fondos insuficientes'
        }
        else{
            this.cantidad -= cantidad
            return `Se ha retirado un total de $${cantidad} | Saldo actual: $${this.cantidad}`
        }
    }

    mostrarDatos(){
        return `Cuenta de tipo ${this.tipoCuenta}
        A nombre de: ${this.nombre}
        Con el número de cuenta: ${this.numeroCuenta}`
    }

    consultarSaldo(){
        return `Su saldo actual es de: $${this.cantidad}`
    }
}