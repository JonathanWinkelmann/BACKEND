const http = require('http')

const server = http.createServer((req, res) => {
   console.log('peticion recibida', req.url)

   if (req.url === '/contacto') {
    res.end('Bienvenido a la seccion de contacto')
   } else if (req.url === '/sucursales') {
    res.end('Bienvenido a la seccion de sucursales')
   }

})  

server.listen(8080, () => {
    console.log("Servidor escuchando en el puerto 8080")
})