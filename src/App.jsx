import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import reactLogo from './assets/react.svg'
import Navbar from './components/navbar'
import Home from './pages/Home'
import Certificate from './pages/Certificate'
import Portfolio from './pages/Portfolio'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/certificate" element={<Certificate/>} />
        <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
