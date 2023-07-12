/*
SINCRONISMO 

Es cuando en la programacion se ejecuta en cascada, la tarea 1 deberia finalizar para q se ejecute la 2da y asi con la 3ra.

Ej:
*/

function a() {
    console.log("a")
}


function b() {
    console.log("b")
}


function c() {
    console.log("c")
}

b()
c()
a()

/*

Las operaciones sincronas son "bloqueantes", significa q las otras tareas no pueden comenzar a ejecutarse hasta q la 1ra no haya terminado de ejecutarse.

Ej:
*/

function a() {
    console.log("a")
}

function b() {
    console.log("b")
    for (let i = 0; i <= 1000000000; i++) {  // OPERACION BLOQUEANTE - SINCRONICA

    }
    console.log("b2")  // ESTA FUNCIONARA TERMINARA, CUANDO SE TERMINE DE EJECUTAR
}

function c() {
    console.log("c")
}

b()
c()
a()































