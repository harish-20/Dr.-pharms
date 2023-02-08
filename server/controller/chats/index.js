const Chat = require('../../models/chat')
const Doctor = require('../../models/doctor')
const Patient = require('../../models/patient')

const getChat = async (req, res) => {
  try {
    const messages = await Chat.find({
      $or: [{ senderId: req.body._id }, { receiverId: req.body._id }],
    })

    const doctors = await Doctor.find({}, { password: 0 })
    const patients = await Patient.find({}, { password: 0 })
    const users = [...doctors, ...patients]

    const detailedMessages = messages.map((message) => {
      const sender = users.find((user) => String(user._id) === message.senderId)
      const receiver = users.find(
        (user) => String(user._id) === message.receiverId,
      )
      return {
        message,
        sender,
        receiver,
      }
    })

    const conversation = detailedMessages.reduce((acc, message) => {
      // find who the user is chating with if the user is sender then the receiver is the person he talks to
      const conversationWith =
        message.message.senderId === req.body._id
          ? message.receiver
          : message.sender
      const existingIndex = acc.findIndex(
        (conv) => conv.conversationWith._id === conversationWith._id,
      )

      if (existingIndex === -1) {
        acc.push({ conversationWith, messages: [message.message] })
      } else {
        acc[existingIndex].messages.push(message.message)
      }

      return acc
    }, [])

    res.status(200).send(conversation)
  } catch (err) {
    res.status(400).send(err.message)
  }
}

const addChat = async (req, res) => {
  try {
    const message = new Chat({
      senderId: req.body.senderId,
      receiverId: req.body.receiverId,
      text: req.body.text,
    })

    const result = await message.save()
    res.status(200).send(result)
  } catch (err) {
    res.status(400).send(err.message)
  }
}

module.exports = {
  getChat,
  addChat,
}
