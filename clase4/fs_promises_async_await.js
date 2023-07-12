const fs = require('fs')

const contenido = 'Primer contenido para escribir en un contenido'

const archivo = './archivo_callbacks.txt'

const init = async () => {
    try {
        const resultado = await fs.promises.readFile(archivo, 'utf8')

        console.log({ resultado })
    } catch (err) {
        console.log('Ocurrio un error!')
    }
}

init() 