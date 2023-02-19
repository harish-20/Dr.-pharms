import React, { useEffect, useState } from 'react'
import { getAllDoctor } from '../../API/doctor'

import Card from './Card'
import CardContainer from './CardContainer'

const Doctors = () => {
  const [doctorsList, setDoctorsList] = useState([])

  useEffect(() => {
    const fetchDoctors = async () => {
      const doctors = await getAllDoctor()

      setDoctorsList(doctors)
      console.log(doctors)
    }

    fetchDoctors()
  }, [])

  const categorisedDoctors = doctorsList.reduce((acc, doctor) => {
    doctor.specialties.forEach((speciality) => {
      if (!acc[speciality]) {
        acc[speciality] = []
      }
      acc[speciality].push(doctor)
    })

    return acc
  }, {})

  const categorisedComponent = []
  for (let category in categorisedDoctors) {
    const component = (
      <CardContainer heading={category}>
        {categorisedDoctors[category].map((doc) => (
          <Card key={doc.name} {...doc} />
        ))}
      </CardContainer>
    )

    categorisedComponent.push(component)
  }

  return (
    <section className="container md:w-[80vw] mx-auto mt-10">
      <CardContainer heading="Most Rated Doctor">
        {doctorsList.slice(0, 4).map((doc) => (
          <Card key={doc.name} {...doc} />
        ))}
      </CardContainer>

      <div className="py-10 text-center bg-yellow text-3xl text-white font-bold tracking-wide rounded-lg">
        Search Doctors by Speciality You Need
      </div>

      <div className="flex flex-col mt-7 gap-4">{categorisedComponent}</div>
    </section>
  )
}

export default Doctors
