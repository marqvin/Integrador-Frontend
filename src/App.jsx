import Home from './pages/Home'
import Management from './pages/Management'
import AboutUs from './pages/AboutUs'
import ShoppingCart from './pages/ShoppingCart'
import Product from './pages/Product'

import Nav from './components/Nav'
import Footer from './components/Footer'

import { Routes, Route } from 'react-router-dom'
import ProductDetails from './pages/ProductDetails'
import { useState } from 'react'

import Context from './components/Context'

function App() {

  const [product,setProduct]=useState([]);

  return (
    <>
        <Nav />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/management' element={<Management />} />
          <Route path='/product' element={<Product />} />
          <Route path='/shoppingcart' element={<ShoppingCart />} />
          <Route path='/ProductDetails/:id' element={<ProductDetails />} />

        </Routes>

        <Footer />

    </>

  )
}

export default App
