/*

CALL BACKS:

* Siempre es el ultimo parametro.
* Suele ser una funcion q recibo dos parametros.
* La funcion llama al callback al terminar de ejecutar todas sus operaciones.
* Si la op. fue exitosa, la funcion llamará al callback pasando null como 1er paramentro y si genero algun resultado este se pasara como 2do parametro.
* Si la op. resulto en un error, la funcion llamará al callback pasando el error obtenido como 1er parametro.

*/



const escribeArchivoFake = (callback) => {
    setTimeout(() => {  //SetTIMEOUT ES COMO UN DILAY, UNA FUNCION QUE VA A PAUSAR NUESTRO PROGRAMA, EL TIEMPO Q NOSOTROS LE INDIQUEMOS Y CONTINUARA NUESTRA EJECUCION.
        console.log('Simulando escribir en un archivo.....')
       
       callback(null, "mywebsite.com/statics/file.pdf")
       
       
    }, 1000)  // RECIBE EL TIEMPO 
}

console.log('Inicio mi programa')

const respuesta = escribeArchivoFake ((err, ruta) => {
   if (err !== null) {
    console.log(`Ocurrio un error: ${err}`)

    return
   }

   console.log(`El archivo quedo guardado en ${ruta}, procedemos a guardar el registro en base de datos`)

   console.log('Termino mi programa')
})







/*



*/




































