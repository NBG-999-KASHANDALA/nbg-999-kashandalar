import React from 'react'
import Home from './Pages/Home'
import { Route, Routes } from 'react-router-dom'
import Contacts from './Pages/Contacts'
import About from './Pages/About'
import Products from './Pages/Products'
import Header from './Components/Header'

const App = () => {
  return (
    <div>   



      <h1>jonks</h1>

      <Header />
      <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contacts />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Products />} />
      </Routes>
    </div>
  )
}

export default App