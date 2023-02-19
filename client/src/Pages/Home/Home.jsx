import React from 'react'
import Guidance from './Guidance/Guidance'
import ImgSlider from './ImgSlider/ImgSlider'
import NumbersBar from './NumbersBar/NumbersBar'
import SpecilitesList from './SpecilitesList/SpecilitesList'

const Home = () => {
  return (
    <main className="my-10">
      <ImgSlider />
      <NumbersBar />
      <SpecilitesList />
      <Guidance />
    </main>
  )
}

export default Home
