const { Server } = require('socket.io')

const connectSocket = (server) => {
  const io = new Server(server)

  io.on('connection', (socket) => {
    console.log(socket.id)

    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })
}

module.exports = { connectSocket }
