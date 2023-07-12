console.clear()
const express = require('express')

const app = express()

app.get('/', (req, res) => {
    return res.send("Bienvenido a la pagina de home")
})

app.get('/contacto', (req, res) => {
    return res.send("Bienvenido a la pagina de contacto")
})

app.get('/sucursales', (req, res) => {
    return res.send("Bienvenido a la pagina de sucursales")
})


app.listen(8080, () => {
    console.log("Servidor express escuchando en el puerto 8080")
})





