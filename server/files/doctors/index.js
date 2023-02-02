const Doctor = require('../../models/doctor')

const fileRouter = require('express').Router()

fileRouter.post('/', async (req, res) => {
  const file = req.files.file
  const path = __dirname + '\\' + file.name
  const url = `${req.protocol}://${req.get('host')}/doctors/${file.name}`

  const doctor = await Doctor.findByIdAndUpdate(req.body._id, {
    $set: { image: url },
  })

  file.mv(`${path}`, (err) => {
    if (err) {
      res.status(400).send({ message: err.message, success: false })
    } else {
      res.status(200).send({
        message: 'file got uploded',
        success: true,
        url,
      })
    }
  })
})

module.exports = fileRouter
