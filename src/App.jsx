import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import Shop from './Pages/Shop'
import Cart from './Pages/Cart'
import { About } from './Components/About'
import { Contact } from './Components/Contact'
import { CheckOut } from './Pages/CheckOut'
const App = () => {
  return (
  <BrowserRouter>
  <Navbar/>
  <Routes>

    <Route path='/' element={<Home/>}/>
    <Route path='/shop' element={<Shop/>}/>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/contact' element={<Contact/>} />
    <Route path='/about' element={<About/>} />
    <Route path='/checkout' element={<CheckOut/>} />
  </Routes>
  <Footer/>
  </BrowserRouter>
  )
}

export default App
