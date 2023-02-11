const chatRouter = require('express').Router()

const { getChat, addChat, markAsReadChat } = require('../controller/chats')

chatRouter.post('/', getChat)
chatRouter.post('/addChat', addChat)
chatRouter.post('/markasread', markAsReadChat)

module.exports = chatRouter
