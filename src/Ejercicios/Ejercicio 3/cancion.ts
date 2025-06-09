export class Cancion{
    public titulo:string
    public genero:string
    private autor:string

    constructor(titulo:string,genero:string){
        this.titulo = titulo
        this.genero = genero
        this.autor = ''
    }

    getAutor():string{return this.autor}
    setAutor(autor:string){this.autor = autor}

    mostrarDatos(){
        return `Cancion: ${this.titulo}
        Autor: ${this.autor}
        Genero: ${this.genero}`
    }

}