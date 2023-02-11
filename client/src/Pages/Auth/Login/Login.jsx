import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import InputText from '../../../components/InputText/InputText'
import { login } from '../../../redux/slices/currentUser'

const Login = (props) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const currentUser = useSelector((state) => state)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(login({ type: props.userType, credentials: formData, navigate }))
    console.log(currentUser)
  }

  return (
    <form
      className="flex flex-col gap-y-6 w-full px-[5%] pt-10 pb-20 mx-auto mt-10 mb-2 bg-white rounded-3xl md:w-5/12"
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
