import api from '.'

export const getAllDoctor = async () => {
  const doctors = await api
    .get('/doctors/')
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return doctors
}

export const getDoctor = async (id) => {
  let doctorInfo

  await api
    .get('/doctors/' + id)
    .then((res) => {
      doctorInfo = res.data
    })
    .catch((err) => {
      doctorInfo = null
      console.log(err)
    })
  return doctorInfo
}

export const doctorSignup = async (doctorDetails) => {
  const doctor = await api.post('/doctors/', doctorDetails)
  return doctor
}

export const editDoctor = async (doctorDetails) => {
  const doctor = await api
    .post('/doctors/editDoctor', doctorDetails)
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return doctor
}
