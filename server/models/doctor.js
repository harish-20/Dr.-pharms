const mongoose = require('mongoose')
const Schema = mongoose.Schema

const doctorSchema = new Schema({
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
  bio: { type: String },
  contact: {
    type: String,
    required: true,
  },
  qualifications: {
    type: String,
    required: true,
  },
  specialties: {
    type: [String],
    required: true,
  },
  yearsOfExperience: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
  },
  hospital: {
    type: String,
  },
  education: {
    type: String,
  },
})

module.exports = mongoose.model('Doctor', doctorSchema)
