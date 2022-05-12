import React, { Suspense } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import LandingPage from './components/view/LandingPage/LandingPage'
import LoginPage from './components/view/LoginPage/LoginPage'
import RegisterPage from './components/view/RegisterPage/RegisterPage'
import NavBar from './components/view/NavBar/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import './config.css'

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loding....</div>}>
        <NavBar/>
        <div style={{ paddingTop:'69px', minHeight:'calc(100vh - 80px)' }}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path ="/login" element={<LoginPage/>} />
            <Route path ="/register" element={<RegisterPage/>} />
          </Routes>
        </div>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;