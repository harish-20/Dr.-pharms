import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'

import { getPatient } from '../../API/patient'

import BioDetails from './Profile/BioDetails'
import InfoNavbar from './Profile/InfoNavbar'
import OtherDetails from './Profile/OtherDetails'
import Prescriptions from './Prescriptions/Prescriptions'
import Profile from './Profile/Profile'
import EditProfile from './EditProfile/EditProfile'
import BigText from '../../components/BigText/BigText'

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
  const [heading, setHeading] = useState('Bio details')
  const [isEdit, setIsEdit] = useState(false)
  const [patient, setPatient] = useState()

  const { id } = useParams()

  useEffect(() => {
    const fetch = async () => {
      const result = await getPatient(id).then((res) => res)
      setPatient(result)
    }

    fetch()
  }, [])

  if (!patient) {
    return <h1>loading</h1>
  }

  const categories = {
    'Bio details': {
      name: patient.name,
      email: patient.email,
      age: patient.age,
      gender: patient.gender,
      bloodType: patient.bloodType,
      height: patient.height,
      weight: patient.weight,
      medicalHistory: patient.medicalHistory,
    },
    'Prescriptions List': prescription,
    Others: { insurance: patient.insurance, allergies: patient.allergies },
  }

  const detailsType = {
    'Bio details': (
      <BioDetails
        {...categories['Bio details']}
        onEdit={() => setIsEdit(true)}
      />
    ),
    'Prescriptions List': (
      <Prescriptions prescription={prescription} patient={patient} />
    ),
    Others: <OtherDetails {...categories['Others']} />,
  }

  if (!patient) {
    return <BigText>Loading</BigText>
  }

  return (
    <section className="w-full my-10 mx-auto flex flex-col items-center bg-white rounded-xl md:w-3/5">
      {isEdit ? (
        <EditProfile patient={patient} onCancel={() => setIsEdit(false)} />
      ) : (
        <>
          <Profile name={patient.name} image={patient.image} />
          <InfoNavbar
            heading={heading}
            headings={Object.keys(categories)}
            changeHeading={setHeading}
          />
          {detailsType[heading]}
        </>
      )}
    </section>
  )
}

export default Patient
