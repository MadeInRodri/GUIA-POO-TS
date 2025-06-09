export class Calculadora {
    private a:number
    private b:number

    constructor(a:number,b:number){
        this.a = a
        this.b = b
    }

    sumar(){return this.a + this.b}

    restar(){return this.a - this.b}

    multiplicar(){return this.a * this.b}

    dividir(){
        if(this.b == 0){
            return 'No se puede dividir entre 0'
        }
        else{
            return this.a / this.b
        }
    }

    potencia(){return Math.pow(this.a,this.b)}

    factorialA(a = this.a):number{
        if(a == 1 || a == 0){
            return 1
        }

        else{
            return a * this.factorialA(a - 1)
        }
    }

    factorialB(b = this.b){
        if(b == 1 || b == 0){
            return 1
        }

        else{
            return b * this.factorialA(b - 1)
        }
    }
}