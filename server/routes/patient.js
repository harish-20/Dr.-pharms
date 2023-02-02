const patientsRoute = require('express').Router()

const {
  getAllPatients,
  addPatient,
  getPatient,
  editPatient,
} = require('../controller/patients')

patientsRoute.get('/', getAllPatients)
patientsRoute.get('/:id', getPatient)
patientsRoute.post('/', addPatient)
patientsRoute.post('/editPatient', editPatient)

module.exports = patientsRoute
