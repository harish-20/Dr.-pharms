const Doctor = require('../../models/doctor')
const Patient = require('../../models/patient')

const doctorSignin = async (req, res) => {
  try {
    const { email, password } = req.body
    const existingDoctor = await Doctor.findOne(
      { email, password },
      { password: 0 },
    )
    if (existingDoctor) {
      res.status(200).send(existingDoctor)
    } else {
      res.status(400).send({ message: 'User Id and Password not matched.' })
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const patientSignin = async (req, res) => {
  try {
    const { email, password } = req.body
    const existingPatient = await Patient.findOne(
      { email, password },
      { password: 0 },
    )
    if (existingPatient) {
      res.status(200).send(existingPatient)
    } else {
      res.status(400).send({ message: 'User Id and Password not matched.' })
    }
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const adminSignin = async (req, res) => {
  try {
    const { email, password } = req.body
    const isVerified = email === 'admin@gmail.com' && password === 'admin'

    res.status(200).send({ isVerified })
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = { adminSignin, patientSignin, doctorSignin }
