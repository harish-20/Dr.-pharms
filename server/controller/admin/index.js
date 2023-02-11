const Admin = require('../../models/admin')

const getAdmin = async (req, res) => {
  try {
    const admin = await Admin.find({})
    if (!admin.length) {
      const newAdmin = new Admin({
        username: 'admin',
        password: 'admin',
        doctorRequest: [],
      })
      await newAdmin.save()
    }
    res.status(200).send(admin)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const addDoctorToRequestList = async (req, res) => {
  try {
    const admin = await Admin.find({ username: 'admin' })
    const updatedDoctorRequestList = [...admin[0].doctorRequest, req.body]
    const result = await Admin.findOneAndUpdate(
      { username: 'admin' },
      { $set: { doctorRequest: updatedDoctorRequestList } },
    )
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const removeDoctorFromRequestList = async (req, res) => {
  try {
    const admin = await Admin.find({ username: 'admin' })
    const updatedDoctorRequestList = admin[0].doctorRequest.filter(
      (doctor) => doctor.email !== req.body.email,
    )
    const result = await Admin.findOneAndUpdate(
      { username: 'admin' },
      { $set: { doctorRequest: updatedDoctorRequestList } },
    )
    res.status(200).send(result)
  } catch (error) {
    res.status(400).send(error.message)
  }
}

module.exports = {
  addDoctorToRequestList,
  getAdmin,
  removeDoctorFromRequestList,
}
