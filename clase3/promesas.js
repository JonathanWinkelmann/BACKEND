/*
PROMESAS:

* Es un objeto especial q nos permitira "encapsular" una op. la cual reaccionara a 2 posibles situaciones dentro de una promesa:
  - Que deberia hacer si la promesa se cumple?
  - Que deberia hacer si la promesa no se cumple?

Al prometerse algo es una promesa en estado "pending", pero no sabemos cuando se resolvera esa promesa.
Sin embargo, cuando llega el momento, se nos notifica si la promesa se cumplio ("FullFilled" o "Resolved"), pero en el tiempo, se nos notifica q la promesa no pudo cumplirse, se rechazo ("Rejected")
ej:

*/

const dividir = (a , b) => {
  return new Promise((resolve, reject) => {  
    if (b === 0) {
        return reject('Error: No pueden dividir sobre 0')
    }

    return resolve(a / b)
  })
}

/*
dividir(4, 2)
  .then((result) => {
    console.log({ result })

    return dividir(9, 3)
  })
  .then((result2) => {
    console.log({ result2 })
    
    return dividir(10, 0)
  })
  .then((result3) => {
    console.log({ result3 })
  })
  .catch((err) => {
    console.log({ err })
  })
/*

Hay dos formas de resolver una promesa (Resolved/Fulfilled o Rejected), debemos aprender como utilizar estos dos estados.

* Ejecutaremos la funcion q acabamos de crear para q se ejecute la promesa.  // PENDING
* Utilizaremos el operador."then" para recibir el caso en el q la promesa "Si se haya cumplido"  // RESOLVED
* Utilizaremos el operador."catch" para recibir el caso en el q la promesa "No se haya cumplido"  // REJECTD

*/































