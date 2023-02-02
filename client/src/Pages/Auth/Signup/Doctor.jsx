import React, { useState } from 'react'
import InputText from '../../../components/InputText/InputText'

const Doctor = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contact: '',
    specilities: '',
    qualification: '',
    yearsOfExperience: '',
    hosptial: '',
    education: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Submit formData to your server here
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
        name="specilities"
        value={formData.specilities}
        onChange={handleChange}
        description="add comma between two specility Eg.skin care, pedeatric"
      />
      <div className="flex gap-6">
        <InputText
          name="qualification"
          value={formData.qualification}
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
        value={formData.hosptial}
        onChange={handleChange}
      />
      <InputText
        name="education"
        value={formData.education}
        onChange={handleChange}
      />
      <button className="w-[70%] mt-14 mx-auto py-2 text-white text-xl font-semibold tracking-wider bg-blue rounded-lg hover:bg-indigo-600">
        Sign up
      </button>
    </form>
  )
}

export default Doctor
