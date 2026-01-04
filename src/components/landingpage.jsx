import React from 'react'
import Home from './home'
import Footer from './footer'

const Landingpage = ({ addToCart }) => {
    return (
        <div>
            <Home addToCart={addToCart} />
            <Footer/>
        </div>
    )
}

export default Landingpage
