import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage/LandingPage'
import DashBoard from './pages/DashBoard'
import PreviewPage from './pages/PreviewPage'
import MenuBar from './components/MenuBar'
import {Toaster} from "react-hot-toast"
import MainPage from './pages/MainPage'

const App = () => {
  return (
    <BrowserRouter>
      <MenuBar />
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
