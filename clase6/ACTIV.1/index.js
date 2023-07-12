const express = require('express');

const app = express()

app.get('/bienvenida', (req, res) => {
    const htmlResponse = '<h1 style="color: blue;">¡Bienvenido!</h1>';
    res.send(htmlResponse);
  });

app.get('/hola/:name/:lastname', (req, res) => {
    console.log(req.params)
    return res.send(`Hola ${req.params.name} ${req.params.lastname}`)
  });


const users = [
    {
        id: 1,
        name: 'carlos',
        lastname: 'pépe'
    },
    {
        id: 2,
        name: 'tutu',
        lastname: 'popo'
    },
    {
        id: 3,
        name: 'nene',
        lastname: 'bobo'
    },
    {
        id: 4,
        name: 'sese',
        lastname: 'poa'
    }
]

app.get('/users', (req, res) => {
    // const products = manager.getProducts(req.query.limit)
    return res.send(users)
})

app.get('/users/:userId', (req,res) => {
    const userId = parseInt(req.params.userId)

    const includeId = req.query.includeId === 'true'

    console.log(includeId, typeof includeId)
    
    const user = users.find(user => user.id === userId)

    if (!user) {
        return res.send({})
    }

    const userCopy = {...user}

    if (!includeId) {
        delete userCopy.id
    }

    return res.send(userCopy)
})


app.listen(8080, () => {
    console.log("Servidor express escuchando en el puerto 8080")
})
