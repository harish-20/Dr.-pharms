const prescriptionRoute = require('express').Router()

const {
  getAllPrescriptions,
  getPrescription,
  addPrescription,
  editPrescription,
} = require('../controller/prescription')

prescriptionRoute.get('/', getAllPrescriptions)
prescriptionRoute.get('/:id', getPrescription)
prescriptionRoute.post('/', addPrescription)
prescriptionRoute.post('/editPrescription', editPrescription)

module.exports = prescriptionRoute
