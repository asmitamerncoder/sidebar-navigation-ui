import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Dashboard } from './Component/completeDashboard/Dashboard';
import DashboardLayout from './Component/layouts/DashboardLayout';



function App() {

  return (

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/goals' element={<DashboardLayout />} />
        <Route path='/workouts' element={<DashboardLayout />} />
        <Route path='/dite' element={<DashboardLayout />} />
        <Route path='/friends' element={<DashboardLayout />} />
        <Route path='/settings' element={<DashboardLayout />} />
        <Route path='/help' element={<DashboardLayout />} />
        <Route path='/logout' element={<DashboardLayout />} />
      </Routes>

    </BrowserRouter>

  )
}

export default App
