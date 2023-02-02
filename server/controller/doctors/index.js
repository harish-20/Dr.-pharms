const Doctor = require('../../models/doctor')

const getAllDoctors = async (req, res) => {
  try {
    const doctors = await Doctor.find({})
    if (doctors) {
      res.status(200).send(doctors)
    } else {
      res.status(400).send({ message: 'No doctors available add some.' })
    }
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
}

const getDoctor = async (req, res) => {
  try {
    const doctor = await Doctor.findById(req.params.id, '-password')
    if (doctor._id) {
      res.status(200).send(doctor)
    } else {
      res.status(400).send({ message: 'Doctor not found' })
    }
  } catch (err) {
    res.status(400).send({ message: err.message })
  }
}

const addDoctor = async (req, res) => {
  try {
    const {
      name,
      email,
      password,
      contact,
      qualifications,
      specilities,
      yearsOfExperience,
      hospital,
      education,
    } = req.body
    const image = ''

    const doctor = new Doctor({
      name,
      image,
      email,
      password,
      contact,
      qualifications,
      specilities,
      yearsOfExperience,
      hospital,
      education,
    })

    const result = await doctor.save()
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

const editDoctor = async (req, res) => {
  try {
    const existingDoctor = await Doctor.findById(req.body._id)
    const result = await Doctor.findByIdAndUpdate(
      existingDoctor._id,
      { ...req.body },
      {
        new: true,
        overwrite: true,
      },
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
  getAllDoctors,
  addDoctor,
  getDoctor,
  editDoctor,
}
