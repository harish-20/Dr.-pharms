const {
  addDoctorToRequestList,
  getAdmin,
  removeDoctorFromRequestList,
} = require('../controller/admin')

const adminRouter = require('express').Router()

adminRouter.get('/', getAdmin)
adminRouter.post('/addDoctor', addDoctorToRequestList)
adminRouter.post('/removeDoctor', removeDoctorFromRequestList)

module.exports = adminRouter
