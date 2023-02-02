const Chat = require('../../models/chat')

const getChat = async (req, res) => {
  try {
    const messages = await Chat.find({
      $or: [{ senderId: req.body._id }, { receiverId: req.body._id }],
    })

    res.status(200).send(messages)
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
