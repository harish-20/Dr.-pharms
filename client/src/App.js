import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Layout from './components/Layout/Layout'

import Doctors from './Pages/Doctors/Doctors'
import Home from './Pages/Home/Home'
import Auth from './Pages/Auth/Auth'
import DoctorInfo from './Pages/DoctorInfo/DoctorInfo'
import PatientInfo from './Pages/PatientInfo/PatientInfo'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="doctors" element={<Doctors />} />
        <Route path="doctors/:id" element={<DoctorInfo />} />
        <Route path="patients/:id" element={<PatientInfo />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </Layout>
  )
}

export default App
