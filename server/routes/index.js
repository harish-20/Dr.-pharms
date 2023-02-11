const router = require('express').Router()

const authRoute = require('./authRoute')

const adminRouter = require('./adminRoute')
const doctorsRoute = require('./doctorsRoute')
const patientsRoute = require('./patient')
const prescriptionRoute = require('./prescriptionRoute')
const chatRoute = require('./chatRoute')

const doctorsFileRoute = require('../files/doctors')
const patientFileRoute = require('../files/patients')

router.use('/auth', authRoute)
router.use('/admin', adminRouter)
router.use('/doctors', doctorsRoute)
router.use('/patients', patientsRoute)
router.use('/prescriptions', prescriptionRoute)
router.use('/chats', chatRoute)

router.use('/upload/doctor', doctorsFileRoute)
router.use('/upload/patient', patientFileRoute)

module.exports = router
