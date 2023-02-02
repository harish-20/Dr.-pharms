import React, { useEffect } from 'react'
import { useState } from 'react'
import { RightArrow } from '../../../components/Icons/icons'

import banner1 from '../../../assets/banner.jpg'
import banner2 from '../../../assets/banner2.png'
import banner3 from '../../../assets/banner3.jpg'

import './ImgSlider.css'

const ImgSlider = () => {
  const [currentImgIndex, setCurrentImgIndex] = useState(0)

  const imgList = [banner1, banner2, banner3]

  const currentImg = imgList[currentImgIndex]

  useEffect(() => {
    const imgList = [banner1, banner2, banner3]
    let slidechanger = setInterval(() => {
      setCurrentImgIndex((prev) => (imgList[prev + 1] ? prev + 1 : 0))
    }, 5000)

    return () => {
      clearInterval(slidechanger)
    }
  }, [])

  useEffect(() => {
    const slide = document.getElementById('slide')
    slide.style.opacity = 0.5
    slide.style.transition = '0.5s'

    setTimeout(() => {
      slide.style.opacity = 1
    }, 500)
  }, [currentImgIndex])

  const nextImg = () => {
    if (imgList[currentImgIndex + 1]) {
      setCurrentImgIndex((prev) => prev + 1)
    } else {
      setCurrentImgIndex(0)
    }
  }

  const prevImg = () => {
    if (imgList[currentImgIndex - 1]) {
      setCurrentImgIndex((prev) => prev - 1)
    } else {
      setCurrentImgIndex(imgList.length - 1)
    }
  }

  return (
    <div className="m-auto relative">
      {/* rotated right arrow  at 180deg to get left arrow */}
      <img className="slide-img" id="slide" src={currentImg} alt="Offers" />
      <RightArrow
        className="h-10 w-10 p-2 absolute top-0 bottom-0 left-[100px] my-auto rotate-180 rounded-full bg-slate-100 shadow-md  cursor-pointer hover:bg-slate-200"
        onClick={prevImg}
      />
      <RightArrow
        className="h-10 w-10 p-2 absolute top-0 bottom-0 right-[100px] my-auto rounded-full shadow-md bg-slate-100 cursor-pointer hover:bg-slate-200"
        onClick={nextImg}
      />
    </div>
  )
}

export default ImgSlider
