import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { doctorSignup } from '../../../API/doctor'
import InputText from '../../../components/InputText/InputText'

const Doctor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    specialties: '',
    qualifications: '',
    yearsOfExperience: '',
    hospital: '',
    education: '',
    license: '',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
    console.log(formData)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updatedFormData = {
      ...formData,
      specialties: formData.specialties.split(',').map((text) => text.trim()),
    }
    console.log(updatedFormData)
    const result = await doctorSignup(updatedFormData)
    alert('Id has been created login now')
    if (result) {
      navigate('/')
    }
  }

  return (
    <form
      className="flex flex-col gap-y-4 w-full px-[5%] pt-10 pb-20 mx-auto my-10 bg-white rounded-3xl md:w-6/12"
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
      <InputText
        name="specialties"
        value={formData.specialties}
        onChange={handleChange}
        description="add comma between two specility Eg.skin care, pedeatric"
      />
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
