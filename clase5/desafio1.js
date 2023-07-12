/*
ACTIVIDAD:
- Crear un proyecto de node q genere 10000 n° aleatorios en un rango de 1 a 20.
- Crear un objeto cuyas claves sean los numeros saludos y el valor asociado a cada clave sera la cantidad de veces q salio dicho nnumero. Representar por consola los resultados.

*/

const numeros = {};

for (let i = 0; i <= 10000; i++) {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  randomNumber in numeros
    ? (numeros[randomNumber] += 1)
    : (numeros[randomNumber] = 1);
}
console.log(numeros);