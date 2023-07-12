const fs = require('fs')

const productos = [
    [
        {
          "id": 1,
          "title": "Producto 1",
          "description": "Desc prod1",
          "price": 10.2,
          "thumbnail": "www.image.com",
          "code": "qwerty",
          "stock": 100
        },
        {
          "id": 1,
          "title": "Producto 1",
          "description": "Desc prod1",
          "price": 10.2,
          "thumbnail": "www.image.com",
          "code": "qwerty",
          "stock": 100
        }
      ]
]

//const productosString = JSON.stringify(productos, null, 2)

const exists = fs.existsSync('./productos.json')

//console.log(productosString)

fs.promises.readFileFile('./productos.json', 'utf-8')
  .then((productosString) => {
    let products = []
  })
  .then((productosArchivo) => {
    const productosObjeto = JSON.parse(productosArchivo)
    console.log(productosObjeto[0])
  })
  .catch((e) => {
    console.log({ e })
  })


