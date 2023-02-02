const mongoose = require('mongoose')

const prescriptionSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Doctor',
  },
  date: {
    type: Date,
    default: Date.now,
  },
  complaints: {
    type: String,
    required: true,
  },
  diagnosis: {
    type: String,
    required: true,
  },
  medications: [
    {
      name: {
        type: String,
        required: true,
      },
      dosage: {
        type: String,
        required: true,
      },
      frequency: {
        type: String,
        required: true,
      },
      duration: {
        type: String,
        required: true,
      },
      endDate: {
        type: String,
        required: true,
      },
      morning: {
        beforeFood: {
          type: Boolean,
          default: false,
        },
      },
      afternoon: {
        beforeFood: {
          type: Boolean,
          default: false,
        },
      },
      night: {
        beforeFood: {
          type: Boolean,
          default: false,
        },
      },
    },
  ],
  followUp: {
    type: Date,
  },
  notes: {
    type: String,
  },
})

module.exports = mongoose.model('Prescriptions', prescriptionSchema)
