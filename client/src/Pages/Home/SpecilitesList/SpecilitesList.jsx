import React from 'react'
import SpecilityCard from './SpecilityCard'

const SpecilitesList = () => {
  const specilitiesList = [
    {
      image:
        'https://lordshospital.org/wp-content/uploads/2022/01/Best-General-medicine-hospital-in-Trivandrum.jpg',
      specility: 'General Treatment',
    },
    {
      image:
        'https://content.jdmagicbox.com/comp/trichy/z9/0431px431.x431.210305191200.w7z9/catalogue/srinivas-physiotherapy-clinic-trichy-physiotherapist-for-home-visits-q5cw2qqnhq.jpg',
      specility: 'Physician',
    },
    {
      image: 'https://www.uab.edu/news/images/2018/Five_tips_Stream.jpg',
      specility: 'Dietitian',
    },
    {
      image:
        'https://www.verywellfit.com/thmb/zBE3DCmb4SUJS4DtDJ6MFCDplkY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/SportsMedicine-5a787da6ff1b780037f147ff.jpg',
      specility: 'Sports Medicine',
    },
    {
      image:
        'https://www.towerdental.com.au/uploads/170/46/Untitled-design-49.png',
      specility: 'Dentist',
    },
    {
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmt-4w3y5QLt5ZD8XYucQeSeR7zWQ2VI59g&usqp=CAU',
      specility: 'Dermatogist',
    },
  ]
  return (
    <div className="mx-14 py-10 px-6 rounded-lg bg-white">
      <h1 className="pb-6 text-4xl text-dark font-semibold">
        Available Specilites
      </h1>
      <div className="flex justify-evenly gap-4 mt-5">
        {specilitiesList.map((specility) => (
          <SpecilityCard key={specility.specility} {...specility} />
        ))}
      </div>
    </div>
  )
}

export default SpecilitesList
