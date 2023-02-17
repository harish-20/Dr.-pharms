import api from '.'

export const addPrescription = async (prescriptionInfo) => {
  const prescription = await api
    .post('/prescriptions', prescriptionInfo)
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return prescription
}

export const getPrescription = async (patientId) => {
  const prescription = await api
    .get('/prescriptions/' + patientId)
    .then((res) => res.data)
    .catch((err) => console.log(err))
  return prescription
}
