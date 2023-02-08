import api from '.'

export const getPatient = async (id) => {
  const patient = await api
    .get('/patients/' + id)
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return patient
}

export const patientSignup = async (patientInfo) => {
  const patient = await api
    .post('/patients/', patientInfo)
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return patient
}

export const editPatient = (patientInfo) => {
  const patient = api
    .post('/patients/editPatient', patientInfo)
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return patient
}
