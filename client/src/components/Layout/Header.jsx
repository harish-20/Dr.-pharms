import React from 'react'
import { NavLink } from 'react-router-dom'
import CTA from '../CTA/CTA'
import Logo from '../Logo/Logo'
import Profile from './Profile'

const Header = () => {
  const chats = 0

  const getClass = ({ isActive }) =>
    `hover:text-blue ${isActive ? 'text-blue' : ''}`
  return (
    <nav className="flex items-center bg-white justify-around h-20 shadow-lg">
      <Logo />
      <input
        className="border-2 w-[250px] border-gray-500 rounded-full px-4 py-1 text-sm"
        placeholder="Find doctors, tablets, more..."
        type="text"
      />
      <div className="nav flex w-[300px] justify-between">
        <NavLink className={getClass} to="/doctors">
          Doctors
        </NavLink>
        <NavLink className={getClass} to="/tablets">
          Tablets
        </NavLink>
        <NavLink className={getClass} to="/chats">
          Chats(<span>{chats}</span>)
        </NavLink>
      </div>
      {true ? <Profile userType="patient" name="harish" /> : <CTA />}
    </nav>
  )
}

export default Header
