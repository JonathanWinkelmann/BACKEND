const fs = require('fs');

class ProductManager {
    constructor () {
      this.products = []
      this.path = path;
    }

    //VALIDACIONES DE CAMPOS OBLIGATORIOS
    addProduct(product) {
      if (!data.title 
        || !data.description
        || !data.price
        || !data.thumbnail
        || !data.code
        || !data.stock) {
          return console.log("Error: Campos incorrectos") 
        }
        
        //METODO findIndex (NOS DEVUELVE EL INDICE)
        const productExists = this.products.findIndex((product) => product.code === data.code)
  
        if (productExists !== -1) {
          console.log("El código de producto ya esta en uso")
          return "Error: El código de producto ya esta en uso."
        }
  
        product.id = this.products.length + 1;
        this.products.push(product);
    
        this.guardarProductos();
        console.log("Producto agregado correctamente.")
      
      }
  
      getProducts() {
        return new Promise((resolve, reject) => {
          fs.readFile(this.path, 'utf8', (err, data) => {
            if (err) {
              console.error('Error al leer los productos:', err);
              return reject(err);
            }
            if (data === '') {
              return resolve([]);
            }
            const products = JSON.parse(data);
            return resolve(products);
          });
        });
      }
    
    //METODO  find (NOS DEVUELVE EL ELEMENTO DEL ARREGLO CORREPONDIENTE)
    getProductById (id) {
      const productExists = this.products.find((product) => product.id === id)
  
      if (!productExists) {
        const error = 'Not found'
        console.log(error)
        return error
      }
  
      return productExists
    }
  }
  
  const manager = new ProductManager('./productos.json')
  
  const body = {
    "title": "Producto 1",
    "description": "Desc prod1",
    "price": 10.2,
    "thumbnail": "www.image.com",
    "code": "qwerty",
    "stock": 100
  }
  
  manager.addProduct(body)
  
  const body2 = {
    "title": "Producto 2",
    "description": "Desc prod2",
    "price": 10.2,
    "thumbnail": "www.image.com",
    "code": "qwerty2",
    "stock": 100
  }
  
  manager.addProduct(body2)
  
  manager.addProduct(body)
  
  console.log(manager.getProducts())
  
  const product2 = manager.getProductById(2)
  const product1 = manager.getProductById(1)
  const product3 = manager.getProductById(3)
  
  console.log({
    product1,
    product2,
    product3
  })