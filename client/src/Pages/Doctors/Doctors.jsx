import React from 'react'

import Card from './Card'
import CardContainer from './CardContainer'

const Dummy_doctors = [
  {
    name: 'Dr. John Smith',
    speciality: 'Skin Care',
    image: 'https://www.example.com/images/john_smith.jpg',
    rating: 4.5,
    hospital: "St. Mary's Hospital",
  },
  {
    name: 'Dr. Jane Doe',
    speciality: 'Sports Medicine',
    image: 'https://www.example.com/images/jane_doe.jpg',
    rating: 4.9,
    hospital: 'Memorial Hospital',
  },
  {
    name: 'Dr. Michael Brown',
    speciality: 'Dental',
    image: 'https://www.example.com/images/michael_brown.jpg',
    rating: 4.7,
    hospital: 'Community Hospital',
  },
  {
    name: 'Dr. Emily Davis',
    speciality: 'General Medicine',
    image: 'https://www.example.com/images/emily_davis.jpg',
    rating: 4.8,
    hospital: 'City Hospital',
  },
]

const Doctors = () => {
  const mostRated = Dummy_doctors.sort((a, b) => b.rating - a.rating).slice(
    0,
    4,
  )

  return (
    <div className="container md:w-[80vw] mx-auto mt-10">
      <CardContainer heading="Most Rated Doctor">
        {mostRated.map((doc) => (
          <Card key={doc.name} {...doc} />
        ))}
      </CardContainer>

      <div className="py-10 text-center bg-yellow text-3xl text-white font-bold tracking-wide rounded-lg">
        Search Doctors by Speciality You Need
      </div>

      <CardContainer heading="Most Rated Doctor">
        {mostRated.map((doc) => (
          <Card key={doc.name} {...doc} />
        ))}
      </CardContainer>

      <CardContainer heading="Most Rated Doctor">
        {mostRated.map((doc) => (
          <Card key={doc.name} {...doc} />
        ))}
      </CardContainer>

      <CardContainer heading="Most Rated Doctor">
        {mostRated.map((doc) => (
          <Card key={doc.name} {...doc} />
        ))}
      </CardContainer>
    </div>
  )
}

export default Doctors
