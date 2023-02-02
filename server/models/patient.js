const mongoose = require('mongoose')
const Schema = mongoose.Schema

const patientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  bloodType: {
    type: String,
  },
  allergies: {
    type: [String],
  },
  medicalHistory: {
    type: [String],
  },
  prescriptions: {
    type: [String],
  },
  insurance: {
    type: String,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
})

module.exports = mongoose.model('Patient', patientSchema)
