import React from 'react'
import { useState } from 'react'
import BioDetails from './Profile/BioDetails'
import InfoNavbar from './Profile/InfoNavbar'
import OtherDetails from './Profile/OtherDetails'
import Prescriptions from './Prescriptions/Prescriptions'
import Profile from './Profile/Profile'
import EditProfile from './EditProfile/EditProfile'

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
const prescription = [
  {
    doctor: {
      _id: {
        $oid: '63d37070aa22ac74a98c44c5',
      },
      name: 'Dr. siranjivi',
      image:
        'D:\\fullstack-projects\\Dr. pharms\\server\\files\\doctors\\d.png',
      email: 'drjohnsmith@example.com',
      contact: '555-555-5555',
      qualifications: 'MBBS, MD',
      specialties: [],
      yearsOfExperience: 15,
      hospital: "St. Mary's Hospital",
      education: 'University of Oxford',
      __v: 0,
    },
    date: {
      $date: {
        $numberLong: '1667304000000',
      },
    },
    complaints: 'Chest pain and shortness of breath',
    diagnosis: 'fever',
    medications: [
      {
        name: 'Amoxicillin',
        dosage: '500mg',
        frequency: 'Twice a day',
        duration: '10 days',
        endDate: '2022-11-11T12:00:00Z',
        morning: {
          beforeFood: true,
        },
        afternoon: {
          beforeFood: false,
        },
        night: {
          beforeFood: true,
        },
        _id: {
          $oid: '63d40aa977223de7019c51ad',
        },
      },
      {
        name: 'Amoxicillin',
        dosage: '500mg',
        frequency: 'Twice a day',
        duration: '10 days',
        endDate: '2022-11-11T12:00:00Z',
        morning: {
          beforeFood: true,
        },
        afternoon: {
          beforeFood: false,
        },
        night: {
          beforeFood: true,
        },
        _id: {
          $oid: '63d40aa977223de7019c51ad',
        },
      },
    ],
    followUp: {
      $date: {
        $numberLong: '1668513600000',
      },
    },
    notes: 'Patient is also advised to get a chest X-ray next week.',
    __v: 0,
    _id: 2,
  },
  {
    doctor: {
      _id: {
        $oid: '63d37070aa22ac74a98c44c5',
      },
      name: 'Dr. siranjivi',
      image:
        'D:\\fullstack-projects\\Dr. pharms\\server\\files\\doctors\\d.png',
      email: 'drjohnsmith@example.com',
      contact: '555-555-5555',
      qualifications: 'MBBS, MD',
      specialties: [],
      yearsOfExperience: 15,
      hospital: "St. Mary's Hospital",
      education: 'University of Oxford',
      __v: 0,
    },
    date: {
      $date: {
        $numberLong: '1667304000000',
      },
    },
    complaints: 'Chest pain and shortness of breath',
    diagnosis: 'fever',
    medications: [
      {
        name: 'Amoxicillin',
        dosage: '500mg',
        frequency: 'Twice a day',
        duration: '10 days',
        endDate: '2022-11-11T12:00:00Z',
        morning: {
          beforeFood: true,
        },
        afternoon: {
          beforeFood: false,
        },
        night: {
          beforeFood: true,
        },
        _id: {
          $oid: '63d40aa977223de7019c51ad',
        },
      },
    ],
    followUp: {
      $date: {
        $numberLong: '1668513600000',
      },
    },
    notes: 'Patient is also advised to get a chest X-ray next week.',
    __v: 0,
    _id: 1,
  },
]

const Patient = () => {
  const {
    name,
    image,
    contact,
    email,
    age,
    gender,
    height,
    weight,
    bloodType,
    medicalHistory,
    prescriptions,
    insurance,
    allergies,
  } = patientInfo

  const categories = {
    'Bio details': {
      name,
      email,
      age,
      gender,
      bloodType,
      height,
      weight,
      medicalHistory,
    },
    'Prescriptions List': prescriptions,
    Others: { insurance, allergies },
  }

  const [heading, setHeading] = useState(Object.keys(categories)[0])
  const [isEdit, setIsEdit] = useState(false)

  const detailsType = {
    'Bio details': (
      <BioDetails
        {...categories['Bio details']}
        onEdit={() => setIsEdit(true)}
      />
    ),
    'Prescriptions List': <Prescriptions prescription={prescription} />,
    Others: <OtherDetails {...categories['Others']} />,
  }
  return (
    <div className="w-full my-10 mx-auto flex flex-col items-center bg-white rounded-xl md:w-3/5">
      {isEdit ? (
        <EditProfile onCancel={() => setIsEdit(false)} />
      ) : (
        <>
          <Profile name={name} image={image} />
          <InfoNavbar
            heading={heading}
            headings={Object.keys(categories)}
            changeHeading={setHeading}
          />
          {detailsType[heading]}
        </>
      )}
    </div>
  )
}

export default Patient
