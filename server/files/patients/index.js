const Patient = require('../../models/patient')

const fileRouter = require('express').Router()

fileRouter.post('/', async (req, res) => {
  const file = req.files.file
  const path = __dirname + '\\' + file.name

  const patient = await Patient.findByIdAndUpdate(req.body._id, { image: path })
  file.mv(`${path}`, (err) => {
    if (err) {
      res.status(400).send({ message: err.message, success: false })
    } else {
      res
        .status(200)
        .send({ message: 'file got uploded', success: true, patient })
    }
  })
})

module.exports = fileRouter
