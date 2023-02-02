import React from 'react'
import { useState } from 'react'
import InputText from '../../../components/InputText/InputText'

const patientInfo = {
  _id: '63d3f7fa484816213f6e3eb0',

  name: 'John Doe',
  image:
    'https://img.freepik.com/free-photo/close-up-confident-male-employee-white-collar-shirt-smiling-camera-standing-self-assured-against-studio-background_1258-26761.jpg?w=360',
  email: 'johndoe@example.com',
  password: 'passwo',
  contact: '555-555-5555',
  age: 30,
  gender: 'Male',
  bloodType: 'O-',
  allergies: ['penicillin', 'bees'],
  medicalHistory: ['asthma', 'broken arm'],
  prescriptions: ['prescription1', 'prescription2'],
  insurance: 'Example Insurance',
  height: 180,
  weight: 80,
  __v: 0,
}

const EditProfile = (props) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    contact: '',
    age: '',
    gender: '',
    bloodType: '',
    allergies: '',
    medicalHistory: '',
    insurance: '',
    height: '',
    weight: '',
  })

  const updateInput = (event) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
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
