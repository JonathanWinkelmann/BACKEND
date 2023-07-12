 /* ECMAScript
Es un estandar que  se encarga de regir como debe ser interpretado el lenguaje de javascript. 
Este plantea compatabilidades, nuevas funciones.


Let / Const 
Son 2 formas de declarar variables en JS introducidas en ES6


Bloque de codigos:
Es un espacio dentro del codigo q esta separado, puede ser una funcion 
*/


/*

LET:
Es un bloque q se puede entender como lo q queda entre dos llaves, ya sean definiciones de funciones o bloques "if-while-for-loops"
Cuando una variable es Let pertenece al ambito global.

ej:

let i = o;
function foo() {
    i = 1;
    let j = 2;
    if (true) {
        console.log(i); //1
        console.log(j); //2
    }
}
foo();

*/


/*

CONST:
Al igual q con Let, el ambito (scope) para una variable declarada con const es el bloque.
Pero Const prohibe la reasignacion de valor (Const viene de Constant).

Si se intenta reasignar una const se obtendra un error. 
ej:

const foo = 3

foo = 4

console.log(foo)


EJEMPLO DE MUTABILIDAD:

*const user = 'Juan';
ERROR 
user = 'Manolo';



*const user = { name: 'Juan' };
user.name = 'Manolo';
console.log(user.name); // Manolo



*/




/*

FUNCION ES JS:
Son bloques de instrucciones sobre un scope interno.

ej:

function suma (a, b) {
    return a + b
}

const resultado = suma (12, 13)

console.log({ resultado })  // { resultado: 25 }

OTRO CASO PARA LLAMAR UNA FUNCION MAS ABREVIADO ES:

*function suma (a, b) => return a + b

const resultado = suma (12, 13)

console.log({ resultado }) 


* const duplicate = num => numx2
  const duplicado = duplicate(2)
  console.log({ resultado, duplicado })  // { resultado: 25, duplicado:4 }



*/

/*

TEMPLATE STRINGS:

*Funcionan como un superset de una string
*Permite incrustar informacion dentro de ella, evitando la concatenacion.
*Reconoce los saltos de linea, para mantener el formato.
*No presenta el limite de caracteres de una string normal, con mas plantillas.

ej: 

const nombre = 'Iram'

const comision = 43375

let saludo = "Hola, soy" + nombre + '. \nBienvenidos a la comision' + comision

console.log(saludo) // Hola, soy Iram. Bienvenidos a la comision 43375.




















*/