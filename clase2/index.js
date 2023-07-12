const result = 2**3 

//console.log({ result})

const names = ['Santiago', 'Mnauel', 'Juan', 'Franco', 'Fatima']

const myName = 'Iram'

const newNames = names.map((el) => el.toLowerCase())

const filteredNames = names
 .map((el) => el.toLowerCase())
 .filter(el => el[0] !== 'F')

const exists = names.includes(myName)

//console.log({ newNames, filteredNames, exists })


// ES8

const user = {
  name: 'Iram',
  lastname: 'Gutierres',
  country: 'MX',
  edad: 34
}

const entries = Object.entries(user) // nos devuelve llave como el valor
const keys = Object.keys(user) // nos devuelve solo las llave del lado izq.
const values = Object.values(user) // nos devuelve el valor del lado der. 
 
//console.log({ entries, keys, values })

/**
 * 
 {
  entries: [
    [ 'name', 'Iram' ],
    [ 'lastname', 'Gutierres' ],
    [ 'country', 'MX' ],        
    [ 'edad', 34 ]
  ]
}
 */
const output = entries.reduce((output, el) => {
    output += `${el[0]}: ${el[1]}
    `
    return output
}, '')

//console.log(output)

// suma

const nums = [1, 2, 3, 4 ,5]
 
const resultado = nums.reduce((acc, el) => {

    console.log(el)
    
    acc = acc + el // 0 +1 = 1 // 1 + 2 = 3 // 3 + 3 = 6 // 6 + 4 = 10 // 10 + 5 = 15
    
    return acc // 1 // 3 // 6 // 10 // 15
}, 0)
    
//console.log({ resultado })



// ES9

//* SPREAD OPERATOR 

const user2 = {
    name: 'Iram',
    lastname: 'Gutierres',
    country: 'MX',
    edad: 34
}

//const name = user2.name 
//const country = user2.country

const { name, country } = user2

const { edad, ...newUser } = user2

console.log(edad, newUser) 














