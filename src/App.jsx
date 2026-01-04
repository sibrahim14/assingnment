import React, { useState, useEffect } from 'react'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/home.jsx'
import Menubar from './components/menubar.jsx'
import { Routes, Route } from 'react-router-dom'
import Cart from './components/cart.jsx'
import Landingpage from './components/landingpage.jsx'


const App = () => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const stored = localStorage.getItem('cartItems')
      return stored ? JSON.parse(stored) : []
    } catch (e) {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  const addToCart = (product) => {
    setCartItems((prev) => {
      
      const exists = prev.find((p) => p._id === product._id)
      if (exists) {
        return prev.map((p) =>
          p._id === product._id ? { ...p, quantity: (p.quantity || 1) + 1 } : p
        )
      }
      return [...prev, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((p) => p._id !== id))
  }

  return (
    <div>
      <Navbar />
  

      <Routes>
        <Route path='/' element={<Landingpage addToCart={addToCart} />} />
        <Route path="/Cart" element={<Cart cartItems={cartItems} removeFromCart={removeFromCart} />} />
      </Routes>
    </div>
  )
}

export default App
