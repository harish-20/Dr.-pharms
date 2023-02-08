import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { editDoctor } from '../../../API/doctor'
import BigText from '../../../components/BigText/BigText'

import InputText from '../../../components/InputText/InputText'
import { currentUserActions } from '../../../redux/slices/currentUser'

const EditProfile = (props) => {
  const currentUser = useSelector((state) => state.currentUser.user)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    specialties: '',
    qualifications: '',
    yearsOfExperience: '',
    hospital: '',
    education: '',
    bio: '',
  })

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    console.log(currentUser.specialties)
    setFormData((prev) => ({
      ...prev,
      name: currentUser.name || '',
      email: currentUser.email || '',
      contact: currentUser.contact || '',
      specialties: currentUser.specialties.join(', ') || '',
      yearsOfExperience: currentUser.yearsOfExperience.toString() || '',
      qualifications: currentUser.qualifications || '',
      hospital: currentUser.hospital || '',
      education: currentUser.education || '',
      bio: currentUser.bio || '',
    }))
  }, [])

  const updateInput = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const updatedFormData = {
      ...currentUser,
      ...formData,
      specialties: formData.specialties.split(',').map((text) => text.trim()),
      password: formData.password || currentUser.password,
    }

    for (let data in formData) {
      if (!formData[data] && data !== 'password') {
        alert('Fill all the field')
        return
      }
      const result = await editDoctor(updatedFormData)
      dispatch(currentUserActions.updateUser(result))
      navigate('/')
    }
  }

  if (!currentUser) {
    return <BigText>Loading...</BigText>
  }

  return (
    <form className="w-3/5" onSubmit={handleSubmit}>
      <h1 className="text-3xl text-blue font-semibold text-center py-4">
        Edit Profile Form
      </h1>
      <div className="flex flex-col gap-y-6">
        <InputText name="name" value={formData.name} onChange={updateInput} />
        <InputText
          name="email"
          value={formData.email}
          type="email"
          onChange={updateInput}
        />
        <InputText
          name="password"
          value={formData.password}
          onChange={updateInput}
        />
        <InputText
          name="contact"
          value={formData.contact}
          onChange={updateInput}
        />
        <InputText
          name="specialties"
          value={formData.specialties}
          onChange={updateInput}
        />
        <InputText
          name="qualifications"
          value={formData.qualifications}
          onChange={updateInput}
        />
        <InputText
          name="yearsOfExperience"
          value={formData.yearsOfExperience}
          onChange={updateInput}
        />
        <InputText
          name="hospital"
          value={formData.hospital}
          onChange={updateInput}
        />
        <InputText
          name="education"
          value={formData.education}
          onChange={updateInput}
        />
        <label htmlFor="bio" className="text-lg capitalize text-slate-600">
          Bio:
        </label>
        <textarea
          name="bio"
          id="bio"
          className="border-2"
          onChange={updateInput}
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <div className="flex justify-between gap-4 mt-10">
        <button
          className="w-full auto border-2 border-blue text-blue py-2 rounded-lg"
          type="button"
          onClick={props.onCancel}
        >
          Cancel
        </button>
        <button className="w-full bg-blue text-white py-2 rounded-lg">
          Submit
        </button>
      </div>
    </form>
  )
}

export default EditProfile
