import React from 'react'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
const App = () => {
  return (
    <>
    
    <Router>
      <Navbar/>
      <Home/>
      <Routes>

        {/* <Route></Route> */}
      </Routes>
    </Router>
    </>
  )
}

export default App