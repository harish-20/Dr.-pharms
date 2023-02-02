const doctorsRoute = require('express').Router()

const {
  getAllDoctors,
  addDoctor,
  getDoctor,
  editDoctor,
} = require('../controller/doctors')

doctorsRoute.get('/', getAllDoctors)
doctorsRoute.get('/:id', getDoctor)
doctorsRoute.post('/', addDoctor)
doctorsRoute.post('/editDoctor', editDoctor)

module.exports = doctorsRoute
