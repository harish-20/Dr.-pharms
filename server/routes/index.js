const router = require('express').Router()

const doctorsRoute = require('./doctorsRoute')
const patientsRoute = require('./patient')
const prescriptionRoute = require('./prescriptionRoute')
const chatRouter = require('./chatRoute')
const doctorsFileRouter = require('../files/doctors')
const patientFileRouter = require('../files/patients')

router.use('/doctors', doctorsRoute)
router.use('/patients', patientsRoute)
router.use('/prescriptions', prescriptionRoute)
router.use('/chats', chatRouter)
router.use('/upload/doctor', doctorsFileRouter)
router.use('/upload/patient', patientFileRouter)

module.exports = router
