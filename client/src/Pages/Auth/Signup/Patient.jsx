import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { patientSignup } from '../../../API/patient'
import InputText from '../../../components/InputText/InputText'

const Patient = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    age: '',
    gender: '',
    bloodType: '',
    height: '',
    weight: '',
  })

  const navigate = useNavigate()

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const result = await patientSignup(formData)
    if (result) {
      alert('User has been created now you can login')
      navigate('/')
    } else {
      alert('Enter valid details')
    }
  }

  return (
    <form
      className="flex flex-col gap-y-4 w-full px-[5%] pt-10 pb-20 mx-auto my-10 bg-white rounded-3xl md:w-6/12"
      onSubmit={handleSubmit}
    >
      <h1 className="text-slate-600 text-3xl text-center font-semibold mb-10">
        Patient's Sign up
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
      <div className="flex gap-6">
        <InputText name="age" value={formData.age} onChange={handleChange} />
        <InputText
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-6">
        <InputText
          name="bloodType"
          value={formData.bloodType}
          onChange={handleChange}
        />
        <InputText
          name="height"
          description="in cm"
          value={formData.height}
          onChange={handleChange}
        />
        <InputText
          name="weight"
          description="in kg"
          value={formData.weight}
          onChange={handleChange}
        />
      </div>
      <button className="w-[70%] mt-14 mx-auto py-2 text-white text-xl font-semibold tracking-wider bg-blue rounded-lg hover:bg-indigo-600">
        Sign up
      </button>
    </form>
  )
}

export default Patient
