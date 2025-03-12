import './App.css'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/home'
import Navbar from './components/Navbar'
import Cart from './views/cart'
import ProductView from './views/ProductView'


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/ProductView/:id" element={<ProductView/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
