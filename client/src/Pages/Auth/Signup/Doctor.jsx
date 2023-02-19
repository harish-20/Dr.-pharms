import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { addDoctorToRequestList } from '../../../API/admin'

import InputText from '../../../components/InputText/InputText'

const Doctor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    specialties: [],
    qualifications: '',
    yearsOfExperience: '',
    hospital: '',
    education: '',
    license: '',
  })

  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSpecilities = (event) => {
    const exisitingSpecilities = [...formData.specialties]

    const existingIndex = exisitingSpecilities.findIndex(
      (specility) => specility === event.target.value,
    )

    let updatedSpecilities
    if (exisitingSpecilities[existingIndex]) {
      updatedSpecilities = exisitingSpecilities.filter(
        (specilities, index) => index !== existingIndex,
      )
    } else {
      updatedSpecilities = [...exisitingSpecilities, event.target.value]
    }
    setFormData((prev) => ({
      ...prev,
      specialties: updatedSpecilities,
    }))
    console.log(formData.specialties)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updatedFormData = {
      ...formData,
    }

    const result = await addDoctorToRequestList(updatedFormData)
    alert('Request has been sent to admin you can login after verification.')
    if (result) {
      navigate('/')
    }
  }

  return (
    <form
      className="flex flex-col gap-y-4 w-full px-[5%] pt-10 pb-20 mx-auto mt-10 mb-2 bg-white rounded-3xl md:w-6/12"
      onSubmit={handleSubmit}
    >
      <h1 className="text-slate-600 text-3xl text-center font-semibold mb-10">
        Doctor's Sign up
      </h1>
      <InputText name="name" value={formData.name} onChange={handleChange} />
      <InputText
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <InputText
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <InputText
        name="confirmPassword"
        type="password"
        value={formData.confirmPassword}
        onChange={handleChange}
      />
      <InputText
        name="contact"
        value={formData.contact}
        onChange={handleChange}
      />
      <div className="flex flex-col my-3">
        <label
          htmlFor="specility"
          className="text-lg capitalize text-slate-600"
        >
          Specilites :
        </label>
        <div className="grid grid-flow-col grid-rows-3  gap-2 ml-10">
          <label htmlFor="general">
            <input
              type="checkbox"
              id="general"
              name="specilites"
              value="general"
              onChange={handleSpecilities}
            />
            General
          </label>
          <label htmlFor="physician">
            <input
              type="checkbox"
              id="physician"
              name="specilites"
              value="physician"
              onChange={handleSpecilities}
            />
            Physician
          </label>
          <label htmlFor="dietitian">
            <input
              type="checkbox"
              id="dietitian"
              name="specilites"
              value="dietitian"
              onChange={handleSpecilities}
            />
            Dietitian
          </label>
          <label htmlFor="sports medicine">
            <input
              type="checkbox"
              id="sports medicine"
              name="specilites"
              value="sports medicine"
              onChange={handleSpecilities}
            />
            Sports Medicine
          </label>
          <label htmlFor="dentist">
            <input
              type="checkbox"
              id="dentist"
              name="specilites"
              value="dentist"
              onChange={handleSpecilities}
            />
            Dentist
          </label>
          <label htmlFor="dermatogist">
            <input
              type="checkbox"
              id="dermatogist"
              name="specilites"
              value="dermatogist"
              onChange={handleSpecilities}
            />
            Dermatogist
          </label>
        </div>
      </div>
      <div className="flex gap-6">
        <InputText
          name="qualifications"
          value={formData.qualifications}
          onChange={handleChange}
        />
        <InputText
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={handleChange}
        />
      </div>
      <InputText
        name="hospital"
        value={formData.hospital}
        onChange={handleChange}
      />
      <InputText
        name="education"
        value={formData.education}
        onChange={handleChange}
      />
      <InputText
        name="license"
        value={formData.license}
        onChange={handleChange}
      />
      <button className="w-[70%] mt-14 mx-auto py-2 text-white text-xl font-semibold tracking-wider bg-blue rounded-lg hover:bg-indigo-600">
        Sign up
      </button>
    </form>
  )
}

export default Doctor
