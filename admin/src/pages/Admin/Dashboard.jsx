import React from 'react'
import { ToastContainer } from 'react-toastify'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import { Route, Routes } from 'react-router-dom'
import AllAppointment from './AllAppointment'
import AddDoctor from './AddDoctor'
import DoctorList from './DoctorList'
import AdminDashboard from './AdminDashboard'

const Dashboard = () => {
  return (
    <div>
         <ToastContainer />
      <Navbar />
     
      <div className="flex items-start ">
        <Sidebar/>
       
        <Routes>
          <Route path="/admin-dashboard" element={<AdminDashboard/>}/>
          
          <Route path="/all-appointments" element={<AllAppointment/>}/>
          <Route path="/add-doctor" element={<AddDoctor/>}/>
          <Route path="/doctor-list" element={<DoctorList/>}/>
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard
