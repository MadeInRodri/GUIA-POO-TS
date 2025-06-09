import './style.css'
import typescriptLogo from './typescript.svg'
import {Calculadora} from './Ejercicios/Ejercicio 2/calculadora.ts'
import {Cuenta} from './Ejercicios/Ejercicio 4/cuenta.ts'
import { Empleado } from './Ejercicios/Ejercicio 5/empleado.ts'
import { CabeceraPagina } from './Ejercicios/Ejercicio 1/cabecera-pagina.ts'
import { Cancion } from './Ejercicios/Ejercicio 3/cancion.ts'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Ejercicios de POO con TypeScript</h1>
    <p class="read-the-docs">
      Abre la consola para ver los resultados de las operaciones
    </p>
  </div>
  <div>
    <a href = "https://github.com/MadeInRodri" target="_blank">By MadeInRodri</a>
  </div>
`


console.log('-- Ejercicio 1 --')
let miCabecera = new CabeceraPagina()
miCabecera.setPropiedades('Mi página web','#fff','Sans Serif','Centrado')
console.log(miCabecera.getPropiedades())


console.log('-- Ejercicio 2 --')
let miCalculadora = new Calculadora(6,3)
console.log(`Suma: ${miCalculadora.sumar()}
Resta: ${miCalculadora.restar()}
Multiplicación: ${miCalculadora.multiplicar()}
Division: ${miCalculadora.dividir()}
Potencia: ${miCalculadora.potencia()}
Factorial de a: ${miCalculadora.factorialA()}
Factorial de b: ${miCalculadora.factorialB()}`)


console.log('-- Ejercicio 3 --')
let miCancion = new Cancion('Dulce Soledad','Rock')
miCancion.setAutor('Enjambre')
console.log(miCancion.mostrarDatos())


console.log('-- Ejercicio 4 --')
let miCuenta = new Cuenta('Rodrigo Mejia','Ahorros','0022545-6')
console.log(miCuenta.consultarSaldo())
console.log(miCuenta.depositar(5))
console.log(miCuenta.retirar(25))


console.log('-- Ejercicio 5 --')
let miEmpleado = new Empleado('Rodrigo','Mejia','San Salvador Soyapango...',20,60669093,1600)
console.log(miEmpleado.saberDatos())
console.log(miEmpleado.saberEdad())