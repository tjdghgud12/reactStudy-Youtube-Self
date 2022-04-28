import React, { Suspense } from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import LandingPage from './components/view/LandingPage/LandingPage'
import LoginPage from './components/view/LoginPage/LoginPage'
import RegisterPage from './components/view/RegisterPage/RegisterPage'
import NavBar from './components/view/NavBar/NavBar'

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loding....</div>}>
        <NavBar/>
        <div style={{ paddingTop:'69px', minHeight:'calc(100vh - 80px)' }}>
          <Routes>
            <Route  exact path ="/" element={LandingPage} />
            <Route  exact path ="/login" element={LoginPage} />
            <Route  exact path ="/register" element={RegisterPage} />
          </Routes>
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
