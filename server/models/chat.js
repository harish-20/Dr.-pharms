const mongooose = require('mongoose')
const Schema = mongooose.Schema

const chatSchema = new Schema(
  {
    senderId: String,
    receiverId: String,
    text: String,
    isRead: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
)

module.exports = mongooose.model('Chats', chatSchema)
