import React, { useState } from 'react'
import InputText from '../../../components/InputText/InputText'

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(props.type)
    // Submit formData to your server here
  }

  return (
    <form
      className="flex flex-col gap-y-6 w-full px-[5%] pt-10 pb-20 mx-auto my-10 bg-white rounded-3xl md:w-5/12"
      onSubmit={handleSubmit}
    >
      <h1 className="text-slate-600 text-3xl text-center font-semibold mb-10 capitalize">
        {props.userType}'s Login
      </h1>

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

      <button className="w-[70%] mt-14 mx-auto py-2 text-white text-xl font-semibold tracking-wider bg-blue rounded-lg hover:bg-indigo-600">
        Login
      </button>
    </form>
  )
}

export default Login
