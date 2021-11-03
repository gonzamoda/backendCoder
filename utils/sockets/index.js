const { Server: IOServer } = require("socket.io");

class Sockets {
  static instancia;
  constructor(httpServer) {
    if (Sockets.instancia) {
      return Sockets.instancia;
    }
    Sockets.instancia = this;
    this.io = new IOServer(httpServer);
    this.users = [];
    this.mensaje = [
      { autor: "Gonzalo", mensaje: "hola" },
      { autor: "Seba", mensaje: "Qué tal?" },
    ];
  }
  init() {
    try {
      const io = new IOServer(httpServer);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new Sockets();
