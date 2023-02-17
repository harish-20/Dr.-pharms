const { default: mongoose } = require('mongoose')
const Prescription = require('../../models/prescription')

const getAllPrescriptions = async (req, res) => {
  try {
    const prescriptions = await Prescription.find({})
    res.status(200).send(prescriptions)
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
}

const getPrescription = async (req, res) => {
  try {
    const prescription = await Prescription.find({})

    const filteredPrescription = prescription.filter(
      (pres) => pres.patient?._id === req.params.id,
    )

    res.status(200).send(filteredPrescription)
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
}

const addPrescription = async (req, res) => {
  try {
    const {
      patient,
      doctor,
      date,
      complaints,
      diagnosis,
      medications,
      followUp,
      notes,
    } = req.body

    const prescription = new Prescription({
      patient,
      doctor,
      date,
      complaints,
      diagnosis,
      medications,
      followUp,
      notes,
    })

    const result = await prescription.save()
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

const editPrescription = async (req, res) => {
  try {
    const existingPrescription = await Prescription.findById(req.body._id)
    const result = await Prescription.findByIdAndUpdate(
      existingPrescription._id,
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
  getAllPrescriptions,
  getPrescription,
  addPrescription,
  editPrescription,
}
