import api from '.'

export const getMessages = async (id) => {
  const messages = await api
    .post('/chats/', { _id: id })
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return messages
}

export const sendMessage = (messageInfo) => {
  const message = api
    .post('/chats/addChat', messageInfo)
    .then((res) => res.data)
    .catch((err) => console.log(err))

  return message
}

export const markAsRead = (messageInfo) => {
  const message = api
    .post('/chats/markasread', messageInfo)
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return message
}
