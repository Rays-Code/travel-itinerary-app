import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import OnboardingPage from './pages/Onboarding/OnboardingPage'
import DashboardPage from './pages/Main Dashboard/DashboardPage'

const App = () => {
  return (
    <div className='font-poppins'>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<OnboardingPage />}></Route>
      <Route path="/dashboard" element={<DashboardPage />}></Route>

    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App