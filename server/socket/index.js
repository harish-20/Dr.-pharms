const socket = require('socket.io')

const connectSocket = (server) => {
  const io = socket(server, { cors: { orgin: 'http://localhost:3000' } })

  io.on('connection', (socket) => {
    socket.on('message-sent', () => {
      console.log('message is sent')
      socket.emit('message-received')
      socket.broadcast.emit('message-received')
    })

    socket.on('disconnect', () => {
      console.log('user disconnected')
    })
  })
}

module.exports = { connectSocket }
