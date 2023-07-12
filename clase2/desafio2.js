// DEFINIDO LA CLASE CON  UN ARRAY 
class TicketManager {
    #precioBaseDeGanancia =  0.15 // VARIABLE PRIVADA #
    constructor () {
      this.eventos = [] // ARREGLO DE EVENTOS - ARREGLO VACIO 
    }
  
    getEventos () {
      return this.eventos
    }
  
    agregarEvento (data) {
      const nuevoEvento = {
        id: this.eventos.length + 1,  // EL ID: VA A EMPEZAR DESDE 0 PERO 0 + 1, EMPEZARA CON UN PRODUCTO
        participantes: [], // ARRAY VACIO 
        nombre: data.nombre,
        lugar: data.lugar,
        precio: data.precio + this.#precioBaseDeGanancia,
        capacidad: data.capacidad ?? 50,
        fecha: data.fecha ? new Date(data.fecha) : new Date()
      }
  
      this.eventos.push(nuevoEvento)  
    }
  
    agregarUsuario (idEvento, idUsuario) {
      const evento = this.eventos.find(evento => evento.id === idEvento) // ME VA A DEVOLVER EL METODO EVENTO, SINO ESTA ME LO DEJARA COMO TAL, RESPONDERA COMO : "Error: El evento no existe"
  
      if (!evento) {
        console.log("Error: El evento no existe")
        return 
      }
  
      const existeParticipante = evento.participantes.findIndex(participante => participante === idUsuario)  // SINO EXISTE PARTICIPANTE ME DEVOLVERA CON -1, SI EXISTE PARTICPANTE, SERA: "Error: El usuario ya esta registrado en el evento"
  
      if(existeParticipante !== -1) {
        console.log("Error: El usuario ya esta registrado en el evento")
        return
      }
      
      evento.participantes.push(idUsuario) // SE AGREGA EL USUARIO 
    }
  
    ponerEventoEnGira (idEvento, nuevoLugar, nuevaFecha) {
      const eventoPrevio = this.eventos.find(evento => evento.id === idEvento)
  
      const { lugar, fecha, id, participantes, ...otrosCampos } = eventoPrevio
  
      const nuevosCampos = {
        id: this.eventos.length + 1,
        participantes: [],
        lugar: nuevoLugar,
        fecha: nuevaFecha
      }
  
      const nuevoEvento = { ...otrosCampos, ...nuevosCampos }
  
      this.eventos.push(nuevoEvento)
    }
  }
  
  const manager = new TicketManager()  // ME CREO LA INSTANCIA 
  
  console.log(manager.getEventos())  // VERIFICO CUANTOS EVENTOS TENGO 
  
  const evento1 = {
    nombre: 'Evento 1',
    lugar: 'CDMX',
    precio: 1.30
  }
  
  manager.agregarEvento(evento1)  // AGREGO UN 1° EVENTO
  
  console.log(manager.getEventos())  // VERIFICO CUANTOS EVENTOS TENGO 
  
  const evento2 = {
    nombre: 'Evento 2',
    lugar: 'Buenos Aires',
    precio: 1.40,
    capacidad: 20
  }
  
  manager.agregarEvento(evento2)  // AGREGO UN 2° EVENTO
  
  console.log(manager.getEventos())  // VERIFICO CUANTOS EVENTOS TENGO 
  
  manager.agregarUsuario(1, 1)  -
                                   // AGREGO UN USUARIO AL EVENTO 1 Y 2 
  manager.agregarUsuario(2, 1)  -
  
  console.log(manager.getEventos())  // VERIFICO CUANTOS EVENTOS TENGO 
  
  manager.agregarUsuario(2, 1)   // AGREGO UN USUARIO, SE GENERA UN ERROR 
  
  manager.ponerEventoEnGira(2, 'Lima', new Date('2023-12-31'))  // SE GENERA UN NUEVO EVENTO CON EL YA EXISTENTE 
  
  console.log(manager.getEventos())
  



















































