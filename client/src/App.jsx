import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import DashBoard from './pages/DashBoard'
import PreviewPage from './pages/PreviewPage'

const App = () => {
  return (
    <BrowserRouter>
      <Menubar />
      <Toaster />
      <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/generate" element={<MainPage />} />
          <Route path="/preview" element={<PreviewPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
