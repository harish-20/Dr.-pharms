require('dotenv').config()

const express = require('express')
const cors = require('cors')
const http = require('http')
const mongoose = require('mongoose')
const fileupload = require('express-fileupload')
const bodyParser = require('body-parser')

const { connectSocket } = require('./socket')
const router = require('./routes/index')

const app = express()

const server = http.Server(app)
connectSocket(server)

app.use(express.json())
app.use(
  cors({
    origin: '*',
  }),
)
app.use(fileupload())
app.use(express.static('files'))
app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const { PORT, MONGODBURI } = process.env
mongoose.set('strictQuery', true)
mongoose.connect(MONGODBURI, () => {
  console.log('DB is Connected...')
})

app.use('/', router)

server.listen(PORT, () => {
  console.log(`Server running at port=> ${PORT}...`)
})

module.exports = server
