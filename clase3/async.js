/*

ASINCRONISMO

Lo normal o por naturaleza JS es asincrono.
Si buscamos q las tareas trabajen al mismo tiempo, debemos buscar la manera de programar instrucciones "asincronoas".
Lo q significa q c/u seguira el hilo de resolucion q considere su ritmo. 

Ej:

*/

const escribeArchivoFake = () => {
    setTimeout(() => {  //SetTIMEOUT ES COMO UN DILAY, UNA FUNCION QUE VA A PAUSAR NUESTRO PROGRAMA, EL TIEMPO Q NOSOTROS LE INDIQUEMOS Y CONTINUARA NUESTRA EJECUCION.
        console.log('Simulando escribir en un archivo.....')
    }, 1000)  // RECIBE EL TIEMPO 
}

console.log('Inicio mi programa')

escribeArchivoFake()

console.log('Termino mi programa')    






































