type Orientaciones = 'Centrado' | 'Izquierda' | 'Derecha'

export class CabeceraPagina{
    private titulo:String
    private color:String
    private fuente:String
    private orientacion:Orientaciones

    setPropiedades(titulo:String,color:String,fuente:String,orientacion:Orientaciones){
        this.titulo = titulo
        this.color = color
        this.fuente = fuente
    }

    setOrientacion(orientacion:Orientaciones){
        this.orientacion = orientacion
    }

    getPropiedades(){
        return `Título: ${this.titulo},
        Color: ${this.color},
        Fuente: ${this.fuente},
        Orientación: ${this.orientacion}`
    }

    constructor(){
        this.titulo = ''
        this.color = ''
        this.fuente = ''
        this. orientacion = 'Izquierda'
    }
}