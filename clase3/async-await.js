/*

ASYNC / AWAIT
 Son palabras reservadas que trabajando juntas permiten gestionar un entorno asincrono, resolviendo las limitantes del ".then y .catch":
  - "Async" se colocara al inicio de una funcion, indicando q "todo el cuerpo de esa funcion debera ejecutarse de manerra asincrona"
  - "Await" servira (como indica su nombre) para "esperar" por el resultado de la promesa y extraer su resultado.
  - Al ser operaciones q podrian salir bien, "PERO TAMBIEN MAL", es importante encerrar el cuerpó en un bloque try{} - catch{}

*/

const dividir = (a , b) => {
    return new Promise((resolve, reject) => {  
      if (b === 0) {
          return reject('Error: No pueden dividir sobre 0')
      }
  
      return resolve(a / b)
    })
  }

const fn = async () => {
    try {
        let resultado = await dividir(4, 0)
        console.log(resultado)
    } catch (e) {
        console.log(e)
    }
    
    
    

}   

fn()


/*const resultado = await dividir(4, 2)*/  // ESPERE A DIVIDIR, HASTA Q LA PROMESA SE RESUELVA, PARA DEVOLVERME EL RESULTADO Y ENCAPSULARLO
































