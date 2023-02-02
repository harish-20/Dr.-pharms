const Patient = require('../../models/patient')

const getAllPatients = async (req, res) => {
  try {
    const patients = await Patient.find({})
    if (patients.length) {
      res.status(200).send(patients)
    } else {
      res.status(400).send({ message: 'No Patients available add some.' })
    }
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
}

const getPatient = async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id, '-password')
    if (patient._id) {
      res.status(200).send(patient)
    } else {
      res.status(400).send({ message: 'Patient not found' })
    }
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
}

const addPatient = async (req, res) => {
  try {
    const {
      name,
      image,
      email,
      password,
      contact,
      age,
      gender,
      bloodType,
      allergies,
      medicalHistory,
      prescriptions,
      insurance,
      height,
      weight,
    } = req.body

    const patient = new Patient({
      name,
      image,
      email,
      password,
      contact,
      age,
      gender,
      bloodType,
      allergies,
      medicalHistory,
      prescriptions,
      insurance,
      height,
      weight,
    })

    const result = await patient.save()
    if (result._id) {
      res.status(200).send(result._id)
    } else {
      res.status(400).send(result)
    }
  } catch (err) {
    console.log(err)
    res.status(400).send({ message: err.message })
  }
}

const editPatient = async (req, res) => {
  try {
    const existingPatient = await Patient.findById(req.body._id)
    const result = await Patient.findByIdAndUpdate(
      existingPatient._id,
      {
        ...req.body,
      },
      { new: true, overwrite: true },
    )

    if (result._id) {
      res.status(200).send(result)
    } else {
      res.status(400).send(result)
    }
  } catch (err) {
    console.log(err)
    res.status(400).send({ message: err.message })
  }
}

module.exports = {
  getAllPatients,
  getPatient,
  addPatient,
  editPatient,
}
