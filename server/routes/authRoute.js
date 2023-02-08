const {
  doctorSignin,
  patientSignin,
  adminSignin,
} = require('../controller/auth')

const authRouter = require('express').Router()

authRouter.post('/doctor', doctorSignin)
authRouter.post('/patient', patientSignin)
authRouter.post('/admin', adminSignin)

module.exports = authRouter
