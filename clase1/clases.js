/*  EJERCICIO CREACION DE UNA CLASE CONTADOR
*Se creara una clase que permitira llevar cuentas indiv. segun c/responsable.

* Definir clase Contador
* La clase se creará con un nombre, representrando al responsable del contador.
* El contador debe inicializarse en 0.
* Debe existir una variable estática q funcione como "contador global" de todas las intacias de contador creadas.
 
* Definir el metodo getResponsable, el cual debe devolver el responsable de dicho contador.
* Definir el metodo contar, el cual debe incrementar, tanto su cuenta individ. como la cuenta global.
* Definir el metodo getCuentaIndividual, el cual debe devolver solo la cuenta individual del contador.
* Definir el metodo getCuentaGlobal, el cual debe devolver la variable estática con el conteo global.


*/




class Persona {
    constructor(name) {
      //this.name = name
    }
}

const iram = new Persona('Iram')

console.log(iram)

class Contador {
    constructor(nombre) {
       this.nombre = nombre
       this.contador = 0
    }


    static contadorGlobal = 0

    getResponsable () {
        return this.nombre 
    }

    contar () {
      this.contador = this.contador + 1
      Contador.contadorGlobal = Contador.contadorGlobal + 1
    }

    getCuentaIndividual () {
      return this.contador
    }

    getCuentaGlobal () {
      return Contador.contadorGlobal
    }
}


const santiago = new Contador('Santiago')
const fatima = new Contador('Fatima')
const douglas = new Contador('Douglas')

fatima.contar()
santiago.contar()
douglas.contar()


console.log(santiago.getCuentaIndividual(), santiago.getCuentaGlobal())
console.log(fatima.getCuentaIndividual(), fatima.getCuentaGlobal())
console.log(douglas.getCuentaIndividual(), douglas.getCuentaGlobal())



















