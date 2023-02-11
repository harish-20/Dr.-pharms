import api from '.'

export const addDoctorToRequestList = async (doctorInfo) => {
  const result = await api.post('/admin/addDoctor', doctorInfo)
  return result
}

export const removeDoctorFromRequestList = async (doctorinfo) => {
  const result = await api.post('/admin/removeDoctor', doctorinfo)
  return result
}
