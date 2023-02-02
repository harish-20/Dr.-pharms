const chatRouter = require('express').Router()

const { getChat, addChat } = require('../controller/chats')

chatRouter.post('/', getChat)
chatRouter.post('/addChat', addChat)

module.exports = chatRouter
