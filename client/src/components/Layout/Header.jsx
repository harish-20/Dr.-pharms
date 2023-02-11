import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { currentUserActions } from '../../redux/slices/currentUser'
import CTA from '../CTA/CTA'
import Logo from '../Logo/Logo'
import Profile from './Profile'

const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const currentUser = useSelector((state) => state.currentUser)

  const handleLogout = () => {
    const confirm = window.confirm('Do you want to log out?')
    if (confirm) {
      dispatch(currentUserActions.resetUser())
    }
    navigate('/')
  }

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
          Chats
        </NavLink>
      </div>
      {currentUser.isLoggedIn ? (
        <>
          <Profile />
          <button
            className="px-6 py-2 text-white font-semibold bg-red-600 rounded-lg hover:bg-red-700"
            onClick={handleLogout}
          >
            Log out
          </button>
        </>
      ) : (
        <CTA />
      )}
    </nav>
  )
}

export default Header
