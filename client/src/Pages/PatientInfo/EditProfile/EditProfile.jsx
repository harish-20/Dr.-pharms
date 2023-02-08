import React from 'react'
import { useState } from 'react'
import { editPatient } from '../../../API/patient'
import InputText from '../../../components/InputText/InputText'

const EditProfile = (props) => {
  const [formData, setFormData] = useState({
    name: props.patient.name,
    email: props.patient.email,
    password: '',
    contact: props.patient.contact,
    age: props.patient.age.toString() || '',
    gender: props.patient.gender,
    bloodType: props.patient.bloodType,
    allergies: props.patient.allergies.join(', '),
    medicalHistory: props.patient.medicalHistory.join(', '),
    insurance: props.patient.insurance || '',
    height: props.patient.height.toString() || '',
    weight: props.patient.weight.toString() || '',
  })

  const updateInput = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const updatedFormData = {
      ...props.patient,
      ...formData,
      allergies: formData.allergies.split(',').map((text) => text.trim()),
      medicalHistory: formData.medicalHistory
        .split(',')
        .map((text) => text.trim()),
    }

    const result = await editPatient(updatedFormData)

    if (result) {
      alert('Updated succefully')
      props.onCancel()
    } else {
      alert('Enter valid details')
    }
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
          name="gender"
          value={formData.gender}
          onChange={updateInput}
        />
        <div className="flex gap-3">
          <InputText name="age" value={formData.age} onChange={updateInput} />
          <InputText
            name="bloodType"
            value={formData.bloodType}
            onChange={updateInput}
          />
        </div>
        <InputText
          name="allergies"
          value={formData.allergies}
          onChange={updateInput}
        />
        <InputText
          name="medicalHistory"
          value={formData.medicalHistory}
          onChange={updateInput}
        />
        <InputText
          name="insurance"
          value={formData.insurance}
          onChange={updateInput}
        />
        <div className="flex gap-3">
          <InputText
            name="height"
            value={formData.height}
            onChange={updateInput}
          />
          <InputText
            name="weight"
            value={formData.weight}
            onChange={updateInput}
          />
        </div>
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
