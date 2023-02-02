import React from 'react'
import Logo from '../Logo/Logo'

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row items-start">
        <div className="md:w-1/3 text-center md:text-left">
          <Logo />
          <p className="text-sm mt-4">
            Copyright © {new Date().getFullYear()} Dr. Phrams
          </p>
        </div>
        <div className="md:w-1/3 text-center flex flex-col h-full">
          <h3 className="text-lg font-medium text-yellow">About us</h3>
          <div className="flex flex-col justify-between items-start mt-4 ml-32 gap-y-4">
            <a href="./" className="text-blue-500 hover:scale-110 duration-200">
              Blogs
            </a>
            <a href="./" className="text-white hover:scale-110 duration-200">
              Careers
            </a>
            <a href="./" className="text-blue-500 hover:scale-110 duration-200">
              Privacy policy
            </a>
            <a href="./" className="text-blue-500 hover:scale-110 duration-200">
              Terms of us
            </a>
          </div>
        </div>
        <div className="md:w-1/3 text-center">
          <h3 className="text-lg font-medium text-yellow">Contact Us</h3>
          <div className="flex flex-col justify-center items-start ml-32">
            <a href="./" className="text-blue-500 hover:scale-110 duration-200">
              <i className="fab fa-instagram fa-lg m-4 "></i>
              Instagram
            </a>
            <a href="./" className="text-white hover:scale-110 duration-200">
              <i className="fab fa-whatsapp fa-lg m-4"></i>Whatsapp
            </a>
            <a href="./" className="text-blue-500 hover:scale-110 duration-200">
              <i className="fab fa-twitter fa-lg m-4"></i>Twitter
            </a>
            <a href="./" className="text-blue-500 hover:scale-110 duration-200">
              <i className="fab fa-facebook fa-lg m-4"></i>Facebook
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
