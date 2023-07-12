/* UTILIZACION DE ES6 ES9 

* Realizar una lista nueva (array) q contenga todos los tipos de productos (no cantidades), consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.

* Obtener el total de productos vendidos por todos los objetos (utilizar Object.values)

*/






const objetos =  [

 {

  manzanas:3,

  peras:2,

  carne:1,

  jugos:5,

  dulces:2

 },

 {

  manzanas:1,

  sandias:1,

  huevos:6,

  jugos:1,

  panes:4

 }
]

// ['manzanas', 'peras', 'carme']
const productos = objetos.map(el => {
    const elArray = Object.keys(el)

    return elArray
})

console.log(productos.flat())























