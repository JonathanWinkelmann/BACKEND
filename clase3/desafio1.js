const suma = (a, b) => {  // DEFINIENDO LA FUNCION SUMA
    return new Promise((resolve, reject) => {    // DEVOLVOLVER UNA PROMESA Q SE RESUELVA SIEMPRE Q NINGUNO DE LOS 2 SUMANDO SEA 0
      if (a === 0 || b === 0) {
        return reject('Operación innecesaria')   // SINO SE RECHAZA
      }
  
      const resultado = a + b  // EN CASO DE Q LA SUMA SEA NEGATIVA SE RECHAZA
  
      if (resultado < 0) {
        return reject('La calculadora solo debe devolver valores positivos')
      }
  
      return resolve(resultado)
    })
  }
  
  const resta = (a, b) => {
    return new Promise((resolve, reject) => {
      if (a === 0 || b === 0) {
        return reject('Operación inválida')
      }
  
      const resultado = a - b
  
      if (resultado < 0) {
        return reject('La calculadora solo debe devolver valores positivos')
      }
  
      return resolve(resultado)
    })
  }
  
  const multiplicacion = (a, b) => {
    if (a < 0 || b < 0) {
      return reject('Operación inválida')
    }
  
    const resultado = a * b
  
    if (resultado < 0) {
      return reject('La calculadora solo debe devolver valores positivos')
    }
  
    return resolve(resultado)
  }
  
  const calculadora = async (a, b, operacion) => {
    let resultado
    switch(operacion) {
      case 'suma':
        resultado = await suma(a, b)
        break
      case 'resta':
        resultado = await resta(a, b)
        break
      case 'multiplicacion':
        resultado = await multiplicacion(a, b)
        break
    }
  
    return resultado
  }
  
  
  (async () => {   // DEFINIR UNA FUNCION ASICRONA "CALCULOS" 
    try {
      const result1 = await calculadora(1, 1, 'suma')
  
      const result2 = await calculadora(1, 0, 'suma')
  
      console.log({ result1 })
    } catch (e) {
      console.log({ e })
    }
    
  })();


































